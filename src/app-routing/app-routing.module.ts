import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "../heroes/heroes.component";


const routes: Routes=[
  {path: 'heroes', component:HeroesComponent }
]

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes) //initializes the router and starts it listening for browser location changes.
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
