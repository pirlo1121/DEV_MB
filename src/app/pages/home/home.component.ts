import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BannerHomeComponent } from '../../components/banner-home/banner-home.component';
import { Card2Component } from '../../components/card2/card2.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarComponent, BannerHomeComponent, Card2Component, AboutMeComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
