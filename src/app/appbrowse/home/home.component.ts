import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageSources = [
    { url: 'http://localhost:4200/assets/images/home/home1.jpg', caption: 'The first slide'},
    { url: 'http://localhost:4200/assets/images/home/home2.jpg', caption: 'Apple TV'}
  ];

  height = '600px';

}
