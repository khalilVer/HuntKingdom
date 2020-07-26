import { Component, OnInit } from '@angular/core';
import {ProduitServiceService} from '../service/produit-service.service';
import {CommandeServiceService} from '../service/commande-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-panier-comp',
  templateUrl: './liste-panier-comp.component.html',
  styleUrls: ['./liste-panier-comp.component.css']
})
export class ListePanierCompComponent implements OnInit {

  commande: any = [];
  id: number = Number(localStorage.getItem('id')) ;
  constructor(private produitService: ProduitServiceService, private commandeService: CommandeServiceService, public router: Router) { }
  ngOnInit() {
    this.loadCommandes(this.id);
  }

    // Get commande by user list
    loadCommandes(id) {
        return this.commandeService.getCommandesByUser(id).subscribe((data: {}) => {
            this.commande = data;
        });
    }

    deleteCommande(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.commandeService.deleteCommande(id).subscribe(data => {
                this.loadCommandes(this.id);
            });
        }
    }

}
