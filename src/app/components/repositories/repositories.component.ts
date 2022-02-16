import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GithubService } from '../../services/github.service';
import { Repos } from '../../../types';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  @Input() username!: string;
  repos: Repos[] = [];
  searchTerm: string = '';
  perPage: number = 10;
  loaderArray: number[] = [0, 1, 2, 3, 4, 5];
  isReposLoading: boolean = true;
  faSearch = faSearch;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    this.githubService
      .getAllRepos(this.username, 'desc', this.perPage, 1)
      .subscribe((repos) => {
        this.repos = repos.data;
        this.isReposLoading = false;
      });
  }

  onPerPageChange(value: number) {
    this.isReposLoading = true;
    this.perPage = value;
    this.getRepos();
  }

  onSearchTermChange(term: string) {
    if (!term) {
      this.isReposLoading = true;
      this.getRepos();
      return;
    }
    this.searchTerm = term;
  }

  onSearchSubmit() {
    this.repos = this.repos.filter((repo) =>
      repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.isReposLoading = false;
  }
}
