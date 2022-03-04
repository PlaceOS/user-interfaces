import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { Space } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    public spaces$ = this._state.available_spaces;
    selected_features$: Observable<any>;
    features_list: Array<string> = [];
    filtered_spaces: Space[] = [];
    _features: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    features$: Observable<any> = this._features.asObservable();

    set features(feature) {
        this._features.next(feature);
    }

    get features() {
        return this._features.getValue();
    }

    Features = of([
        { name: 'Video Conference (VC)', id: 'VidConf', value: false },
        { name: 'Conference Phone', id: 'ConfPhone', value: false },
        { name: 'Wireless Content Sharing', id: 'Wireless', value: false },
        { name: 'Video Wall', id: 'VidWall', value: false },
        { name: 'Whiteboard', id: 'Whiteboard', value: false },
        { name: 'Jamboard', id: 'Jamboard', value: false },
        { name: 'Projector', id: 'Projector', value: false },
        { name: 'Views', id: 'Views', value: false },
    ]);

    constructor(private _state: EventFormService) {
        this.features$ = this.Features;
        this._getSelectedFeatures();
    }

    private _getSelectedFeatures() {
        this.selected_features$ = this.features$.pipe(
            map((arr) => arr.filter((item) => item.value == true))
        );
    }
    async applyFilter() {
        let selected_features_list = await this.selected_features$
            .pipe(take(1))
            .toPromise();

        console.log(selected_features_list, 'select feats');

        this.features_list = selected_features_list.map((item) => item.id);

        let current_spaces = await this.spaces$.pipe(take(1)).toPromise();

        current_spaces?.forEach((space: Space) => {
            this.filtered_spaces = [];
            if (space) {
                const sorted_feat_list: String = space?.feature_list
                    .sort()
                    .join();
                const sorted_selected_features: string = this.features_list
                    .sort()
                    .join();

                console.log(sorted_feat_list, 'space');
                console.log(sorted_selected_features, 'feat list');

                console.log(
                    sorted_feat_list.includes(sorted_selected_features),
                    'second'
                );

                if (sorted_feat_list.includes(sorted_selected_features)) {
                    this.filtered_spaces.push(space);
                }
            }
        });
        console.log(this.filtered_spaces, 'filt spaces');
        return of(this.filtered_spaces);
    }
}
