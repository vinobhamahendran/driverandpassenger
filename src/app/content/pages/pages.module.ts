import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';
import { HomeComponent } from './home/home.component';
import { PassengerComponent } from './passenger/passenger.component';
import { DriverComponent } from './driver/driver.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';



const appsRoutes: Routes = [
  {
    path: 'passenger/home',
    component:PassengerComponent
  },
  {
    path: 'driver/home',
    component:DriverComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appsRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe30oyb0aY980X3GfHqY7jhqsBMBfI9Ek'
    }),
  ],
  declarations: [
  HomeComponent,
  PassengerComponent,
  DriverComponent,
  MapComponent]
})
export class PagesModule {
}
