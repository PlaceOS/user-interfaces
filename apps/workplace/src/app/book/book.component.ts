import { Component, DestroyRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { EventFormService } from '@placeos/events';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';

@Component({
    selector: 'placeos-book',
    template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main class="flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto">
                <router-outlet></router-outlet>
            </main>
            <virtual-concierge-button />
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        RouterModule,
        FooterMenuComponent,
        TopbarComponent,
        VirtualConciergeButtonComponent,
    ],
})
export class BookComponent {
    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    constructor() {
        // The forms are shared services. Stop their loads when the user
        // leaves the booking flows.
        const booking_form = inject(BookingFormService);
        const event_form = inject(EventFormService);
        inject(DestroyRef).onDestroy(() => {
            booking_form.releaseNetwork();
            event_form.releaseNetwork();
        });
    }
}
