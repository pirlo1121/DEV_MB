import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  standalone: true,
  imports: [],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component {
  @Input() imageUrl: string = ''; // URL de la imagen
  @Input() altText: string = ''; // Texto alternativo
  @Input() isAlt: boolean = false; // Si aplica la clase "alt"
}

