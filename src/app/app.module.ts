import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagePreviewContainerDirective } from './directives/image-preview-container.directive';
import { ImagePreviewDirective } from './directives/image-preview.directive';
import { HttpClientModule } from '@angular/common/http';
import { DialogOverlayComponent } from './components/dialog-overlay/dialog-overlay.component';
import { ImagePreviewerComponent } from './components/image-previewer/image-previewer.component';
import { PicsumService } from './services/picsum.service';
import { ModalDialogService } from './services/modal-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverlayComponent,
    ImagePreviewContainerDirective,
    ImagePreviewDirective,
    ImagePreviewerComponent,
    DialogOverlayComponent
  ],
  entryComponents: [
    ImagePreviewerComponent,
    DialogOverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PicsumService, ModalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
