import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslationFormComponent } from './translation/components/translation-form/translation-form.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    TranslationFormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
