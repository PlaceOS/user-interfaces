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
                console.log(space, 'space');
                if (space) {
                    if (
                        JSON.stringify(space?.feature_list.sort()) ==
                            JSON.stringify(selected_features_list.sort()) ||
                        space?.feature_list
                            .sort()
                            .join()
                            .includes(selected_features_list.sort().join())
                    ) {
                        this.filtered_spaces.push(space);
                    }
                }
            });

            return of(this.filtered_spaces);
        }

        // if (this.features_list && this.features_list.length == 0) {
        //     return of(current_spaces);
        // }
    }
}
