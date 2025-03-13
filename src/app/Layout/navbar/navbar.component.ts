import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  ngOnInit(): void {
    this.checkScreenSize(); // Check screen size on load
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Disable scrolling when the menu is open
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  onMenuClick(){
    if(this.isMenuOpen){
      this.isMenuOpen=false;
    }
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (window.innerWidth > 1490) {
      this.isMenuOpen = false;
      document.body.classList.remove('no-scroll'); // Reset scrolling
    }
  }

  //================ Scrolling=================

  showScroll: boolean = false; // Controls visibility of the button
  scrollThreshold: number = 200; // Show button after scrolling down 200px

  // Scroll to Top
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.showScroll = scrollPosition > this.scrollThreshold;
  }
}


