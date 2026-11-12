import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    GuestUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { CheckinResultsComponent } from '../../app/checkin/checkin-result.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinResultsComponent', () => {
    let spectator: SpectatorRouting<CheckinResultsComponent>;
    let settings: Record<string, unknown>;
    const event = signal<Booking | null>(null);
    const guest = signal<GuestUser | null>(null);
    const createComponent = createRoutingFactory({
        component: CheckinResultsComponent,
        detectChanges: false,
        providers: [
            {
                provide: CheckinStateService,
                useValue: { event, guest, photo: signal('') },
            },
            MockProvider(OrganisationService, {
                initialised: signal(true),
                levelWithID: () => null,
            }),
            MockProvider(SettingsService, {
                get: <T>(key: string) => settings[key] as T,
                time_format: 'h:mm a',
            }),
        ],
    });

    beforeEach(() => {
        settings = {};
        event.set(
            new Booking({
                id: 'event-1',
                title: 'Planning',
                user_name: 'Host Person',
                user_email: 'host@example.com',
                linked_event: { id: 'meeting-1' } as Booking['linked_event'],
            }),
        );
        guest.set(new GuestUser({ name: 'Visitor', email: 'v@example.com' }));
        spectator = createComponent();
    });

    it('fills the configured check-in message with the visit details', () => {
        settings['app.checked_in_template'] =
            '{{ visitor_name }} ({{ visitor_email }}) meets {{ host_name }} ' +
            '<{{ host_email }}> for {{ title }}. {{ can_use_lift }}';

        expect(spectator.component.result_template()).toBe(
            'Visitor (v@example.com) meets Host Person <host@example.com> ' +
                'for Planning. Please wait in the lobby.',
        );
    });

    it('returns to check-in when no visitor is loaded', async () => {
        event.set(null);

        await spectator.component.ngOnInit();

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
        ]);
    });

    it('offers beverages for a visit linked to a meeting', async () => {
        settings['app.allow_beverages'] = true;

        await spectator.component.ngOnInit();
        await spectator.component.next();

        expect(spectator.component.allow_beverages()).toBeTruthy();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'preferences',
        ]);
    });

    it('offers beverages for a standalone visit with a visitor location', async () => {
        settings['app.allow_beverages'] = true;
        settings['app.standalone_visitor_location'] = 'zone-lobby';
        event.update(
            (booking) => new Booking({ ...booking, linked_event: undefined }),
        );

        await spectator.component.ngOnInit();
        await spectator.component.next();

        expect(spectator.component.allow_beverages()).toBeTruthy();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'preferences',
        ]);
    });

    it('does not offer beverages for a standalone visit', async () => {
        settings['app.allow_beverages'] = true;
        event.update(
            (booking) => new Booking({ ...booking, linked_event: undefined }),
        );

        await spectator.component.ngOnInit();
        await spectator.component.next();

        expect(spectator.component.allow_beverages()).toBeFalsy();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/welcome',
        ]);
    });
});
