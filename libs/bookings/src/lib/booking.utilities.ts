import { inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    Asset,
    Booking,
    CalendarEvent,
    current_user,
    currentUser,
    flatten,
    OrganisationService,
} from '@placeos/common';
import {
    createViewer,
    getViewer,
    Point,
    removeViewer,
} from '@placeos/svg-viewer';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import {
    addMinutes,
    differenceInMinutes,
    roundToNearestMinutes,
} from 'date-fns';
import { endInFuture } from 'libs/events/src/lib/validators';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { Locker, LockerBank } from './locker.class';
import { ResourceAssetsService } from './resource-assets.service';

/** LockerBank to Asset mapping */
export const LOCKER_BANK_ASSET_MAPPING = {
    assetToResource: (asset: Asset, zone_id?: string): LockerBank => {
        const other_data = asset.other_data as Record<string, any>;
        const bank: LockerBank = {
            id: asset.id,
            map_id: other_data?.map_id || asset.id,
            level_id: other_data?.level_id || '',
            name: asset.identifier || '',
            height: other_data?.height || 0,
            zones: asset.zones || [],
            tags: other_data?.tags || [],
        };
        // Store client_id for matching lockers that reference old bank IDs
        (bank as any).client_id = other_data?.client_id || '';
        return bank;
    },
    resourceToAsset: (
        bank: LockerBank,
        asset_type_id: string,
        zone_id: string,
        zones: string[],
    ): Partial<Asset> => ({
        id: bank.id?.startsWith('temp-') ? undefined : bank.id,
        asset_type_id,
        identifier: bank.name,
        zone_id,
        zones: bank.zones?.length ? bank.zones : zones,
        other_data: {
            client_id: bank.id, // Save original ID for locker matching
            map_id: bank.map_id || bank.id,
            level_id: bank.level_id || '',
            height: bank.height || 0,
            tags: bank.tags || [],
        } as Record<string, any>,
    }),
};

/** Locker to Asset mapping */
export const LOCKER_ASSET_MAPPING = {
    assetToResource: (asset: Asset, zone_id?: string): Locker => {
        const other_data = asset.other_data as Record<string, any>;
        return {
            id: asset.id,
            bank_id: other_data?.bank_id || '',
            map_id: other_data?.map_id || asset.id,
            name: asset.identifier || '',
            assigned_to: asset.assigned_to || '',
            available: other_data?.available ?? true,
            accessible: asset.accessible ?? false,
            bookable: asset.bookable ?? false,
            position: other_data?.position || [0, 0],
            size: other_data?.size || [1, 1],
            features: asset.features || [],
        };
    },
    resourceToAsset: (
        locker: Locker,
        asset_type_id: string,
        zone_id: string,
        zones: string[],
    ): Partial<Asset> => ({
        id: locker.id?.startsWith('temp-') ? undefined : locker.id,
        asset_type_id,
        identifier: locker.name,
        assigned_to: locker.assigned_to || '',
        bookable: locker.bookable ?? false,
        accessible: locker.accessible ?? false,
        features: locker.features || [],
        zone_id,
        zones,
        other_data: {
            bank_id: locker.bank_id || '',
            map_id: locker.map_id || locker.id,
            position: locker.position || [0, 0],
            size: locker.size || [1, 1],
            available: locker.available ?? true,
        } as Record<string, any>,
    }),
};

/** Legacy metadata to LockerBank mapping */
export const legacyLockerBankMapFn = (
    item: any,
    zone_id: string,
): LockerBank => ({
    ...item,
});

/** Legacy metadata to Locker mapping */
export const legacyLockerMapFn = (item: any, zone_id: string): Locker => ({
    ...item,
});

function setBookingAsset(form: FormGroup, resource: any) {
    if (!resource) return form.patchValue({ asset_id: undefined });
    form.patchValue(
        {
            asset_id: resource.id,
            asset_name: resource.name,
            map_id: resource.map_id || resource.id,
            description: resource.name,
            zones: resource.zone
                ? [resource.zone?.parent_id, resource.zone?.id]
                : [],
            booking_asset: resource,
        },
        { emitEvent: false },
    );
}

export function generateBookingForm(booking: Booking = new Booking()) {
    const form = new FormGroup({
        id: new FormControl(booking.id || ''),
        parent_id: new FormControl(booking.parent_id || ''),
        event_id: new FormControl(booking.event_id || ''),
        ical_uid: new FormControl(booking.extension_data.ical_uid || ''),
        date: new FormControl(booking.date, [Validators.required]),
        date_end: new FormControl(booking.date_end),
        all_day: new FormControl(booking.all_day ?? false),
        name: new FormControl(
            booking.extension_data.name || booking.asset_name || '',
        ),
        duration: new FormControl(booking.duration, [endInFuture]),
        booking_type: new FormControl(booking.booking_type),
        zones: new FormControl(booking.zones),
        title: new FormControl(booking.title),
        description: new FormControl(booking.description),
        booking_asset: new FormControl(null),
        resources: new FormControl([]),
        company: new FormControl(''),
        asset_id: new FormControl(booking.asset_id, [Validators.required]),
        asset_name: new FormControl(booking.description),
        assets: new FormControl(booking.extension_data?.assets || []),
        attendees: new FormControl(booking.attendees || []),
        map_id: new FormControl(booking.extension_data?.map_id),
        featured: new FormControl(booking.extension_data?.featured || false),
        user: new FormControl(currentUser()),
        user_id: new FormControl(booking.user_id),
        group: new FormControl(booking.group),
        user_email: new FormControl(booking.user_email),
        user_name: new FormControl(booking.user_name),
        timezone: new FormControl(booking.timezone || ''),
        booked_by: new FormControl(currentUser()),
        booked_by_id: new FormControl(booking.booked_by_id),
        booked_by_email: new FormControl(booking.booked_by_email),
        secondary_resource: new FormControl(
            booking.extension_data?.other_asset_type ||
                booking.extension_data?.secondary_resource,
        ),
        location: new FormControl(booking.extension_data.location || ''),
        attendance_type: new FormControl(
            booking.extension_data.attendance_type || 'ANY',
        ),
        phone: new FormControl(booking.extension_data.phone || ''),
        permission: new FormControl(booking.permission || 'PRIVATE'),
        images: new FormControl(booking.images || []),
        tags: new FormControl(booking?.tags || []),
        plate_number: new FormControl(
            booking.extension_data.plate_number || '',
        ),
        pass_number: new FormControl(booking.extension_data.pass_number || ''),
        recurrence_custom: new FormControl(
            booking.extension_data.recurrence_custom ?? false,
        ),
        recurrence_type: new FormControl(booking.recurrence_type || 'none'),
        recurrence_days: new FormControl(booking.recurrence_days),
        recurrence_nth_of_month: new FormControl(
            booking.recurrence_nth_of_month,
        ),
        recurrence_interval: new FormControl(booking.recurrence_interval),
        recurrence_end: new FormControl(booking.recurrence_end),
        notes: new FormControl(booking.extension_data.notes || ''),
        update_master: new FormControl(false),
        self_registered: new FormControl(false),
        is_assgined: new FormControl(false),
    });
    form.valueChanges.subscribe(() => {
        if (form.getRawValue().date < Date.now() && form.value.id) {
            form.get('date')?.disable({ emitEvent: false });
        } else {
            form.get('date')?.enable({ emitEvent: false });
        }
    });
    form.controls.user.valueChanges.subscribe((user) => {
        if (!user) return;
        form.patchValue(
            {
                user: user,
                user_id: user?.id,
                user_email: user?.email,
                user_name: user?.name,
            },
            { emitEvent: false },
        );
    });
    current_user.subscribe((user) => {
        if (!user) return;
        form.patchValue(
            {
                booked_by: user,
                booked_by_id: user?.id,
                booked_by_email: user?.email,
                name: user?.name,
            },
            { emitEvent: false },
        );
    });
    form.controls.resources.valueChanges.subscribe((resources) =>
        setBookingAsset(form, (resources || [])[0]),
    );
    form.controls.duration.valueChanges.subscribe((duration) => {
        form.patchValue(
            {
                date_end: roundToNearestMinutes(
                    addMinutes(form.getRawValue().date, duration),
                    { nearestTo: 5, roundingMethod: 'ceil' },
                ).valueOf(),
            },
            { emitEvent: false },
        );
    });
    form.controls.date_end.valueChanges.subscribe((date) => {
        if (date < addMinutes(form.getRawValue().date, 30).valueOf()) {
            form.patchValue(
                {
                    date_end: roundToNearestMinutes(
                        addMinutes(form.getRawValue().date, 30),
                        { nearestTo: 5, roundingMethod: 'ceil' },
                    ).valueOf(),
                    duration: 30,
                },
                { emitEvent: false },
            );
        } else {
            form.patchValue(
                {
                    duration: differenceInMinutes(
                        date,
                        form.getRawValue().date,
                    ),
                },
                { emitEvent: false },
            );
        }
    });
    form.controls.date.valueChanges.subscribe((date) => {
        form.patchValue(
            {
                date_end: roundToNearestMinutes(
                    addMinutes(date, form.value.duration),
                    { nearestTo: 5, roundingMethod: 'ceil' },
                ).valueOf(),
            },
            { emitEvent: false },
        );
        if (date < Date.now() && !form.value.id) {
            form.patchValue(
                {
                    date: roundToNearestMinutes(Date.now(), {
                        nearestTo: 5,
                        roundingMethod: 'ceil',
                    }).valueOf(),
                },
                { emitEvent: false },
            );
        }
    });
    if (booking.state === 'started') form.get('date').disable();
    return form;
}

export async function findNearbyFeature(
    map_url: string,
    centered_at: Point | string,
    desk_ids: string[] = [],
): Promise<string> {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '-9999px';
    element.style.width = '1000px';
    element.style.height = '1000px';
    document.body.appendChild(element);
    const id = await createViewer({
        url: map_url,
        element,
    });
    const viewer = getViewer(id);
    const point = (typeof centered_at === 'string'
        ? viewer.mappings[centered_at]
        : centered_at) || { x: 0.5, y: 0.5 };
    let dist = 10;
    let closest = '';
    for (const desk of desk_ids) {
        const { x, y } = viewer.mappings[desk] || { x: 2, y: 2 };
        const d = Math.sqrt(
            (x - point.x) * (x - point.x) + (y - point.y) * (y - point.y),
        );
        if (d < dist) {
            dist = d;
            closest = desk;
        }
    }
    document.body.removeChild(element);
    removeViewer(id);
    return closest;
}

export function newBookingFromCalendarEvent(event: CalendarEvent) {
    return new Booking({
        id: event.id,
        user_email: event.host,
        asset_id: event.system?.id,
        asset_name: event.system?.display_name || event.system?.name,
        booking_type: 'room',
        approved: event.status === 'approved',
        extension_data: {
            ...event,
        },
    });
}

export function loadLockerBanks(
    org: OrganisationService,
    obs: Observable<any>,
    useRegion: () => boolean,
    resourceAssets?: ResourceAssetsService,
): Observable<LockerBank[]> {
    return obs.pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) => {
            if (useRegion()) {
                const buildings = org.buildingsForRegion();
                if (resourceAssets) {
                    return resourceAssets.loadResourcesFromZones$(
                        'locker_banks',
                        buildings.map((b) => b.id),
                        LOCKER_BANK_ASSET_MAPPING,
                    ).pipe(
                        switchMap((assets) => {
                            if (assets.length > 0) return of(assets);
                            // Fallback to legacy metadata
                            return forkJoin(
                                buildings.map((building) =>
                                    showMetadata(building.id, 'locker_banks').pipe(
                                        catchError(() => of(new PlaceMetadata())),
                                        map((_) =>
                                            _.details instanceof Array ? _.details : [],
                                        ),
                                    ),
                                ),
                            ).pipe(map((_: LockerBank[][]) => flatten(_)));
                        }),
                    );
                }
                return forkJoin(
                    buildings.map((building) =>
                        showMetadata(building.id, 'locker_banks').pipe(
                            catchError(() => of(new PlaceMetadata())),
                            map((_) =>
                                _.details instanceof Array ? _.details : [],
                            ),
                        ),
                    ),
                ).pipe(map((_: LockerBank[][]) => flatten(_)));
            } else {
                if (resourceAssets) {
                    return resourceAssets.loadWithFallback$(
                        'locker_banks',
                        'locker_banks',
                        bld.id,
                        LOCKER_BANK_ASSET_MAPPING,
                        legacyLockerBankMapFn,
                    );
                }
                return showMetadata(bld.id, 'locker_banks').pipe(
                    catchError(() => of(new PlaceMetadata())),
                    map((_) => (_.details instanceof Array ? _.details : [])),
                );
            }
        }),
        shareReplay(1),
    );
}

export function loadLockers(
    org: OrganisationService,
    obs: Observable<any>,
    banks$: Observable<LockerBank[]>,
    useRegion: () => boolean,
    resourceAssets?: ResourceAssetsService,
): Observable<Locker[]> {
    return obs.pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) => {
            let lockers$: Observable<Locker[]>;
            if (useRegion()) {
                const buildings = org.buildingsForRegion();
                if (resourceAssets) {
                    lockers$ = resourceAssets.loadResourcesFromZones$(
                        'lockers',
                        buildings.map((b) => b.id),
                        LOCKER_ASSET_MAPPING,
                    ).pipe(
                        switchMap((assets) => {
                            if (assets.length > 0) return of(assets);
                            // Fallback to legacy metadata
                            return forkJoin(
                                buildings.map((building) =>
                                    showMetadata(building.id, 'lockers').pipe(
                                        catchError(() => of(new PlaceMetadata())),
                                        map((_) =>
                                            _.details instanceof Array
                                                ? _.details
                                                : [],
                                        ),
                                    ),
                                ),
                            ).pipe(map((_: Locker[][]) => flatten(_)));
                        }),
                    );
                } else {
                    lockers$ = forkJoin(
                        buildings.map((building) =>
                            showMetadata(building.id, 'lockers').pipe(
                                catchError(() => of(new PlaceMetadata())),
                                map((_) =>
                                    _.details instanceof Array
                                        ? _.details
                                        : [],
                                ),
                            ),
                        ),
                    ).pipe(map((_: Locker[][]) => flatten(_)));
                }
            } else {
                if (resourceAssets) {
                    lockers$ = resourceAssets.loadWithFallback$(
                        'lockers',
                        'lockers',
                        bld.id,
                        LOCKER_ASSET_MAPPING,
                        legacyLockerMapFn,
                    );
                } else {
                    lockers$ = showMetadata(bld.id, 'lockers').pipe(
                        catchError(() => of(new PlaceMetadata())),
                        map((_) =>
                            _.details instanceof Array ? _.details : [],
                        ),
                    );
                }
            }
            return combineLatest([lockers$, banks$]);
        }),
        map(([lockers, banks]: any) => {
            const locker_list = lockers;
            // Helper to find bank by id or client_id (for migrated data)
            const findBank = (bank_id: string) =>
                banks.find(
                    (b: any) => b.id === bank_id || b.client_id === bank_id,
                );
            for (const bank of banks) {
                bank.lockers = lockers
                    .filter(
                        (_: any) =>
                            _.bank_id === bank.id ||
                            _.bank_id === (bank as any).client_id,
                    )
                    .map((_: any) => ({ ..._ }));
            }
            for (const locker of locker_list) {
                const bank = findBank(locker.bank_id);
                locker.bank = bank;
                locker.tags = bank?.tags || [];
                locker.zone = org.levelWithID(bank?.zones || []);
            }
            return lockers.filter((_: any) => _.bank);
        }),
        shareReplay(1),
    );
}
