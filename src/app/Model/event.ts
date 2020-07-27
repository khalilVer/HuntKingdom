import { Categorie } from './categorie';
export class Event {
    id: number;
    nom: string;
    type : string;
    adresse : string;
    latitude : number;
    langitude : number;
    dateDebut : Date ;
    dateFin : Date;
    nbrParticipent: number;
    placeDispo: number;
    categorie: Categorie;
    description : String;
    like: number;
    dislike: number;
}
