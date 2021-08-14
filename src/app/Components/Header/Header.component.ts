import { Component } from "@angular/core";
import {MatToolbar} from "@angular/material/toolbar"

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})

export class HeaderComponent {
  title = 'myPortfolio';
}
