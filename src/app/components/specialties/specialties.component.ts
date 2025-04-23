import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss'],
  imports: [NgFor],
})
export class SpecialtiesComponent {
  specialties = [
    'Fachadas de obra vista',
    'Restauración de ladrillo antiguo',
    'Diseño de patios y terrazas',
    'Soluciones decorativas en interiores',
    'Albañilería tradicional y acabados personalizados',
  ];
}
