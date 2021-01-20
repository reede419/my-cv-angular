import { Component, OnInit } from '@angular/core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ViewportScroller } from '@angular/common';


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

  isActive = false
  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  toAnchor(anchor: string) {
    this.isActive = true
      this.viewportScroller.scrollToAnchor(anchor)
  }

}
