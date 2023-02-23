import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BigCardComponent } from './big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SmallCardHComponent } from './small-card-h/small-card-h.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    MenuBarComponent,
    BigCardComponent,
    HomeComponent,
    SmallCardHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
