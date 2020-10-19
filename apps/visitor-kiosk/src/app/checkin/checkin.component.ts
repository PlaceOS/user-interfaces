import { Component, OnInit } from '@angular/core';
import { BaseClass, SettingsService } from '@user-interfaces/common';

import { CheckinEvent, CheckinStage } from './base-checkin';

@Component({
    selector: 'app-checkin',
    templateUrl: './checkin.component.html',
    styleUrls: ['./checkin.component.scss']
})
export class AppCheckinComponent extends BaseClass implements OnInit {

    public loading: string | boolean = false;
    public booking: any = null;
    public visitor: any = null;

    public background: string;

    public enumStage = CheckinStage;

    public checkinEvent: CheckinEvent = {
        stage: null,
        booking: null,
        visitor: null,
        host: null,
        error: null,
    };

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Check In';
        this.background = this._settings.get('app.home.background');
    }

    public onEventChanged(event: CheckinEvent) {
        this.checkinEvent = {... event};
    }
}
