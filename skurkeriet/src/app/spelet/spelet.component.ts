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
    this.dialog.open(legionen, { panelClass: 'custom-dialog-container' 
    });
  }
  openDialogFamiljen() {
    this.dialog.open(familjen, { panelClass: 'custom-dialog-container'
    });
  }
  openDialogNphad() {
    this.dialog.open(nphadderiet, { panelClass: 'custom-dialog-container'
    });
  }
  openDialogKretsn() {
    this.dialog.open(kretsn, { panelClass: 'custom-dialog-container'
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