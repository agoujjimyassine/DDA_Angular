import { Component, OnInit } from '@angular/core';
import { TypeDemande } from 'src/model/model.typeDemande';
import { ServiceTypeDemande } from 'src/service/service.typeDemande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-types-demandes',
  templateUrl: './types-demandes.component.html',
  styleUrls: ['./types-demandes.component.css']
})
export class TypesDemandesComponent implements OnInit {

  pageTypesDemandes: any;

  constructor(private typeDemandeService: ServiceTypeDemande, private router: Router) {}
 
  ngOnInit() {
    this.typeDemandeService.getTypesDemandes()
      .subscribe(data => {
        this.pageTypesDemandes = data;
      });
  }

  toScanCin(typeDemande: TypeDemande) {
    localStorage.removeItem('nom_type_Demande');
    localStorage.setItem('nom_type_Demande', typeDemande.name);

    localStorage.removeItem('id_type_Demande');
    localStorage.setItem('id_type_Demande', typeDemande.id.toString());

    this.router.navigate(['scanCin']);
  }

}
