import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
}

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css'],
})
export class RepoDetailComponent implements OnInit {
  @Input() repo!: Repos;
  tags!: string[];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getLanguages(this.repo.languages_url)
      .subscribe((langs) => {
        this.tags = Object.keys(langs.data);
      });
  }
}
