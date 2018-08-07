import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { } from '@types/googlemaps';
import { Feedback } from './feedback';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  feedback: Feedback = new Feedback;
  submitted = false

  constructor() { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {

    var mapProp = {
      center: new google.maps.LatLng(10.347315,76.217018),
      zoom: 18,
      //mapTypeId: google.maps.MapTypeId.ROADMAP,
     

    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(10.347315,76.217018),
      animation: google.maps.Animation.DROP
  })

  }

  onClickSubmit(data) {
    //alert("Entered Email id : " + data.email);
    console.log("Entered Email id : " + data.email);
 }

 log(email){
   console.log(email)
 }

 onSubmit() { console.log(this.feedback.useremail);
  this.submitted = true;
}

 
}
