import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faMapMarkerAlt,
  faUserFriends,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userInfo: any = null;
  faUserFriends = faUserFriends;
  faMapMarkerAlt = faMapMarkerAlt;
  faTwitter = faTwitter;
  faLink = faLink;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
    this.userInfo = this.githubService.getUserInfo();

    if (this.userInfo === null) {
      this.router.navigateByUrl('/');
    }
  }
}
