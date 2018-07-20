import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  content: string = "";
  constructor(private _notesService: NotesService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    // console.log(formData);
    this._notesService.create(this.content);
    this._notesService.retrieveAll();
    formData.reset();
  }

}
