import { Injectable, inject, signal } from '@angular/core';

import { AsyncHandler } from '@placeos/common';

import { PlaceOSService } from '../data/placeos.service';
import { AvailabilityState, MapObject } from '../data/types';

const ROOM_STATES: AvailabilityState[] = [
    'free',
    'booked',
    'occupied',
    'pending',
];
const DESK_STATES: AvailabilityState[] = ['available', 'booked', 'occupied'];

const POLL_INTERVAL_MS = 30_000;
/** Objects start on their resting state, then the first poll lands shortly after */
const FIRST_POLL_MS = 2_000;

/**
 * Live availability for the kiosk.
 *
 * Reads system status from PlaceOS when a level zone is known and the API key
 * is set; otherwise it simulates states so the display still demonstrates.
 */
@Injectable()
export class AvailabilityPollingService extends AsyncHandler {
    private readonly _placeos = inject(PlaceOSService);

    private readonly _states = signal<Record<string, AvailabilityState>>({});
    private readonly _simulated = signal(true);

    public readonly states = this._states.asReadonly();
    /** True when states are made up rather than read from PlaceOS */
    public readonly simulated = this._simulated.asReadonly();

    private _objects: MapObject[] = [];
    private _zone_id = '';

    /** Points the poller at a new set of objects and restarts the schedule */
    public start(objects: MapObject[], level_zone_id = '') {
        this.stop();
        this._objects = objects;
        this._zone_id = level_zone_id;
        this._states.set(this._defaults());
        if (!objects.length) return;
        this.timeout('first-poll', () => this._poll(), FIRST_POLL_MS);
        this.interval('poll', () => this._poll(), POLL_INTERVAL_MS);
    }

    public stop() {
        this.clearTimeout('first-poll');
        this.clearInterval('poll');
    }

    private _defaults(): Record<string, AvailabilityState> {
        const states: Record<string, AvailabilityState> = {};
        for (const object of this._objects) {
            if (object.object_type === 'room') states[object.id] = 'free';
            else if (object.object_type === 'desk')
                states[object.id] = 'available';
        }
        return states;
    }

    private async _poll() {
        if (!this._objects.length) return;
        if (this._placeos.config.configured && this._zone_id) {
            try {
                const systems = await this._placeos.getSystems(this._zone_id);
                const states: Record<string, AvailabilityState> = {};
                for (const object of this._objects) {
                    if (
                        object.object_type !== 'room' &&
                        object.object_type !== 'desk'
                    )
                        continue;
                    const system = systems.find(
                        (s) => s.map_id === (object.svg_id || object.id),
                    );
                    states[object.id] = system
                        ? system.bookable
                            ? 'free'
                            : 'out-of-service'
                        : object.object_type === 'room'
                          ? 'free'
                          : 'available';
                }
                this._states.set(states);
                this._simulated.set(false);
                return;
            } catch {
                // Fall through to simulation so the display keeps working
            }
        }
        this._simulated.set(true);
        this._states.set(this._simulate());
    }

    private _simulate(): Record<string, AvailabilityState> {
        const pick = (options: AvailabilityState[]) =>
            options[Math.floor(Math.random() * options.length)];
        const states: Record<string, AvailabilityState> = {};
        for (const object of this._objects) {
            if (object.object_type === 'room')
                states[object.id] = pick(ROOM_STATES);
            else if (object.object_type === 'desk')
                states[object.id] = pick(DESK_STATES);
        }
        return states;
    }
}
