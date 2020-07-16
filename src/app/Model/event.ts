import { Categorie } from './categorie';
export class Event {
    id: number;
    nom: string;
    type : string;
    adresse : string;
    latitude : string;
    langitude : string;
    dateDebut : Date ;
    dateFin : Date;
    nbrParticipent: number;
    placeDispo: number;
    categorie: Categorie;

}
