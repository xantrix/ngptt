import { Component } from '@angular/core';
import { Project } from '../../shared/Project';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'ngptt-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
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

    selectedProject: Project;

    constructor() { }

    selectProject(project: Project) {
        this.selectedProject = project;
    }

    submitProjectForm(form: NgForm) {
        this.projects.push({
            id: Symbol(),
            code: Math.random().toString(36).replace('0.', '').substring(2, 9),
            done: false,
            tasks: [],
            ...form.value
        });
    }
}