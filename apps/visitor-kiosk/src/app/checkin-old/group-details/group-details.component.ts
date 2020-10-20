import { Component, OnInit, Input } from '@angular/core';
import { BaseClass } from '@user-interfaces/common';
import { GuestsService, User } from '@user-interfaces/users';


@Component({
    selector: 'checkin-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.scss'],
})
export class CheckinGroupDetailsComponent extends BaseClass implements OnInit {
    @Input() public visitor: User;
    public model: any = {};

    constructor(private _guests: GuestsService) {
        super();
    }

    public ngOnInit(): void {
        this.model.form = {};

        // Get 5 random users for demo
        this._guests.query({ limit: 5 }).then((users) => {
            this.model.visitors = users.sort(() => 0.5 - Math.random()).slice(0, 5);
        });
    }

    public toggleAll() {
        this.model.visitors.map((visitor) => {
            visitor.checkin = this.model.checkInAll;
        });
    }

    public checkIn() {
        // navigate to results
    }
}
