import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashComponent } from 'src/app/modules/dash/dash.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DefaultComponent,
    DashComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class DefaultModule { }
