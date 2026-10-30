import { Injectable, computed, inject, signal } from '@angular/core';

import { AsyncHandler } from '@placeos/common';

import { PlaceOSService, PlaceOSSystem } from '../data/placeos.service';
import { AvailabilityState, MapObject } from '../data/types';

const ROOM_STATES: AvailabilityState[] = [
    'free',
    'booked',
    'occupied',
    'pending',
];
const DESK_STATES: AvailabilityState[] = ['available', 'booked', 'occupied'];

/** Every state the simulation can produce, in legend order */
const SIMULATED_STATES: AvailabilityState[] = [
    'free',
    'available',
    'pending',
    'booked',
    'occupied',
];
/** Every state a live PlaceOS poll can produce, in legend order */
const LIVE_STATES: AvailabilityState[] = [
    'free',
    'available',
    'out-of-service',
    'unavailable',
];

const POLL_INTERVAL_MS = 30_000;
/** Objects start with no state, then the first poll lands shortly after */
const FIRST_POLL_MS = 2_000;
/** Consecutive failed polls before the kiosk reports that it is offline */
const OFFLINE_AFTER_FAILURES = 3;

/**
 * Live availability for the kiosk.
 *
 * Reads system status from PlaceOS when a level zone is known and the API key
 * is set; otherwise it simulates states so the display still demonstrates.
 * A failed live poll keeps the last good states.
 */
@Injectable()
export class AvailabilityPollingService extends AsyncHandler {
    private readonly _placeos = inject(PlaceOSService);

    private readonly _states = signal<Record<string, AvailabilityState>>({});
    private readonly _simulated = signal(true);
    private readonly _last_updated = signal<Date | null>(null);
    private readonly _failures = signal(0);

    /** Empty until the first poll for the current objects lands */
    public readonly states = this._states.asReadonly();
    /** True when states are made up rather than read from PlaceOS */
    public readonly simulated = this._simulated.asReadonly();
    /** Time of the last successful poll for the current objects */
    public readonly last_updated = this._last_updated.asReadonly();
    /** True after several live polls in a row have failed */
    public readonly offline = computed(
        () => this._failures() >= OFFLINE_AFTER_FAILURES,
    );
    /** States the current source can produce, for the legend */
    public readonly possible_states = computed(() =>
        this._simulated() ? SIMULATED_STATES : LIVE_STATES,
    );

    private _objects: MapObject[] = [];
    private _zone_id = '';
    /** Bumped on every restart so a slow poll cannot write stale states */
    private _run = 0;

    /** Points the poller at a new set of objects and restarts the schedule */
    public start(objects: MapObject[], level_zone_id = '') {
        this.stop();
        this._objects = objects;
        this._zone_id = level_zone_id;
        this._states.set({});
        this._last_updated.set(null);
        this._failures.set(0);
        this._simulated.set(!this._isLive());
        if (!objects.length) return;
        this.timeout('first-poll', () => this._poll(), FIRST_POLL_MS);
        this.interval('poll', () => this._poll(), POLL_INTERVAL_MS);
    }

    public stop() {
        this._run++;
        this.clearTimeout('first-poll');
        this.clearInterval('poll');
    }

    private _isLive() {
        return this._placeos.config.configured && !!this._zone_id;
    }

    private async _poll() {
        if (!this._objects.length) return;
        const run = this._run;
        if (!this._isLive()) {
            this._apply(this._simulate(), true);
            return;
        }
        try {
            const systems = await this._placeos.getSystems(this._zone_id);
            if (run !== this._run) return;
            // First system wins when two share a map id
            const by_map_id = new Map<string, PlaceOSSystem>();
            for (const system of systems) {
                if (!by_map_id.has(system.map_id))
                    by_map_id.set(system.map_id, system);
            }
            const states: Record<string, AvailabilityState> = {};
            for (const object of this._objects) {
                if (
                    object.object_type !== 'room' &&
                    object.object_type !== 'desk'
                )
                    continue;
                const system = by_map_id.get(object.svg_id || object.id);
                const room = object.object_type === 'room';
                states[object.id] =
                    system && !system.bookable
                        ? room
                            ? 'out-of-service'
                            : 'unavailable'
                        : room
                          ? 'free'
                          : 'available';
            }
            this._apply(states, false);
        } catch {
            // Keep the last good states; the kiosk shows how old they are
            if (run === this._run) this._failures.update((count) => count + 1);
        }
    }

    /**
     * Stores a poll's states. A poll that changes nothing keeps the current
     * record, so the floor plan does not compose its imported map again.
     */
    private _apply(
        states: Record<string, AvailabilityState>,
        simulated: boolean,
    ) {
        const current = this._states();
        const keys = Object.keys(states);
        const same =
            keys.length === Object.keys(current).length &&
            keys.every((id) => current[id] === states[id]);
        if (!same) this._states.set(states);
        this._simulated.set(simulated);
        this._last_updated.set(new Date());
        this._failures.set(0);
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
