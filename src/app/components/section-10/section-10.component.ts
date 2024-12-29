import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-10',
  imports: [CommonModule],
  templateUrl: './section-10.component.html',
  styleUrl: './section-10.component.css'
})
export class Section10Component {
data = {
  name:"chetanya",
  address: "Agra, Uttarpradesh",
  phone:9568486263
}
}
