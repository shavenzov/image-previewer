import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverlayComponent } from './components/dialog-overlay/dialog-overlay.component';
import { ImagePreviewContainerDirective } from './directives/image-preview-container.directive';
import { ImagePreviewDirective } from './directives/image-preview.directive';
import { IntegerOnlyDirective } from './directives/integer-only.directive';
import { ImagePreviewerComponent } from './components/image-previewer/image-previewer.component';
import { ModalDialogService } from './services/modal-dialog.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DialogOverlayComponent,
    ImagePreviewContainerDirective,
    ImagePreviewDirective,
    IntegerOnlyDirective,
    ImagePreviewerComponent,
    DialogOverlayComponent
  ],
  entryComponents: [
    ImagePreviewerComponent,
    DialogOverlayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    ImagePreviewContainerDirective,
    ImagePreviewDirective
  ],
  providers: [
    ModalDialogService
  ]
})
export class MyUiKitModule { }
