import { EtatDemande } from "./model.etatDemande";
import { TypeDemande } from "./model.typeDemande";

export class Demande {

    id: number;
    /*responsable_id : number;
    auxiliaire_autorite_id: number;
    citoyen_id: number;
    etat_demande_id: number;
    type_demande_id: number;*/
    type_demandes: TypeDemande;
    etat_demandes: EtatDemande;

  }