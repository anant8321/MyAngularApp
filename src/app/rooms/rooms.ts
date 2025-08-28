import { Component } from '@angular/core';
import { Room } from './Room-data';
import { NgIf } from "../../../node_modules/@angular/common";

@Component({
  selector: 'ankum-rooms',
  imports: [NgIf],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {
  hotelName = "Hilton Hotel"
  number_of_hotels = 10

  hideRooms = false
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  rooms_var : Room = {
    totalRooms : 20,
    availableRooms: 12,
    bookedRooms : 5
  }
}
