import {Component, Input} from '@angular/core';
import {Location, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Hero} from "../interfaces/hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-hero-detail',
  // standalone: true,
  // imports: [
  //   NgIf,
  //   ReactiveFormsModule,
  //   UpperCasePipe,
  //   FormsModule
  // ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  hero?:Hero

  constructor(private activatedRoute:ActivatedRoute, //holds info about the active route
              private heroService:HeroService,
              public location:Location) {            //this is used for interacting with the browser. this service lets you navigate to previous view.
  }
getHero(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
}
ngOnInit(){
    this.getHero();
}


}
