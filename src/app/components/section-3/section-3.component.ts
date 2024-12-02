import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DonateComponent } from "../common/donate/donate.component";

@Component({
  selector: 'app-section-3',
  imports: [CommonModule, DonateComponent],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.css'
})
export class Section3Component {
  whatWeDo = [
    {
      title: 'Education',
      icon: 'assets/icons/education.svg',
    },
    {
      title: 'Health & Nutrition',
      icon: 'assets/icons/health-nutrition.svg',
    },
    {
      title: 'Safety & Protection',
      icon: 'assets/icons/safety-protection.svg',
    },
    {
      title: 'Child Participation',
      icon: 'assets/icons/child-participation.svg',
    },
  ];
}
