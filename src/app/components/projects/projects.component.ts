import { NgFor, NgIf } from '@angular/common';
import Swiper from 'swiper';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor, NgIf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  mobile = false;
  projects = [
    {
      title: 'Fachada en ladrillo visto',
      description:
        'Rehabilitación de fachada en el centro histórico de Alcalá de Henares.',
      image: 'assets/images/01.webp',
    },
    {
      title: 'Patio rústico',
      description: 'Diseño y construcción de patio con acabados tradicionales.',
      image: 'assets/images/02.webp',
    },
    {
      title: 'Interior con detalles en ladrillo',
      description: 'Decoración interior con elementos en ladrillo visto.',
      image: 'assets/images/03.webp',
    },
  ];

  // Inicialización en ngAfterViewInit
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      // Configuración del slider
    });
  }
  ngOnInit() {
    if (window.screen.width < 768) {
      // 768px portrait
      this.mobile = true;
    }
  }
}
