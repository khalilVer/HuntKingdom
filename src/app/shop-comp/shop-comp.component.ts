import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProduitServiceService} from '../service/produit-service.service';
import {Produit} from '../Model/produit';
import {Commande} from '../Model/commande';
import {Favoris} from '../Model/favoris';
import {FavorisService} from '../service/favoris.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop-comp',
  templateUrl: './shop-comp.component.html',
  styleUrls: ['./shop-comp.component.css']
})
export class ShopCompComponent implements OnInit {

    categorie: string;
    clicked: boolean = false;
    Produits: any = [];
    constructor(private produitService: ProduitServiceService, private favorisService: FavorisService,  public router: Router) { }
    ngOnInit() {
        this.loadProducts();
    }
    // Get products list
    loadProducts() {
        return this.produitService.getProducts().subscribe((data: {}) => {
            this.Produits = data;
        });
    }
    checkConnected(): boolean{
        if (localStorage.length !== 0) {
            return false;
        }
        return true;
    }
    ajouterPannier(produit) {
        produit.quantiteT = 1;
        produit.clicked = true;
        this.produitService.ajouterProduitPannier(produit);
    }
    searchByCategorie(categorie) {
        this.categorie = categorie;
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

    addFavrois(produit) {
        let favoris: Favoris = new Favoris();
        favoris.user = 1 ;
        favoris.product = produit ;
        this.favorisService.createFavoris(favoris).subscribe((data: {}) => {
            this.router.navigate(['/shop']);
        });
    }
}
