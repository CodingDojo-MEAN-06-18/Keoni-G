import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.numbers = this._taskService.retrieveBottomNumbers();
  }

  addNumber(event: Event){
    event.preventDefault();
    this._taskService.addNumberToBottom(Math.floor(Math.random() * 100));
  }
}
