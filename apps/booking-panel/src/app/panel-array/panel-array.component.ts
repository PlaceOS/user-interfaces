import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, first } from 'rxjs/operators';

import { BaseClass, SettingsService } from '@user-interfaces/common';
import { format } from 'date-fns';

@Component({
    selector: 'app-booking-panel-array',
    templateUrl: './panel-array.component.html',
    styleUrls: ['./panel-array.component.scss'],
})
export class BookingPanelArrayComponent extends BaseClass implements OnInit {
    /** List of systems to show panels for */
    public systems: string[];
    /** Application logo */
    public logo: string;

    /** Display value for the current time */
    public get time(): string {
        return format(new Date(), 'h:mm:ss a');
    }

    constructor(private route: ActivatedRoute, private _settings: SettingsService) {
        super();
    }

    public async ngOnInit() {
        await this._settings.initialised
            .pipe(
                first((_) => _),
                delay(1000)
            )
            .toPromise();
        this.subscription(
            'route.query',
            this.route.queryParamMap.subscribe((params) => {
                if (params.has('system_ids')) {
                    this.systems = (params.get('system_ids') || '').split(',');
                }
            })
        );
        const logo = this._settings.get('app.logo');
        this.logo = (logo ? logo.inverse : null) || '';
    }
}
