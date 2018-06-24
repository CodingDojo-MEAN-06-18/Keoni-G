import { Component } from '@angular/core';
import { TimeZone } from './time-zone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'US Time Zone Display';
  time = new Date();
  sTimeZones: TimeZone[] = [
    new TimeZone("EST", 4),
    new TimeZone("CST", 3),
    new TimeZone("MST", 2),
    new TimeZone("PST", 1),
  ]
  dTimeZones: TimeZone[] = [
    new TimeZone("EDT", 3),
    new TimeZone("CDT", 2),
    new TimeZone("MDT", 1),
    new TimeZone("PDT", 0),
  ]
  onButtonClick(event, offset) {
    event.preventDefault();
    if (document.getElementById("active")){
      document.getElementById("active").removeAttribute("id");
    }
    event.target.setAttribute("id", "active");
    const now = new Date();
    this.time.setHours(now.getHours() + offset);
  }
  
  clear(event) {
    event.preventDefault();
    if (document.getElementById("active")){
      document.getElementById("active").removeAttribute("id");
    }
    this.time = new Date();
  }
}
