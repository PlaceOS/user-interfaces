import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SystemBootstrapComponent } from '@placeos/components';

/** Local storage flag that opens the events view instead of the panel */
const EVENT_KEY = 'PLACEOS.Bookings.event';

/**
 * Setup screen that binds the booking panel to a system.
 * `?event` (or a saved event flag) opens the events view for the system.
 */
@Component({
    selector: '[app-bootstrap]',
    template: `
        <system-bootstrap
            store_key="PLACEOS.BOOKINGS.system"
            heading="APP.BOOKING_PANEL.BOOTSTRAP_TITLE"
            [system_route]="systemRoute"
            (configured)="saveEventFlag()"
        />
    `,
    imports: [SystemBootstrapComponent],
})
export class BootstrapComponent {
    private _route = inject(ActivatedRoute);

    /** Open the events view or the booking panel for the system */
    public readonly systemRoute = (system_id: string) => [
        this.isEventPanel() ? 'events' : 'panel',
        system_id,
    ];

    /** Keep the events view for later loads when it is in use */
    public saveEventFlag() {
        if (this.isEventPanel()) localStorage.setItem(EVENT_KEY, 'true');
    }

    private isEventPanel() {
        return (
            this._route.snapshot.queryParamMap.has('event') ||
            localStorage.getItem(EVENT_KEY) === 'true'
        );
    }
}
