import { Component, OnInit } from '@angular/core';
import { ServiceDemande } from 'src/service/service.demande';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})
export class ListeDemandesComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  pageDemandes: any;

  constructor(private demandeService: ServiceDemande) { }

  ngOnInit(): void {
    console.log({"id": Number(localStorage.getItem('id_type_Demande'))});
    this.demandeService.getDemandesByTypeDemandeId({"id": 4})
      .subscribe(data => {
        this.pageDemandes = data;
        console.log('Liste Demandes',this.pageDemandes);
      });
  }

}
