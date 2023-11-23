import { Component, Input, OnInit } from '@angular/core';
import { ActiviteService } from '../../services/activite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../../classes/activite';

@Component({
  selector: 'app-selected-activite',
  templateUrl: './selected-activite.component.html',
  styleUrls: ['./selected-activite.component.css']
})
export class SelectedActiviteComponent implements OnInit{
  
  constructor(
    private activiteService:ActiviteService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}/*
  ngOnInit(): void{
      const id:number=this.activatedRoute.snapshot.params['id'];
     this.activiteService.getActivitesById(id).subscribe((activite)=>(this.activite=activite));
  }*/
  @Input() activite!:Activite;
  ngOnInit(): void {
      const id=this.activatedRoute.snapshot.params['activiteId'];
      this.activiteService.getActivitesById(id).subscribe((data)=>this.activite=data);
  }

}
