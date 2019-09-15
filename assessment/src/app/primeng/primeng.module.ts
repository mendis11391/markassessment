import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    SlideMenuModule,
    ToolbarModule,
    ToastModule,
    CheckboxModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    SidebarModule,
    SlideMenuModule,
    ToolbarModule,
    ToastModule,
    CheckboxModule
  ]
})
export class PrimengModule { }
