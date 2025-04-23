import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    SpecialtiesComponent,
  ],
})
export class AppComponent {
  title = 'Ladrillo Visto';
}
