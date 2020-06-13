import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolComponent } from './tool/tool.component';
import { FooterComponent } from './footer/footer.component';
import { AdminOfficeComponent } from './admin-office/admin-office.component';
import { AdminOfficeNavbarComponent } from './admin-office-navbar/admin-office-navbar.component';
import { AdminOfficeSidebarComponent } from './admin-office-sidebar/admin-office-sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolComponent,
    FooterComponent,
    AdminOfficeComponent,
    AdminOfficeNavbarComponent,
    AdminOfficeSidebarComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
