import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindElementPageComponent } from './find-element-page/find-element-page.component';
import { HiddenTextPageComponent } from './hidden-text-page/hidden-text-page.component';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'part-one', component: HiddenTextPageComponent },
  { path: 'part-two', component: FindElementPageComponent },
  { path: 'part-three', component: ScrollPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
