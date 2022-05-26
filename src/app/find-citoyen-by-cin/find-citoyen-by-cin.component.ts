import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-citoyen-by-cin',
  templateUrl: './find-citoyen-by-cin.component.html',
  styleUrls: ['./find-citoyen-by-cin.component.css']
})
export class FindCitoyenByCinComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');
  cin='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  findCitoyenByCin(){
    localStorage.removeItem('find_citoyen_by_cin');
    localStorage.setItem('find_citoyen_by_cin',this.cin);
    this.router.navigate(['formCitoyen']);
  }

}
