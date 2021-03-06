import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticateComponent } from './authenticate/authenticate.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    RestaurantsComponent,
    AuthenticateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }