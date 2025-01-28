import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-home.component.html',
  styleUrl: './banner-home.component.css'
})
export class BannerHomeComponent {
  jsonObject = {
    Name: 'Maicol Bautista',
    Age: 23,
    Type: "Software Developer",
  };
}
