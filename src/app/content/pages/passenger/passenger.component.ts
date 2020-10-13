import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  driverData = {
      name: 'Kumar',
      picture: 'https://via.placeholder.com/150X150',
      vehicleModel: 'Bajaj Auto F16',
      fees: '0.00',
      plateno: 'NT-99-ARM',
      seats: 3
    }
    
  constructor() { }

  ngOnInit(): void {
  }

}
