import { Component, OnInit } from '@angular/core';
import { ForumServiceService } from '../service/forum-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailthread',
  templateUrl: './detailthread.component.html',
  styleUrls: ['./detailthread.component.css']
})
export class DetailthreadComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  thread: any = {};
  comments: any = [];

  constructor(public actRoute: ActivatedRoute, private threadService: ForumServiceService, public router: Router) { }

  ngOnInit() {

    this.loadThread();
    this.loadComments();

  }

  loadThread() {
    this.threadService.getThread(this.id).subscribe((data) => {
      this.thread = data;

    });
  }

  loadComments() {
    return this.threadService.getComments(this.id).subscribe((data: {}) => {
      this.comments = data;
    });
  }

  calculatevote(up,down) {
    var votes : number = Number(up) - Number(down) ;
    return votes;
  }

}
