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
      title: 'Empowering Education in Rural Areas',
      text: 'We recently launched an initiative to bring quality education to remote villages. Over 200 children have now joined school for the first time. Together, we’re breaking barriers and building dreams!',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Environmental Sustainability Programs',
      text: 'Our recent afforestation drive planted over 10,000 trees across arid regions, providing both shade and oxygen. Let\'s continue protecting our planet for future generations!',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Vocational Training for Women',
      text: 'Through our vocational programs, over 500 women are now financially independent, skilled in tailoring, handicrafts, and more. Empower women, empower the world!',
      image: 'https://via.placeholder.com/600x400',
    },
  ];
}
