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
import { ShopProductsComponent } from './shop-products/shop-products.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FavorisProductsComponent } from './favoris-products/favoris-products.component';
import { PanierProductsComponent } from './panier-products/panier-products.component';
import { ShopProductsSidebarComponent } from './shop-products-sidebar/shop-products-sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

const ROUTES: Routes = [
    {path: 'shop', component: ShopProductsComponent},
    {path: 'home', component: ToolComponent},
    {path: 'favoris', component: FavorisProductsComponent},
    {path: 'panier', component: PanierProductsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'buysell', component: BuySellComponent},
    {path: 'buy', component: BuyComponent},
    {path: 'sell', component: SellComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolComponent,
    FooterComponent,
    ShopProductsComponent,
    FavorisProductsComponent,
    PanierProductsComponent,
    ShopProductsSidebarComponent,
    LoginComponent,
    RegisterComponent,
    BuySellComponent,
    BuyComponent,
    SellComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES),
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
