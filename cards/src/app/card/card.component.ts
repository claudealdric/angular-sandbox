import { Component, OnInit } from '@angular/core'

import { Card } from './card.interface'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  card: Card = {
    title: 'Neat Tree',
    subtitle: '@nature',
    imgSrc: 'assets/tree.jpeg',
    content: 'Saw this awesome tree during my hike today',
  }

  constructor() {}

  ngOnInit(): void {}
}
