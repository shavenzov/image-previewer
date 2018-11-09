import {
  ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable,
  Injector
} from '@angular/core';
import {DialogOverlayComponent} from "../components/dialog-overlay/dialog-overlay.component";

@Injectable()
export class ModalDialogService {

  private overlayRef : ComponentRef<any>;

  /**
   * Количество открытых в данный момент диалогов
   * @type {number}
   */
  private numDialogs : number = 0;

  constructor(
    private applicationRef : ApplicationRef,
    private resolver       : ComponentFactoryResolver,
    private injector       : Injector
  ) {}

  public show( dialogClass : any, data? : any ) : ComponentRef<any>{

    if ( this.numDialogs == 0 ){
      this.showOverlay();
    }

    this.numDialogs ++;

    return this.add( dialogClass, data );
  }

  public hide( dialog : ComponentRef<any> ) : void{

    this.numDialogs --;

    if ( this.numDialogs == 0 ){
      this.hideOverlay();
    }

    this.remove( dialog );
  }

  private showOverlay() : void{
    this.overlayRef = this.add( DialogOverlayComponent );
  }

  private hideOverlay() : void{
    this.remove( this.overlayRef );
    this.overlayRef = null;
  }

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

  private remove( component : ComponentRef<any> ) : void{
    this.applicationRef.detachView( component.hostView );
    component.destroy();
  }

}
