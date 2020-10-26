import { Injectable } from '@angular/core';
import { getModule, listen } from '@placeos/ts-client';
import { ViewAction, ViewerFeature } from '@yuion/svg-viewer';

import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import { Space } from '@user-interfaces/spaces';
import { CalendarEvent } from '@user-interfaces/events';

import { ExploreStateService } from './explore-state.service';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';

export const DEFAULT_COLOURS = {
    'free': '#43a047',
    'pending': '#ffb300',
    'reserved': '#3949ab',
    'busy': '#e53935',
    'not-bookable': '#757575',
    'unknown': '#757575',
};

@Injectable()
export class ExploreSpacesService extends BaseClass {
    private _spaces: Space[] = [];
    private _bookings: HashMap<CalendarEvent[]> = {};
    private _bindings: any[] = [];
    private _statuses: HashMap<string> = {};

    constructor(private _state: ExploreStateService, private _settings: SettingsService) {
        super();
        this.subscription(
            'spaces',
            this._state.spaces.subscribe((list) => {
                this.clearBindings();
                this._spaces = list;
                this.bindToSpaces();
            })
        );
    }

    public ngOnDestroy() {
        this.clearBindings();
    }

    public clearBindings() {
        if (!this._spaces) return;
        for (const space of this._spaces) {
            this.unsub(`bookings-${space.id}`);
            this.unsub(`status-${space.id}`);
        }
        this._bindings.forEach(b => b.unbind());
        this._bindings = [];
        this._statuses = {};
    }

    public bindToSpaces() {
        if (!this._spaces) return;
        for (const space of this._spaces) {
            let binding = getModule(space.id, 'Bookings').binding('bookings');
            this.subscription(
                `bookings-${space.id}`,
                binding.listen().subscribe((d) => this.handleBookingsChange(space, d))
            );
            binding.bind();
            this._bindings.push(binding);
            binding = getModule(space.id, 'Bookings').binding('status');
            this.subscription(
                `status-${space.id}`,
                binding.listen().subscribe((d) => this.handleStatusChange(space, d))
            );
            binding.bind();
            this._bindings.push(binding);
        }
        this.updateActions();
        this.updateHoverElements();
    }

    public bookSpace(space: Space) {
        console.log('Book Space:', space);
    }

    private handleBookingsChange(space: Space, bookings: HashMap[]) {
        if (!bookings) return;
        this._bookings[space.id] = bookings.map((i) => new CalendarEvent(i));
        this.timeout('update_hover_els', () => this.updateHoverElements(), 100);

    }

    private handleStatusChange(space: Space, status: string) {
        this._statuses[space.id] = space.bookable ? status || 'free' : 'not-bookable';
        this.timeout('update_statuses', () => {
            this.clearTimeout('update_hover_els');
            this.updateStatus();
            this.updateHoverElements();
        }, 100);
    }

    private updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || DEFAULT_COLOURS;
        for (const space of this._spaces) {
            style_map[`#${space.map_id}`] = {
                fill: colours[`space-${this._statuses[space.id]}`] || colours[`${this._statuses[space.id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('spaces', style_map);
    }

    private updateHoverElements() {
        const features: ViewerFeature[] = [];
        for (const space of this._spaces) {
            features.push({
                location: space.map_id,
                hover: true,
                content: ExploreSpaceInfoComponent,
                data: {
                    space,
                    events: this._bookings[space.id],
                    status: this._statuses[space.id]
                }
            } as any);
        }
        this._state.setFeatures('spaces', features);
    }

    private updateActions() {
        const actions: ViewAction[] = [];
        for (const space of this._spaces) {
            actions.push({
                id: space.map_id,
                action: 'click',
                callback: () => this.bookSpace(space)
            });
        }
        this._state.setActions('spaces', actions);
    }
}
