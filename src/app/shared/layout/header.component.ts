import { Component, OnInit } from '@angular/core';

import { User } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
  ) {}

  currentUser: User;

  ngOnInit() {
  }
}
