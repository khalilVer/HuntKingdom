import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeServiceService} from '../service/commande-service.service';
import {ProduitServiceService} from '../service/produit-service.service';
import {Produit} from '../Model/produit';

@Component({
  selector: 'app-commande-details-comp',
  templateUrl: './commande-details-comp.component.html',
  styleUrls: ['./commande-details-comp.component.css']
})
export class CommandeDetailsCompComponent implements OnInit {

    id = this.actRoute.snapshot.params['id'];
    commandeData: any = {};
    products: any =  [];
    productsFinal: Array<Produit> = [];
    constructor( public router: Router, public actRoute: ActivatedRoute, private commandeService: CommandeServiceService, private produitService: ProduitServiceService) { }

  ngOnInit() {
      this.commandeService.getcommande(this.id).subscribe((data: {}) => {
          this.commandeData = data;
      });
      this.produitService.getProductsByCommandeId(this.id).subscribe((data: {}) => {
          this.products = data;
          this.adjustproductsList();
      });
  }

  adjustproductsList() {
        //for (let i = 0; i < this.products.length; i++) {
         //let occ: number = 1 ;
           // for (let j = i; j < this.products.length; j++) {
            //  if (this.products[i].id === this.products[j].id && i === 0) {
              //    occ = occ + 1;
             // }
             // if (this.products[i].id === this.products[j].id) {
              //    occ = occ + 1;
              //    this.products.splice(j, 1);
             // }
         // }
         // this.products[i].quantiteT = occ ;
      //}

      for (let i = 0; i < this.products.length; i++) {
        let occ: number = 0 ;
        for (let j = 0; j < this.products.length; j++) {
            if (this.products[i].id === this.products[j].id) {
                 occ++;
            }
        }
        this.products[i].quantiteT = occ ;
          if (this.productsFinal.find((test) => test.id === this.products[i].id) === undefined) {
              this.productsFinal.push(this.products[i]);
          }
      }
  }

}
