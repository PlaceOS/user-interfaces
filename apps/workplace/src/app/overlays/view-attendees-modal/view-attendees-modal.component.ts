import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseClass } from '@user-interfaces/common';
import { User } from '@user-interfaces/users';

@Component({
    selector: 'schedule-view-attendees',
    templateUrl: './view-attendees-modal.component.html',
    styleUrls: ['./view-attendees-modal.component.scss']
})
export class ViewAttendeesModalComponent extends BaseClass implements OnChanges, OnInit {
    public attendees: User[];

    constructor(@Inject(MAT_DIALOG_DATA) private _data: { attendees: User[] }) {
        super();
    }

    public ngOnChanges() {

    }

    public ngOnInit() {
            this.attendees = this._data.attendees;
    }

}
