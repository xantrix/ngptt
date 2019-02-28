import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { ProjectInsertComponent } from './projects/project-insert/project-insert.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    ProjectListComponent,
    ProjectInsertComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
