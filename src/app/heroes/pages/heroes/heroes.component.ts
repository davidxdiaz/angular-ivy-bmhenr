import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/interfaces/hero';
import { HeroesService } from '../../shared/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    console.log('Heroes List');
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroesService.getHeroes();
  }
}
