import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../gallery/models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, NgForOf],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  project$!: Observable<Project | undefined>;

  constructor(private route: ActivatedRoute, private ps: ProjectService) {
    const slug = this.route.snapshot.paramMap.get('slug') as string;
    this.project$ = this.ps.getProject(slug);
  }
}
