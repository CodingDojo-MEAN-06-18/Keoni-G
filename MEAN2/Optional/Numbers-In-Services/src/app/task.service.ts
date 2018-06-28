import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private topNumbers: number[] = [];
  private bottomNumbers: number[] = [];
  differences: BehaviorSubject<number[]> = new BehaviorSubject([]);
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
}
