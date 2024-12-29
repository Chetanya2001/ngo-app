import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section1Component } from './components/section-1/section-1.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

const routes: Routes = [
  { path: '', component: NavbarComponent }, // Default route
  { path: 'section1', component: Section1Component }, // Section1 route
  { path: 'payment-page', component: PaymentPageComponent }, // Section1 route
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Catch-all route (redirects to the default route)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
