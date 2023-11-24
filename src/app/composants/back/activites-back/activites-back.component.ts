import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../../services/activite.service';
import { Activite } from '../../classes/activite';

@Component({
  selector: 'app-activites-back',
  templateUrl: './activites-back.component.html',
  styleUrls: ['./activites-back.component.css']
})
export class ActivitesBackComponent  implements OnInit{
modifier: any|string;
  constructor(
    private http:HttpClient,
    private activiteService:ActiviteService
  ){}
  lesActivites:Activite[]=[];
  activitesAffiche:Activite[]=[];
    mot:string="";
    activiteResult:Activite[]=[];
ngOnInit() {
    return this.activiteService.getActivites().subscribe(data=>{
      this.lesActivites=data;
      this.activitesAffiche=data;
      
    })
}

onSupprime(id: number):void{
  this.activiteService.deleteActivite(id).subscribe(()=>{
    this.lesActivites=this.lesActivites.filter((activite)=>
    activite.id!=id
    )})
};

Recherche(){
  this.lesActivites=this.lesActivites.filter((activite)=>
  activite.titre.toLowerCase().includes(this.mot.toLowerCase()))
}

}
