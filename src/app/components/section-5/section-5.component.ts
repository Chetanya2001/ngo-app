import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-section-5',
  imports: [CommonModule],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.css'
})
export class Section5Component {
  contributors = [
    {
      name: 'Nitin Garg',
      role: 'Frontend Developer, Lifestyle',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Priya Sharma',
      role: 'Backend Developer, HealthTech',
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Rahul Mehra',
      role: 'Full Stack Developer, EduTech',
      message: 'Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
      image: 'https://via.placeholder.com/100'
    }
  ];
}
