import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { InteractiveMapComponent, TranslatePipe } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-map',
    template: `
        <div
            class="bg-base-200 relative mx-8 my-2 h-[calc(100%-1.5rem)] w-[calc(100%-4rem)] rounded-xl shadow-sm"
        >
            <div
                class="bg-base-100 border-base-300 absolute top-4 right-4 z-20 rounded-lg border p-2 shadow-lg"
            >
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-label>
                        {{ 'COMMON.AVAILABILITY' | translate }}
                    </mat-label>
                    <mat-select
                        [value]="selected_hour()"
                        (selectionChange)="setAvailabilityHour($event.value)"
                        aria-label="Parking availability time"
                    >
                        <mat-option value="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-option>
                        @for (option of hour_options(); track option.hour) {
                            <mat-option [value]="option.hour">
                                {{ option.date | date: 'h a' }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <interactive-map
                [src]="url()"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [labels]="labels()"
                [options]="{ controls: true }"
                [focus]="locate"
            ></interactive-map>
        </div>
    `,
    styles: [``],
    providers: [ExploreParkingService],
    imports: [
        CommonModule,
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        TranslatePipe,
    ],
})
export class ParkingMapComponent extends AsyncHandler implements OnInit {
    private _explore = inject(ExploreStateService);
    private _ex_parking = inject(ExploreParkingService);
    private _parking = inject(ParkingStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private readonly _ready = signal(false);

    public readonly options = this._parking.options;
    public readonly url = this._explore.map_url;
    public readonly raw_styles = this._explore.map_styles;
    public readonly features = this._explore.map_features;
    public readonly actions = this._explore.map_actions;
    public readonly labels = this._explore.map_labels;
    public readonly disable_styles = this._settings.signal(
        'parking.disable_styles',
        false,
    );
    public readonly selected_hour = computed(() =>
        this.options().all_day === false
            ? new Date(this.options().date).getHours()
            : 'all_day',
    );
    public readonly hour_options = computed(() => {
        const bookable_hours =
            this._settings.get('app.parking.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours');
        const start = bookable_hours?.start ?? 0;
        const end = bookable_hours?.end ?? 24;
        const date = new Date(this.options().date);
        return Array.from({ length: end - start }, (_, index) => {
            const hour = start + index;
            const option_date = new Date(date);
            option_date.setHours(hour, 0, 0, 0);
            return { hour, date: option_date.valueOf() };
        });
    });
    public readonly styles = computed(() => {
        const style_map = { ...this.raw_styles() };
        if (!this.disable_styles()) return style_map;
        for (const feature of this.features()) {
            if (feature.location) delete style_map[`#${feature.location}`];
        }
        return style_map;
    });

    public locate = '';

    public readonly setAvailabilityHour = (hour: number | 'all_day') => {
        const date = new Date(this.options().date);
        if (hour !== 'all_day') date.setHours(hour, 0, 0, 0);
        this._parking.setOptions({
            date: date.valueOf(),
            all_day: hour === 'all_day',
            duration: 60,
        });
    };

    constructor() {
        super();
        effect(() => {
            if (!this._ready()) return;
            const options = this.options();
            const level_list = this._org.levelsForBuilding();
            const zone =
                options.zones[0] ||
                level_list.find((level) => level.tags.includes('parking'))?.id;
            this._explore.setLevel(zone);
            this._ex_parking.setOptions(options);
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this._ready.set(true);
        this.subscription('parking_poll', this._ex_parking.startPolling());
        this._ex_parking.on_book = async (space) => {
            await this._parking.editReservation(undefined, {
                space: {
                    ...space,
                    zone: this._org.levelWithID([space.zone_id || space.zone]),
                },
                date: this.options().date,
            });
        };
    }
}
