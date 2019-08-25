import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentformComponent } from './studentform/studentform.component';
import { AssesmentComponent } from './assesment.component';


const routes: Routes = [
  {
    path: 'assessment', component: AssesmentComponent,
    children: [
        {path: '', redirectTo: 'form', pathMatch: 'full'},
        {path: 'form', component: StudentformComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AssesmentRoutingModule { }
