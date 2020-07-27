import { Component, OnInit } from '@angular/core';
import { ForumServiceService } from '../service/forum-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-comp',
  templateUrl: './forum-comp.component.html',
  styleUrls: ['./forum-comp.component.css']
})
export class ForumCompComponent implements OnInit {

  Threads: any = [];
  topic: string;

  constructor(private threadService: ForumServiceService,  public router: Router) { }

  ngOnInit() {
    this.loadThreads();
  }

  loadThreads() {
    return this.threadService.getThreads().subscribe((data: {}) => {
        this.Threads = data;
    });
  }

  searchByCategorie(topic) {
    this.topic = topic;
}

}
