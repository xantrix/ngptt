import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Project } from 'src/app/shared/Project';

@Component({
  selector: 'ngptt-project-insert',
  templateUrl: './project-insert.component.html',
  styles: [`
  .form-control.ng-invalid.ng-touched {
    border: 1px solid red;
  }
  `]
})
export class ProjectInsertComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();
  @Input() quickInsert = false;

  constructor() { }

  ngOnInit() {
  }

  submitProjectForm(form: NgForm) {
    this.submitted.emit({
        id: Symbol(),
        code: Math.random().toString(36).replace('0.', '').substring(2, 9),
        done: false,
        start: form.value.start ? form.value.start : new Date(),
        tasks: [],
        ...form.value
    });
  }

}
