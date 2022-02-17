import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() pageDetails!: any;
  @Input() currPage!: number;
  // @Input() isReposLoading!: boolean;
  @Output() onCurrentPageChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changePage(type: string) {
    switch (type) {
      case 'first':
        return this.onCurrentPageChange.emit(this.pageDetails.first.page);
      case 'prev':
        return this.onCurrentPageChange.emit(this.pageDetails.prev.page);
      case 'next':
        return this.onCurrentPageChange.emit(this.pageDetails.next.page);
      case 'last':
        return this.onCurrentPageChange.emit(this.pageDetails.last.page);
    }
  }
}
