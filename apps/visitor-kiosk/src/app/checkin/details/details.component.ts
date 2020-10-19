import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError, SettingsService } from '@user-interfaces/common';
import { EventsService } from '@user-interfaces/events';
import { GuestsService, StaffService } from '@user-interfaces/users';

import { BaseCheckinComponent, CheckinStage } from '../base-checkin';

@Component({
    selector: 'checkin-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class CheckinDetailsComponent extends BaseCheckinComponent implements OnInit {
    public model: any = {};
    private maxHostChecks = 3;

    constructor(
        protected _router: Router,
        protected _settings: SettingsService,
        private _users: StaffService,
        private _guests: GuestsService,
        private _events: EventsService
    ) {
        super(_router, _settings);
        this.stage = CheckinStage.Details;
        this.model.titles = ['Mr', 'Ms', 'Mrs'];
        this.model.purposes = [
            'Business',
            'Project',
            'Delivery',
            'Interview',
            'Maintenance ',
            'Social',
            'Training',
            'Other',
        ];
    }

    public ngOnInit(): void {
        this.model.form = { ...this.visitor, host: this.booking.host };
        this.model.hostAttempts = 0;
        this.timeout('load_host', async () => {
            await this.loadHost(this.booking.host);
        });
    }

    private async loadHost(host: string) {
        this.setLoading(true);
        try {
            this.host = await this._users.show(host);
            this.model.hostAttempts = 0;
            this.error = null;
        } catch (error) {
            this.model.hostAttempts += 1;
            this.checkHostAttempts();
        }
        this.setLoading(false);
    }

    public onHostBlur() {
        this.loadHost(this.model.form.host);
    }

    private checkHostAttempts() {
        if (this.model.hostAttempts >= this.maxHostChecks) {
            this.error = `Failed to load host after ${this.model.hostAttempts} attempts`;
            return true;
        }
        return false;
    }

    public submit() {
        if (this.model.form && this.model.form.host) {
            this.setLoading('Please wait...');
            this.timeout(
                'check-email',
                async () => {
                    const visitorData = {
                        ...this.visitor,
                        organisation: this.model.form.organisation,
                        phone: this.model.form.phone,
                        name: this.model.form.name,
                    };
                    try {
                        await this._guests.updateMetadata(this.visitor.email, visitorData);
                        this.visitor = visitorData;
                    } catch (err) {
                        console.error(err);
                    }
                    try {
                        await this._events.checkinAttendee(this.visitor.email, this.booking.id);
                        this.next();
                    } catch (err) {
                        console.error(err);
                        notifyError('Failed to check in. Please see the concierge');
                    }
                    this.setLoading(false);
                },
                500
            );
        }
    }
}
