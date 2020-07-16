import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeServiceService} from '../service/commande-service.service';

@Component({
  selector: 'app-commande-details-comp',
  templateUrl: './commande-details-comp.component.html',
  styleUrls: ['./commande-details-comp.component.css']
})
export class CommandeDetailsCompComponent implements OnInit {

    id = this.actRoute.snapshot.params['id'];
    commandeData: any = {};
    constructor( public router: Router, public actRoute: ActivatedRoute, private commandeService: CommandeServiceService) { }

  ngOnInit() {
      this.commandeService.getcommande(this.id).subscribe((data: {}) => {
          this.commandeData = data;
      });
  }

}
