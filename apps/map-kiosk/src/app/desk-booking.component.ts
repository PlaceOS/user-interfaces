import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler, current_user, SettingsService } from '@placeos/common';
import { first } from 'rxjs/operators';
import { FooterMenuComponent } from './footer-menu.component';

@Component({
    selector: '[desk-booking]',
    template: ` <footer-menu /> `,
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
    imports: [FooterMenuComponent],
})
export class DeskBookingComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _router = inject(Router);

    public get countdown_time() {
        return this._settings.get('app.kiosk_reset_delay') || 5 * 60 * 1000;
    }

    public async ngOnInit() {
        await current_user.pipe(first((_) => !!_)).toPromise();
        this.resetCountdown();
    }

    public resetCountdown() {
        this.timeout(
            'reset',
            () => this._router.navigate(['/explore']),
            this.countdown_time,
        );
    }
}
