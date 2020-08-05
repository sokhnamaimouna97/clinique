import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { EmployeComponent } from './employe/employe.component';
import { ChambreComponent } from './chambre/chambre.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './header/header.component';
import { FichepatientComponent } from './fichepatient/fichepatient.component';



const routes: Routes = [
  {path : 'authentification' , component: AuthentificationComponent},
  {path : 'patient' , component: PatientComponent},
  {path : 'fichepatient' , component: FichepatientComponent},
  {path : 'employe' , component: EmployeComponent},
  {path : 'chambre' , component: ChambreComponent},
  {path : 'rendez_vous' , component: RendezVousComponent},
  {path : 'paiement' , component: PaiementComponent},
  {path:'' , redirectTo:'/authentification' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
