import { Component, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title : string ="Agm map";
  latitude:number;
  longitude:number;
  zoom:number;
  address:string;
  private geoCoder;
  constructor(private mapsAPILoader : MapsAPILoader,private ngZone : NgZone) { }

  ngOnInit(): void {
    this.latitude=13.003387;
    this.longitude=80.255043;
    this.zoom=15;   
  }

  private setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{
        this.latitude=position.coords.latitude;
        this.longitude=position.coords.longitude;
        this.zoom=15;

        console.log(this.latitude,this.longitude,this.zoom)
      });
    }
  }
}
