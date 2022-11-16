import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';

import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  {
    path: 'person-details/:id',
    component: PersonDetailComponent
  },
  {
    path: 'create-person',
    component: CreatePersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
