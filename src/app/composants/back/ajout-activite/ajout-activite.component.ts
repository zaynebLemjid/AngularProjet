import { Component, OnInit } from '@angular/core';
import { Activite } from '../../classes/activite';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActiviteService } from '../../services/activite.service';
import { Category } from '../category';

@Component({
  selector: 'app-ajout-activite',
  templateUrl: './ajout-activite.component.html',
  styleUrls: ['./ajout-activite.component.css']
})
export class AjoutActiviteComponent implements OnInit {
  lesActivites:Activite[]=[];
  activite!:Activite;
  activiteForm!:FormGroup;
  lesCategories=Object.values(Category);
  constructor(
    private activiteService:ActiviteService,
    private fb:FormBuilder
  ){}

ngOnInit(): void {
    this.activiteService.getActivites().subscribe(
      data=>this.lesActivites=data
    );
    
    this.activiteForm=this.fb.nonNullable.group({
      id:[1,Validators.required],
      titre:['Angular Masterclass',[Validators.required,Validators.pattern('[A-Z][a-z]+ ([A-Z][a-z]+)+$')]],
      image:['angular.png',Validators.required],
      date:['10/12/2023',[Validators.required,Validators.pattern('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(2023|2024)$')]],
      confirmer:['false',Validators.pattern(/^(true|false)$/i)],
      categorie:[Category.AtelierPratique],
      infos: new FormGroup({
      lieu: new FormControl('Salle de formation',{nonNullable:true}),
      temps: new FormControl(15,{nonNullable:true}),
    }),
    });
}

get id(){
  return this.activiteForm.get('id');
}
get titre(){
  return  this.activiteForm.get('titre');
}
  get image(){
    return this.activiteForm.get('image');
  }
  get date(){
    return this.activiteForm.get('date');
  }
  get confirmer(){
    return this.activiteForm.get('confirmer');
  }
  get lieu(){
    return this.activiteForm.get('lieu');
  }

  onSubmit(){
    console.log(this.activiteForm.value);

    this.activiteService.addActivite(this.activiteForm.value).subscribe
    (data => this.lesActivites.push(data))
  }
  OnVider(){
    this.activiteForm.reset();
  }

}
