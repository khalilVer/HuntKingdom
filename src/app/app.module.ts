import { HomeEventComponent } from './events-booking/home-event/home-event.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolComponent } from './tool/tool.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FavorisProductsComponent } from './favoris-products/favoris-products.component';
import { PanierProductsComponent } from './panier-products/panier-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { ShopCompComponent } from './shop-comp/shop-comp.component';
import { ListePanierCompComponent } from './liste-panier-comp/liste-panier-comp.component';
import { CommandeDetailsCompComponent } from './commande-details-comp/commande-details-comp.component';
import { EventeComponent } from './events-booking/evente/evente.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const ROUTES: Routes = [
    {path: 'shop', component: ShopCompComponent},
    {path: 'home', component: ToolComponent},
    {path: 'favoris', component: FavorisProductsComponent},
    {path: 'panier', component: PanierProductsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'buysell', component: BuySellComponent},
    {path: 'buy', component: BuyComponent},
    {path: 'sell', component: SellComponent},
    {path: 'mesCommandes', component: ListePanierCompComponent},
    {path: 'commandeDetails/:id', component: CommandeDetailsCompComponent},
    {path: 'event', component: HomeEventComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolComponent,
    FooterComponent,
    FavorisProductsComponent,
    PanierProductsComponent,
    LoginComponent,
    RegisterComponent,
    BuySellComponent,
    BuyComponent,
    SellComponent,
    HomeEventComponent,
    ShopCompComponent,
    ListePanierCompComponent,
    CommandeDetailsCompComponent,
    EventeComponent,
    
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
      HttpClientModule,
      Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
