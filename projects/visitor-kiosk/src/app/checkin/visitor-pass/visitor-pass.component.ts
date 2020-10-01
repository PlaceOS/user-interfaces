import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError } from 'src/app/common/notifications';
import { SettingsService } from 'src/app/common/settings.service';
import { BaseCheckinComponent, CheckinStage } from '../base-checkin';

@Component({
    selector: 'checkin-visitor-pass',
    templateUrl: './visitor-pass.component.html',
    styleUrls: ['./visitor-pass.component.scss'],
})
export class VisitorPassComponent extends BaseCheckinComponent implements AfterViewInit {
    constructor(protected _router: Router, protected _settings: SettingsService) {
        super(_router, _settings);
        this.stage = CheckinStage.VisitorPass;
    }

    public ngAfterViewInit() {
        setTimeout(() => this.printPass());
    }

    private async printPass() {
        try {
            this.setLoading('Printing your visitor pass now');

            // TODO: actually trigger print visitor pass
            await new Promise((res, rej) => setTimeout(() => res(), 5000));
        } catch (err) {
            this.error = err;
            notifyError('Error printing visitor pass');
        }
        this.setLoading(false);
        this.next();
    }
}
