import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldService {
  gold$: BehaviorSubject<number> = new BehaviorSubject(0);
  log$: BehaviorSubject<string> = new BehaviorSubject("");
  
  constructor() { }

  loot(start:number, end: number, location: string) {
    const gold = Math.floor(Math.random() * (end - start + 1) + start);
    const firstWord = gold > 0 ? "Earned" : "Lost";
    this.log$.next(`${firstWord} ${gold} gold from the ${location}`);
    this.gold$.next(gold);
  }
}
