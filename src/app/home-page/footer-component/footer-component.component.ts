import { Component, OnInit } from '@angular/core';
import { faFacebookMessenger, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  faphone = faPhoneAlt
  famessage = faEnvelopeSquare
  faplus = faFacebookMessenger

  faFacebook  = faFacebook;
  faInstagram = faInstagram;
  faLinkedin  = faLinkedin
  constructor() { }

  ngOnInit(): void {
  }

}
