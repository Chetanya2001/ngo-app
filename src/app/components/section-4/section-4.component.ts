import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-4',
  imports: [CommonModule],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.css'
})
export class Section4Component {
  impactData = [
    { iconClass: 'education', title: 'Education', count: '2,600,000' },
    { iconClass: 'nature', title: 'Nature', count: '2,600,000' },
    { iconClass: 'husbandry', title: 'Animal Husbandry', count: '2,600,000' },
    { iconClass: 'vocational', title: 'Vocational Training', count: '2,600,000' }
  ];
}
