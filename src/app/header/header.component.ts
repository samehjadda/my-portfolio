import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('#navbar');

    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }
  }

}
