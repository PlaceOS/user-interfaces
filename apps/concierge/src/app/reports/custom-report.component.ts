import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { SafePipe } from '@placeos/components';

const EMPTY = {};

@Component({
    selector: 'custom-report',
    template: `
        @if (id) {
            <iframe
                class="h-full w-full"
                [src]="report_url | safe: 'resource'"
            ></iframe>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [SafePipe],
})
export class CustomReportComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);

    public id = '';

    public get report_url() {
        const report =
            (this._settings.get('app.custom_reports') || []).find(
                (_) => _.id === this.id,
            ) || EMPTY;
        if (!report.url) return '';
        const url =
            report.url + (report.url.includes('?') ? '&' : '?') + `kiosk=tv`;
        return (
            url +
            (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : '')
        );
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(
                (params) => (this.id = params.get('id') || ''),
            ),
        );
    }
}
