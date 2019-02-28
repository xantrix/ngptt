import { Injectable } from '@angular/core';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
      {
          id: Symbol(),
          code: 'NHusYJl',
          name: 'Progetto Alpha',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 1, 31),
          end: new Date(2019, 3, 15),
          priority: 'medium',
          done: true,
          tasks: []
      },
      {
          id: Symbol(),
          code: 'SJieYKl',
          name: 'Progetto Beta',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 3, 31),
          end: new Date(2019, 6, 15),
          priority: 'low',
          done: true,
          tasks: []
      },
      {
          id: Symbol(),
          code: 'POjeGBs',
          name: 'Progetto Gamma',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 8, 15),
          priority: 'low',
          done: false,
          tasks: []
      },
  ];

  getAll() {
    return this.projects;
  }

  add(project: Project) {
      this.projects.push(project);
  }

  get(id: Symbol): Project | null {
      return {...this.projects.find(project => project.id === id)};
  }

}
