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
  thread = { title: '', description: '', upvote: '0', downvote: '0', is_validated: 'false', topic: '', creationdate: this.dateThread.toString(), creatoruser: 'gslema' };

  constructor(private threadService: ThreadServiceService, public router: Router) { }

  ngOnInit() {
  }

  addThread() {
    if (this.thread.title == '' || this.thread.topic == '' || this.thread.description == '') {
      window.alert('Please verify all the fields before submitting');
    }
    else {

      window.alert('Your thread has been submitted successfully. You will receive a notification once it gets validated');
      this.threadService.createThread(this.thread).subscribe((data: {}) => {
        this.router.navigate(['/forum']);
      });
    }
  }

}

