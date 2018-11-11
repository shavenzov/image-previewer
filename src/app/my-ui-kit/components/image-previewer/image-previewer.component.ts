import { EventEmitter, Component, HostListener, ViewChild, ElementRef, Renderer2, Input, Output } from '@angular/core';

/**
 * Implements image previewer component
 */

@Component({
  selector: 'app-image-previewer',
  templateUrl: './image-previewer.component.html',
  styleUrls: ['./image-previewer.component.scss']
})
export class ImagePreviewerComponent {

  /**
   * List of pictures to navigate
   */
  @Input( 'pictures' )
  pictures:Picture[];

  /**
   * Picture index from pictures to show
   */
  @Input( 'picture-index' )
  pictureIndex: number = -1;

  /**
   * Minimum allowed zoom
   */
  @Input( 'min-zoom' )
  minZoom: number = 0.15;

  /**
   * Maximum allowed zoom
   */
  @Input( 'max-zoom' )
  maxZoom: number = 1.0;

  /**
   * Zoom step while changing scale by mouse wheel or "+"/"-" buttons
   */
  @Input( 'zoom-step' )
  zoomStep: number = 0.05;

  /**
   * This event emit when user closes dialog. 
   * When user Clicks "close button" or press "escape" key.
   */
  @Output()
  onClose: EventEmitter<void> = new EventEmitter();

  /**
   * img element ref
   */
  @ViewChild( 'picture' )
  private picture: ElementRef;

  /**
   * input "picture number" element ref
   */
  @ViewChild( 'picNum' )
  private picNum: ElementRef;

  /**
   * Current picture
   */
  get currentPicture(): Picture{
    return this.pictures &&
           this.pictureIndex < this.pictures.length &&
           this.pictureIndex >= 0
          ? this.pictures[ this.pictureIndex ]
          : null;
  }

  /**
   * Initiates the transition to the next picture 
   */
  private gotoNextPicture(): void{
    const pictureIndex: number = this.pictureIndex + 1;

    if ( pictureIndex < this.pictures.length ){
      this.pictureIndex = pictureIndex;
      this.loading = true;
    }
  }

  /**
   * Initiates the transition to the previous picture 
   */
  private gotoPrevPicture(): void{
    const pictureIndex: number = this.pictureIndex - 1;

    if ( pictureIndex >= 0 ){
      this.pictureIndex = pictureIndex;
      this.loading = true;
    }
  }

  /**
   * Returns true if current picture is last
   */
  get isLastPicture(): boolean{
    return this.pictureIndex === this.pictures.length - 1;
  }

  /**
   * Returns true if current picture is first
   */
  get isFirstPicture(): boolean{
    return this.pictureIndex === 0;
  }

  /**
   * True if picture is dragging now by user
   */
  dragging: boolean = false;

  /**
   * True if picture is loading now
   */
  loading: boolean = true;

  /**
   * True if information about scale presents on screen
   */
  zoomInfo: boolean = false;

  constructor( 
    private hostElement: ElementRef,
    private renderer: Renderer2
     ) { }

  /**
   * window:keyup callback
   * @param event 
   */
  @HostListener('window:keyup', ['$event'])
  onkeyup( event: KeyboardEvent ): void{
    
    console.log( event.keyCode );

    //escape key pressed
    if ( event.keyCode === 27 ){
     this.onCloseButtonClick();
     return;
    }

    //left key pressed
    if ( event.keyCode === 37 ){
      this.gotoPrevPicture();
      return;
    }

    //right key pressed
    if ( event.keyCode === 39 ){
      this.gotoNextPicture();
      return;
    }

    if ( this.loading ){
      return;
    }

    //Plus key pressed
    if ( ( event.keyCode === 107 ) || ( event.keyCode === 187 ) ) {
     this.zoomInButtonClick();
     return;
    }

    //Minus key pressed
    if ( ( event.keyCode === 109 ) || ( event.keyCode === 189 ) ) {
      this.zoomOutButtonClick();
      return;
    }
  }

  /**
   * mousedown callback
   * @param event 
   */
  @HostListener( 'mousedown', ['$event'] )
  onMouseDown( event: MouseEvent ): void {
    
    if ( this.loading ){
      return;
    }

    //Starts dragging only if left mouse key pressed
    if ( event.button !== 0 ){
      return;
    }

    //and mouse on hostElement or picture
    if ( event.target === this.hostElement.nativeElement ||
         event.target === this.picture.nativeElement ){

      //calls this to prevent browser image dragging process
      event.preventDefault();    
      
      this.dragStartPoint = { x:event.clientX, y:event.clientY };
      this.newPicturePos = { x:0, y:0 };
      this.dragging = true;

      //set mousemove and mouseup listeners
      this.mouseMoveUnlisten = this.renderer.listen( this.hostElement.nativeElement, 'mousemove',
                                                   ( event ) => this.onMouseMove( event ) );
      this.mouseUpUnlisten = this.renderer.listen( this.hostElement.nativeElement, 'mouseup',
                                                   () => this.onMouseUp()  );
    }                                               
  }

  /**
   * mousemove callback
   * @param event 
   */
  onMouseMove( event: MouseEvent ): void {
    
    //if mouse up released outside the document
    if ( event.buttons === 0 ){
      this.onMouseUp(); //then emit mouseup callback manually
      return;
    }

    this.newPicturePos = this.checkBoundaries( {
      x: this.picturePos.x + event.clientX - this.dragStartPoint.x,
      y: this.picturePos.y + event.clientY - this.dragStartPoint.y
    } )
    
    this.movePicture( this.newPicturePos );
  }

  /**
   * mouseup callback
   */
  onMouseUp(): void {
    this.mouseMoveUnlisten();
    this.mouseMoveUnlisten = null;
    this.mouseUpUnlisten();
    this.mouseUpUnlisten = null;
    this.picturePos = this.newPicturePos;
    this.newPicturePos = null;
    this.dragging = false;
  }

  /**
   * mousewheel callback
   * @param event 
   */
  @HostListener( 'wheel', ['$event'] )
  onMouseWheel( event: MouseWheelEvent ): void{
    
    //disable scaling while picture loading
    if ( this.loading ){
      return;
    }
   
    this.zoom -= this.zoomStep * Math.abs( event.deltaY ) / event.deltaY;
  }

  /**
   * window:resize callback
   * @param event 
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
   
   //disable resizing while picture loading
   if ( this.loading ){
     return;
   } 

   this.initialResize();
   this.centerPicture();
  }

  /**
   * Current picture position
   */
  private picturePos: Point = { x: 0, y: 0 };
  
  /**
   * Picture position while dragging
   */
  private newPicturePos: Point;
  
  /**
   * Point where drag started
   */
  private dragStartPoint: Point;

  /**
   * mouseMoveUnlisten function
   */
  private mouseMoveUnlisten: Function;

  /**
   * mouseUpUnlisten function
   */
  private mouseUpUnlisten: Function;

  /**
   * Checks if picture is inside screen boundaries and corrects postion if necessary
   * @param pos - picture pos
   * @return corrected picture position
   */
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

  /**
   * Moves picture to new position
   * @param pos - new picture position
   */
  private movePicture( pos: Point ): void{
    this.renderer.setStyle( this.picture.nativeElement, 'left', `${pos.x}px` );
    this.renderer.setStyle( this.picture.nativeElement, 'top', `${pos.y}px` );
  }

  /**
   * Resizes picture to screen fit
   */
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

  /**
   * Moves picture to screen center
   */
  private centerPicture(): void{
    const pictureRect: any = this.pictureRect;
    const center: Point = this.center;

    this.picturePos = {
      x: center.x - pictureRect.width / 2,
      y: center.y - pictureRect.height / 2 
    }

    this.movePicture( this.picturePos );
  }

  /**
   * Screen center
   */
  private get center(): Point{
    const hostRect: any = this.hostRect;
    return {
      x: hostRect.width / 2,
      y: hostRect.height / 2
    }
  }

  /**
   * Screen bounding rectangle
   */
  private get hostRect(): DOMRect{
    return this.hostElement.nativeElement.getBoundingClientRect();
  }

  /**
   * Picture bounding rectangle 
   */
  private get pictureRect(): DOMRect{
    return this.picture.nativeElement.getBoundingClientRect();
  }

  /**
   * Original picture width
   */
  private get pictureNaturalWidth(): number{
    return this.picture.nativeElement.naturalWidth;
  }

  /**
   * Original picture height
   */
  private get pictureNaturalHeight(): number{
    return this.picture.nativeElement.naturalHeight;
  }

  /**
   * Getter for current picture zoom
   */
  private get zoom(): number{
    const pictureRect: DOMRect = this.pictureRect;
    return Math.min( pictureRect.width / this.pictureNaturalWidth, pictureRect.height / this.pictureNaturalHeight );
  }

  /**
   * Setter for current picture zoom
   */
  private set zoom( value: number ){
    
    if ( value < this.minZoom ){
      value = this.minZoom;
    } else if ( value > this.maxZoom ){
      value = this.maxZoom;
    }

    this.renderer.setStyle( this.picture.nativeElement, 'width', this.pictureNaturalWidth * value + 'px' );
    this.renderer.setStyle( this.picture.nativeElement, 'height', this.pictureNaturalHeight * value + 'px' ); 

    this.centerPicture();
    this.zoomChanged();
  }

  /**
   * Ref to timer that removes scale information
   */
  private zoomInfoTimeout: any;

  /**
   * Calls when zoom changed to show information about scale on sreen
   */
  private zoomChanged(): void{
    
    this.zoomInfo = true;

    if ( this.zoomInfoTimeout ){
      clearTimeout( this.zoomInfoTimeout );
    }

    this.zoomInfoTimeout = setTimeout( () => {
      this.zoomInfoTimeout = null;
      this.zoomInfo = false;
    }, 1000 );

  }

  /**
   * Getter for formated zoom string
   */
  get formatedZoomString(): string{
   return Math.round( this.zoom * 100 ).toString();
  }

  /**
   * On picture loaded callback
   */
  onPictureLoaded(): void{
    this.loading = false;
    this.initialResize();
    this.centerPicture();
  }

  /**
   * On close button click handler
   */
  private onCloseButtonClick(): void{
    this.onClose.emit();
  }

  /**
   * Zoom in button click handler
   */
  private zoomInButtonClick(): void{
    this.zoom += this.zoomStep;
  }

  /**
   * Zoom out button click handler
   */
  private zoomOutButtonClick(): void{
    this.zoom -= this.zoomStep;
  }

  /**
   * Picture number key up callback
   * @param event - keyup event
   * @param value - input value
   */
  private onPictureNumberInputKeyUp( event: KeyboardEvent, value: string ): void{
    
    //if pressed Enter key
    if ( event.keyCode === 13 ){
      const newIndex: number = parseInt( value ) - 1
      
      if ( ! isNaN( newIndex ) ){
        if ( newIndex !== this.pictureIndex ){
          this.pictureIndex = newIndex;
          this.loading = true;
        }
      } else{
        this.renderer.setProperty( this.picNum.nativeElement, 'value', ( this.pictureIndex + 1 ).toString() );
      }
      
      this.picNum.nativeElement.blur();
    }

    event.stopImmediatePropagation()
  }

  /**
   * Shows print dialog for picture print
   */
  private print(): void{
    const popup: Window = window.open( '', 'print', "toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes" );
          
          popup.document.open();
          popup.document.write( `<img src="${this.currentPicture.url}">` );
          popup.document.close();
          popup.focus();
          popup.print();
  }

}
