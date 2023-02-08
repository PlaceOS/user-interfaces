import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler, current_user, SettingsService } from '@placeos/common';
import { first } from 'rxjs/operators';

@Component({
    selector: '[desk-booking]',
    template: ` <footer-menu></footer-menu> `,
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
export class DeskBookingComponent extends AsyncHandler implements OnInit {
    public get countdown_time() {
        return (
            this._settings.get('app.general.kiosk_reset_delay') || 5 * 60 * 1000
        );
    }

    constructor(private _settings: SettingsService, private _router: Router) {
        super();
    }

    public async ngOnInit() {
        await current_user.pipe(first((_) => !!_)).toPromise();
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
