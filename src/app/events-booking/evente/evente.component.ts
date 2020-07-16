import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../Model/event';

@Component({
  selector: 'app-evente',
  templateUrl: './evente.component.html',
  styleUrls: ['./evente.component.css']
})
export class EventeComponent implements OnInit {

  @Input() evente : any;

  constructor() { }

  ngOnInit() {
  }

}
