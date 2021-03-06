import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DatabaseDetailsComponent } from './database-details/database-details.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ImportDatabaseComponent } from './import-database/import-database.component';
import { EditDescriptionComponent } from './edit-description/edit-description.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'database-details/:id', component: DatabaseDetailsComponent },
  { path: 'table-details/:id', component: TableDetailsComponent },
  { path: 'view-details/:id', component: ViewDetailsComponent },
  { path: 'import-database', component: ImportDatabaseComponent },
  { path: 'edit-description/:id', component: EditDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
