import { Component, OnInit } from '@angular/core';
import {  AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { EventService } from '../../service/event.service';
import { Event } from 'src/app/Model/event';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

  export class MapComponent implements AfterViewInit {
    map;
    events : any = [];
  

    lat:String= '';
        lng: String= ' ';

    // retrieve from https://gist.github.com/ThomasG77/61fa02b35abf4b971390
    smallIcon = new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      shadowSize:  [41, 41]
    });
  
    constructor(private eventService: EventService) { }
  
    ngAfterViewInit(): void {
      this.createMap();
    }

    loadEvents() {
      return this.eventService.getEvents().subscribe((data: Event) => {
        console.log('hiiiiiii',data.nom);

          this.lat=data.latitude;
          this.lng=data.langitude 
          


      });
  }
  
    createMap() {
      const parcThabor = {
        lat: 38.9637,
        lng: 35.2433	,
      };
  
      const zoomLevel = 12;
  
      this.map = L.map('map', {
        center: [parcThabor.lat, parcThabor.lng],
        zoom: zoomLevel
      });
  
      const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 12,
        maxZoom: 17,
      });
  
      mainLayer.addTo(this.map);
      const descriptionWikipedia = `
        Le parc du Thabor, situé à Rennes à proximité du centre-ville,
        est un parc public aménagé sur plus de dix hectares dont la particularité est de mêler un jardin à la française,
        un jardin à l’anglaise et un important jardin botanique.`;
      const popupOptions = {
        coords: parcThabor,
        text: descriptionWikipedia,
        open: true
      };
      this.addMarker(popupOptions);
    }
  
    addMarker({coords, text, open}) {
      const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
      if (open) {
        marker.addTo(this.map).bindPopup(text).openPopup();
      } else {
        marker.addTo(this.map).bindPopup(text);
      }
    }

}
