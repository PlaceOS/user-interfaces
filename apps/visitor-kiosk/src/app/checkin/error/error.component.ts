import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@user-interfaces/common';

import { BaseCheckinComponent, CheckinStage } from '../base-checkin';

@Component({
    selector: 'checkin-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class CheckinErrorComponent extends BaseCheckinComponent {
    constructor(protected _router: Router, protected _settings: SettingsService) {
        super(_router, _settings);
        this.stage = CheckinStage.Error;
    }
}
