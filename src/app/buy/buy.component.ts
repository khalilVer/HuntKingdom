import { Component, OnInit } from '@angular/core';
import {OffreService} from '../service/offre.service';
import {Router} from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {Buy} from '../Model/buy';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private offreService: OffreService, public router: Router) { }
  Offres: any = [];
  categorie: string;
  b: Array<Buy> = [];


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
    this.categorie = categorie;
  }
  generatePdf() {
    const documentDefinition = {content: 'Votre commande est bien enregitré! Merci pour votre confiance'};
    if (window.confirm('Voulez-vous confimer votre achat? ')) {
      pdfMake.createPdf(documentDefinition).download();
    }
  }
}
