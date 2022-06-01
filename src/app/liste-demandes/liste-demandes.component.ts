import { Component, OnInit } from '@angular/core';
import { ServiceDemande } from 'src/service/service.demande';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})
export class ListeDemandesComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  demandes: any;

  constructor(private demandeService: ServiceDemande) { }

  ngOnInit(): void {
    this.demandeService.getDemandesByTypeDemandeId({"id": Number(localStorage.getItem('id_type_Demande'))})
      .subscribe(data => {
        this.demandes = data;
        console.log('Liste Demandes',this.demandes);
      });
  }

}
