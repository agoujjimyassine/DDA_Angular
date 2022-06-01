import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeDemande } from 'src/model/model.typeDemande';
import { ServiceTypeDemande } from 'src/service/service.typeDemande';

@Component({
  selector: 'app-types-demandes-responsable',
  templateUrl: './types-demandes-responsable.component.html',
  styleUrls: ['./types-demandes-responsable.component.css']
})
export class TypesDemandesResponsableComponent implements OnInit {

  pageTypesDemandes: any;

  constructor(private typeDemandeService: ServiceTypeDemande, private router: Router) {}
 
  ngOnInit() {
    this.typeDemandeService.getTypesDemandes()
      .subscribe(data => {
        this.pageTypesDemandes = data;
      });
  }

  toListeDemandes(typeDemande: TypeDemande) {
    localStorage.removeItem('nom_type_Demande');
    localStorage.setItem('nom_type_Demande', typeDemande.name);

    localStorage.removeItem('id_type_Demande');
    localStorage.setItem('id_type_Demande', typeDemande.id.toString());

    this.router.navigate(['listeDemandes']);
  }

}
