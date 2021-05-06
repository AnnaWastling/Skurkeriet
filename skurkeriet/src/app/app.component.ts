import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skurkeriet';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'historia',
            link: './historia',
            index: 0
        }, {
            label: 'skurkeriet',
            link: './skurkeriet',
            index: 1
        }, {
            label: 'folj-oss',
            link: './folj-oss',
            index: 2
        }, {
          label: 'tengil',
          link: './tengil',
          index: 3
        }, {
          label: 'spelet',
          link: './spelet',
          index: 4
        },  
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}