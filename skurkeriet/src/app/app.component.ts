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
  constructor() {
}
ngOnInit(): void {
  AOS.init({duration: 800});
}

}