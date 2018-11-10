import { EventEmitter, Component, OnInit, HostListener, HostBinding, ViewChild, ElementRef, AfterViewInit, Renderer2, Input, Output } from '@angular/core';


@Component({
  selector: 'app-image-previewer',
  templateUrl: './image-previewer.component.html',
  styleUrls: ['./image-previewer.component.scss']
})
export class ImagePreviewerComponent implements OnInit, AfterViewInit {

  @Input()
  pictures:Picture[];

  @Input()
  pictureIndex: number = -1;

  @Input()
  minZoom: number = 0.15;

  @Input()
  maxZoom: number = 1.0;

  @Input()
  zoomStep: number = 0.05;

  @Output()
  onClose: EventEmitter<void> = new EventEmitter();

  private get currentPicture(): Picture{
    return this.pictures &&
           this.pictureIndex < this.pictures.length &&
           this.pictureIndex >= 0
          ? this.pictures[ this.pictureIndex ]
          : null;
  }

  /* @HostBinding( 'style.cursor' )
  private get styleCursor(): string{
    return this.dragging ? 'grabbing' : 'default';
  } */

  @ViewChild( 'picture' )
  private picture: ElementRef;

  private dragging: boolean = false;
  private pictureLoaded: boolean = false;

  constructor( 
    private hostElement: ElementRef,
    private renderer: Renderer2
     ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    
  }

  @HostListener( 'mousedown', ['$event'] )
  onMouseDown( event: MouseEvent ): void {
    
    if (event.preventDefault) event.preventDefault();

    if ( event.button !== 0 ){
      return;
    }

    if ( event.target === this.hostElement.nativeElement ||
         event.target === this.picture.nativeElement ){
      
      this.dragStartPoint = { x:event.clientX, y:event.clientY };
      this.newPicturePos = { x:0, y:0 };
      this.dragging = true;

      this.mouseMoveUnlisten = this.renderer.listen( this.hostElement.nativeElement, 'mousemove',
                                                   ( event ) => this.onMouseMove( event ) );
      this.mouseUpUnlisten = this.renderer.listen( this.hostElement.nativeElement, 'mouseup',
                                                   ( event ) => this.onMouseUp( event )  );
    }                                               
  }

  onMouseMove( event: MouseEvent ): void {
    
    if ( event.buttons === 0 ){
      this.onMouseUp( null );
      return;
    }

    this.newPicturePos = this.checkBoundaries( {
      x: this.picturePos.x + event.clientX - this.dragStartPoint.x,
      y: this.picturePos.y + event.clientY - this.dragStartPoint.y
    } )
    
    this.movePicture( this.newPicturePos );
  }

  onMouseUp( event: MouseEvent ): void {
    this.mouseMoveUnlisten();
    this.mouseMoveUnlisten = null;
    this.mouseUpUnlisten();
    this.mouseUpUnlisten = null;
    this.picturePos = this.newPicturePos;
    this.newPicturePos = null;
    this.dragging = false;
  }

  @HostListener( 'scroll', ['$event'] )
  onMouseWheel( event: MouseWheelEvent ): void{
    this.zoom += this.zoomStep * Math.abs( event.wheelDelta ) / event.wheelDelta;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   this.initialResize();
   this.centerPicture();
  }

  private picturePos: Point = { x: 0, y: 0 };
  private newPicturePos: Point;
  private dragStartPoint: Point;
  private mouseMoveUnlisten: Function;
  private mouseUpUnlisten: Function;

  private checkBoundaries( pos: Point ): Point{
    const pictureRect: DOMRect = this.pictureRect;
    const hostRect: DOMRect = this.hostRect; 
    
    if ( pictureRect.width > hostRect.width ){
      if ( pos.x + pictureRect.width < hostRect.width ){
        pos.x = hostRect.width - pictureRect.width;
      }
      else if ( pos.x > 0 ) {
        pos.x = 0;
      }
    }
    else {
      if ( pos.x + pictureRect.width > hostRect.width ){
        pos.x = hostRect.width - pictureRect.width;
      }
      else if ( pos.x < 0 ) {
        pos.x = 0;
      }
    }
    
    if ( pictureRect.height > hostRect.height ){
      if ( pos.y + pictureRect.height < hostRect.height ){
        pos.y = hostRect.height - pictureRect.height;
      }
      else if ( pos.y > 0 ) {
        pos.y = 0;
      }
    }
    else {
      if ( pos.y + pictureRect.height > hostRect.height ){
        pos.y = hostRect.height - pictureRect.height;
      }
      else if ( pos.y < 0 ) {
        pos.y = 0;
      }
    }
    
    return pos;
  }

  private movePicture( pos: Point ): void{
    this.renderer.setStyle( this.picture.nativeElement, 'left', `${pos.x}px` );
    this.renderer.setStyle( this.picture.nativeElement, 'top', `${pos.y}px` );
  }

  private initialResize(): void{
    const hostRect: any = this.hostRect;
    const wrapRect: any = {
      left: 100,
      top: 100,
      right: 100,
      bottom: 100,
      width: this.hostRect.width - 200,
      height: this.hostRect.height - 200
    }

    const ratio: number = Math.min( wrapRect.width / this.pictureNaturalWidth,
                                    wrapRect.height / this.pictureNaturalHeight );
    
    this.renderer.setStyle( this.picture.nativeElement, 'width', this.pictureNaturalWidth * ratio + 'px' );
    this.renderer.setStyle( this.picture.nativeElement, 'height', this.pictureNaturalHeight * ratio + 'px' );                                
  }

  private centerPicture(): void{
    const pictureRect: any = this.pictureRect;
    const center: Point = this.center;

    this.picturePos = {
      x: center.x - pictureRect.width / 2,
      y: center.y - pictureRect.height / 2 
    }

    this.movePicture( this.picturePos );
  }

  private get center(): Point{
    const hostRect: any = this.hostRect;
    return {
      x: hostRect.width / 2,
      y: hostRect.height / 2
    }
  }

  private get hostRect(): DOMRect{
    return this.hostElement.nativeElement.getBoundingClientRect();
  }

  private get pictureRect(): DOMRect{
    return this.picture.nativeElement.getBoundingClientRect();
  }

  private get pictureNaturalWidth(): number{
    return this.picture.nativeElement.naturalWidth;
  }

  private get pictureNaturalHeight(): number{
    return this.picture.nativeElement.naturalHeight;
  }

  private get zoom(): number{
    const pictureRect: DOMRect = this.pictureRect;
    return Math.min( pictureRect.width / this.pictureNaturalWidth, pictureRect.height / this.pictureNaturalHeight );
  }

  private set zoom( value: number ){
    
    if ( value < this.minZoom ){
      value = this.minZoom;
    } else if ( value > this.maxZoom ){
      value = this.maxZoom;
    }

    this.renderer.setStyle( this.picture.nativeElement, 'width', this.pictureNaturalWidth * value + 'px' );
    this.renderer.setStyle( this.picture.nativeElement, 'height', this.pictureNaturalHeight * value + 'px' ); 

    this.centerPicture();
  }

  private get formatedZoomString(): string{
   return Math.round( this.zoom * 100 ).toString();
  }

  private onPictureLoaded(): void{
    this.pictureLoaded = true;
    this.initialResize();
    this.centerPicture();
  }

  private onCloseButtonClick(): void{
    this.onClose.emit();
  }

  private zoomInButtonClick(): void{
    this.zoom += this.zoomStep;
  }

  private zoomOutButtonClick(): void{
    this.zoom -= this.zoomStep;
  }

}
