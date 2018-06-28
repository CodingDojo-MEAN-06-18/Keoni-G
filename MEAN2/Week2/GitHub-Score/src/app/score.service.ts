import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private url = 'https://api.github.com/users';
  score: BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor(private _http: HttpClient) {  }

  getUser(userName: String) {
    return this._http.get(`${this.url}/${userName}`).subscribe(
      (user) => { this.score.next(user['followers'] + user['public_repos']); },
      (err) => { 
        this.score.next(-1);
      }
    )
  }
}
