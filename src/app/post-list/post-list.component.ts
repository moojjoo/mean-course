import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  /* posts = [
    {title: 'First Post', content: 'This is the first posts\'s content' },
    {title: 'Second Post', content: 'This is the second posts\'s content' },
    {title: 'Thrid Post', content: 'This is the thrid posts\'s content' }
  ]; */
  posts = [];
}