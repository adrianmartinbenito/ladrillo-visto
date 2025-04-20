import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { GalleryComponent } from './app/features/gallery/gallery.component';
import { ProjectDetailComponent } from './app/features/project-detail/project-detail.component';

// Definimos rutas:
const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' },
];

bootstrapApplication(GalleryComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
