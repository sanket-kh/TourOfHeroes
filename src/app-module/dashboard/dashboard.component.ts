import { Component } from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../interfaces/hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes:Hero[] = []
constructor(private heroService:HeroService) {
}
ngOnInit(){
  this.getHeroes()
}
getHeroes(){
  this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5))
}
}
