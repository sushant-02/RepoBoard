import { Component, OnInit } from '@angular/core';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  username: string = '';
  isLoading: boolean = false;
  faUser = faUser;
  faArrowRight = faArrowRight;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.githubService
      .getUser(this.username)
      .subscribe((user) => this.handleSuccess(user.data));
  }

  handleSuccess(user: {}) {
    this.githubService.setUserInfo(user);
    this.router.navigateByUrl('/dashboard');
  }

  handleFinish() {
    this.username = '';
    this.isLoading = false;
  }
}
