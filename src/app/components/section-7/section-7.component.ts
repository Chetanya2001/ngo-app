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
      image: 'assets/client1.jpg',
      text: '"This service has completely changed the way we do business. Highly recommend!"',
      name: 'John Doe',
      role: 'CEO, Company X'
    },
    {
      image: 'assets/client2.jpg',
      text: '"A fantastic experience! Professional and reliable every time."',
      name: 'Jane Smith',
      role: 'Marketing Director, Company Y'
    },
    {
      image: 'assets/client3.jpg',
      text: '"We have seen a tremendous improvement in efficiency since working with this team."',
      name: 'Alice Johnson',
      role: 'Project Manager, Company Z'
    }
  ];
}
