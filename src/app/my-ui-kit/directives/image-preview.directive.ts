import { Directive, Input, Output, EventEmitter } from '@angular/core';

/**
 * Implements image directive
 * Directive for describing picture properties
 */

@Directive({
  selector: '[image-url]',
  host: {
    '(click)': 'onClick()' 
  }
})
export class ImagePreviewDirective {

  /**
   * Image URL for preview
   */
  @Input( 'image-url' )
  imageURL: string;

  /**
   * Image name
   */
  @Input( 'image-name' )
  imageName: string;

  /**
   * Some image data
   */
  @Input( 'image-data' )
  imageData: any;

  /**
   * This directive emits onclick event
   */
  @Output()
  onclick: EventEmitter<string> = new EventEmitter();

  /**
   * Callback for on click event
   */
  onClick(){
    this.onclick.emit( this.imageURL );
  }

}
