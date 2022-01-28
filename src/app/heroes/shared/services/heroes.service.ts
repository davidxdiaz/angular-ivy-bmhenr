import { Injectable } from '@angular/core';
import heroes from './mockup';

@Injectable()
export class HeroesService {
  constructor() {}

  getHeroes() {
    return heroes;
  }

  getHero(id: string) {
    const hero = heroes.find((x) => x.id === id);
    return hero === undefined ? null : hero;
  }
}
