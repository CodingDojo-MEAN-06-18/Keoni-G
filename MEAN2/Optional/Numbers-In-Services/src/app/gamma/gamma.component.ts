import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.differences.subscribe( (differences) => {
      this.numbers = differences;
    });
  }

  difference(event: Event) {
    event.preventDefault();
    let total: number = 0;
    for (const num of this._taskService.retrieveTopNumbers()){
      total += num;
    }
    for (const num of this._taskService.retrieveBottomNumbers()){
      total -= num;
    }
    this._taskService.differences.next([...this.numbers, total]);
  }

}
