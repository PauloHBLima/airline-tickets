import { Component, OnInit } from '@angular/core';
import { faCompass,faLocation } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCompass = faCompass;
  faLocation = faLocation;

  ngOnInit() {
  }

}