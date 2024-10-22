import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PopularPostComponent } from '../../components/popular-post/popular-post.component';
import { PostComponent } from '../../components/post/post.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PopularPostComponent, PostComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}