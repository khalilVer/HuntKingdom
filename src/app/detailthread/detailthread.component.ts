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
  Threadreport: any = [];
  thread: any = {};
  comments: any = [];
  comment = { threadid: '', comment: '', writer: 'gslema', upvote: '0', downvote: '0' };
  report = { type: '', reason: '', subject_id: '', report_nb: '1', userid: '' };
  alreadyReported: string;
  alreadyVoted: boolean = false;
  currentuser: any = 'aahmed';
  tempcheck : string;

  userrep = { subject: '', user: '', subjectid: '' };


  constructor(public actRoute: ActivatedRoute, private threadService: ForumServiceService, public router: Router) { }

  ngOnInit() {


    this.checkThreadReport();
    this.checkVote();
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
      this.threadService.createThreaddetail(this.comment).subscribe((data: {}) => {
        window.location.href = "detailthread/" + this.id;
        //this.ngOnInit();

      });
    }
    else {
      window.alert("Please enters a message !")
    }
  }

  checkVote() {
    this.threadService.getThread(this.id).subscribe((data) => {
      this.thread = data;

    });
  }

  checkThreadReport() {
    this.threadService.checkThreadReport(this.currentuser, this.id, 'Thread').subscribe((data: {}) => {
      this.Threadreport = data;
      console.log('data : ', this.Threadreport[0]);
      if (this.Threadreport[0] != undefined) {
        this.alreadyReported = 'true';
      }
      else {
        this.alreadyReported = 'false';
      }

      console.log('reported :', this.alreadyReported);

    });
  }

  checkCommentReport() {
    this.threadService.checkThreadReport(this.currentuser, this.id, 'Thread Comment').subscribe((data: {}) => {
      this.Threadreport = data;
      console.log('data : ', this.Threadreport[0]);
      if (this.Threadreport[0] != undefined) {
        return 'true';
      }
      else {
        return 'false';
      }
    });

  }

  reportThread(creatoruser) {

    var reason: string;
    if (reason = window.prompt('Are you sure, you want to report this Thread?')) {
      this.report.type = 'Thread';
      this.report.reason = reason;
      this.report.subject_id = this.id;
      this.report.userid = creatoruser;
      this.threadService.submitReport(this.report).subscribe();


      this.userrep.user = this.currentuser;
      this.userrep.subjectid = this.id;
      this.userrep.subject = 'Thread';
      this.threadService.submitUserReport(this.userrep).subscribe();
    }
    window.alert("Your report has been submitted successfully")
    this.ngOnInit();

  }

  reportComment(creatoruser, commentid) {

    var reason: string;
    if (reason = window.prompt('Are you sure, you want to report this Comment?')) {
      this.report.type = 'Thread Comment';
      this.report.reason = reason;
      this.report.subject_id = commentid;
      this.report.userid = creatoruser;
      this.threadService.submitReport(this.report).subscribe();


      this.userrep.user = this.currentuser;
      this.userrep.subjectid = commentid;
      this.userrep.subject = 'Thread Comment';
      this.threadService.submitUserReport(this.userrep).subscribe();
    }
    window.alert("Your report has been submitted successfully")
    window.location.href = "detailthread/" + this.id;

  }



}
