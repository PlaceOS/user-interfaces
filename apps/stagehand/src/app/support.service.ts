import { Injectable, inject } from '@angular/core';
import { OrganisationService, Space } from '@placeos/common';
import { querySystems } from '@placeos/ts-client';
import { catchError, first, map, of, shareReplay, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SupportService {
    private _org = inject(OrganisationService);

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
        map((list) =>
            list.map(
                (_) =>
                    new Space({
                        ..._,
                        camera_url: 'https://office.place.tech/backoffice/',
                        camera_snapshot_url:
                            'https://placeos-dev.aca.im/api/engine/v2/uploads/uploads-ImbLsIL_~G/url',
                    }),
            ),
        ),
        shareReplay(1),
    );

    constructor() {
        this.space_list.subscribe();
    }
}
