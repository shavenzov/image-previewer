import { Directive, QueryList, AfterViewInit, ContentChildren, OnDestroy, Input, ComponentRef } from '@angular/core';
import { ImagePreviewDirective } from './image-preview.directive';
import { ModalDialogService } from '../services/modal-dialog.service';
import { ImagePreviewerComponent } from '../components/image-previewer/image-previewer.component';

/**
 * Implements image previewer container directive
 * Container for pictures
 */

@Directive({
  selector: '[image-preview-container]'
})
export class ImagePreviewContainerDirective implements AfterViewInit, OnDestroy {

  /**
   * Minimum allowed zoom
   */
  @Input( 'min-zoom' )
  minZoom: number;

  /**
   * Maximum allowed zoom
   */
  @Input( 'max-zoom' )
  maxZoom: number;

  /**
   * Zoom step while changing scale by mouse wheel or "+"/"-" buttons
   */
  @Input( 'zoom-step' )
  zoomStep: number;

  /**
   * list of all pictures inside container
   */
  @ContentChildren(ImagePreviewDirective)
  imgs: QueryList<ImagePreviewDirective>;

  /**
   * Instance of image previewer component
   */
  private viewer: ComponentRef<ImagePreviewerComponent>;
  
  /**
   * Picture list
   */
  private pictures: Picture[]; 

  constructor( private modalDialog: ModalDialogService ) {}

  /**
   * Finds all pictures inside container and set up for work with them
   */
  private prepareImgs(): void{
    
    this.pictures = [];

    this.imgs.map( el => {
      
      this.pictures.push( {
        url: el.imageURL,
        name: el.imageName,
        data: el.imageData
      } )

      el.onclick.subscribe( ( src ) => this.showViewer( src ) );
 
    } )
  }

  /**
   * Shows image previewer
   * @param url - picture url to show and calculate pictureIndex
   */
  private showViewer( url ): void{
    this.viewer = this.modalDialog.show( ImagePreviewerComponent );
    
    const instance: ImagePreviewerComponent = this.viewer.instance;

    instance.pictures = this.pictures;
    instance.pictureIndex = this.pictures.findIndex( picture => picture.url === url );

    if ( this.minZoom != null ){
      instance.minZoom = this.minZoom;
    }

    if ( this.maxZoom != null ){
      instance.maxZoom = this.maxZoom;
    }

    if ( this.zoomStep != null ){
      instance.zoomStep = this.zoomStep;
    }

    instance.onClose.subscribe( () => this.hideViewer() )
  }

  /**
   * Hides image previewer
   */
  private hideViewer(): void{
    this.viewer.instance.onClose.unsubscribe();
    this.modalDialog.hide( this.viewer );
  }

  /**
   * Calls when directive content is initialized
   */
  ngAfterViewInit() {
    this.imgs.changes.subscribe( () => this.prepareImgs() );
    this.prepareImgs();
  }

  /**
   * Component destructor
   */
  ngOnDestroy(){
    this.imgs.forEach( el => {
      el.onclick.unsubscribe();
    } ); 
  }

}
