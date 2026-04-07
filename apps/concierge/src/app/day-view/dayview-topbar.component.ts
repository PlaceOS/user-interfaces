import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import {
    AsyncHandler,
    Identity,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BookingUIOptions, EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-topbar',
    template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center border-b px-4"
        >
            <button
                btn
                matRipple
                new
                class="w-12 overflow-hidden xl:w-auto"
                (click)="newBooking()"
            >
                <div class="flex items-center">
                    <icon
                        class="mr-2"
                        [icon]="{
                            class: 'material-symbols-rounded',
                            content: 'add',
                        }"
                    ></icon>
                    <div class="hidden xl:block">New Booking</div>
                </div>
            </button>
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="type_list"
                    (ngModelChange)="updateTypes($event)"
                    placeholder="No Events"
                >
                    <mat-select-trigger>Legend</mat-select-trigger>
                    @for (type of types; track type) {
                        <mat-option [value]="type.id">
                            {{ type.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if (allow_setup_breakdown) {
                <settings-toggle
                    [ngModel]="ui_options().show_overflow"
                    (ngModelChange)="updateUIOptions({ show_overflow: $event })"
                    >Setup / Breakdown</settings-toggle
                >
            }
            <div class="w-px flex-1"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `,
    styles: [
        `
            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
                margin-left: 1em;
            }

            mat-slide-toggle div {
                width: 5.5em;
                white-space: initial;
                line-height: 1.2em;
            }
        `,
    ],
    standalone: false,
})
export class DayviewTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventsStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _settings = inject(SettingsService);

    /** List of selected levels */
    public readonly zones = signal<string[]>([]);

    public readonly types: Identity[] = [
        { id: 'internal', name: 'Internal' },
        { id: 'external', name: 'External' },
        { id: 'cancelled', name: 'Cancelled' },
    ];
    /** List of selected types */
    public readonly type_list = signal(this.types.map((i) => `${i.id}`));
    /** List of levels for the active building */
    public readonly levels = toSignal(this._org.active_levels || of([]), {
        initialValue: [],
    });
    /** List of levels for the active building */
    public readonly ui_options = toSignal(
        this._state.options || of({} as BookingUIOptions),
        { initialValue: {} as BookingUIOptions },
    );
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setDate(d);
    /**  */
    public readonly newBooking = (d?) => this._state.newBooking(d);
    /** List of levels for the active building */
    public readonly updateZones = (zones: string[]) => {
        const zone_ids = this._clean_zone_ids(zones);
        this.zones.set(zone_ids);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                zone_ids: zone_ids.length ? zone_ids.join(',') : null,
            },
            queryParamsHandling: 'merge',
        });
    };
    /** List of levels for the active building */
    public readonly updateTypes = (types: string[]) => {
        this.type_list.set(types);
        this._state.setFilters({
            hide_type: this.types.reduce<any[]>((list, item) => {
                !types.includes(`${item.id}`) ? list.push(item) : '';
                return list;
            }, []),
        });
    };

    public updateUIOptions(options: BookingUIOptions) {
        this._state.setUIOptions(options);
    }

    public get allow_setup_breakdown() {
        return this._settings.get('app.events.allow_setup_breakdown');
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = this._clean_zone_ids(
                        params.get('zone_ids').split(','),
                    );
                    if (zones.length) {
                        this.zones.set(zones);
                        const level = this._org.levelWithID(zones);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                    }
                }
            }),
        );
        this.updateTypes(this.type_list());
    }

    private _clean_zone_ids(zones: string[] = []) {
        return (zones || []).filter((zone_id) => !!zone_id);
    }
}
