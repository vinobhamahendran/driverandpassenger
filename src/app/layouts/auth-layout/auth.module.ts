import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgProgressModule} from 'ngx-progressbar';
import {AuthComponent} from './auth.component';
import {SharedModule} from '@gaxon/modules';
import {RouterModule} from '@angular/router';

import {PagesRoutingModule} from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PassengerLoginComponent } from './passenger-login/passenger-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { PassengerSignupComponent } from './passenger-signup/passenger-signup.component';
import { DriverSignupComponent } from './driver-signup/driver-signup.component';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgProgressModule,
    RouterModule,
    PagesRoutingModule,
  ],
  declarations: [   
    AuthComponent,
    LandingPageComponent,
    PassengerLoginComponent,
    DriverLoginComponent,
    PassengerSignupComponent,
    DriverSignupComponent,
    OtpComponent,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {
}
