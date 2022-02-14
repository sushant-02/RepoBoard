import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {}

  hasRoute(route: string) {
    return this.router.url === route;
  }

  onClick() {
    this.githubService.setUserInfo(null);
    this.router.navigateByUrl('/');
  }
}
