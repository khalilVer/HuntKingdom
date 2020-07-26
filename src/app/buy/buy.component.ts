import { Component, OnInit } from '@angular/core';
import {OffreService} from '../service/offre.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private offreService: OffreService, public router: Router) { }
  Offres: any = [];
  categorie: string;


  ngOnInit() {
    this.loadOffres();
  }
  // Get products list
  loadOffres() {
    return this.offreService.getProducts().subscribe((data: {}) => {
      this.Offres = data;
    });
  }

  deleteOffre(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.offreService.deleteProduct(id).subscribe(data => {
        this.loadOffres();
      });
    }
  }

  searchByCategorie(categorie) {
    this.offreService.getByCategorie(categorie).subscribe(data => {
      this.loadOffres();
    });  }

}
