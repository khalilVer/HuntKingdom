import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../Model/produit';
import {ProduitServiceService} from '../service/produit-service.service';
import {CommandeServiceService} from '../service/commande-service.service';
import {Commande} from '../Model/commande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panier-products',
  templateUrl: './panier-products.component.html',
  styleUrls: ['./panier-products.component.css']
})
export class PanierProductsComponent implements OnInit {
    pannierFinal: Array<Produit> = [];
    id: number = 1 ;
    lastCommande: any;
    pannier: Array<Produit> = [];
    prixTotal: number = 0;
    quantiteTotal: number = 0;
    dateAchat: string;
    constructor(private produitService: ProduitServiceService, private commandeService: CommandeServiceService, public router: Router) { }
  ngOnInit() {
      this.loadPannier();
      this.commandeService.getLastCommande(0).subscribe((data: {}) => {
          this.lastCommande = data;
      });
  }

    // Get pannier
    loadPannier() {
        this.pannier = this.produitService.getPannier();
        let date: Date = new Date();
        this.dateAchat = date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear();
        this.quantiteTotal = this.pannier.length ;
        this.prixTotal = this.calculatePrixTotal(this.pannier, this.prixTotal);
        for (let i = 0; i < this.pannier.length; i++) {
            this.pannierFinal.push(this.pannier[i]);
        }

    }

    calculatePrixTotal(pannier: Array<Produit>, prixTotal): number {
        for (let i = 0; i < pannier.length; i++) {
        prixTotal = prixTotal + pannier[i].prix;
        }
        return prixTotal;
    }

    addCommande() {
        let commande: Commande = new Commande();
        commande.numero_commande = this.prepareCmdNum();
        commande.date_achat = this.dateAchat;
        commande.products = this.pannierFinal;
        console.log(...this.pannier);
        commande.prix_total = this.prixTotal;
        commande.quantite_total = this.quantiteTotal;
        commande.is_valid = false;
        commande.user = this.id ;
        this.commandeService.createCommande(commande).subscribe((data: {}) => {
            this.viderCommande();
            this.router.navigate(['/mesCommandes']);
        });
    }

    ajouterQuantiteProduit(produit) {
        let p: Produit = produit;
        this.pannierFinal.push(p);
        let occ: number = 0;
        for (let i = 0; i < this.pannierFinal.length; i++) {
            if (this.pannierFinal[i].reference === produit.reference) {
                occ++;

            }
        }
        for (let i = 0; i < this.pannier.length; i++) {
            if (this.pannier[i].reference === produit.reference) {
                this.pannier[i].quantiteT = occ;

            }
        }
        this.quantiteTotal = this.quantiteTotal + 1 ;
        this.prixTotal = this.prixTotal + produit.prix;
    }

    deleteFromPanier(reference) {
        let index: number;
        let prix: number;
        console.log(this.checkProduitExistant(reference));
        if (this.checkProduitExistant(reference)) {
            for (let i = 0; i < this.pannierFinal.length; i++) {
                if (this.pannierFinal[i].reference === reference) {
                    this.prixTotal = this.prixTotal - this.pannierFinal[i].prix;
                    this.quantiteTotal = this.quantiteTotal - 1 ;
                    this.pannierFinal.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.pannier.length; i++) {
                if (this.pannier[i].reference === reference) {
                    this.pannier[i].quantiteT = this.pannier[i].quantiteT - 1 ;
                }
            }
        }
        else {
            for (let i = 0; i < this.pannier.length; i++) {
                if (this.pannier[i].reference === reference) {
                    index = i;
                    prix = this.pannier[i].prix;
                    this.quantiteTotal = this.quantiteTotal - 1 ;
                    this.prixTotal = this.prixTotal - prix;
                    this.pannier.splice(index, 1);
                    this.pannierFinal.splice(index, 1);

                }
            }
        }
    }
    checkProduitExistant(reference): boolean {
        for (let i = 0; i < this.pannier.length; i++) {
            if (this.pannier[i].reference === reference && this.pannier[i].quantiteT > 1) {
               return true;
            }
        }
        return false;
    }

    prepareCmdNum(): string {
        let cmd: string;
        cmd = this.lastCommande.numero_commande;
            let prefix = cmd.substr(0, 3);
            let sufix = cmd.substr(4, cmd.length);
            let i = parseInt(sufix, 0) + 1;
            sufix = (i < 10 ? '0000' : (i < 100 ? '000' : (i < 1000 ? '00' : (i < 10000 ? '0' : '') ))) + i ;
            let cmdFinal: string = prefix + sufix ;
            console.log(cmdFinal);
            return cmdFinal ;
    }
    viderCommande() {
        this.prixTotal = 0 ;
        this.quantiteTotal = 0;
        this.pannier = [];
        this.produitService.viderPannier();
    }
}
