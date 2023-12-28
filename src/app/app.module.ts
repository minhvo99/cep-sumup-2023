import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumupModule } from './components/sumup/sumup.module';
import { DashboardModule } from './components/dash-board/dash-board.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SumupModule,
    DashboardModule, // Import the DashboardModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
