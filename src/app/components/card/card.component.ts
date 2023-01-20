import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { proyectInterface } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  itsSafe!: SafeUrl;
  private safePipe: SafePipe;

  @Input()  data!: proyectInterface;


  constructor( private domSanitizer: DomSanitizer){
     this.safePipe = new SafePipe(this.domSanitizer);
  }

  ngOnInit(): void {
    this.itsSafe = this.safePipe.transform(this.data.link, 'resourceUrl');
  }

}
