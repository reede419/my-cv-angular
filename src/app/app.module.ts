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
import { EducationsComponentComponent } from './home-page/educations-component/educations-component.component';
import { CareersComponentComponent } from './home-page/careers-component/careers-component.component';
import { MyProjectComponentComponent } from './home-page/my-project-component/my-project-component.component';
import { FooterComponentComponent } from './home-page/footer-component/footer-component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInformationComponent,
    SkilsComponentComponent,
    EducationsComponentComponent,
    CareersComponentComponent,
    MyProjectComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ScrollToModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(far, faFacebook, faLinkedin, faInstagram);
  }
}
