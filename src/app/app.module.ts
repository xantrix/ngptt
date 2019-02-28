import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { ProjectInsertComponent } from './projects/project-insert/project-insert.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectSearchComponent } from './projects/project-search/project-search.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    ProjectListComponent,
    ProjectInsertComponent,
    ProjectDetailComponent,
    ProjectSearchComponent,
    DashboardComponent,
    NavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
