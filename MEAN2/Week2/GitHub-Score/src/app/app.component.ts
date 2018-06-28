import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: String = 'GitHub Score';
  score: number = 0;
  message: String = "Enter a GitHub Username";

  constructor(private _scoreService: ScoreService) {

  }

  ngOnInit() {
    this._scoreService.score.subscribe( (score) => {
      this.score = score;
    });
  }
  
  onSubmit(username) {
    this._scoreService.getUser(username);
  }
}
