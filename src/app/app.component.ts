import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FizzBuzz';
  numbers = Array.apply(null, Array(101)).map( (_,i) =>i).slice(1)
}