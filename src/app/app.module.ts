import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { AboutComponent } from './client/about/about.component';
import { ClientComponent } from './client/client/client.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FaqComponent } from './client/faq/faq.component';
import { FooterComponent } from './client/footer/footer.component';
import { ContactComponent } from './client/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutComponent,
    ClientComponent,
    NavbarComponent,
    FaqComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
