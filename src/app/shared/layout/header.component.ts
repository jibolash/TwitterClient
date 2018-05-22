import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor( private router: Router,
    private userService: UserService 
  ) {}

  currentUser: User;
  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
