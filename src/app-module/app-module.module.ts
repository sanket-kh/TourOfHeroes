import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroService} from "./services/hero.service";
import {NewHeroComponent} from "./new-hero/new-hero.component";
import {HighlightDirective} from "./highlight.directive";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NewHeroComponent,
    HighlightDirective
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  providers:[HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
