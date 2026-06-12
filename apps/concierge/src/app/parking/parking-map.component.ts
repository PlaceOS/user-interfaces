import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { ParkingOptions, ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-map',
    template: `
        <div
            class="bg-base-200 relative my-2 h-[calc(100%-1.5rem)] w-full rounded-xl shadow-sm"
        >
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
    imports: [InteractiveMapComponent],
})
export class ParkingMapComponent extends AsyncHandler implements OnInit {
    private _explore = inject(ExploreStateService);
    private _ex_parking = inject(ExploreParkingService);
    private _parking = inject(ParkingStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private readonly _default_options: ParkingOptions = {
        date: Date.now(),
        search: '',
        zones: [],
        period: 'day',
        request_filter: 'all',
    };
    private readonly _ready = signal(false);

    public readonly options = toSignal(this._parking.options, {
        initialValue: this._default_options,
    });
    public readonly url = this._explore.map_url;
    public readonly raw_styles = this._explore.map_styles;
    public readonly features = this._explore.map_features;
    public readonly actions = this._explore.map_actions;
    public readonly labels = this._explore.map_labels;
    public readonly disable_styles = this._settings.signal(
        'parking.disable_styles',
        false,
    );
    public readonly styles = computed(() => {
        const style_map = { ...this.raw_styles() };
        if (!this.disable_styles()) return style_map;
        for (const feature of this.features()) {
            if (feature.location) delete style_map[`#${feature.location}`];
        }
        return style_map;
    });

    public locate = '';

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
        await firstTruthyValueFrom(this._org.initialised);
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
