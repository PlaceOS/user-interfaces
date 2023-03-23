import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';

@Component({
    selector: 'custom-report',
    template: `
        <iframe
            class="w-full h-full"
            [src]="report?.url | safe: 'resource'"
        ></iframe>
    `,
    styles: [``],
})
export class CustomReportComponent extends AsyncHandler {
    public id = '';

    public get report() {
        return (this._settings.get('app.custom_reports') || []).find(
            (_) => _.id === this.id
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
