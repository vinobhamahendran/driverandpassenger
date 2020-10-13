import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PassengerLoginComponent } from './passenger-login/passenger-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverSignupComponent } from './driver-signup/driver-signup.component';
import { PassengerSignupComponent } from './passenger-signup/passenger-signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path:'',
        component:LandingPageComponent
      },
      {
        path: 'passenger/login',
        component: PassengerLoginComponent
      },
      {
        path: 'driver/login',
        component:DriverLoginComponent
      },
      {
        path: 'driver/signup',
        component:DriverSignupComponent
      },
      {
        path:'passenger/signup',
        component:PassengerSignupComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
