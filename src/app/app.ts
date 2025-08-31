import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ankum-root',
  imports: [RouterOutlet, Rooms, CommonModule],
  templateUrl: './app.html',
  // template: `<h1>Hello World from inline Template</h1>
  // <p> Angular is awesome</p>`,
  styleUrl: './app.scss',
  // styles: ['h1{color: red}']
})
export class App {
  protected readonly title = signal('FirstApp');


  role = 'Admin'; // Admin, User, Guest
}
