import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Citoyen } from 'src/model/model.citoyen';
import { ServiceCitoyen } from 'src/service/service.citoyen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-citoyen',
  templateUrl: './form-citoyen.component.html',
  styleUrls: ['./form-citoyen.component.css']
})
export class FormCitoyenComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  citoyenNoDB : Citoyen = null;

  citoyen : Citoyen = null;

  citoyenFinal;

  constructor(public datepipe: DatePipe, private citoyenService: ServiceCitoyen, private router: Router) { }

  ngOnInit(): void {
    this.citoyenNoDB = JSON.parse(localStorage.getItem('citoyenNoDB'));
    this.citoyen = JSON.parse(localStorage.getItem('citoyen'));
    if(this.citoyen){
      this.citoyenFinal = this.citoyen;
    } else {
      this.citoyenFinal = this.citoyenNoDB;
    }

    if(localStorage.getItem('find_citoyen_by_cin')){
    this.citoyenService.getCitoyenByCin(localStorage.getItem('find_citoyen_by_cin'))
    .subscribe(data => {
      this.citoyenFinal = data;
    });
    localStorage.removeItem('find_citoyen_by_cin');
  }

  }

  saveOrUpdateCitoyen(){
    console.log("Save Or Update Citoyen");
    this.router.navigate(['pieceCitoyen']);
  }

}
