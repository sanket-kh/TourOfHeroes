import { Injectable } from '@angular/core';
import {Hero} from "../interfaces/hero";
import {HEROES} from "../mock-heroes";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add("Hero service: heroes fetched")
    return heroes;
  }

  getHero(id: number) {

      const hero = HEROES.find(h => h.id === id)!;
      this.messageService.add(`HeroService: fetched hero id=${id}`); //The backtick ( ` ) characters define a JavaScript template literal for embedding the id.
      return of(hero);
    }

}
