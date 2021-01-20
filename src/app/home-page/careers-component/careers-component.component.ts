import { Component, OnInit } from '@angular/core';
import { faLink, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-careers-component',
  templateUrl: './careers-component.component.html',
  styleUrls: ['./careers-component.component.scss']
})
export class CareersComponentComponent implements OnInit {

  faLocationArrow = faMapMarkedAlt
  faLink = faLink

  constructor() { }

  ngOnInit(): void {
  }

}
