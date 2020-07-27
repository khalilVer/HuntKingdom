import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../service/demande.service';
import {Router} from '@angular/router';
import {Sell} from '../Model/sell';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  constructor(private offreService: DemandeService, public router: Router) { }
  demandes: any = [];
  categorie: string;
  ngOnInit() {
    this.loadOffres();
  }
  loadOffres() {
    return this.offreService.getProducts().subscribe((data: {}) => {
      this.demandes = data;
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
    this.categorie = categorie;
}
act(){
}
}
