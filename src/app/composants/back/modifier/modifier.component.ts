import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Activite } from '../../classes/activite';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ActiviteService } from '../../services/activite.service';
import { Category } from '../category';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
activiteFrom!:FormGroup;
activite!:Activite;
activiteId:number=0;
lesCategories=Object.values(Category);
constructor(
  private activatedRoute:ActivatedRoute,
  private activiteService:ActiviteService,
  private fb:FormBuilder
){}
  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    const idParam=params.get('id');
    this.activiteId=idParam !==null ? parseInt(idParam):0;
    this.activiteService.getActivitesById(this.activiteId).subscribe((data)=>{
      this.activite=data;
    });
   }) ;
   
   this.activiteFrom=this.fb.nonNullable.group({
    id:[1,Validators.required],
    titre:['Angular Masterclass',[Validators.required,Validators.pattern('[A-Z][a-z]+ ([A-Z][a-z]+)+$')]],
    image:['angular.png',Validators.required],
    date:['10/12/2023',[Validators.required,Validators.pattern('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(2023|2024)$')]],
    confirmer:['false',Validators.pattern(/^(true|false)$/i)],
    categorie:[Category.AtelierPratique],
    infos: new FormGroup({
    lieu: new FormControl('Salle de formation',{nonNullable:true}),
    temps: new FormControl(15,{nonNullable:true})
   })
  })
};
get id(){
  return this.activiteFrom.get('id');
}
get titre(){
  return  this.activiteFrom.get('titre');
}
  get image(){
    return this.activiteFrom.get('image');
  }
  get date(){
    return this.activiteFrom.get('date');
  }
  get confirmer(){
    return this.activiteFrom.get('confirmer');
  }
  get lieu(){
    return this.activiteFrom.get('lieu');
  }
  get temps(){
    return this.activiteFrom.get('temps');
  }

  onSubmit(){
    console.log(this.activiteFrom.value);

    this.activiteService.updateActivite(this.activiteFrom.value).subscribe
    (data => console.log(data))
  }

  onReset(){
    this.activiteFrom.reset();
  }




}