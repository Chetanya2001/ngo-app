import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-6',
  imports: [CommonModule],
  templateUrl: './section-6.component.html',
  styleUrl: './section-6.component.css'
})
export class Section6Component {
  stories = [
    {
      title: 'Here Is How We Reached Over 2 Million Children!',
      description:
        "Thank you for your unwavering support in transforming the lives of India's children. It's you who made it possible!",
      buttonText: 'Know More',
      image: 'assets/images/story1.jpg',
      bgColor: '#FFA500' // Orange background color
    },
    {
      title: 'Meet Our Change Makers Breaking Barriers!',
      description:
        'We share Nana’s story of resilience. Every effort counts to end period poverty.',
      buttonText: 'Know More',
      image: 'assets/images/story2.jpg',
      bgColor: '#28A745' // Green background color
    },
    {
      title: 'Health Camps for Rural Areas',
      description:
        'Over 500 families benefited from our healthcare camps in remote areas.',
      buttonText: 'Know More',
      image: 'assets/images/story3.jpg',
      bgColor: '#007BFF' // Blue background color
    }
  ];
}
