import { Injectable } from '@angular/core';
import { Project } from '../Project';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
      {
          id: Symbol(),
          code: 'NHusYJl',
          name: 'Progetto Alpha',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 1, 31),
          end: new Date(2019, 3, 15),
          priority: 'medium',
          done: true,
          tasks: [
            {
                'id': Symbol(),
                'name': 'Task di Prova',
                'start': new Date(2018, 2, 8),
                'duration': 10,
                'isBillable': true
            },
            {
                'id': Symbol(),
                'name': 'Task di Prova 2',
                'start': new Date(2018, 2, 15),
                'duration': 10,
                'isBillable': true
            }
        ]
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
  
  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  private projectSubject = new Subject<Project>();
  public projects$ = this.projectsSubject.asObservable();
  public project$ = this.projectSubject.asObservable();

  add(project: Project) {
      this.projects.push(project);
      return project;
  }

  get(code: string) {
      return this.projects$.pipe(
          map((projects: Project[]) => projects.find(project => project.code === code))
      );
  }

  update(project: Project) {
    const projectToUpdate: number = this.projects.map(project => project.code).indexOf(project.code);
    this.projects[projectToUpdate] = project;
    this.projectSubject.next({...this.projects[projectToUpdate]});
  }

}
