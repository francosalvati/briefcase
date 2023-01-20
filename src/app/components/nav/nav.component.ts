import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toPresentation() {
    document.getElementById('presentation')?.scrollIntoView({ behavior: "smooth" });
  }
  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: "smooth" });
  }
  toProyects() {
    document.getElementById('proyects')?.scrollIntoView({ behavior: "smooth" });
  }
  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior: "smooth"});
  }

}


