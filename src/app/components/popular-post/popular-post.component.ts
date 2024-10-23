import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-popular-post',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './popular-post.component.html',
  styleUrl: './popular-post.component.css'
})
export class PopularPostComponent {
  image:string = 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/meta-connect-2024.png?w=420&h=240&crop=1&quality=85'
  description:string = 'Meta Conect'
  tag:string = 'tecnologia'
}
