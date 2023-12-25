import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventComponent } from './components/event/event.component';
import { FeaturesComponent } from './components/features/features.component';
import { TeamComponent } from './components/team/team.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ClientComponent } from './components/client/client.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    CounterComponent,
    EventComponent,
    FeaturesComponent,
    TeamComponent,
    GalleryComponent,
    PricingComponent,
    ClientComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
