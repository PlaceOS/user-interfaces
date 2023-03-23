import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule } from '@placeos/ts-client';
import { ViewAction, ViewerFeature } from '@placeos/svg-viewer';
import { map } from 'rxjs/operators';

import {
    AsyncHandler,
    currentUser,
    HashMap,
    SettingsService,
} from '@placeos/common';
import { notifyError } from 'libs/common/src/lib/notifications';
import { Space } from 'libs/spaces/src/lib/space.class';
import { CalendarEvent } from 'libs/events/src/lib/event.class';

import { ExploreStateService } from './explore-state.service';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';
import { ExploreBookingModalComponent } from './explore-booking-modal.component';
import { ExploreBookQrComponent } from './explore-book-qr.component';
import { EventFormService } from 'libs/events/src/lib/event-form.service';

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
            this.updateHoverElements(list);
        })
    );

    constructor(
        private _state: ExploreStateService,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _dialog: MatDialog
    ) {
        super();
        this.subscription('spaces', this._bind.subscribe());
    }

    public bookSpace(space: Space) {
        if (this._statuses[space.id] !== 'free' || !space.bookable) {
            return notifyError(
                `${
                    space.display_name || space.name
                } is unavailable at the current time`
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
            () => this.updateHoverElements(spaces),
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
                this.updateStatus(spaces);
                this.updateHoverElements(spaces);
            },
            100
        );
    }

    private updateStatus(spaces: Space[]) {
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

    private updateHoverElements(spaces: Space[]) {
        const features: ViewerFeature[] = [];
        for (const space of spaces) {
            if (!space.map_id) continue;
            features.push({
                location: space.map_id,
                full_size: true,
                no_scale: true,
                content: ExploreSpaceInfoComponent,
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
                callback: () => this.bookSpace(space),
            });
            actions.push({
                id: space.map_id,
                action: 'touchend',
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
