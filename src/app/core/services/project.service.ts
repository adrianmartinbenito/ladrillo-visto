import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private dataUrl = 'assets/projects/data.json';
  constructor(private http: HttpClient) {}
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl);
  }
  getProject(slug: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map((projects) => projects.find((p) => p.slug === slug))
    );
  }
}
