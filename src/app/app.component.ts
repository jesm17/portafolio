import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.onCheckSize()
  }
  title = 'Portafolio';
  cv = 'CV/cv.pdf'
  openToWork: boolean = true
  isMobile: boolean = false
  year = new Date().getFullYear()
  ngOnInit() {
    this.onCheckSize()
  }
  listIconsTecnologies = [
    { icon: 'bx bxl-nodejs', name: 'Node.js' },
    { icon: 'bx bxl-angular', name: 'Angular' },
    { icon: 'bx bxl-javascript', name: 'Javascript' },
    { icon: 'bx bxl-typescript', name: 'Typescript' },
    { icon: 'bx bxl-html5', name: 'HTML5' },
    { icon: 'bx bxl-css3', name: 'CSS3' },
    { icon: 'bx bxl-git', name: 'Git' },
  ]

  listTextNav: { text: string, link?: string, icon?: string }[] = [
    { text: 'Sobre mi', link: '#profile', icon: 'bx bxs-user' },
    { text: 'Habilidades', link: '#tecnologies', icon: 'bx bxs-zap' },
    { text: 'Proyectos', link: '#project', icon: 'bx bxs-folder-open' },
    // { text: 'Contacto', link: '#contact', icon: 'bx bxs-envelope' },
  ]

  listProjects: { repolink: string, image: string, name: string, previeLink?: string, tecnologies?: { name: string, icon: string }[], summary?: string }[] = [
    {
      repolink: 'https://github.com/jesm17/pokeApi-prod',
      name: 'Pokedex con Angular y PokeApi',
      image: '../assets/projects/poke-api.png',
      previeLink: 'https://poke-api-prod.vercel.app/',
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Aplicación web para mostrar la información de los pokemones de PokeApi.'
    },
    {
      repolink: 'https://github.com/jesm17/crud_node',
      name: 'Gestor de tareas con Node.js',
      image: '../assets/projects/server-node.png',
      previeLink: undefined,
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Aplicación web para administrar tareas.'
    },
    {
      repolink: 'https://github.com/jesm17/Tareas_TypeScript_Server',
      name: 'Gestion de tareas con Node.js (API), Angular',
      image: '../assets/projects/crud node y angular.png',
      previeLink: undefined,
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Aplicación web para administrar tareas integrada con API.'
    },
    {
      repolink: 'https://github.com/jesm17/store',
      name: 'E-commerce con Angular y fake store API',
      image: '../assets/projects/tienda.png',
      previeLink: 'https://store-ochre-seven.vercel.app/',
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Ecommerce con Angular y fake store API.'
    },
  ]

  onCheckSize() {
    this.isMobile = window.innerWidth < 768
  }
}
