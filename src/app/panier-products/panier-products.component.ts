import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../Model/produit';
import {ProduitServiceService} from '../service/produit-service.service';

@Component({
  selector: 'app-panier-products',
  templateUrl: './panier-products.component.html',
  styleUrls: ['./panier-products.component.css']
})
export class PanierProductsComponent implements OnInit {

    pannier: Array<Produit> = [];
    prixTotal: number = 0;
    quantiteTotal: number = 0;
    dateAchat: string;
    constructor(private produitService: ProduitServiceService) { }
  ngOnInit() {
      this.loadPannier();
  }

    // Get pannier
    loadPannier() {
        this.pannier = this.produitService.getPannier();
        let date: Date = new Date();
        this.dateAchat = date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear();
        this.quantiteTotal = this.pannier.length;
        this.prixTotal = this.calculatePrixTotal(this.pannier, this.prixTotal);
    }

    calculatePrixTotal(pannier: Array<Produit>, prixTotal): number{
        for (let i = 0; i < pannier.length; i++) {
        prixTotal = prixTotal + pannier[i].prix;
        }
        return prixTotal;
    }


}
