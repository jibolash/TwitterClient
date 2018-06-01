import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, UserService } from '../core';

@Component({
  selector: 'discover-page',
  templateUrl: './discover.component.html'
})
export class DiscoverComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        if (authenticated) {
          this.setListTo('all');
        } else {
          this.setListTo('all');
        }
      }
    );
  }

  setListTo(type: string = 'all', filters: Object = {}) {
    this.listConfig = {type: type, filters: filters};
  }
}
