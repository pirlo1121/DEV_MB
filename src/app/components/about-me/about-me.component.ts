import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  images: string[] = [
    'https://i.pinimg.com/736x/60/6a/bb/606abbae2a35b27b9e485e2e6a83ad93.jpg', // Imagen 1
    'https://i.pinimg.com/736x/54/1f/b8/541fb88941378fe7e617e160e984ef98.jpg', // Imagen 2
    'https://i.pinimg.com/736x/67/34/54/673454a756e4a9874342fa967cd054d4.jpg', // Imagen 3
    'https://i.pinimg.com/736x/3d/d5/fe/3dd5fe1c25552c7707a4c0a1e66edba3.jpg', // Imagen 4
    'https://i.pinimg.com/736x/60/6a/bb/606abbae2a35b27b9e485e2e6a83ad93.jpg', // Imagen 5
    'https://i.pinimg.com/736x/6d/21/ab/6d21abe45a2847846d7359380a9ae0d7.jpg', // Imagen 6
    'https://i.pinimg.com/736x/54/1f/b8/541fb88941378fe7e617e160e984ef98.jpg', // Imagen 7
    'https://i.pinimg.com/736x/1d/b3/8b/1db38b71577b27c6aa9fd044a71383c6.jpg', // Imagen 8
    'https://i.pinimg.com/736x/60/6a/bb/606abbae2a35b27b9e485e2e6a83ad93.jpg', // Imagen 9
    'https://i.pinimg.com/736x/67/34/54/673454a756e4a9874342fa967cd054d4.jpg'  // Imagen 10
  ];
}