import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Beatty Nails',
      description: 'Ecommerce de venta de productos de manicure',
      tech: ['Angular', 'Express', 'TypeScript', 'MongoDb','Node.js'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/nails.jpg',
      link: 'https://acceto-t.vercel.app/',
    },
    {
      title: 'Pets Found',
      description: 'Web para buscar mascotas perdidas en argentina',
      tech: ['Angular', 'NGRX', 'RXJS', 'boostrap'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/pet.png',
      link: '#',
    },
    {
      title: 'Send Poems',
      description: 'API en Node.js para enviar poemas todos los dias',
      tech: ['Node.js', 'Puppeteer', 'nodemailer'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/poem.jpg',
      link: '#',
    },
    {
      title: 'Ahorcado Game',
      description: 'Juego de ahorcado clasico en javascript',
      tech: ['Javascript', 'DOM', 'Css'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/game.jpg',
      link: '',
    },
    {
      title: 'Api Movies',
      description: 'web para mostrar peliculas de una API',
      tech: ['Angular', 'Rxjs', 'observables'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/movie.jpg',
      link: '#',
    },
  ];
}
