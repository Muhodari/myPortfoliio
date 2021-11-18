import { Component, OnInit } from "@angular/core";
import {MatToolbar} from "@angular/material/toolbar"

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})

export class HeaderComponent implements OnInit{
  title = 'myPortfolio';
 hamburger = document.querySelector(".hamburger");
 navMenu = document.querySelector(".nav-menu");


ngOnInit() {


}




}
