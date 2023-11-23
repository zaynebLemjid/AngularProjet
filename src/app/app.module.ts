import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboradPublicComponent } from './composants/public/dashborad-public/dashborad-public.component';
import { DashboradUserComponent } from './composants/front/dashborad-user/dashborad-user.component';
import { DashboradAdminComponent } from './composants/back/dashborad-admin/dashborad-admin.component';
import { LoginComponent } from './composants/login/login.component';
import { MenuComponent } from './composants/public/menu/menu.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { IsetCharguiaComponent } from './composants/public/iset-charguia/iset-charguia.component';
import { DepComponent } from './composants/public/dep/dep.component';
import { ActivitesFrontComponent } from './composants/front/activites-front/activites-front.component';
import { InfosComponent } from './composants/front/infos/infos.component';
import { ActivitesBackComponent } from './composants/back/activites-back/activites-back.component';
import { ErrurComponent } from './composants/errur/errur.component';
import { MenuFrontComponent } from './composants/front/menu-front/menu-front.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedActiviteComponent } from './composants/front/selected-activite/selected-activite.component';
import { MenuBackComponent } from './composants/back/menu-back/menu-back.component';
import { AjoutActiviteComponent } from './composants/back/ajout-activite/ajout-activite.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboradPublicComponent,
    DashboradUserComponent,
    DashboradAdminComponent,
    LoginComponent,
    MenuComponent,
    FormationComponent,
    IsetCharguiaComponent,
    DepComponent,
    ActivitesFrontComponent,
    InfosComponent,
    ActivitesBackComponent,
    ErrurComponent,
    MenuFrontComponent,
    SelectedActiviteComponent,
    MenuBackComponent,
    AjoutActiviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
