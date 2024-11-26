import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section1Component } from './components/section-1/section-1.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';
import { Section4Component } from './components/section-4/section-4.component';
import { Section5Component } from './components/section-5/section-5.component';
import { Section6Component } from './components/section-6/section-6.component';
import { Section7Component } from './components/section-7/section-7.component';
import { Section8Component } from './components/section-8/section-8.component';
import { FooterComponent } from './components/footer/footer.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DonateComponent } from './components/common/donate/donate.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
