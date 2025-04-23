import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor],
})
export class ProjectsComponent {
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
}
