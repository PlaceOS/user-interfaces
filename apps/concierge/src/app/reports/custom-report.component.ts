import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { SafePipe } from '@placeos/components';

const EMPTY = {};

@Component({
    selector: 'custom-report',
    template: `
        @if (id()) {
            <iframe
                class="h-full w-full"
                [src]="report_url() | safe: 'resource'"
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
export class CustomReportComponent {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);

    private readonly _params = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });

    public readonly id = computed(() => this._params().get('id') || '');

    public readonly report_url = computed(() => {
        const report =
            (this._settings.get('app.custom_reports') || []).find(
                (_) => _.id === this.id(),
            ) || EMPTY;
        if (!report.url) return '';
        const url =
            report.url + (report.url.includes('?') ? '&' : '?') + `kiosk=tv`;
        return (
            url +
            (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : '')
        );
    });
}
