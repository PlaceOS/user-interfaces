import { Injectable, inject, signal } from '@angular/core';
import { OrganisationService } from '@placeos/common';
import { querySystems } from '@placeos/ts-client';

@Injectable({
    providedIn: 'root',
})
export class SupportService {
    private _org = inject(OrganisationService);

    public readonly space_list = signal<any[]>([]);

    constructor() {
        this._loadSpaces();
    }

    private async _loadSpaces() {
        await this._org.waitUntilInitialised();
        const response = await querySystems({
            zone_id: this._org.organisation.id,
            limit: 5000,
        }).catch(() => ({ data: [] as any[] }));
        this.space_list.set(
            response.data
                .filter(
                    (s) =>
                        s.support_url ||
                        s.camera_url ||
                        s.timetable_url ||
                        this._camera_snapshot_urls(s).length,
                )
                .map((space) => ({
                    ...space,
                    camera_snapshot_urls: this._camera_snapshot_urls(space),
                })),
        );
    }

    private _camera_snapshot_urls(space: {
        camera_snapshot_url?: string;
        camera_snapshot_urls?: string[];
    }): string[] {
        return space.camera_snapshot_urls?.filter((url) => !!url) || [];
    }
}
