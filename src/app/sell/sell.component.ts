import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../service/demande.service';
import {Router} from '@angular/router';
import {Sell} from '../Model/sell';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  constructor(private offreService: DemandeService, public router: Router) { }
  Offres: any = [];
  categorie: string;
  b: Array<Sell> = [];


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
  generatePdf(offres) {
    const documentDefinition = {content: 'Votre commande est bien enregitré! Merci pour votre confiance'};
    if (window.confirm('Voulez-vous confimer votre achat? ')) {
      pdfMake.createPdf(documentDefinition).download();
    }
    for (let i = 0; i < this.b.length; i++) {
      this.b[i].etat = 'Acheté' ;
    }
  }

}
