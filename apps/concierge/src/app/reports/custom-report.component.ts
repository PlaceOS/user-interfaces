import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';

const EMPTY = {};

@Component({
    selector: 'custom-report',
    template: `
        <iframe
            class="w-full h-full"
            *ngIf="id"
            [src]="report_url | safe: 'resource'"
        ></iframe>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class CustomReportComponent extends AsyncHandler {
    public id = '';

    public get report_url() {
        let report =
            (this._settings.get('app.custom_reports') || []).find(
                (_) => _.id === this.id
            ) || EMPTY;
        if (!report.url) return '';
        const url =
            report.url + (report.url.includes('?') ? '&' : '?') + `kiosk=tv`;
        return (
            url +
            (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : '')
        );
    }

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(
                (params) => (this.id = params.get('id') || '')
            )
        );
    }
}
