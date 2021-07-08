import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-spelet',
  templateUrl: './spelet.component.html',
  styleUrls: ['./spelet.component.css']
})
export class SpeletComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  openDialogLegionen() {
    this.dialog.open(legionen, {
    });
  }
  openDialogFamiljen() {
    this.dialog.open(familjen, {
    });
  }
  openDialogNphad() {
    this.dialog.open(nphadderiet, {
    });
  }
  openDialogKretsn() {
    this.dialog.open(kretsn, {
    });
  }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-legionen',
  templateUrl: 'legionen.html',
})
export class legionen {
  hide = true;
  password = "hej"
checkPassword(text: string){
  if(text == this.password){
    window.location.href='http://www.cnn.com/';
  }
}
  constructor() {}
}
@Component({
  selector: 'app-familjen',
  templateUrl: 'familjen.html',
})
export class familjen {
  hide = true;
  password = "hej"
  checkPassword(text: string){
    if(text == this.password){
      window.location.href='http://www.cnn.com/';
    }
  }
  constructor() {}
}

@Component({
  selector: 'app-n-phadderiet',
  templateUrl: 'n-phadderiet.html',
})
export class nphadderiet {
  hide = true;
  password = "hej"
  checkPassword(text: string){
    if(text == this.password){
      window.location.href='http://www.cnn.com/';}
  }
  constructor() {}
}

@Component({
  selector: 'app-kretsn',
  templateUrl: 'kretsn.html',
})
export class kretsn {
  hide = true;
  password = "hej"
  checkPassword(text: string){
    if(text == this.password){
      window.location.href='http://www.cnn.com/';
    }
  }
  constructor() {}
}