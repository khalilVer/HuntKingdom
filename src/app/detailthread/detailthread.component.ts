import { Component, OnInit } from '@angular/core';
import { ForumServiceService } from '../service/forum-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { notification } from '../Model/notification';
import { threaddetail } from '../Model/threaddetail';

@Component({
  selector: 'app-detailthread',
  templateUrl: './detailthread.component.html',
  styleUrls: ['./detailthread.component.css']
})
export class DetailthreadComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  thread: any = {};
  comments: any = [];
  comment = { threadid: '', comment: '', writer: 'gslema', upvote: '0', downvote: '0' };
  report = { type: '', reason: '', subject_id: '', report_nb: '0', userid: 'gslema' };


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

  calculatevote(up, down) {
    var votes: number = Number(up) - Number(down);
    return votes;
  }

  addComment() {
    if (this.comment.comment != '') {

      this.comment.threadid = this.id;
      window.alert("Your comment has been added successfully");
      this.threadService.createThreaddetail(this.comment).subscribe((data: {}) => {
        this.loadComments();
      });
    }
    else {
      window.alert("Please enters a message !")
    }
  }

  reportThread() {

    if (this.comment.comment != '') {
      var reason: string;
      if (reason = window.prompt('Are you sure, you want to delete? Please enters the reason to notifty the creator of this thread')) {
        this.report.type = 'Thread';
        this.report.reason = reason;
        this.report.subject_id = this.id;
        console.log(this.report);
        this.threadService.submitReport(this.report).subscribe();
      }
    }



  }



}
