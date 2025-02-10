import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  title: string = 'maicol@linux: ~ About Me...'

  text = 'Hola, soy Maicol Bautista';
  displayText = '';
  index = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    setTimeout(() => {
      if (this.isDeleting) {
        this.displayText = this.text.substring(0, this.index--);
      } else {
        this.displayText = this.text.substring(0, this.index++);
      }

      if (!this.isDeleting && this.index === this.text.length + 1) {
        setTimeout(() => (this.isDeleting = true), 1000); // Pausa antes de borrar
      } else if (this.isDeleting && this.index === 0) {
        this.isDeleting = false;
      }

      this.typeEffect();
    }, this.isDeleting ? 100 : 150); // Velocidad de tipeo/borrado
  }
}