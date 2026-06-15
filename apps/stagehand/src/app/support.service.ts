import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { OrganisationService } from '@placeos/common';
import { PlaceSystem, querySystems } from '@placeos/ts-client';
import { catchError, first, from, map, of, shareReplay, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SupportService {
    private _org = inject(OrganisationService);

    public readonly space_list = toObservable(this._org.initialised).pipe(
        first((_) => _),
        switchMap(() =>
            from(
                querySystems({
                    zone_id: this._org.organisation.id,
                    limit: 5000,
                }),
            ).pipe(
                map((r) => r.data),
                catchError(() => of([] as PlaceSystem[])),
            ),
        ),
        map((spaces) =>
            spaces.filter(
                (s) =>
                    s.support_url ||
                    s.camera_url ||
                    s.timetable_url ||
                    this._camera_snapshot_urls(s).length,
            ),
        ),
        map((spaces) =>
            spaces.map((space) => ({
                ...space,
                camera_snapshot_urls: this._camera_snapshot_urls(space),
            })),
        ),
        shareReplay(1),
    );

    constructor() {
        this.space_list.subscribe();
    }

    private _camera_snapshot_urls(space: {
        camera_snapshot_url?: string;
        camera_snapshot_urls?: string[];
    }): string[] {
        return space.camera_snapshot_urls?.filter((url) => !!url) || [];
    }
}
