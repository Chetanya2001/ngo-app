import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-8',
  imports: [CommonModule],
  templateUrl: './section-8.component.html',
  styleUrl: './section-8.component.css'
})
export class Section8Component {
  awards = [
    {
      image: 'https://via.placeholder.com/100',
      title: 'Best NGO of the Year',
      year: '2022',
      description:
        'Recognized for exceptional contribution to rural education and sustainability.'
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Environmental Excellence Award',
      year: '2021',
      description:
        'Awarded for outstanding efforts in reforestation and wildlife preservation.'
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Social Impact Leader',
      year: '2020',
      description:
        'Celebrated for empowering women through vocational training programs.'
    }
  ];
}
