import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CardData } from '../spelkort/spelkort';


@Component({
  selector: 'app-skurkeriet',
  templateUrl: './skurkeriet.component.html',
  styleUrls: ['./skurkeriet.component.css']
})
export class SkurkerietComponent implements OnInit {
  cols : number | undefined;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
  cardImages = [
    'korten/jonte',
    'korten/alice',
    'korten/simon',
    'korten/tim',
    'korten/AliceM',
    'korten/patric',
    'korten/amanda',
    'korten/axel',
    'korten/ellen',
    'korten/anna',
    'korten/tengil',
  ];

cards: CardData[] = [];
flippedCards: CardData[] = [];

setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        imageIdBack: image,
        state: 'default'
      };
      this.cards.push({ ...cardData });
    });
}

cardClicked(index: number): void {
  const cardInfo = this.cards[index];

  if (cardInfo.state === 'default') {
    cardInfo.state = 'flipped';
    this.flippedCards.push(cardInfo);

  } else if (cardInfo.state === 'flipped') {
    cardInfo.state = 'default';
    this.flippedCards.pop();
  }
}

  ngOnInit(): void {
    this.setupCards();
  }
}
