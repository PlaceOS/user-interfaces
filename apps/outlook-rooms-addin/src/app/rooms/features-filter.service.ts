import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FeaturesFilterService {
    _features: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    readonly features$: Observable<any> = this._features.asObservable();

    set features(feature) {
        this._features.next(feature);
    }

    get features() {
        return this._features.getValue();
    }

    Features = [
        { name: 'Video Conference (VC)', id: '', value: false },
        { name: 'Conference Phone', id: '', value: false },
        { name: 'Wireless Content Sharing', id: '', value: false },
        { name: 'Video Wall', id: '', value: false },
        { name: 'Whiteboard', id: '', value: false },
        { name: 'Jamboard', id: '', value: false },
    ];

    constructor() {
        this.features = of(this.Features);
    }
}
