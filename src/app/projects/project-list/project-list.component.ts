import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/Project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'ngptt-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    projects$: Observable<Project[]>;

    selectedProject: Project;
    searchedProject: Project;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projects$ = this.projectService.projects$;
    }

    selectProject(project: Project) {
        this.selectedProject = this.projectService.get(project.id);
    }

    addProject(project: Project) {
       this.projectService.add(project);
    }

    searchProject(project: Project) {
        this.searchedProject = project;
    }
}