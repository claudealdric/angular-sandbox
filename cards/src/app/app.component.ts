import { Component } from '@angular/core'
import { Post } from './post/post.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'Saw this awesome tree during my hike today',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking1222',
      imageUrl: 'assets/biking.jpeg',
      content: 'Did some biking today',
    },
  ]
}
