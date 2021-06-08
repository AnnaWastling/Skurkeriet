import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CardData } from '../spelkort/spelkort';
@Component({
  selector: 'app-folj-oss',
  templateUrl: './folj-oss.component.html',
  styleUrls: ['./folj-oss.component.css']
})
export class FoljOssComponent implements OnInit {

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
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
  ];

cards: CardData[] = [];
flippedCards: CardData[] = [];

setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
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
