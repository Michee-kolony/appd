import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  navbarTransparent = true;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Change navbar background when scrolling
    this.navbarTransparent = window.scrollY < 50;
    const nav = document.querySelector('nav');
    if (nav) {
      if (this.navbarTransparent) {
        nav.classList.remove('bg-blue-900', 'shadow-lg');
        nav.classList.add('bg-transparent');
      } else {
        nav.classList.add('bg-blue-900/90', 'shadow-lg');
        nav.classList.remove('bg-transparent');
      }
    }
  }
}
