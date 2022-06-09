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
    console.log({"id": Number(localStorage.getItem('id_type_Demande'))});
    this.pieceJointeService.getPiecesJointesByTypeDemandeId({"id": 1})
      .subscribe(data => {
        this.pagePiecesJointes = data;
        console.log('Liste Pieces Jointes',this.pagePiecesJointes);
      });
  }

}
