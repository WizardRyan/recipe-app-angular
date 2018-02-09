import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormComponent } from './form/form.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RecipesComponent,
    FormComponent,
    MatCardModule
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
