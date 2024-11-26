import { Component } from '@angular/core';
import { DonateComponent } from '../common/donate/donate.component';
@Component({
  selector: 'app-section-2',
  imports: [DonateComponent],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
heading:string = 'Section 2 heading'
content:string = 'Here you can see childs and how we work on them'
}
