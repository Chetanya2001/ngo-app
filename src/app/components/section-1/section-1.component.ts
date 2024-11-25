import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {

  MainHeading: string = 'Welcome to Our Website';
  Subheading: string = 'Discover amazing things we can do for you!';
}
