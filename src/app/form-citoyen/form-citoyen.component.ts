import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-citoyen',
  templateUrl: './form-citoyen.component.html',
  styleUrls: ['./form-citoyen.component.css']
})
export class FormCitoyenComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  constructor() { }

  ngOnInit(): void {
  }

}
