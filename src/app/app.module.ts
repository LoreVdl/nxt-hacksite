import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindElementPageComponent } from './find-element-page/find-element-page.component';
import { HiddenTextPageComponent } from './hidden-text-page/hidden-text-page.component';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { EncryptPageComponent } from './encrypt-page/encrypt-page.component';
import { EndPageComponent } from './end-page/end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FindElementPageComponent,
    HiddenTextPageComponent,
    ScrollPageComponent,
    StartPageComponent,
    EncryptPageComponent,
    EndPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
