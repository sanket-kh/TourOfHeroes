import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "../app-module/heroes/heroes.component";
import {DashboardComponent} from "../app-module/dashboard/dashboard.component";
import {HeroDetailComponent} from "../app-module/hero-detail/hero-detail.component";


const routes: Routes=[
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'heroes', component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'details/:id',component:HeroDetailComponent}

]

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes) //initializes the router and starts it listening for browser location changes.
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
