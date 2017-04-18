import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {
  @ViewChild('previewmap') mapElement: ElementRef;
  map: any;

  constructor(private _navCtrl: NavController) { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-7.162053, -34.817248);
    
    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Hello World!'
    });
    
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    marker.setMap(this.map);
  }
}

// thanks https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
