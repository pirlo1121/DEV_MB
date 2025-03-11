import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private lightThemeClass = 'light-theme';
  
  toggleTheme(): void {
    document.documentElement.classList.toggle(this.lightThemeClass);
    
    const isLight = document.documentElement.classList.contains(this.lightThemeClass);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add(this.lightThemeClass);
    }
  }

}
