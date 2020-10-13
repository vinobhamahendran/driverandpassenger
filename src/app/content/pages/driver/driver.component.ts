import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  rideDetails = [
    {
    pickup: 'MTH Road,Lenin Nagar, Ambathur, Chennai',
    dropoff: 'MAC Nagar, Kattupakkam, Chennai'
    
  },
  {
    pickup: 'MTH Road,Lenin Nagar, Ambathur, Chennai',
    dropoff: 'MAC Nagar, Kattupakkam, Chennai'
    
  },
  {
    pickup: 'MTH Road,Lenin Nagar, Ambathur, Chennai',
    dropoff: 'MAC Nagar, Kattupakkam, Chennai'
    
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
