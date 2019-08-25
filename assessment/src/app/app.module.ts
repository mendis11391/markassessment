import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { DisclaimerComponent } from './assesment/disclaimer/disclaimer.component';
import { StudentformComponent } from './assesment/studentform/studentform.component';
import { QuizComponent } from './assesment/quiz/quiz.component';
import { ResultComponent } from './assesment/result/result.component';
import { TimerComponent } from './assesment/timer/timer.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DegreesComponent } from './admin/degrees/degrees.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import { MappingsComponent } from './admin/mappings/mappings.component';
import { StudentreportComponent } from './admin/studentreport/studentreport.component';
import { PrimengModule } from './primeng/primeng.module';
import { AssesmentComponent } from './assesment/assesment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AssesmentModule } from './assesment/assesment.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisclaimerComponent,
    StudentformComponent,
    QuizComponent,
    ResultComponent,
    TimerComponent,
    CategoriesComponent,
    DegreesComponent,
    QuestionsComponent,
    MappingsComponent,
    StudentreportComponent,
    AssesmentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AssesmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
