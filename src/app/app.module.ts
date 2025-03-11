import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { FeaturesComponent } from './Pages/features/features.component';
import { HowitworksComponent } from './Pages/howitworks/howitworks.component';
import { UsecaseComponent } from './Pages/usecase/usecase.component';


@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    FeaturesComponent,
    HowitworksComponent,
    UsecaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
