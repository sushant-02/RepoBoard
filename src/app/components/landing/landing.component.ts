import { Component, OnInit } from '@angular/core';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faUser = faUser
  faArrowRight = faArrowRight

  constructor() { }

  ngOnInit(): void {
  }

}
