import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { CreatePersonComponent } from './create-person/create-person.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CounterCardComponent,
    PersonCardComponent,
    PersonDetailComponent,
    CreatePersonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
