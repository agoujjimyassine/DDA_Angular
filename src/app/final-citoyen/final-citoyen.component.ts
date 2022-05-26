import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-citoyen',
  templateUrl: './final-citoyen.component.html',
  styleUrls: ['./final-citoyen.component.css']
})
export class FinalCitoyenComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  constructor() { }

  ngOnInit(): void {
  }

}
