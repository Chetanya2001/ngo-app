import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section1Component } from './components/section-1/section-1.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';
import { Section4Component } from './components/section-4/section-4.component';
import { Section5Component } from './components/section-5/section-5.component';
import { Section6Component } from './components/section-6/section-6.component';
import { Section7Component } from './components/section-7/section-7.component';
import { Section8Component } from './components/section-8/section-8.component';
import { Section9Component } from './components/section-9/section-9.component';
import { Section10Component } from "./components/section-10/section-10.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Section1Component, Section2Component, Section3Component, Section4Component, Section5Component,
    Section6Component, Section7Component, Section8Component, FooterComponent,Section9Component, Section10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'ngo-app';
  
}
