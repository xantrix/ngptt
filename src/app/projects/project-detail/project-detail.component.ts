import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Project } from 'src/app/shared/Project';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: [`
  .form-control.ng-invalid.ng-touched {
      border: 1px solid red;
  }
  `]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  projectSubscription: Subscription;
  @Input() project: Project;
  editProjectForm: FormGroup;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectSubscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(params.get('code'))),
    ).subscribe((project) => {
      this.project = project;
      this.initForm();
    })
  }

  initForm() {
    this.editProjectForm = new FormGroup({
      'code': new FormControl(this.project.code, Validators.required),
      'name': new FormControl(this.project.name, Validators.required),
      'description': new FormControl(this.project.description),
      'priority': new FormControl(this.project.priority, Validators.required),
      'start': new FormControl(this.project.start),
      'end': new FormControl(this.project.end)
    });
  }

  submitProjectForm() {
  }

  ngOnDestroy() {
    this.projectSubscription.unsubscribe();
  }
}
