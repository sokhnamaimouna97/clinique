import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { ChambreComponent } from './chambre/chambre.component';
import { PatientComponent } from './patient/patient.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FichepatientComponent } from './fichepatient/fichepatient.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AuthentificationService } from './authentification.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ChambreComponent,
    PatientComponent,
    RendezVousComponent,
    AuthentificationComponent,
    HeaderComponent,
    FooterComponent,
    FichepatientComponent,
    PaiementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
