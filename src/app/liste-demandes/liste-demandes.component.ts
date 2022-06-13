import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/model/model.demande';
import { ServiceDemande } from 'src/service/service.demande';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})
export class ListeDemandesComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  pageDemandes: any;

  constructor(private demandeService: ServiceDemande, private router: Router) { }

  ngOnInit(): void {
    this.demandeService.getDemandesByTypeDemandeId(localStorage.getItem('id_type_Demande'))
      .subscribe(data => {
        this.pageDemandes = data;
      });
  }

  addPiece(demande: Demande){
    localStorage.removeItem('demande');
    localStorage.setItem('demande', JSON.stringify(demande));
    this.router.navigate(['addPiece']);
  }

  createPdf(demande: Demande){
    localStorage.removeItem('demande');
    localStorage.setItem('demande', JSON.stringify(demande));
    this.router.navigate(['createPdf']);
  }

}
