import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormEditComponent } from './form-edit/form-edit.component';


const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
