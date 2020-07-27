import { EventService } from './../../service/event.service';
import { BookService } from './../../service/book.service';
import { Reservation } from './../../Model/reservation';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/Model/event';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  event : any= {};

  reservationetDetails = { nom: '', prenom: '',telephone: '', email :'', event: '' }

  constructor(public actRoute: ActivatedRoute, private eventService: EventService, private produitService: BookService, public router: Router,private toastr: ToastrService) { }

ngOnInit() {
  this.eventService.getEvent(this.id).subscribe((data) => {
    this.event = data;
    console.log('Event', this.event);
});
}

  addReservation() {
    console.log('this.reservationetDetails', this.reservationetDetails);
    this.reservationetDetails.event = this.id;
      this.produitService.createReservation(this.reservationetDetails).subscribe((data: {}) => {
        this.toastr.success('Your reservation is made successfully', 'Welcome!');
        this.router.navigate(['/event']);

      });
  }

}
