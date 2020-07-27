import { Component, OnInit } from '@angular/core';
import {OffreService} from '../service/offre.service';
import {Router} from '@angular/router';
import {Sell} from '../Model/sell';
import {DemandeService} from '../service/demande.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private demandeService: DemandeService, public router: Router) { }
  Demandes: any = [];
  categorie: string;

  ngOnInit() {
    this.loadOffres();
  }
  // Get products list
  loadOffres() {
    return this.demandeService.getProducts().subscribe((data: {}) => {
      this.Demandes = data;
    });
  }
  deleteOffre(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.demandeService.deleteProduct(id).subscribe(data => {
        this.loadOffres();
      });
    }
  }

  searchByCategorie(categorie) {
    this.categorie = categorie;
  }
}
