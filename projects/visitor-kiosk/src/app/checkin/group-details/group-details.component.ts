import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BaseClass } from 'src/app/common/base.class';
import { GuestsService } from 'src/app/users/guests.service';
import { User } from 'src/app/users/user.class';

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
