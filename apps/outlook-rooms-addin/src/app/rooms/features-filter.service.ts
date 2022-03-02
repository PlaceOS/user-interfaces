import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    selected_features$: Observable<any>;
    features_list: Array<string> = [];
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
    ]);

    constructor() {
        this.features$ = this.Features;

        this.selected_features$ = this.features$.pipe(
            map((arr) => arr.filter((item) => item.value == true))
        );
    }
}
