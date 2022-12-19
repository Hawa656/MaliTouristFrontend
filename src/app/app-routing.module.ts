import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AjouterRegionComponent } from './ajouter-region/ajouter-region.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailsRegionComponent } from './details-region/details-region.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"/accueil",
    pathMatch:"full"
  },
  {path:'accueil', component:AccueilComponent},
  {path:'ajoutregion', component:AjouterRegionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'detailsRegion', component:DetailsRegionComponent},
  {path:'dashbord', component:AdminDashbordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
