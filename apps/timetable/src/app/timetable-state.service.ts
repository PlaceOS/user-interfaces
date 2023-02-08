import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { getModule } from '@placeos/ts-client';
import { isSameDay } from 'date-fns';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TimetableStateService extends AsyncHandler {
    public bookingsFor(id: string) {
        return this._listenToBinding(id, 'bookings').pipe(
            map((_) =>
                (_ || [])
                    .map((b) => new CalendarEvent(b))
                    .filter((_) => isSameDay(Date.now(), _.date))
            )
        );
    }

    private _listenToBinding(id: string, name: string, mod_name = 'Bookings') {
        const mod = getModule(id, mod_name);
        const binding = mod.binding(name);
        this.subscription(`binding:${id}:${name}`, binding.bind());
        return binding.listen();
    }
}
