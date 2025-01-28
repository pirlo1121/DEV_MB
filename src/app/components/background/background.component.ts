import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  stars: Array<{ x: number, y: number, size: number, duration: number }> = [];

  ngOnInit(): void {
    this.createStars();
  }

  createStars() {
    const numberOfStars = 500;
    for (let i = 0; i < numberOfStars; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 2, // Tamaño aleatorio
        duration: Math.random() * 2 + 1 // Duración aleatoria para el parpadeo
      });
    }
  }
}
