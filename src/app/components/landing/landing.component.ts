import { Component, OnInit } from '@angular/core';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  username: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  faUser = faUser;
  faArrowRight = faArrowRight;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.githubService.getUser(this.username).subscribe(
      (user) => this.handleSuccess(user.data),
      (error) => this.handleError(error),
      () => this.handleFinish()
    );
  }

  handleSuccess(user: {}) {
    this.githubService.setUserInfo(user);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error: HttpErrorResponse) {
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

  handleFinish() {
    this.username = '';
    this.isLoading = false;
  }
}
