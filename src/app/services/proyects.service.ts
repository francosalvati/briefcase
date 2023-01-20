import { Injectable } from '@angular/core';

  export interface proyectInterface {
  title: string;
  link: string;
  epigraph: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProyectsService {
  public proyects: proyectInterface[];
  constructor() {
    this.proyects = [
    {
      title: 'continuara',
      link: '',
      epigraph: 'Faltan proyectos',
    },
    {
      title: 'continuara',
      link: '',
      epigraph: 'Faltan proyectos',
    },
    {
      title: 'continuara',
      link: '',
      epigraph: 'Faltan proyectos',
    },
    {
      title: 'continuara',
      link: '',
      epigraph: 'Faltan proyectos',
    },
    ]
  }
}
