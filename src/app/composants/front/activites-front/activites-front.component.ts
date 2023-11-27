import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../../services/activite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activites-front',
  templateUrl: './activites-front.component.html',
  styleUrls: ['./activites-front.component.css']
})
export class ActivitesFrontComponent implements OnInit {
lesActivites!:any[];

mot:string="";
date:string="";
constructor(private activiteService:ActiviteService,
  private router:Router){}

ngOnInit(): void {
    this.activiteService.getActivites().subscribe((data)=>
    this.lesActivites=data
    )
}
goToActivite(id:number):void{
  this.router.navigate(['/front/selected-activite', id]);
}

Recherche(){
  this.lesActivites=this.lesActivites.filter((activite)=>
  activite.titre.toLowerCase().includes(this.mot.toLowerCase()))
}
RechercheDate() {
  this.lesActivites = this.lesActivites.filter((activite) =>
    activite.date.toLowerCase().includes(this.date.toLowerCase())
  );
}




}
