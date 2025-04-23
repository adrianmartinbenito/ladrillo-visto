import { Component } from '@angular/core';
import { CommonModule,AsyncPipe, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, NgForOf, AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  projects$ = this.ps.getProjects();
  constructor(private ps: ProjectService) {}
}
