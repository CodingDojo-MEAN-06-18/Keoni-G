import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  numbers: Number[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.numbers = this._taskService.retrieveDifferences();
  }

  difference(event) {
    event.preventDefault();
    this._taskService.difference();
  }

}
