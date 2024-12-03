import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-section-2',
  imports: [CommonModule],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
  fieldsOfWork = [
    { title: 'Education', imgSrc: 'https://via.placeholder.com/150', altText: 'Education' },
    { title: 'Nature', imgSrc: 'https://via.placeholder.com/150', altText: 'Nature' },
    { title: 'Animal Husbandry', imgSrc: 'https://via.placeholder.com/150', altText: 'Animal Husbandry' },
    { title: 'Vocational Training', imgSrc: 'https://via.placeholder.com/150', altText: 'Vocational Training' }
  ];

}
