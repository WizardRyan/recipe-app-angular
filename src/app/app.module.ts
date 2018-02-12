import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormComponent } from './form/form.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatFormField, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule,
  MatToolbarModule
} from '@angular/material';
import {CoreModule} from './core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: 'welcome', component: WelcomeComponent },
  {path: 'add', component: FormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RecipesComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatOptionModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
