import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjouterRegionComponent } from './ajouter-region/ajouter-region.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsRegionComponent } from './details-region/details-region.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AjouterRegionComponent,
    MenuNavbarComponent,
    FooterComponent,
    AccueilComponent,
    DetailsRegionComponent,
    AdminDashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
