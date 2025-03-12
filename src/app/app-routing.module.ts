import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { BlankComponent } from './Layout/blank/blank.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { DocumentsComponent } from './Pages/documents/documents.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'who-we-are',
        component:AboutusComponent
      },
      {
        path:'overview',
        component:FeaturesComponent
      },
      {
        path:'how-it-works',
        component:HowitworksComponent
      },
      {
        path:'use-case',
        component:UsecaseComponent
      },
      {
        path:'casestudy-testimonial',
        component:CasestudyComponent
      },
      {
        path:'pricing',
        component:PricingComponent
      },
      {
        path:'faq',
        component:FaqComponent
      },
      {
        path:'contact-us',
        component:ContactComponent
      },
      {
        path:'download',
        component:DocumentsComponent
      },
    ],
  },
  {
    path: '**',
    component: BlankComponent,
    children: [
      {
        path:'**',
        component:ErrorPageComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
