import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from './spelkort';

@Component({
  selector: 'app-spelkort',
  templateUrl: './spelkort.component.html',
  styleUrls: ['./spelkort.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class SpelkortComponent implements OnInit {
  
  @Input()
  data!: CardData;

  @Output() cardClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
