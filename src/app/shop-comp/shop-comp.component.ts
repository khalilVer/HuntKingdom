import { Component, OnInit } from '@angular/core';
import {ProduitServiceService} from '../service/produit-service.service';

@Component({
  selector: 'app-shop-comp',
  templateUrl: './shop-comp.component.html',
  styleUrls: ['./shop-comp.component.css']
})
export class ShopCompComponent implements OnInit {

    Produits: any = [];
    constructor(private produitService: ProduitServiceService) { }
    ngOnInit() {
        this.loadProducts();
    }
    // Get products list
    loadProducts() {
        return this.produitService.getProducts().subscribe((data: {}) => {
            this.Produits = data;
        });
    }

}
