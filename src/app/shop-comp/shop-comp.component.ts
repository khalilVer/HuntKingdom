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
    ajouterPannier(produit) {
        this.produitService.ajouterProduitPannier(produit);
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
