import { Injectable } from '@angular/core';
import { predictableRandomInt } from '@placeos/common';
import { MOCK_STAFF } from 'libs/mocks/src/lib/api/users.data';
import { MOCK_LEVELS } from 'libs/mocks/src/lib/api/zone.data';
import { BehaviorSubject } from 'rxjs';

export interface ContactEvent {
    id: string;
    date: number;
    user_id: string;
    user: string;
    location_id: string;
    location_name: string;
    contact_id: string;
    contact: string;
    distance: number;
}

@Injectable({
    providedIn: 'root',
})
export class ContactTracingStateService {
    private _events = new BehaviorSubject<ContactEvent[]>(
        new Array(20).fill(0).map((_, idx) => {
            const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
            const contact = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
            return {
                id: `contact-${idx}`,
                date: Date.now(),
                user_id: user.id,
                user: user.name,
                contact_id: contact.id,
                contact: contact.name,
                location_id: '1',
                location_name: MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)].name,
                distance: predictableRandomInt(10, 2)
            };
        })
    );

    public readonly events = this._events.asObservable();
}
