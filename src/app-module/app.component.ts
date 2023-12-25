import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {MessagesComponent} from "./messages/messages.component";
import {AppRoutingModule} from "../app-routing/app-routing.module";

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, AppRoutingModule, HeroesComponent, HeroDetailComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Tour Of Heroes';
}
