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
  pageDetails: object = {};
  currPage: number = 1;
  faSearch = faSearch;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    this.githubService
      .getAllRepos(this.username, 'desc', this.perPage, this.currPage)
      .subscribe(({ body: { data, ...pageDetails } }) => {
        this.repos = data;
        this.pageDetails = pageDetails;
        this.isReposLoading = false;
      });
  }

  onSearchTermChange(term: string) {
    if (!term) {
      this.isReposLoading = true;
      this.getRepos();
      return;
    }
    this.searchTerm = term;
  }

  onPerPageChange(value: number) {
    this.isReposLoading = true;
    this.perPage = value;
    this.currPage = 1;
    this.searchTerm = '';
    this.getRepos();
  }

  onCurrentPageChange(newPage: number) {
    this.isReposLoading = true;
    this.currPage = newPage;
    this.searchTerm = '';
    this.getRepos();
  }

  onSearchSubmit() {
    this.repos = this.repos.filter((repo) =>
      repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.isReposLoading = false;
  }
}
