import { Component, OnInit } from '@angular/core';
import { CardData } from '../spelkort/spelkort';

@Component({
  selector: 'app-tengil',
  templateUrl: './tengil.component.html',
  styleUrls: ['./tengil.component.css']
})
export class TengilComponent implements OnInit {

  constructor() { }
  cardImages = [
    'pDGNBK9A0sk',
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
