import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-navbar-right-menu',
  templateUrl: './navbar-right-menu.component.html',
  styleUrls: ['./navbar-right-menu.component.css']
})
export class NavbarRightMenuComponent implements OnInit {

  isAdmin: Boolean = true;
  constructor() { }

  ngOnInit() {
    switch (Cookie.get('idRole')) {
      case "USER":
        this.isAdmin = false;
        break;
      case "ADMIN":
        this.isAdmin = true;
        break;
    }
  }

}
