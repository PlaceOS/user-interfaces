import { Injectable } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { querySystems } from '@placeos/ts-client';
import { catchError, first, map, of, shareReplay, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SupportService {
    public readonly space_list = this._org.initialised.pipe(
        first((_) => _),
        switchMap(() =>
            querySystems({
                zone_id: this._org.organisation.id,
                limit: 5000,
            }).pipe(
                map((r) => r.data),
                catchError(() => of([])),
            ),
        ),
        map((spaces) => spaces.filter((s) => s.support_url)),
        shareReplay(1),
    );

    constructor(private _org: OrganisationService) {
        this.space_list.subscribe();
    }
}
