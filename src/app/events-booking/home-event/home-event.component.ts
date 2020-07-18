import { EventService } from '../../service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {

  events : any = [];
  constructor(private eventService: EventService) { }
ngOnInit() {
    this.loadEvents();
}
  // Get event list
  loadEvents() {
      return this.eventService.getEvents().subscribe((data: Event[]) => {
          this.events = data;
          console.log('*********************');
          console.log(this.events);
      });
  }
}