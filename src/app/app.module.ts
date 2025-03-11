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
import { CasestudyComponent } from './Pages/casestudy/casestudy.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ContactComponent } from './Pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    FeaturesComponent,
    HowitworksComponent,
    UsecaseComponent,
    CasestudyComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
