import {Component} from '@angular/core';
import {Hero} from "../interfaces/hero";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../mock-heroes";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  // standalone: true,
  // imports: [
  //   UpperCasePipe,
  //   FormsModule,
  //   NgForOf,
  //   NgIf,
  //   HeroDetailComponent
  // ],
  templateUrl: 'heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {
  }

  heroes?: Hero[]
  selectedHero?: Hero;
  title: string = 'Tour of Heroes';

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
