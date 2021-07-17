import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashComponent } from './modules/dash/dash.component';

const routes: Routes = [{
  path:'', component: DefaultComponent, 
  children: [{
    path:'', component: DashComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
