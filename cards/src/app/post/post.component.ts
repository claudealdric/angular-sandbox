import { Component, OnInit } from '@angular/core'

import { Post } from './post.interface'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  card: Post = {
    title: 'Neat Tree',
    username: '@nature',
    imgSrc: 'assets/tree.jpeg',
    content: 'Saw this awesome tree during my hike today',
  }

  constructor() {}

  ngOnInit(): void {}
}
