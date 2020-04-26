import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'event-app',
  templateUrl:'./event-app.component.html'
})
export class EventAppComponent implements OnInit{
  event: any = {};
  constructor() {
    setTheme('bs3'); // or 'bs4'
  }

  ngOnInit(){
    this.event.name = "Angular";
    this.event.date = new Date();
    this.event.price = 100; 
    this.event.location = {
      address: "Ameerpet",
      city:  "Hyderabad",
      country: "India"
    }
    this.event.imageUrl = '/assets/images/angularconnect-shield.png'
  }
}