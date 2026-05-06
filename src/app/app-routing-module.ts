import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvViewComponent } from './cv-view.component';
import { CvEditComponent } from './cv-edit.component';

const routes: Routes = [
  { path: '', component: CvViewComponent },
  { path: 'editar', component: CvEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }