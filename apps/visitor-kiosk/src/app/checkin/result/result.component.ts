import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@user-interfaces/common';

import { BaseCheckinComponent, CheckinStage } from '../base-checkin';

@Component({
    selector: 'checkin-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
})
export class CheckinResultComponent extends BaseCheckinComponent implements AfterViewInit {
    public model: any = {};

    public hostImage = '';

    constructor(protected _router: Router, protected _settings: SettingsService) {
        super(_router, _settings);
        this.stage = CheckinStage.Result;
    }

    public ngAfterViewInit() {
        setTimeout(() => {
            const imgSrc = this.host && this.host.photo ? this.host.photo : '';
            console.log('CheckinResultComponent::ngAfterViewInit host image', imgSrc);
            if (imgSrc) {
                const img = new Image();
                img.onload = (evt) => {
                    this.hostImage = img.src;
                    console.log('CheckinResultComponent::ngOnInit fetched host image');
                };
                img.src = imgSrc;
            }
        });
    }
}
