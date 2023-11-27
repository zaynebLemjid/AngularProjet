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
originalActivites!: any[];
mot:string="";
date:string="";
constructor(private activiteService:ActiviteService,
  private router:Router){}


  ngOnInit(): void {
    this.activiteService.getActivites().subscribe((data) => {
      this.originalActivites = data;
      this.lesActivites = data;
    });
  }

  goToActivite(id: number): void {
    this.router.navigate(['/front/selected-activite', id]);
  }

  Recherche() {
    const searchTerm = this.mot.toLowerCase().trim();

    if (searchTerm !== '') {
      this.lesActivites = this.originalActivites.filter((activite) =>
        activite.titre.toLowerCase().includes(searchTerm)
      );
    } else {
      this.lesActivites = this.originalActivites;
    }
  }
  RechercheDate() {
    const searchTerm = this.date.toLowerCase().trim();

    if (searchTerm !== '') {
      this.lesActivites = this.originalActivites.filter((activite) =>
        activite.date.toLowerCase().includes(searchTerm)
      );
    } else {
      this.lesActivites = this.originalActivites;
    }
  }


}
