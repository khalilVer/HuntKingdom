import { Component, OnInit } from '@angular/core';
import {FavorisService} from '../service/favoris.service';
import {Favoris} from '../Model/favoris';
import {Produit} from '../Model/produit';
import {ProduitServiceService} from '../service/produit-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favoris-products',
  templateUrl: './favoris-products.component.html',
  styleUrls: ['./favoris-products.component.css']
})
export class FavorisProductsComponent implements OnInit {

    favoris: Array<any> = [];
    fav: Array<Favoris> = [];
    products: Array<Produit> = [];
    id: number = 1 ;
    constructor(private favorisService: FavorisService, private produitService: ProduitServiceService, public router: Router) { }

  ngOnInit() {
      this.loadFavoris(this.id);
  }

    // Get favoris list
    loadFavoris(id) {
        return this.favorisService.getFavorisByUser(id).subscribe((data: {}) => {
            this.favoris.push(data) ;
            this.fav = this.favoris[0];
            for (let i = 0; i < this.fav.length; i++) {
                this.products[i] = this.fav[i].product ;
            }
        });
    }

    ajouterPannier(produit) {
        produit.quantiteT = 1;
        produit.clicked = true;
        this.produitService.ajouterProduitPannier(produit);
    }

    ajouterPannierDisabled(produit): boolean {
        let pannier: Array<Produit> = [] ;
        pannier = this.produitService.getPannier();
        for (let i = 0; i < pannier.length; i++) {
            if (pannier[i].reference === produit.reference) {
                return true;
            }
        }
        return false;
    }

    deleteFavoris(id) {
        let idFav: number;
        for (let i = 0; i < this.fav.length; i++) {
            if (this.fav[i].product.id === id) {
                idFav = this.fav[i].id;
            }
        }
            this.favorisService.deleteFavoris(idFav).subscribe(data => {
                this.loadFavoris(this.id);
            });
        }
}
