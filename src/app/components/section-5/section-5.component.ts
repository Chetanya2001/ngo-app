import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-section-5',
  imports: [CommonModule],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.css'
})
export class Section5Component {
  Stats = [
    {
      title: 'Education',
      icon: 'assets/icons/education.svg',
      stat: '91%',
      description: 'Global primary school enrollment rate as of 2023.',
    },
    {
      title: 'Health & Nutrition',
      icon: 'assets/icons/health-nutrition.svg',
      stat: '45%',
      description: 'Children under five receiving essential health services worldwide.',
    },
    {
      title: 'Safety & Protection',
      icon: 'assets/icons/safety-protection.svg',
      stat: '1 in 3',
      description: 'Children globally experience some form of violence each year.',
    },
    {
      title: 'Child Participation',
      icon: 'assets/icons/child-participation.svg',
      stat: '60%',
      description: 'Youth aged 15-24 engaged in social, civic, or community activities.',
    },
  ];
}
