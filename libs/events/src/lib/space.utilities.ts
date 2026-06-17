import { Injector, signal } from '@angular/core';
import { email, form, required, validate } from '@angular/forms/signals';
import {
    HashMap,
    onFieldChange,
    predictableRandomInt,
    SignalFormRef,
    Space,
} from '@placeos/common';
import { PlaceSystem, PlaceZone, querySystems } from '@placeos/ts-client';
import { from, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { USER_DOMAIN } from '../../../users/src/lib/user.utilities';
import { updateSpaceList } from './space.pipe';

const SPACE_LIST_REQUESTS: Record<string, Observable<Space[]>> = {};

export const isValidUrl = (url) => {
    if (!url) return true;
    try {
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
};

export interface SystemFormValue {
    id: string;
    name: string;
    display_name: string;
    email: string;
    code: string;
    support_url: string;
    timetable_url: string;
    camera_url: string;
    camera_snapshot_url: string;
    camera_snapshot_urls: string[];
    room_booking_url: string;
    installed_ui_devices: number;
    features: string[];
    capacity: number;
    bookable: boolean;
    public: boolean;
    description: string;
    images: string[];
    map_id: string;
    timezone: string;
    zone: PlaceZone | null;
    zones: string[];
    version: number;
    approval: boolean;
}

const isDigits = (value: unknown) => /^[0-9]*$/.test(`${value ?? ''}`);

export function generateSystemsFormFields(
    system?: PlaceSystem,
    injector?: Injector,
): SignalFormRef<SystemFormValue> {
    const has_id = !!system?.id;
    const model = signal<SystemFormValue>({
        id: system?.id || '',
        name: system.name || '',
        display_name: system.display_name || '',
        email: system.email || '',
        code: system.code || '',
        support_url: system.support_url || '',
        timetable_url: system.timetable_url || '',
        camera_url: system.camera_url || '',
        camera_snapshot_url:
            system.camera_snapshot_urls?.find((url) => !!url) ||
            system.camera_snapshot_url ||
            '',
        camera_snapshot_urls: [
            ...(system.camera_snapshot_urls || [system.camera_snapshot_url]),
        ],
        room_booking_url: system.room_booking_url || '',
        installed_ui_devices: system.installed_ui_devices || 0,
        features:
            typeof system.features === 'string'
                ? (system.features as any).split(' ')
                : [...(system.features || [])],
        capacity: system.capacity || 0,
        bookable: system.bookable || false,
        public: system.public || false,
        description: system.description || '',
        images: [...(system.images || [])],
        map_id: system.map_id || '',
        timezone: system.timezone || '',
        zone: null,
        zones: [...(system.zones || [])],
        version: system.version,
        approval: (system as any).approval || false,
    });

    const ref_form = form(
        model,
        (p) => {
            required(p.name);
            required(p.zones);
            email(p.email);
            required(p.zone, { when: () => !has_id });
            validate(p.support_url, ({ value }) =>
                isValidUrl(value()) ? undefined : { kind: 'url' },
            );
            validate(p.timetable_url, ({ value }) =>
                isValidUrl(value()) ? undefined : { kind: 'url' },
            );
            validate(p.camera_url, ({ value }) =>
                isValidUrl(value()) ? undefined : { kind: 'url' },
            );
            validate(p.camera_snapshot_url, ({ value }) =>
                isValidUrl(value()) ? undefined : { kind: 'url' },
            );
            validate(p.room_booking_url, ({ value }) =>
                isValidUrl(value()) ? undefined : { kind: 'url' },
            );
            validate(p.installed_ui_devices, ({ value }) =>
                isDigits(value()) ? undefined : { kind: 'pattern' },
            );
            validate(p.capacity, ({ value }) =>
                isDigits(value()) ? undefined : { kind: 'pattern' },
            );
        },
        { injector },
    );

    // For new systems, syncing the selected zone to the `zones` list mirrors
    // the old `zone.valueChanges` subscription.
    if (!has_id) {
        onFieldChange(
            model,
            (value) => value.zone,
            (zone) =>
                zone &&
                model.update((m) => ({ ...m, zones: [(zone as any).id] })),
            injector,
        );
    }

    return { model, form: ref_form };
}

export function requestSpacesForZone(id: string): Observable<Space[]> {
    if (!id) return of([]);
    if (SPACE_LIST_REQUESTS[id]) return SPACE_LIST_REQUESTS[id];
    SPACE_LIST_REQUESTS[id] = from(
        querySystems({
            zone_id: id,
            limit: 500,
            signage: false,
        }),
    ).pipe(
        map((_) => (_.data || []).map((_) => new Space(_ as any))),
        tap((_) => updateSpaceList(_)),
        shareReplay(1),
    );
    return SPACE_LIST_REQUESTS[id];
}

let SPACE_COUNT: number = 0;
/* istanbul ignore next */
export function generateMockSpace(overrides: HashMap = {}): HashMap {
    const id = `space-${SPACE_COUNT++}`;
    const name = `Test Space ${SPACE_COUNT}`;
    const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
    const space = {
        id,
        name,
        long_name: `${name} with an long name`,
        map_id: `${SPACE_COUNT}`,
        capacity: predictableRandomInt(21, 1) * 2,
        email: `${name.toLowerCase().split(' ').join('.')}@${USER_DOMAIN}`,
        type: '',
        searchable: predictableRandomInt(99999) % 2 === 0,
        controlable: predictableRandomInt(99999) % 2 === 0,
        bookable: predictableRandomInt(99999) % 2 === 0,
        cost_hour: predictableRandomInt(300) * 100,
        setup: predictableRandomInt(6) * 5,
        breakdown: predictableRandomInt(6) * 5,
        zones: ['zone_lvl-0'],
        support_url: `/control/#/panel/${id}`,
        bookings: [], //Array(10).fill(0).map(i => generateMockBooking()),
        linked_rooms: linked
            ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`]
            : [],
        image: '',
        ...overrides,
    };
    if (space['configurations'] && space['configurations'].length > 0) {
        space['configurations'].forEach(
            (config) =>
                (config.capacity = predictableRandomInt(space.capacity) + 1),
        );
        space['configurations'][0].capacity = space.capacity;
    }
    return space;
}
