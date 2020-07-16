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
import { EventComponent } from './event/event.component';
import { ShopCompComponent } from './shop-comp/shop-comp.component';
import { ListePanierCompComponent } from './liste-panier-comp/liste-panier-comp.component';
import { CommandeDetailsCompComponent } from './commande-details-comp/commande-details-comp.component';

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
    {path: 'event', component: EventComponent},
    {path: 'mesCommandes', component: ListePanierCompComponent},
    {path: 'commandeDetails/:id', component: CommandeDetailsCompComponent}


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
    EventComponent,
    ShopCompComponent,
    ListePanierCompComponent,
    CommandeDetailsCompComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
