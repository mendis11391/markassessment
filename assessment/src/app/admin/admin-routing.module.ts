import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth.guard';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
        {path: '', redirectTo: 'categories', pathMatch: 'full'},
        {path: 'categories', component: CategoriesComponent},
        {path: 'addquestions', component: QuestionsComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
