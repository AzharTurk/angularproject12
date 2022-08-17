import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    RegistrationComponent,
    FaqComponent,
    ErrorPageComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
