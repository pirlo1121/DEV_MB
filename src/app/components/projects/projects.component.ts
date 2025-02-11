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
      link: 'http://nails-bit.s3-website-us-west-1.amazonaws.com/',
    },
    {
      title: 'Pets Found',
      description: 'Web para buscar mascotas perdidas en argentina',
      tech: ['Angular', 'NGRX', 'RXJS', 'boostrap'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/pet.png',
      link: 'http://09us.s3-website-us-east-1.amazonaws.com/',
    },
    {
      title: 'Send Poems',
      description: 'API en Node.js para enviar poemas todos los dias',
      tech: ['Node.js', 'Puppeteer', 'nodemailer'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/poem.jpg',
      link: 'https://github.com/pirlo1121/send-poems',
    },
    {
      title: 'Ahorcado Game',
      description: 'Juego de ahorcado clasico en javascript',
      tech: ['Javascript', 'DOM', 'Css'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/game.jpg',
      link: 'https://pirlo1121.github.io/ahorcado_game/',
    },
    {
      title: 'Api Movies',
      description: 'web para mostrar peliculas de una API',
      tech: ['Angular', 'Rxjs', 'observables'],
      image: 'https://files-portoflio.s3.us-east-1.amazonaws.com/movie.jpg',
      link: 'http://api-movies.s3-website-us-west-1.amazonaws.com/',
    },
  ];
}
