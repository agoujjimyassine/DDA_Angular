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

const appRoutes: Routes = [
  { path: 'typesDemandes', component: TypesDemandesComponent },
  { path: 'scanCin', component: ScanCinComponent },
  { path: 'formCitoyen', component: FormCitoyenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesDemandesComponent,
    ScanCinComponent,
    FormCitoyenComponent
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
    ServiceScanCin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
