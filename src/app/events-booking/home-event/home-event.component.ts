import { EventService } from '../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/event';


@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {

  events : any = [];
  filteredStatus  :'';
  constructor(private eventService: EventService) { }
ngOnInit() {
    this.loadEvents();
}

  // Get event list
  loadEvents() {
      return this.eventService.getEvents().subscribe((data: Event) => {
       // console.log('hiiiiiii',data.nom);

          this.events = data;
          console.log('*********************');
          console.log(this.events.nom);
      });
  }

  increment(event: Event) {
    this.eventService.likeEvent(event).subscribe((data) => {
      event.like = data['like'];
      console.log('Event', event);
    })
  }
  deccrement(event: Event) {
    this.eventService.dislikeEvent(event).subscribe((data) => {
      event.dislike = data['dislike'];
      console.log('Event', event);
    })
  }
  
}