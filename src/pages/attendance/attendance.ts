import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapsService } from '../../providers/maps.service';


declare var google;

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage implements OnInit {
  @ViewChild('previewmap') mapElement: ElementRef;
  map: any;
  mapa: any;
  staticMapImage: string;
  flag: boolean = true;

  constructor(private _navCtrl: NavController, private _mapsService: MapsService) {
   }

  ngOnInit() {
    this.flag = true;
    this._mapsService.getPlaces().subscribe(data => { this.mapa = data; });
  }

  findByCep(cep: string) {
    for(let m of this.mapa) {
      if(m.cep==cep)
        return m;
    }
  }

  loadMapOn(cep: string) {
    let placeElement = this.findByCep(cep);
    this.flag = true;

    if(placeElement==undefined){
      this._mapsService.postPlace(cep).subscribe(data => {this.mapa.push(data); this.drawMap(data);});
    } else {
      this.drawMap(placeElement);
    }
  }

  loadMapOff(cep: string) {
    let placeElement = this.findByCep(cep);
    
    if(placeElement==undefined){
      alert('Voce não possui conexão no momento');//this._mapsService.postPlace(cep).subscribe(data => {this.mapa.push(data); this.drawMap(data);});
    } else {
      this.staticMapImage = placeElement.staticMapURI;
    }
    this.flag = false;
  }
  
  drawMap(placeElement: any) {
    let marker1 = new google.maps.Marker({
      position:  new google.maps.LatLng(placeElement.pointsOfInterest[0].latitude, placeElement.pointsOfInterest[0].longitude),
      map: this.map,
      title: placeElement.pointsOfInterest[0].name
    });
    let marker2 = new google.maps.Marker({
      position:  new google.maps.LatLng(placeElement.pointsOfInterest[1].latitude, placeElement.pointsOfInterest[1].longitude),
      map: this.map,
      title: placeElement.pointsOfInterest[1].name
    });
    let marker3 = new google.maps.Marker({
      position:  new google.maps.LatLng(placeElement.pointsOfInterest[2].latitude, placeElement.pointsOfInterest[2].longitude),
      map: this.map,
      title: placeElement.pointsOfInterest[2].name
    });
    let marker4 = new google.maps.Marker({
      position:  new google.maps.LatLng(placeElement.pointsOfInterest[3].latitude, placeElement.pointsOfInterest[3].longitude),
      map: this.map,
      title: placeElement.pointsOfInterest[3].name
    });
    let marker5 = new google.maps.Marker({
      position:  new google.maps.LatLng(placeElement.pointsOfInterest[4].latitude, placeElement.pointsOfInterest[4].longitude),
      map: this.map,
      title: placeElement.pointsOfInterest[4].name
    });
    
    let mapOptions = {
      center: new google.maps.LatLng(placeElement.coordinates.latitude, placeElement.coordinates.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    marker1.setMap(this.map);
    marker2.setMap(this.map);
    marker3.setMap(this.map);
    marker4.setMap(this.map);
    marker5.setMap(this.map);
  }
}

// thanks https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
