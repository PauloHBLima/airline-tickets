import { Component, OnInit } from '@angular/core';
import { faCompass,faLocation } from '@fortawesome/free-solid-svg-icons';
import { IButton } from 'src/app/interfaces/button.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCompass = faCompass;
  faLocation = faLocation;

  buttonSettings: IButton = {
    text: 'CADASTRE-SE',
    variant: 'cadastro',
  }

  buttonLogin: IButton = {
    text: 'LOGIN',
    variant: 'login',
  }
  ngOnInit() {
  }

}
