import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece-citoyen',
  templateUrl: './piece-citoyen.component.html',
  styleUrls: ['./piece-citoyen.component.css']
})
export class PieceCitoyenComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  constructor() { }

  ngOnInit(): void {
  }

}
