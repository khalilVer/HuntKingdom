import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sharestory',
  templateUrl: './sharestory.component.html',
  styleUrls: ['./sharestory.component.css']
})
export class SharestoryComponent implements OnInit {

  date: Date = new Date();
  dateThread = this.date.getDate() + ' / ' + (this.date.getMonth() + 1) + ' / ' + this.date.getFullYear();
  thread = {title : '',description : '', upvote : '',downvote : '', isValidated : 'false', topic : '' , creationdate :this.dateThread.toString(), creatoruser: 'gslema'} ;

  constructor(private threadService: ThreadServiceService, public router: Router) { }

  ngOnInit() {
  }

  addThread() {
    this.threadService.createThread(this.thread).subscribe();
    };
}


