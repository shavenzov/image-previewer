import { Directive, QueryList, AfterViewInit, ContentChildren, OnInit, Renderer2, ElementRef, OnDestroy, Input } from '@angular/core';
import { ImagePreviewDirective } from './image-preview.directive';
import { ModalDialogService } from '../services/modal-dialog.service';
import { ImagePreviewerComponent } from '../components/image-previewer/image-previewer.component';

@Directive({
  selector: '[image-preview-container]'
})
export class ImagePreviewContainerDirective implements AfterViewInit, OnDestroy {

  @ContentChildren(ImagePreviewDirective)
  imgs: QueryList<ImagePreviewDirective>;

  constructor( private modalDialog: ModalDialogService ) {}

  private prepareImgs(): void{
    this.imgs.map( el => {

      console.log( 'click' );

      el.onclick.subscribe( ( src ) => {
        console.log( 'click' );
        this.modalDialog.show( ImagePreviewerComponent );
      } )
 
    } )
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
