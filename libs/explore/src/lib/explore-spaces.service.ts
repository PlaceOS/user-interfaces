import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule, showMetadata } from '@placeos/ts-client';
import { ViewAction, ViewerFeature } from '@placeos/svg-viewer';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import {
    AsyncHandler,
    BookingRuleset,
    currentUser,
    HashMap,
    rulesForResource,
    SettingsService,
} from '@placeos/common';
import { notifyError } from 'libs/common/src/lib/notifications';
import { Space } from 'libs/spaces/src/lib/space.class';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { ExploreStateService } from './explore-state.service';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';
import { ExploreBookingModalComponent } from './explore-booking-modal.component';
import { ExploreBookQrComponent } from './explore-book-qr.component';

export const DEFAULT_COLOURS = {
    free: '#43a047',
    pending: '#ffb300',
    reserved: '#e65100',
    busy: '#e53935',
    'signs-of-life': '#1565c0',
    'not-bookable': '#757575',
    unknown: '#757575',
};

@Injectable()
export class ExploreSpacesService extends AsyncHandler implements OnDestroy {
    private _bookings: HashMap<CalendarEvent[]> = {};
    private _statuses: HashMap<string> = {};

    public readonly booking_rules: Observable<BookingRuleset[]> =
        this._org.active_building.pipe(
            filter((bld) => !!bld),
            switchMap((bld) =>
                showMetadata(bld.id, `room_booking_rules`).pipe(
                    catchError(() => of({ details: [] }))
                )
            ),
            map((_) => (_?.details instanceof Array ? _.details : [])),
            shareReplay(1)
        );

    private _bind = this._state.spaces.pipe(
        map((list) => {
            this.unsubWith('b-');
            this.unsubWith('s-');
            this._statuses = {};
            if (!list?.length) return;
            for (const space of list) {
                const mod = getModule(space.id, 'Bookings');
                let binding = mod.binding('bookings');
                this.subscription(
                    `b-${space.id}`,
                    binding
                        .listen()
                        .subscribe((d) =>
                            this.handleBookingsChange(list, space, d)
                        )
                );
                this.subscription(`b-bind-${space.id}`, binding.bind());
                binding = mod.binding('status');
                this.subscription(
                    `s-${space.id}`,
                    binding
                        .listen()
                        .subscribe((d) =>
                            this.handleStatusChange(list, space, d)
                        )
                );
                this.subscription(`s-bind-${space.id}`, binding.bind());
            }
            this.updateActions(list);
            this._updateHoverElements(list);
        })
    );

    constructor(
        private _state: ExploreStateService,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _dialog: MatDialog,
        private _org: OrganisationService
    ) {
        super();
        this.subscription('spaces', this._bind.subscribe());
    }

    public async bookSpace(space: Space, force: boolean = false) {
        const booking_rules = await this.booking_rules
            .pipe(take(1))
            .toPromise();
        const { hidden } =
            rulesForResource(
                {
                    date: Date.now(),
                    duration: 60,
                    resource: space,
                    host: currentUser(),
                },
                booking_rules
            ) || {};
        if (hidden) {
            return notifyError(
                'You do not have permission to book this space at this time.'
            );
        }
        if (
            (this._statuses[space.id] !== 'free' && !force) ||
            !space.bookable
        ) {
            return notifyError(
                `${
                    space.display_name || space.name
                } is unavailable for the selected time and duration`
            );
        }
        this._event_form.newForm();
        this._event_form.form.patchValue({
            host: currentUser()?.email,
            resources: [space],
        });
        if (this._settings.get('app.events.booking_unavailable')) {
            return this._event_form.openEventLinkModal();
        }
        this._dialog.open(
            (this._settings.get('app.explore.show_booking_qr')
                ? ExploreBookQrComponent
                : ExploreBookingModalComponent) as any,
            {
                data: { space },
            }
        );
    }

    public handleBookingsChange(
        spaces: Space[],
        space: Space,
        bookings: HashMap[]
    ) {
        if (!bookings) return;
        this._bookings[space.id] = bookings.map((i) => new CalendarEvent(i));
        this.timeout(
            'update_hover_els',
            () => this._updateHoverElements(spaces),
            100
        );
    }

    public handleStatusChange(spaces: Space[], space: Space, status: string) {
        this._statuses[space.id] = space.bookable
            ? status || 'free'
            : 'not-bookable';
        this.timeout(
            'update_statuses',
            () => {
                this.clearTimeout('update_hover_els');
                this._updateStatus(spaces);
                this._updateHoverElements(spaces);
            },
            100
        );
    }

    private async _updateStatus(spaces: Space[]) {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || {};
        for (const space of spaces) {
            const status = this._statuses[space.id] || 'not-bookable';
            style_map[`#${space.map_id}`] = {
                fill:
                    colours[`space-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('spaces', style_map);
    }

    private _updateHoverElements(spaces: Space[]) {
        const features: ViewerFeature[] = [];
        for (const space of spaces) {
            if (!space.map_id) continue;
            features.push({
                location: space.map_id,
                full_size: true,
                no_scale: true,
                content: ExploreSpaceInfoComponent,
                z_index: 10,
                data: {
                    space: new Space(space),
                    events: this._bookings[space.id],
                    status: this._statuses[space.id],
                },
            } as any);
        }
        this._state.setFeatures('spaces', features);
    }

    private updateActions(spaces: Space[]) {
        const actions: ViewAction[] = [];
        for (const space of spaces) {
            if (!space.map_id) continue;
            actions.push({
                id: space.map_id,
                action: 'click',
                priority: 5,
                callback: () => this.bookSpace(space),
            });
            actions.push({
                id: space.map_id,
                action: 'touchend',
                priority: 5,
                callback: () => this.bookSpace(space),
            });
        }
        this.timeout(
            'set-actions',
            () => this._state.setActions('spaces', actions),
            50
        );
    }
}
