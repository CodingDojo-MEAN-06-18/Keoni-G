import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private topNumbers: number[] = [];
  private bottomNumbers: number[] = [];
  private differences: number[] = [];
  constructor() { }

  retrieveTopNumbers(): number[] {
    return this.topNumbers;
  }
  retrieveBottomNumbers(): number[] {
    return this.bottomNumbers;
  }
  retrieveDifferences(): number[] {
    return this.differences;
  }
  addNumberToTop(num: number) {
    this.topNumbers.push(num);
  }
  addNumberToBottom(num: number) {
    this.bottomNumbers.push(num);
  }
  difference() {
    let total = 0;
    for (const num of this.retrieveTopNumbers()){
      total += num;
    }
    for (const num of this.retrieveBottomNumbers()){
      total -= num;
    }
    this.differences.push(total);
  }
}
