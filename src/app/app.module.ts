import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SortablejsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule { }
