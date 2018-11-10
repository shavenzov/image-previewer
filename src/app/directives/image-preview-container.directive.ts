import { Directive, QueryList, AfterViewInit, ContentChildren, OnInit, Renderer2, ElementRef, OnDestroy, Input, ComponentRef } from '@angular/core';
import { ImagePreviewDirective } from './image-preview.directive';
import { ModalDialogService } from '../services/modal-dialog.service';
import { ImagePreviewerComponent } from '../components/image-previewer/image-previewer.component';

@Directive({
  selector: '[image-preview-container]'
})
export class ImagePreviewContainerDirective implements AfterViewInit, OnDestroy {

  @ContentChildren(ImagePreviewDirective)
  imgs: QueryList<ImagePreviewDirective>;

  private viewer: ComponentRef<ImagePreviewerComponent>;
  private pictures: Picture[]; 

  constructor( private modalDialog: ModalDialogService ) {}

  private prepareImgs(): void{
    
    this.pictures = [];

    this.imgs.map( el => {
      
      this.pictures.push( {
        url: el.imagePreview,
        name: 'Blah'
      } )

      el.onclick.subscribe( ( src ) => this.showViewer( src ) );
 
    } )
  }

  private showViewer( url ): void{
    this.viewer = this.modalDialog.show( ImagePreviewerComponent );
    this.viewer.instance.pictures = this.pictures;
    this.viewer.instance.pictureIndex = this.pictures.findIndex( picture => picture.url === url );
    this.viewer.instance.onClose.subscribe( () => this.hideViewer() )
  }

  private hideViewer(): void{
    this.viewer.instance.onClose.unsubscribe();
    this.modalDialog.hide( this.viewer );
  }

  ngAfterViewInit() {
    this.imgs.changes.subscribe( () => this.prepareImgs() );
    this.prepareImgs();
  }

  ngOnDestroy(){
    this.imgs.forEach( el => {
      el.onclick.unsubscribe();
    } ); 
  }

}
