import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRightMenuComponent } from './navbar-right-menu/navbar-right-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SidebarMenuClientComponent } from './sidebar-menu-client/sidebar-menu-client.component';
import { SidebarMenuComponent } from './sidebar-menu-admin/sidebar-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SidebarMenuComponent, SidebarMenuClientComponent, NavbarRightMenuComponent,
    UserMenuComponent, AccountMenuComponent, MainHeaderComponent, MainSidebarComponent,
    MainFooterComponent, SidebarMenuClientComponent],
  exports: [SidebarMenuComponent, SidebarMenuClientComponent, NavbarRightMenuComponent,
    MainHeaderComponent, MainSidebarComponent, MainFooterComponent],
  providers: []
})
export class SharedModule { }
