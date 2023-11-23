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

constructor(private activiteService:ActiviteService,
  private router:Router){}

ngOnInit(): void {
    this.activiteService.getActivites().subscribe((data)=>
    this.lesActivites=data
    )
}
goToActivite(id:number):void{
  this.router.navigate(['/activites',id]);
}



}
