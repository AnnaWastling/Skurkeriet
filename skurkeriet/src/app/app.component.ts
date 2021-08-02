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
            label: 'start',
            link: './start',
            index: 0
        }, {
            label: 'historia',
            link: './historia',
            index: 1
        }, {
            label: 'skurkeriet',
            link: './skurkeriet',
            index: 2
        }, {
            label: 'folj-oss',
            link: './folj-oss',
            index: 3
        }, {
          label: 'tengil',
          link: './tengil',
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