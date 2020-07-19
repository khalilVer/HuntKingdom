import { Personne } from './../../Model/personne';
import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/Model/event';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {

  @Input() event: Event;
  user :Personne= new  Personne ();
  constructor() { }

  ngOnInit() {
  }

}
