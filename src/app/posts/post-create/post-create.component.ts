import {Component} from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredContent = '';
  enteredTitle = '';
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = this.enteredValue;
  }
}
