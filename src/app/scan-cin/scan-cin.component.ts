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

  constructor(private scanCinService: ServiceScanCin, private citoyenService: ServiceCitoyen, private router: Router) { }

  ngOnInit() {
  }

  scanCinn() {
    
    let result = ['front', 'AOUINA', '', 'EA237044', '', '01/11/2001', 'Image_Scan_Final/front20220517111206489689.jpg'];

    if(true){

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

    }

      //exec('python autoscan.py', $result);

      if(result!=null){

        if(result[0]=='front'){
          this.citoyenService.getCitoyenByCin(result[3])
          .subscribe(data => {
            localStorage.removeItem('citoyen');
            localStorage.setItem('citoyen',JSON.stringify(data));
          });
            localStorage.setItem('prenom',result[1]);
            localStorage.setItem('nom',result[2]);
            localStorage.setItem('cin',result[3]);
            localStorage.setItem('lieu_naissance',result[4]);
            localStorage.setItem('date_naissance',result[5]);
            localStorage.setItem('chemin_front',result[6]);
            if(localStorage.getItem('citoyen')){
                
                if(localStorage.getItem('adresse')!=''){
                  this.router.navigate(['formCitoyen']);
                  return;
                }
                //this.second_scan = true;
                this.router.navigate(['formCitoyen']);
                return;
            }

            if(localStorage.getItem('adresse')!=''){
                    //return view('wc5');
                    console.log(3);
                    return;
                }
                this.second_scan = true;
                this.router.navigate(['scanCin']);
                return;
        }

        if(result[0]=='back'){
            localStorage.setItem('prenom_pere',result[1]);
            localStorage.setItem('prenom_mere',result[2]);
            localStorage.setItem('n_etat_civil',result[3]);
            localStorage.setItem('adresse',result[4]);
            localStorage.setItem('chemin_back',result[5]);
            if(localStorage.getItem('cin')==''){
                    this.second_scan = true;
                    this.router.navigate(['scanCin']);
                    return;
            }
            if(!localStorage.getItem('citoyen')){
                //return view('wc5');
                console.log(6);
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

      console.log('After');
      this.scanCinService.scanCin()
      .subscribe(data => {
        console.log('Test'+data);
      });

    }




    




}
