import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AsyncHandler } from '@placeos/common';
import { User } from '@placeos/users';

@Component({
    selector: 'schedule-view-attendees',
    templateUrl: './view-attendees-modal.component.html',
    styleUrls: ['./view-attendees-modal.component.scss'],
    standalone: false,
})
export class ViewAttendeesModalComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _data = inject<{
        attendees: User[];
    }>(MAT_DIALOG_DATA);

    public attendees: User[];

    public ngOnChanges() {}

    public ngOnInit() {
        this.attendees = this._data.attendees;
    }
}
