import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  note$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  constructor(private _http$: Http) {}
  
  retrieveAll() {
    return this._http$.get(`/notes`).subscribe((notes) => {
      console.log("Getting Notes: ", notes);
      this.note$.next(notes.json());
    }, (err) => {
      console.log(err);
    })
  }
  
  create(note) {
    return this._http$.post(`/notes`, { 'note': note }).subscribe((response) => {
      // console.log(response);
      this.retrieveAll();
    }, (err) => {
      console.log(err);
    })
  }
}
