import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['item: item']
})
export class CardComponent implements OnInit {
  data = [
    {
      title: 'Merit Badge Counselor List',
      text: 'Check to see who is a Merit Badge Counselor for a particular Merit Badge in the Ward and/or Stake.',
      link: {
        text: 'Check Them Out'
      }
    },
    {
      imgSrc: './assets/images/camp-fire.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
