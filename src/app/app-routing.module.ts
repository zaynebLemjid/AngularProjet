import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradPublicComponent } from './composants/public/dashborad-public/dashborad-public.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { IsetCharguiaComponent } from './composants/public/iset-charguia/iset-charguia.component';
import { DashboradUserComponent } from './composants/front/dashborad-user/dashborad-user.component';
import { InfosComponent } from './composants/front/infos/infos.component';
import { ActivitesFrontComponent } from './composants/front/activites-front/activites-front.component';
import { DashboradAdminComponent } from './composants/back/dashborad-admin/dashborad-admin.component';
import { ActivitesBackComponent } from './composants/back/activites-back/activites-back.component';
import { ErrurComponent } from './composants/errur/errur.component';
import { LoginComponent } from './composants/login/login.component';
import { DepComponent } from './composants/public/dep/dep.component';
import { SelectedActiviteComponent } from './composants/front/selected-activite/selected-activite.component';
import { AjoutActiviteComponent } from './composants/back/ajout-activite/ajout-activite.component';

const routes: Routes = [
  {
    path:'',
    component:DashboradPublicComponent,
    children:[
      {path:'' , redirectTo:'departement',pathMatch:'full'},
      {path:'departement',title:'departement',component:DepComponent },
      {path:'formation' ,title:'formation' ,component:FormationComponent},
      {path:'iset' ,title:'iset' ,component:IsetCharguiaComponent},

    ]},
    {
      path:'front',title:'user',component:DashboradUserComponent,
      children:[
        {path:'',redirectTo:'infos',pathMatch:'full'},
        {path:'infos',title:'information',component:InfosComponent },
        {path:'activites',title:'activites',component:ActivitesFrontComponent},
        {path:'selected-activite/:id' ,title :'activite selecter',component:SelectedActiviteComponent}
      ],
},
  {
    path:'backEnd',title:'admin',component:DashboradAdminComponent,
    children:[
      {path:'',redirectTo:'activites' ,pathMatch:'full' },
      {path:'activitesBack', title:'activites',component:ActivitesBackComponent},
      {path:'ajoutActivite',title:'ajout',component:AjoutActiviteComponent}
    ]
  },
  {path:'login' ,title :'login' ,component:LoginComponent},
  {path:'**',title:'erreur',component:ErrurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
