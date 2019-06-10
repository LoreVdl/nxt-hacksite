import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindElementPageComponent } from './find-element-page/find-element-page.component';
import { HiddenTextPageComponent } from './hidden-text-page/hidden-text-page.component';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FindElementPageComponent,
    HiddenTextPageComponent,
    ScrollPageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
