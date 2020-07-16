import {Produit} from './produit';

export class Commande {
    id: number;
    date_achat: string;
    prix_total: number;
    quantite_total: number;
    numero_commande: string;
    is_valid: boolean;
    user: number;
    products: Array<Produit>;


}
