import { Component, OnInit } from '@angular/core';
import { ServiceScanCin } from 'src/service/service.scanCin';
import {Router} from '@angular/router';
import { ServiceCitoyen } from 'src/service/service.citoyen';

@Component({
  selector: 'app-scan-cin',
  templateUrl: './scan-cin.component.html',
  styleUrls: ['./scan-cin.component.css']
})
export class ScanCinComponent implements OnInit {

  nom_type_Demande = localStorage.getItem('nom_type_Demande');
  second_scan = false;
  message = 'Scan Second Face';
  citoyen = null;
  citoyenNoDB = null;
  results = [
    {'result_1': 'front', 'result_2': 'AOUINA', 'result_3': '', 'result_4': 'fffaaa', 'result_5': '', 'result_6': '01/11/2001',
               'result_7': 'Image_Scan_Final/front20220523100150625186.jpg'},
    {'result_1': 'back', 'result_2': 'RACHID ben HOMMAD', 'result_3': 'SOUAD bent MBAREK', 'result_4': '4195/2001',
               'result_5': 'HAY LR NR 102 BEN GUERIR', 'result_6': '', 'result_7': 'Image_Scan_Final/back20220523100010333453.jpg'}
              ];

  result = this.results[0];
  //result = null;
 
  constructor(private scanCinService: ServiceScanCin, private citoyenService: ServiceCitoyen, private router: Router) {
   }

  ngOnInit() {
  }

  scanCinn() {
    
    if(!this.second_scan){

      localStorage.setItem('prenom','');
      localStorage.setItem('nom','');
      localStorage.setItem('cin','');
      localStorage.setItem('lieu_naissance','');
      localStorage.setItem('date_naissance','');
      localStorage.setItem('chemin_front','');

      localStorage.setItem('prenom_pere','');
      localStorage.setItem('prenom_mere','');
      localStorage.setItem('n_etat_civil','');
      localStorage.setItem('adresse','');
      localStorage.setItem('chemin_back','');

      console.log('init');

    }

      //exec('python autoscan.py', $result);
      
      if(this.result){
        if(this.result.result_1=='front'){
          this.citoyenService.getCitoyenByCin(this.result.result_4)
          .subscribe(data => {
            this.citoyen = data;
            //localStorage.removeItem('citoyen');
            //localStorage.setItem('citoyen',JSON.stringify(data));
          });
            localStorage.setItem('prenom',this.result.result_2);
            localStorage.setItem('nom',this.result.result_3);
            localStorage.setItem('cin',this.result.result_4);
            localStorage.setItem('lieu_naissance',this.result.result_5);
            localStorage.setItem('date_naissance',this.result.result_6);
            localStorage.setItem('chemin_front',this.result.result_7);
            if(this.citoyen){
              
                localStorage.removeItem('citoyen');
                localStorage.setItem('citoyen',JSON.stringify(this.citoyen));

                if(localStorage.getItem('adresse')!=''){
                  this.router.navigate(['formCitoyen']);
                  this.result = this.results[1];
                  return;
                }
                this.second_scan = true;
                this.router.navigate(['scanCin']);
                this.result = this.results[1];
                return;
            }

            if(localStorage.getItem('adresse')!=''){
                    this.router.navigate(['formCitoyen']);
                    this.result = this.results[1];
                    return;
                }
                this.second_scan = true;
                this.router.navigate(['scanCin']);
                this.result = this.results[1];
                return;
        }

        if(this.result.result_1=='back'){
            localStorage.setItem('prenom_pere',this.result.result_2);
            localStorage.setItem('prenom_mere',this.result.result_3);
            localStorage.setItem('n_etat_civil',this.result.result_4);
            localStorage.setItem('adresse',this.result.result_5);
            localStorage.setItem('chemin_back',this.result.result_7);
            if(localStorage.getItem('cin')==''){
                    this.second_scan = true;
                    this.router.navigate(['scanCin']);
                    return;
            }
            if(!localStorage.getItem('citoyen')){
              this.router.navigate(['formCitoyen']);
              return;
            }
            this.router.navigate(['formCitoyen']);
            return;
            }
          }
          //return view('wc4');
          console.log(8);
          return;

        }








        scanCin() {
    
          if(!this.second_scan){
    
            this.citoyenNoDB = {
              
              "id": null,
              "cin": "",
              "nom": "",
              "prenom": "",
              "adresse": "",
              "lieu_naissance": "",
              "metier": "",
              "sexe": "",
              "prenom_pere": "",
              "prenom_mere": "",
              "n_etat_civil": "",
              "nom_arabe": "",
              "prenom_arabe": "",
              "adresse_arabe": "",
              "prenom_pere_arabe": "",
              "prenom_mere_arabe": "",
              "lieu_naissance_arabe": "",
              "email": "",
              "tele": null
      
            };

            localStorage.removeItem('citoyen');
            localStorage.removeItem('citoyenNoDB');
            localStorage.setItem('citoyenNoDB',JSON.stringify(this.citoyenNoDB));
      
          }
      
            //exec('python autoscan.py', $result);
            
            if(this.result){
              if(this.result.result_1=='front'){
                this.citoyenService.getCitoyenByCin(this.result.result_4)
                .subscribe(data => {
                  this.citoyen = data;
                  if(this.citoyen){
                    
                    localStorage.setItem('citoyen',JSON.stringify(this.citoyen));

                    this.router.navigate(['formCitoyen']);
                      this.result = this.results[1];
                      return;
    
                }
                });
                
                  this.citoyenNoDB.prenom = this.result.result_2;
                  this.citoyenNoDB.nom = this.result.result_3;
                  this.citoyenNoDB.cin = this.result.result_4;
                  this.citoyenNoDB.lieu_naissance = this.result.result_5;
                  this.citoyenNoDB.date_naissance = this.result.result_6;

                  localStorage.removeItem('citoyenNoDB');
                  localStorage.setItem('citoyenNoDB',JSON.stringify(this.citoyenNoDB));

                  if(JSON.parse(localStorage.getItem('citoyenNoDB')).adresse!=''){
                          this.router.navigate(['formCitoyen']);
                          this.result = this.results[1];
                          return;
                      }
                      this.second_scan = true;
                      this.router.navigate(['scanCin']);
                      this.result = this.results[1];
                      return;
              }
      
              if(this.result.result_1=='back'){
          
                  this.citoyenNoDB.prenom_pere = this.result.result_2;
                  this.citoyenNoDB.prenom_mere = this.result.result_3;
                  this.citoyenNoDB.n_etat_civil = this.result.result_4;
                  this.citoyenNoDB.adresse = this.result.result_5;

                  localStorage.removeItem('citoyenNoDB');
                  localStorage.setItem('citoyenNoDB',JSON.stringify(this.citoyenNoDB));

                  if(JSON.parse(localStorage.getItem('citoyenNoDB')).cin==''){
                          this.second_scan = true;
                          this.router.navigate(['scanCin']);
                          return;
                  }
                  if(!localStorage.getItem('citoyen')){
                    this.router.navigate(['formCitoyen']);
                    return;
                  }
                  this.router.navigate(['formCitoyen']);
                  return;
                  }
                }
                this.router.navigate(['findCitoyenByCin']);
                return;
      
              }




      }