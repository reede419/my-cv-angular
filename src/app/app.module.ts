import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header-component/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BasicInformationComponent } from './home-page/basic-information/basic-information.component';
import { SkilsComponentComponent } from './home-page/skils-component/skils-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInformationComponent,
    SkilsComponentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(far, faFacebook, faLinkedin, faInstagram);
  }
}
