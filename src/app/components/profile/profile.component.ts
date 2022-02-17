import { Component, Input, OnInit } from '@angular/core';
import {
  faMapMarkerAlt,
  faUserFriends,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { UserInfo } from '../../../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  faUserFriends = faUserFriends;
  faMapMarkerAlt = faMapMarkerAlt;
  faTwitter = faTwitter;
  faLink = faLink;

  @Input() user!: UserInfo;

  constructor() {}

  ngOnInit(): void {}
}
