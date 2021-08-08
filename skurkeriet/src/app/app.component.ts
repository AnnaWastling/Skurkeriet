import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Skurkeriet';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
          {
            label: 'Start',
            link: './start',
            index: 0
        }, {
            label: 'Historia',
            link: './historia',
            index: 1
        }, {
            label: 'Skurkeriet',
            link: './skurkeriet',
            index: 2
        }, {
            label: 'Sociala medier',
            link: './folj-oss',
            index: 3
        }, {
          label: 'Tengil',
          link: './tengil',
          index: 4
        }, {
          label: 'Idolkort',
          link: './spelet',
          index: 4
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  AOS.init({duration: 1200});
}

}