import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Components
import { CreateEditPetComponent } from './components/create-edit-pet/create-edit-pet.component';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { ShowPetComponent } from './components/show-pet/show-pet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditPetComponent,
    ListPetComponent,
    ShowPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
