import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
    AsyncHandler,
    OrganisationService,
    nextValueFrom,
} from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { first } from 'rxjs/operators';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-map',
    template: `
        <div
            class="bg-base-200 relative my-2 h-[calc(100%-1.5rem)] w-full rounded-xl shadow-sm"
        >
            <interactive-map
                [src]="url | async"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [labels]="labels | async"
                [options]="{ controls: true }"
                [focus]="locate"
            ></interactive-map>
        </div>
    `,
    styles: [``],
    providers: [ExploreParkingService],
    imports: [CommonModule, InteractiveMapComponent],
})
export class ParkingMapComponent extends AsyncHandler implements OnInit {
    private _explore = inject(ExploreStateService);
    private _ex_parking = inject(ExploreParkingService);
    private _parking = inject(ParkingStateService);
    private _org = inject(OrganisationService);

    public url = this._explore.map_url;
    public styles = this._explore.map_styles;
    public features = this._explore.map_features;
    public actions = this._explore.map_actions;
    public labels = this._explore.map_labels;

    public locate = '';

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'parking_level',
            this._parking.options.subscribe((_) => {
                const level_list = this._org.levelsForBuilding();
                const zone =
                    _.zones[0] ||
                    level_list.find((_) => _.tags.includes('parking'))?.id;
                this._explore.setLevel(zone);
            }),
        );
        this.subscription('parking_poll', this._ex_parking.startPolling());
        this.subscription(
            'parking_options',
            this._parking.options.subscribe((_) => {
                this._ex_parking.setOptions(_);
            }),
        );
        this._ex_parking.on_book = async (space) => {
            const options = await nextValueFrom(this._parking.options);
            await this._parking.editReservation(undefined, {
                space: {
                    ...space,
                    zone: this._org.levelWithID([space.zone_id || space.zone]),
                },
                date: options.date,
            });
        };
    }
}
