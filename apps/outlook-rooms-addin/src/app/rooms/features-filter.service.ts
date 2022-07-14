import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { take, map, filter, switchMap } from 'rxjs/operators';
import { Space } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    public spaces$: Observable<Space[]> = this._state.available_spaces;
    public updated_spaces$: Observable<Space[]>;
    features_sub: Subscription;
    _selected_features: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    selected_features$: Observable<any> =
        this._selected_features.asObservable();
    get selected_features() {
        return this._selected_features.getValue();
    }
    // features_list: Array<string> = [];
    // filtered_spaces: Space[] = [];

    _features: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    features$: Observable<any> = this._features.asObservable();

    set features(feature) {
        this._features.next(feature);
    }

    get features() {
        return this._features.getValue();
    }

    room_features: any[] = [
        { name: 'Video Conference (VC)', id: 'VidConf', value: false },
        { name: 'Conference Phone', id: 'ConfPhone', value: false },
        { name: 'Wireless Content Sharing', id: 'Wireless', value: false },
        { name: 'Video Wall', id: 'VidWall', value: false },
        { name: 'Whiteboard', id: 'Whiteboard', value: false },
        { name: 'Jamboard', id: 'Jamboard', value: false },
        { name: 'Projector', id: 'Projector', value: false },
        { name: 'Views', id: 'Views', value: false },
    ];

    constructor(private _state: EventFormService) {
        this._features.next(this.room_features);
    }

    async getSelectedFeatures() {
        this.selected_features$ = await this.features$.pipe(
            map((arr) => arr.filter((item) => item.value == true))
        );
    }
    async applyFilter() {
        this.selected_features$.subscribe((i) => console.log(i));

        this.spaces$.subscribe((i) => console.log(i));
        this.updated_spaces$ = this.spaces$.pipe(
            map((spaces: Space[]) =>
                spaces.filter((space: Space) => {
                    this.features_sub = this.selected_features?.subscribe(
                        (features) =>
                            features.map((feature) => {
                                this._sort(space?.features).includes(
                                    feature?.id
                                );
                            })
                    );
                })
            )
        );
    }

    _sort(array: string[]): string {
        return array.sort().join();
    }
    OnDestroy() {
        this.features_sub.unsubscribe();
    }
}
