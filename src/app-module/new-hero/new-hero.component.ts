import {Component, EventEmitter, Output} from '@angular/core';
import {Hero} from "../interfaces/hero";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-new-hero',
  standalone: true,
  imports: [],
  templateUrl: './new-hero.component.html',
  styleUrl: './new-hero.component.css'
})
export class NewHeroComponent {
@Output() newHeroEvent =new EventEmitter<string>;

  addNewHero(heroName: string ){
  this.newHeroEvent.emit(heroName)
}
}
