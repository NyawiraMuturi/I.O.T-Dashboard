import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashComponent } from 'src/app/modules/dash/dash.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    DefaultComponent,
    DashComponent,
    PostsComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    CommonModule
  ]
})
export class DefaultModule { }
