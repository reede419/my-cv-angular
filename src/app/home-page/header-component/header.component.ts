import { Component, HostListener, OnInit } from '@angular/core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';


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
  fixedMenu = false
  activeP = false
  activeE = false
  activeC = false
  activeS = false
  activePr = false

  isClick = false
  isChecked = false

  constructor(
    private scrollToService: ScrollToService
  ) {  }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    if( window.pageYOffset >= 500 ) {
      this.fixedMenu = true

      if ( window.pageYOffset >= 501 &&  window.pageYOffset <= 650 ) {
        this.activeP = true
      } else {
        this.activeP = false
      }

      if (window.pageYOffset >= 651 &&  window.pageYOffset <= 1110) {
        this.activeE = true
      } else {
        this.activeE = false
      }

      if (window.pageYOffset >= 1111 &&  window.pageYOffset <= 1590) {
        this.activeC = true
      } else {
        this.activeC = false
      }

      if (window.pageYOffset >= 1591 &&  window.pageYOffset <= 1900) {
        this.activeS = true
      } else {
        this.activeS = false
      }

      if (window.pageYOffset >= 1900) {
        this.activePr = true
      } else {
        this.activePr = false
      }

    } else {
      this.fixedMenu = false
    }

 }
  toAnchor(anchor: string) {
    this.isChecked = false
    this.isClick = false
    const config: ScrollToConfigOptions = {
      target: anchor,
      duration: 2000,
      easing: 'easeInOutQuart',
      offset: -100
    };

    this.scrollToService.scrollTo(config);

  }

  mobileNav() {
    this.isChecked = !this.isChecked
    this.isClick = !this.isClick
  }


}
