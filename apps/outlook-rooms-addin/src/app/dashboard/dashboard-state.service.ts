import { Injectable } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Space } from '@placeos/spaces';

@Injectable({
    providedIn: 'root',
})
export class DashboardStateService extends BaseClass {
    private _free_spaces: BehaviorSubject<Space[]> = new BehaviorSubject<
        Space[]
    >([]);
    readonly free_spaces$: Observable<Space[]> =
        this._free_spaces.asObservable();

    private set spaces(spaces: Space[]) {
        this._free_spaces.next(spaces);
    }

    private get spaces() {
        return this._free_spaces.getValue();
    }

    constructor() {
        super();
    }
}
