import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PicsumService } from './services/picsum.service';
import { MyUiKitModule } from './my-ui-kit/my-ui-kit.module';
import { ImagePreviewContainerDirective } from './my-ui-kit/directives/image-preview-container.directive';
import { ImagePreviewDirective } from './my-ui-kit/directives/image-preview.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyUiKitModule
  ],
  providers: [PicsumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
