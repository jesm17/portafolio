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
    this.checkScreenSize()
  }
  title = 'Portafolio';
  cv = 'CV/cv.pdf'
  openToWork: boolean = true
  isMobile: boolean = false
  year = new Date().getFullYear()
  screenSize = 'desktop';
  isMenuOpen: boolean = false;
  showScrollTop: boolean = false;
  ngOnInit() {
    this.onCheckSize()
    this.checkScreenSize()
    this.onScroll();
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
      image: '../assets/projects/poke-api.webp',
      previeLink: 'https://poke-api-prod.vercel.app/',
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Aplicación web para mostrar la información de los pokemones de PokeApi.'
    },
    {
      repolink: 'https://github.com/jesm17/crud_node',
      name: 'Gestor de tareas con Node.js',
      image: '../assets/projects/server-node.webp',
      previeLink: undefined,
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Aplicación web para administrar tareas.'
    },
    {
      repolink: 'https://github.com/jesm17/Tareas_TypeScript_Server',
      name: 'Gestion de tareas con Node.js (API), Angular',
      image: '../assets/projects/crud node y angular.webp',
      previeLink: undefined,
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Aplicación web para administrar tareas integrada con API.'
    },
    {
      repolink: 'https://github.com/jesm17/store',
      name: 'E-commerce con Angular y fake store API',
      image: '../assets/projects/tienda.webp',
      previeLink: 'https://store-ochre-seven.vercel.app/',
      tecnologies: [{ name: 'Angular', icon: 'bx bxl-angular' }, { name: 'Bootstrap', icon: 'bx bxl-bootstrap' }],
      summary: 'Ecommerce con Angular y fake store API.'
    },
  ]

  onCheckSize() {
    this.isMobile = window.innerWidth < 768
  }

  private checkScreenSize() {
    const width = window.innerWidth;
    // Unificar breakpoint móvil para que el botón hamburguesa aparezca < 768px
    this.isMobile = width < 768;

    if (width < 576) {
      this.screenSize = 'mobile';
    } else if (width < 768) {
      this.screenSize = 'small-tablet';
    } else if (width < 992) {
      this.screenSize = 'tablet';
    } else if (width < 1200) {
      this.screenSize = 'desktop';
    } else {
      this.screenSize = 'large-desktop';
    }

    if (!this.isMobile && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTop = scrollTop > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
