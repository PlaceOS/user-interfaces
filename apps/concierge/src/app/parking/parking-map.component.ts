import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { first } from 'rxjs/operators';
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
    public readonly url = toSignal(this._explore.map_url, { initialValue: '' });
    public readonly styles = toSignal(this._explore.map_styles, {
        initialValue: { text: { display: '' } } as any,
    });
    public readonly features = toSignal(this._explore.map_features, {
        initialValue: [],
    });
    public readonly actions = toSignal(this._explore.map_actions, {
        initialValue: [],
    });
    public readonly labels = toSignal(this._explore.map_labels, {
        initialValue: [],
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
        await this._org.initialised.pipe(first((_) => _)).toPromise();
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
