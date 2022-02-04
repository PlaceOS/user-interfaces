import { Component, OnInit } from '@angular/core';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomAttendeesComponent } from './room-attendees/room-attendees.component';

@Component({
    selector: 'room-booking',
    templateUrl: './room-booking.component.html',
    styles: [''],
})
export class RoomBookingComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
