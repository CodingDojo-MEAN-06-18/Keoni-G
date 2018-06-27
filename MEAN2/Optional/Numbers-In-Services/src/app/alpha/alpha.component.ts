import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.numbers = this._taskService.retrieveTopNumbers();
  }

  addNumber(event){
    event.preventDefault();
    this._taskService.addNumberToTop(Math.floor(Math.random() * 100));
  }
}
