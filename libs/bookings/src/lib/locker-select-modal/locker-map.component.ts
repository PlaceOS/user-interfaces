import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    inject,
} from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { ExploreDeskInfoComponent } from 'libs/explore/src/lib/explore-desk-info.component';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { BookingAsset, BookingFormService } from '../booking-form.service';
import { loadLockerBanks, loadLockers } from '../booking.utilities';

@Component({
    selector: 'locker-map',
    template: `
        <div class="w-full border-b border-base-200 bg-base-100 p-2">
            <mat-form-field
                levels
                appearance="outline"
                class="no-subscript w-full"
                *ngIf="(levels | async)?.length"
            >
                <mat-select
                    name="location"
                    [(ngModel)]="level"
                    (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                    [ngModelOptions]="{ standalone: true }"
                    [placeholder]="'COMMON.LEVEL_ANY' | translate"
                >
                    <mat-option
                        *ngFor="let lvl of levels | async"
                        [value]="lvl"
                    >
                        <div class="flex flex-col-reverse">
                            <div class="text-xs opacity-30" *ngIf="use_region">
                                {{ (lvl.parent_id | building)?.display_name }}
                                <span class="opacity-0"> - </span>
                            </div>
                            <div>
                                {{ lvl.display_name || lvl.name }}
                            </div>
                        </div>
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div class="relative w-full flex-1">
            <interactive-map
                [src]="map_url"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                background: rgba(0, 0, 0, 0.05);
                display: flex;
                flex-direction: column;
            }

            button {
                border-radius: 0;
            }
        `,
    ],
    imports: [
        CommonModule,
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class LockerMapComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    @Input() public is_displayed = false;
    @Input() public active = '';
    @Output() public onSelect = new EventEmitter<BookingAsset>();

    public readonly lockers_banks$ = loadLockerBanks(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        () => this._settings.get('app.use_region'),
    );

    public readonly lockers$ = loadLockers(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        this.lockers_banks$,
        () => this._settings.get('app.use_region'),
    );

    public readonly locker_banks = combineLatest([
        this._state.options,
        this._state.available_resources,
        this.lockers_banks$,
        this.lockers$,
    ]).pipe(
        map(([{ show_fav, show_accessible }, resources, banks]) => {
            return banks
                .filter(
                    (i) =>
                        resources.find((_: any) => _.bank_id === i.id) &&
                        (!show_accessible ||
                            i.lockers.find((_) => _.accessible)),
                )
                .map((bank) => ({
                    ...bank,
                    available: resources.filter(
                        (_: any) => _.bank_id === bank.id,
                    ).length,
                    lockers: bank.lockers.map((_) => ({
                        ..._,
                        map_id: bank.map_id || bank.id,
                        zone: bank.zone,
                    })),
                }));
        }),
    );

    public readonly loading = this._state.loading;

    public zoom = 1;
    public center = { x: 0.5, y: 0.5 };
    public level?: BuildingLevel;
    public coordinates = undefined;

    private _change = new BehaviorSubject(0);

    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            const viewable_levels = level_list.filter(
                (lvl) => !lvl.tags.includes('parking'),
            );
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
    );

    public readonly setOptions = (o) => this._state.setOptions(o);

    public get map_url() {
        return this.level?.map_id || '';
    }

    public readonly actions = this.locker_banks.pipe(
        map((banks) =>
            banks.map((locker) => ({
                id: locker.map_id || locker.id,
                action: ['touchend', 'mouseup'],
                callback: () => this.selectLocker(locker as any),
            })),
        ),
    );

    public readonly features = combineLatest([
        this.locker_banks,
        this._state.available_resources,
    ]).pipe(
        map(([lockers]) => {
            return this._settings.get('app.lockers.hide_user')
                ? []
                : lockers.map((locker) => ({
                      location: locker.id,
                      content: ExploreDeskInfoComponent,
                      full_size: true,
                      no_scale: true,
                      data: {
                          id: locker.map_id || locker.id,
                          map_id: locker.name,
                          name: locker.name || locker.map_id,
                          user: this._state.resourceUserName(locker.id),
                      },
                      z_index: 20,
                  }));
        }),
    );

    public readonly styles = combineLatest([
        this.locker_banks,
        this._state.available_resources,
        this._change,
    ]).pipe(
        map(([banks, free_lockers]) =>
            banks.reduce((styles, bank) => {
                const colours = this._settings.get('app.explore.colors') || {};
                const status =
                    this.active === bank.id
                        ? 'active'
                        : free_lockers.find((_) =>
                                bank.lockers.find((lkr) => lkr.id === _.id),
                            )
                          ? 'free'
                          : this._state.resourceUserName(bank.id)
                            ? 'busy'
                            : 'not-bookable';
                styles[`#${bank.map_id || bank.id}`] = {
                    fill:
                        status === 'active'
                            ? '#512DA8'
                            : colours[`locker-${status}`] ||
                              colours[`${status}`] ||
                              DEFAULT_COLOURS[`${status}`],
                };
                return styles;
            }, {}),
        ),
    );

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor() {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'levels_update',
            this._state.options.subscribe(({ zone_id }) => {
                const level = this._org.levelWithID([zone_id]);
                if (level) this.level = level;
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.active) this._change.next(Date.now());
    }

    public selectLocker(locker: BookingAsset) {
        this.onSelect.emit(locker);
    }

    public setLevel(level: BuildingLevel) {
        this.setOptions({ zone_id: level?.id });
        const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
        if (bld) {
            const [latitude, longitude] = bld.location
                .split(',')
                .map((_) => parseFloat(_));
            this.coordinates = { latitude, longitude };
        }
        this.level = level;
    }

    public setZoom(new_zoom: number) {
        this.zoom = Math.max(0.5, Math.min(10, new_zoom));
    }

    public resetMap() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
    }
}
