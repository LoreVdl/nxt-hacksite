import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindElementPageComponent } from './find-element-page/find-element-page.component';
import { HiddenTextPageComponent } from './hidden-text-page/hidden-text-page.component';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { EncryptPageComponent } from './encrypt-page/encrypt-page.component';
import { EndPageComponent } from './end-page/end-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'part-one', component: HiddenTextPageComponent },
  { path: 'part-three', component: FindElementPageComponent },
  { path: 'part-two', component: ScrollPageComponent },
  { path: 'part-four', component: EncryptPageComponent },
  { path: 'end', component: EndPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
