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
    public updated_spaces_emitter: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    features_sub: Subscription;
    _selected_features: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    selected_features$: Observable<any> =
        this._selected_features.asObservable();
    get selected_features() {
        return this._selected_features.getValue();
    }

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
        this.selected_features$ = this.features$.pipe(
            map((arr) => arr.filter((item) => item.value == true))
        );
        await this.selected_features$.pipe(take(1)).toPromise();
        this.selected_features$?.subscribe(this._selected_features);
    }
    async applyFilter() {
        await this.selected_features$.pipe(take(1)).toPromise();

        const requested_features = await this.sortSelectedFeatures(
            this.selected_features
        );

        this.updated_spaces$ = this.spaces$.pipe(
            map((spaces: Space[]) =>
                spaces.filter((space: Space) => {
                    return this._sort_and_join(space.feature_list).includes(
                        requested_features
                    );
                })
            )
        );
        await this.updated_spaces$?.pipe(take(1)).toPromise();
        this.updated_spaces_emitter.next(true);
    }

    _sort_and_join(array: string[]): string {
        return array?.sort().join();
    }

    async sortSelectedFeatures(array: any[]) {
        let features_array = await array?.map((item) => item.id);
        return this._sort_and_join(features_array);
    }

    clearFilter() {
        this._selected_features.next(null);
        this.room_features?.map((feature) => (feature.value = false));
        this._features.next(this.room_features);
        this.updated_spaces_emitter.next(false);
    }

    OnDestroy() {
        this.features_sub?.unsubscribe();
    }
}
