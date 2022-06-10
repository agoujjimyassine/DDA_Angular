import { Component, OnInit } from '@angular/core';
import { PieceJointe } from 'src/model/model.pieceJointe';
import { ServicePieceJointe } from 'src/service/service.pieceJointe';

@Component({
  selector: 'app-piece-citoyen',
  templateUrl: './piece-citoyen.component.html',
  styleUrls: ['./piece-citoyen.component.css']
})
export class PieceCitoyenComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');

  pagePiecesJointes: any;

  constructor(private pieceJointeService: ServicePieceJointe) { }

  ngOnInit(): void {
    this.pieceJointeService.getPiecesJointesByTypeDemandeId(localStorage.getItem('id_type_Demande'))
      .subscribe(data => {
        this.pagePiecesJointes = data;
      });
  }

}
