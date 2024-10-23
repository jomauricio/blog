import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() image:string = ''
  @Input() description:string = ''
  @Input() tag:string = ''
}
