import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-7',
  imports: [CommonModule],
  templateUrl: './section-7.component.html',
  styleUrl: './section-7.component.css'
})
export class Section7Component {
  testimonials = [
    {
      image: 'https://via.placeholder.com/100',
      text: 'Thanks to this NGO, my children now have access to quality education. It has changed their future.',
      name: 'Priya Sharma',
      role: 'Beneficiary'
    },
    {
      image: 'https://via.placeholder.com/100',
      text: 'Their afforestation program is a fantastic initiative for sustainability. Highly recommend supporting them!',
      name: 'Rohit Singh',
      role: 'Environmentalist'
    },
    {
      image: 'https://via.placeholder.com/100',
      text: 'The vocational training programs are empowering women in rural areas. Proud to be associated!',
      name: 'Neha Verma',
      role: 'Social Activist'
    }
  ];
}
