import { Component } from '@angular/core';
import { DonateComponent } from '../common/donate/donate.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-1',
  imports: [DonateComponent, CommonModule],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css',
})
export class Section1Component {
  protected donationAmounts = [1000, 2000, 3000, 4000, 5000];
  protected selectedAmount = 0;

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }
}
