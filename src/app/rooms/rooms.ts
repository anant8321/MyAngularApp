import { Component } from '@angular/core';
import { Room, RoomList } from './Room-data';
import { CommonModule } from '@angular/common';

// import { NgFor } from "../../../node_modules/@angular/common";

@Component({
  selector: 'ankum-rooms',
  imports: [ CommonModule],
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

  roomList : RoomList[] = [ 
    {
      roomNumber: 101,
      roomType: 'Deluxe Room', 
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1560448070-c6d2b2e3f1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023')
    },
    {
      roomNumber: 102,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 600,
      photos: 'https://images.unsplash.com/photo-1501117716987-c8e2bfbf0c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023')
    },
    {
      roomNumber: 103,
      roomType: 'Private Suite',  
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 700,
      photos: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023')
    }
  ]

}
