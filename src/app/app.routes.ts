import { Routes, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'home'}},
    { path: '**', redirectTo: '' }
];
