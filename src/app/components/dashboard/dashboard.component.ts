import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { UserInfo } from '../../../types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userInfo: UserInfo | null = null;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
    this.userInfo = this.githubService.getUserInfo();

    if (this.userInfo === null) {
      this.router.navigateByUrl('/');
      return;
    }
  }
}
