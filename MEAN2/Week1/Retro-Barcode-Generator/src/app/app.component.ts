import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Retro Barcode Generator';
  colors: Array<String> = [
    "Aqua",
    "BurlyWood",
    "DarkBlue",
    "DarkRed",
    "Crimson",
    "Cornsilk",
    "Magenta",
    "Dark Orchid",
    "DodgerBlue",
    "DeepPink",
    "Thistle",
    "Teal",
    "SkyBlue",
  ];
  
  randomIdx() {
    return Math.floor(Math.random() * this.colors.length);
  } 
}
