import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { proyectInterface, ProyectsService } from '../services/proyects.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  proyects: proyectInterface[];

  constructor( private proyectService: ProyectsService, private sanitizer: DomSanitizer) {
    this.proyects = [];
   }

  ngOnInit(): void {
    this.linkSanitizer();
  }

  linkSanitizer(){
    this.proyects = this.proyectService.proyects;
    for(let proyect of this.proyects){
      this.sanitizer.bypassSecurityTrustHtml(proyect.link);
    }
  }


}
