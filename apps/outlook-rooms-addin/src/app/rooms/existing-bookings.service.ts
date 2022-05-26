import { Injectable } from '@angular/core';
import { BaseClass } from '@placeos/common';

@Injectable({
    providedIn: 'root',
})
export class ExistingBookingsService extends BaseClass {
    constructor() {
        super();
    }
}
