<<<<<<< HEAD
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 45f9064 (section 9 and 10 added)
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
<<<<<<< HEAD
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
=======
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
>>>>>>> 45f9064 (section 9 and 10 added)
  providers: [],
  bootstrap: [],
})
export class AppModule {}
