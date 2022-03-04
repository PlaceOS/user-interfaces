import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { Space } from '@placeos/spaces';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    selected_features$: Observable<any>;
    features_list: Array<string> = [];
    filtered_spaces: Space[] = [];
    _features: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    readonly features$: Observable<any> = this._features.asObservable();

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

    constructor() {
        this.features$ = this.Features;

        this.selected_features$ = this.features$.pipe(
            map((arr) => arr.filter((item) => item.value == true))
        );
    }

    async applyFilter(current_spaces: Space[]) {
        console.log(current_spaces, 'param');
        let selected_features_list = await this.selected_features$
            .pipe(take(1))
            .toPromise();

        selected_features_list.length > 0
            ? (this.features_list = selected_features_list.map(
                  (item) => item.id
              ))
            : [];

        if (this.features_list && this.features_list.length > 0) {
            current_spaces.forEach((space: Space) => {
                if (space) {
                    const sorted_feat_list: String = space?.feature_list
                        .sort()
                        .join();
                    const sorted_selected_features: string = this.features_list
                        .sort()
                        .join();

                    console.log(sorted_feat_list, 'space');
                    console.log(sorted_selected_features[0], 'feat list');

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

        // if (this.features_list && this.features_list.length == 0) {
        //     return of(current_spaces);
        // }
    }
}
