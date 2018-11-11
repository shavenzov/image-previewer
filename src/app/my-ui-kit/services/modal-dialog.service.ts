import {
  ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable,
  Injector
} from '@angular/core';
import {DialogOverlayComponent} from "../components/dialog-overlay/dialog-overlay.component";

/**
 * Service for adding/removing popup dialogs
 */

@Injectable()
export class ModalDialogService {

  private overlayRef : ComponentRef<any>;

  /**
   * Number of opened popup dialogs
   * @type {number}
   */
  private numDialogs : number = 0;

  constructor(
    private applicationRef : ApplicationRef,
    private resolver       : ComponentFactoryResolver,
    private injector       : Injector
  ) {}

  /**
   * Shows component as popup dialog
   * @param dialogClass - popup component class
   * @param data - some data to attach to popup dialog
   * @returns instance of just created popup dailog 
   */
  public show( dialogClass : any, data? : any ) : ComponentRef<any>{

    if ( this.numDialogs == 0 ){
      this.showOverlay();
    }

    if ( this.numDialogs === 0 ){
      document.body.style.overflow = 'hidden';
    }

    this.numDialogs ++;

    return this.add( dialogClass, data );
  }

  /**
   * Closes existed popup dialog
   * @param dialog - dialog instance 
   */
  public hide( dialog : ComponentRef<any> ) : void{

    this.numDialogs --;

    if ( this.numDialogs == 0 ){
      this.hideOverlay();
      document.body.style.overflow = 'auto';
    }

    this.remove( dialog );
  }

  /**
   * Shows overlay
   */
  private showOverlay() : void{
    this.overlayRef = this.add( DialogOverlayComponent );
  }

  /**
   * Hides overlay
   */
  private hideOverlay() : void{
    this.remove( this.overlayRef );
    this.overlayRef = null;
  }

  /**
   * Adds component to screen
   * @param component - component class
   * @param data - some data to attach to popup dialog
   * @returns instance of just created popup dailog 
   */
  private add( component : any, data? : any ) : ComponentRef<any>{

    let factory      : ComponentFactory<any> = this.resolver.resolveComponentFactory( component );
    let componentRef : ComponentRef<any>     = factory.create( this.injector );

    this.applicationRef.attachView( componentRef.hostView );

    let domElement : HTMLElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.body.appendChild( domElement );

    if ( data ){
      componentRef.instance.data = data;
    }

    return componentRef;
  }

  /**
   * Removes dialog from screen
   * @param component - popup dialog instance
   */
  private remove( component : ComponentRef<any> ) : void{
    this.applicationRef.detachView( component.hostView );
    component.destroy();
  }

}
