import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass, current_user, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';

import { DeskFlowStateService } from '../../../workplace/src/app/bookings/desk-flow/desk-flow-state.service';

@Component({
    selector: '[desk-booking]',
    template: `
        <desk-flow-listing
            (window:click)="resetCountdown()"
            class="h-1/2 flex-1 overflow-hidden"
        ></desk-flow-listing>
        <footer-menu></footer-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background: #f0f0f0;
            }

            desk-flow-listing {
                max-height: calc(100% - 4rem);
            }
        `,
    ],
})
export class DeskBookingComponent extends BaseClass implements OnInit {
    public get countdown_time() {
        return (
            this._settings.get('app.general.kiosk_reset_delay') || 5 * 60 * 1000
        );
    }

    constructor(
        private _state: DeskFlowStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        await current_user.pipe(first((_) => !!_)).toPromise();
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        setTimeout(() => this._state.setHost(null), 1000);
        this.resetCountdown();
    }

    public resetCountdown() {
        this.timeout(
            'reset',
            () => this._router.navigate(['/explore']),
            this.countdown_time
        );
    }
}
