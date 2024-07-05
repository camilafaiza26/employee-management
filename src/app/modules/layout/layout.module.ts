import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarSubmenuComponent } from './components/sidebar/sidebar-submenu/sidebar-submenu.component';
import { NavbarMobileComponent } from './components/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarMobileSubmenuComponent } from './components/navbar/navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import { ProfileMenuComponent } from './components/navbar/profile-menu/profile-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarMenuComponent } from './components/navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileMenuComponent } from './components/navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarSubmenuComponent } from './components/navbar/navbar-submenu/navbar-submenu.component';
@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarSubmenuComponent,
    NavbarMobileComponent,
    NavbarMobileSubmenuComponent,
    ProfileMenuComponent,
    NavbarMobileMenuComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    NavbarMobileMenuComponent,
    NavbarMobileSubmenuComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class LayoutModule {}
