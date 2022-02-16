import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GithubService } from '../../services/github.service';

interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
}

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit, OnChanges {
  @Input() username!: string;
  repos: Repos[] = [];
  perPage: number = 10;
  faSearch = faSearch;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  getRepos() {
    this.githubService
      .getAllRepos(this.username, 'desc', this.perPage, 1)
      .subscribe((repos) => {
        this.repos = repos.data;
        console.log(this.repos);
      });
  }

  onPerPageChange(value: number) {
    this.perPage = value;
    this.getRepos();
  }
}
