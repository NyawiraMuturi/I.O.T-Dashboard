import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashComponent } from './modules/dash/dash.component';
import { LocationsComponent } from './modules/locations/locations.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path:'', component: DefaultComponent, 
  children: [{
    path:'', component: DashComponent
  },{
    path: 'posts', component:PostsComponent
  }, {
    path:'locations', component: LocationsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
