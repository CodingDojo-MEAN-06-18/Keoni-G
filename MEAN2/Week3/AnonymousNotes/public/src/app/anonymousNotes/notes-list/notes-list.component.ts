import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: any[] = [];
  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this._notesService.retrieveAll();
    this._notesService.note$.subscribe((notes) => {
      this.notes = notes;
    }, (err) => {
      console.log(err);
    });
  }

}
