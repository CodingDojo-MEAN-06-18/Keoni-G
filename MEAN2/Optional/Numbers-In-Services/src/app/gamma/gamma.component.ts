import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  numbers: number = 0;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.differences$.subscribe( (differences) => {
      this.numbers = differences;
    });
  }

  difference(event: Event) {
    event.preventDefault();
    console.log("In difference function");
    this._taskService.difference();
  }

}
