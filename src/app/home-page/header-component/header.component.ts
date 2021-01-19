import { Component, OnInit } from '@angular/core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faFacebook  = faFacebook;
  faInstagram = faInstagram;
  faLinkedin  = faLinkedin
  far = far
  constructor() { }

  ngOnInit(): void {
  }

}
