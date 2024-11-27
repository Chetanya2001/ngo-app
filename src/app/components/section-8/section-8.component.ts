import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-8',
  imports: [CommonModule],
  templateUrl: './section-8.component.html',
  styleUrl: './section-8.component.css'
})
export class Section8Component {
  achievements = [
    {
      title: 'Employee of the Year',
      description: 'Awarded for outstanding performance in 2023.',
      image: 'assets/award1.jpg',
      link: '#'
    },
    {
      title: 'Best Startup',
      description: 'Recognized as the best startup of the year in the tech industry.',
      image: 'assets/award2.jpg',
      link: '#'
    },
    {
      title: 'Innovative Project',
      description: 'Awarded for a groundbreaking project that changed the industry.',
      image: 'assets/award3.jpg',
      link: '#'
    }
  ];
}
