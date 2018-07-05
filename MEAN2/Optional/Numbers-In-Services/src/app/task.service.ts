import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private topNumbers: number[] = [];
  private bottomNumbers: number[] = [];
  differences$: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  retrieveTopNumbers(): number[] {
    return this.topNumbers;
  }
  retrieveBottomNumbers(): number[] {
    return this.bottomNumbers;
  }
  addNumberToTop(num: number) {
    this.topNumbers.push(num);
  }
  addNumberToBottom(num: number) {
    this.bottomNumbers.push(num);
  }

  difference() {
    // let total: number = 0;
    // for (const num of this.retrieveTopNumbers()){
    //   total += num;
    // }
    // for (const num of this.retrieveBottomNumbers()){
    //   total -= num;
    // }
    const total = this.topNumbers.reduce((sum, value) => sum + value) - this.bottomNumbers.reduce((sum, value) => sum + value);
    this.differences$.next(total);
  }
}
