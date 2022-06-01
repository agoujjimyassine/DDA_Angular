import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TypesDemandesComponent } from './types-demandes/types-demandes.component';
import { ServiceTypeDemande } from 'src/service/service.typeDemande';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScanCinComponent } from './scan-cin/scan-cin.component';
import { ServiceScanCin } from 'src/service/service.scanCin';
import { ServiceCitoyen } from 'src/service/service.citoyen';
import { FormCitoyenComponent } from './form-citoyen/form-citoyen.component';
import { DatePipe } from '@angular/common';
import { FindCitoyenByCinComponent } from './find-citoyen-by-cin/find-citoyen-by-cin.component';
import { FinalCitoyenComponent } from './final-citoyen/final-citoyen.component';
import { PieceCitoyenComponent } from './piece-citoyen/piece-citoyen.component';
import { TypesDemandesResponsableComponent } from './types-demandes-responsable/types-demandes-responsable.component';
import { ListeDemandesComponent } from './liste-demandes/liste-demandes.component';

const appRoutes: Routes = [
  { path: 'typesDemandes', component: TypesDemandesComponent },
  { path: 'scanCin', component: ScanCinComponent },
  { path: 'formCitoyen', component: FormCitoyenComponent },
  { path: 'findCitoyenByCin', component: FindCitoyenByCinComponent },
  { path: 'pieceCitoyen', component: PieceCitoyenComponent },
  { path: 'finalCitoyen', component: FinalCitoyenComponent },
  { path: 'typesDemandesResponsable', component: TypesDemandesResponsableComponent },
  { path: 'listeDemandes', component: ListeDemandesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesDemandesComponent,
    ScanCinComponent,
    FormCitoyenComponent,
    FindCitoyenByCinComponent,
    FinalCitoyenComponent,
    PieceCitoyenComponent,
    TypesDemandesResponsableComponent,
    ListeDemandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceTypeDemande,
    ServiceCitoyen,
    ServiceScanCin,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
