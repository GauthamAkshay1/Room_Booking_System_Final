import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room.model';
import { environment } from '../environments/environments';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddRoomComponent } from '../add-room/add-room.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  roomTypes = ['Single Bed', 'Double Bed', 'Family Type'];
  selectedRoomType = '';
  locations = ['Tambaram', 'Navalur', 'Shozhlinganallur'];

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  openAddRoomModal() {
    const modalRef = this.modalService.open(AddRoomComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.loadRooms(); // Reload rooms after adding
      }
    }).catch((error) => {
      console.log('Dismissed:', error);
    });
  }

  loadRooms(): void {
    this.http.get<Room[]>(`${environment.apiUrl}/api/Room/GetRooms`).subscribe(
      (data: Room[]) => {
        this.rooms = data;
        this.filterRooms(); // Ensure the filter is applied after loading
      },
      error => console.error('Error loading rooms', error)
    );
  }

  filterRooms(): void {
    this.triggerCardAnimation();
    if (this.selectedRoomType) {
      this.filteredRooms = this.rooms.filter(room => room.roomType === this.selectedRoomType);
    } else {
      this.filteredRooms = [...this.rooms];
    }
  }

  triggerCardAnimation() {
    setTimeout(() => {
      const cards = document.querySelectorAll('.room-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate');
        }, index * 100); // Staggered animation
      });
    }, 0);
  }
  deleteRoom(id: number): void {
    if (window.confirm("Are you sure you want to delete this room?")) {
      this.http.delete<void>(`${environment.apiUrl}/api/Room/DeleteRoom/${id}`).subscribe(
        () => this.loadRooms(),
        error => console.error('Error deleting room', error)
      );
    }
  }

  editRoom(room: Room): void {
    room.editMode = true;
  }

  cancelEdit(room: Room): void {
    room.editMode = false;
    this.loadRooms(); // Reload rooms to reset any unsaved changes
  }

  updateRoom(room: Room): void {
    const roomData = {
      id: room.id,
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      price: room.price,
      isAvailable: room.isAvailable,
      rating: room.rating,
      location: room.location,
      description: room.description,
      imagePath: room.imagePath,
      hall: room.hall,
      bathroom: room.bathRoom,
      amenities: room.amenities,
      isBooked: room.isBoooked,
      bedroom: room.bedRoom
    };

    this.http.put(`http://localhost:5046/api/Room/UpdateRoom/${room.id}`, roomData, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      response => {
        room.editMode = false;
        window.alert('Room updated successfully');
        this.loadRooms();
      },
      error => {
        console.error('Error updating room', error);
      }
    );
  }
}