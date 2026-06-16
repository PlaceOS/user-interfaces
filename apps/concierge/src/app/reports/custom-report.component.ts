import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SafePipe],
})
export class CustomReportComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);

    private readonly _params = signal<ParamMap>(this._route.snapshot.paramMap);

    public readonly id = computed(() => this._params().get('id') || '');

    constructor() {
        super();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) =>
                this._params.set(params),
            ),
        );
    }

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
