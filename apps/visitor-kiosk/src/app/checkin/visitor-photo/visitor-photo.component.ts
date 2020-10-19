import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError, SettingsService } from '@user-interfaces/common';

import { BaseCheckinComponent, CheckinStage } from '../base-checkin';

@Component({
    selector: 'checkin-visitor-photo',
    templateUrl: './visitor-photo.component.html',
    styleUrls: ['./visitor-photo.component.scss']
})
export class VisitorPhotoComponent extends BaseCheckinComponent implements OnInit {
    constructor(protected _router: Router, protected _settings: SettingsService) {
        super(_router, _settings);
        this.stage = CheckinStage.Photo;
    }

    public ngOnInit() {}

    public handlePhoto(event: any) {
        if (!!event) {
            this.visitor = { ...this.visitor, photo: event };
            this.next();
        } else {
            notifyError('Error saving image, please try again');
        }
    }
}
