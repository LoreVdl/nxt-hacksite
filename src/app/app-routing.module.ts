import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindElementPageComponent } from './find-element-page/find-element-page.component';

const routes: Routes = [
  { path: 'good-job', component: FindElementPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
