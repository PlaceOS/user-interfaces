import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    selected_features;
    _features: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    readonly features$: Observable<any> = this._features.asObservable();

    set features(feature) {
        this._features.next(feature);
    }

    get features() {
        return this._features.getValue();
    }

    Features = [
        { name: 'Video Conference (VC)', id: 'VidConf', value: false },
        { name: 'Conference Phone', id: '', value: false },
        { name: 'Wireless Content Sharing', id: '', value: false },
        { name: 'Video Wall', id: '', value: false },
        { name: 'Whiteboard', id: 'Whiteboard', value: false },
        { name: 'Jamboard', id: '', value: false },
        { name: 'Projector', id: 'Projector', value: false },
    ];

    constructor() {
        this.features = of(this.Features);
    }

    async applyFeatureFilter() {
        this.selected_features = await this.features.pipe(take(1)).toPromise();
        this.selected_features = this.filter(this.selected_features);
    }

    filter(arr) {
        return arr.filter((el) => el.value === true);
    }
}
