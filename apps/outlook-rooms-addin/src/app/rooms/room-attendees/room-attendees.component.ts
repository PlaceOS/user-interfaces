import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'room-attendees',
    templateUrl: './room-attendees.component.html',
    styles: [''],
})
export class RoomAttendeesComponent implements OnInit {
    attendeesFormGroup = new FormGroup({
        attendee: new FormControl('attendees'),
    });
    constructor() {}

    ngOnInit(): void {}
}
