import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    SlideMenuModule,
    ToolbarModule,
    ToastModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    SidebarModule,
    SlideMenuModule,
    ToolbarModule,
    ToastModule
  ]
})
export class PrimengModule { }
