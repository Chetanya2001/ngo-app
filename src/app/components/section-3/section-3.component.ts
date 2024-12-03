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
  whatWeDoItems = [
    {
      title: 'Child Education',
      imgSrc: 'https://via.placeholder.com/400x200',
      altText: 'Child Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt commodo lacus.'
    },
    {
      title: 'Healthcare Support',
      imgSrc: 'https://via.placeholder.com/400x200',
      altText: 'Healthcare Support',
      description: 'Providing essential healthcare services to underserved communities for a better future.'
    },
    {
      title: 'Women Empowerment',
      imgSrc: 'https://via.placeholder.com/400x200',
      altText: 'Women Empowerment',
      description: 'Empowering women with vocational training and educational programs to build independence.'
    }
  ];
}
