import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  constructor(private route: ActivatedRoute, private ps: ProjectService) {}
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.ps.getProject(slug).subscribe((p) => (this.project = p));
  }
}
