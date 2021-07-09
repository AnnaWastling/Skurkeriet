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
    this.dialog.open(legionen, {   height: '400px',
    width: '600px',
    });
  }
  openDialogFamiljen() {
    this.dialog.open(familjen, {   height: '400px',
    width: '600px',
    });
  }
  openDialogNphad() {
    this.dialog.open(nphadderiet, {   height: '400px',
    width: '600px',
    });
  }
  openDialogKretsn() {
    this.dialog.open(kretsn, {  height: '400px',
    width: '600px',
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