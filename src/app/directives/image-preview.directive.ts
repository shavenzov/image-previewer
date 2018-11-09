import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[image-preview]',
  host: {
    '(click)': 'onClick()' 
  }
})
export class ImagePreviewDirective {

  @Input( 'image-preview' )
  imagePreview: string;

  @Output()
  onclick: EventEmitter<string> = new EventEmitter();

  onClick(){
    this.onclick.emit( this.imagePreview );
  }

}
