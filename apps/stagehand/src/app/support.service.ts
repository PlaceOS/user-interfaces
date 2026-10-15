import { effect, inject, Injectable, signal, untracked } from '@angular/core';
import { OrganisationService } from '@placeos/common';
import { querySystems } from '@placeos/ts-client';
import { inGroupScope } from './support-groups';
import { SupportGroupsService } from './support-groups.service';

@Injectable({
    providedIn: 'root',
})
export class SupportService {
    private _org = inject(OrganisationService);
    private _groups = inject(SupportGroupsService);
    /** Counts loads, so a slower earlier one can't overwrite a later one */
    private _load_count = 0;

    public readonly space_list = signal<any[]>([]);

    constructor() {
        // Systems of the selected group, loaded again when it changes
        effect(() => {
            const scope = this._groups.scope();
            const group_id = this._groups.group_id();
            if (!this._groups.scope_ready()) return;
            untracked(() => this._loadSpaces(group_id, scope));
        });
    }

    private async _loadSpaces(
        group_id: string,
        scope: ReturnType<SupportGroupsService['scope']>,
    ) {
        const load = ++this._load_count;
        this.space_list.set([]);
        // a user who is in no group sees no systems
        if (scope && !scope.reachable.size) return;
        await this._org.waitUntilInitialised();
        const response = await querySystems({
            ...(group_id
                ? { group_id }
                : { zone_id: this._org.organisation.id }),
            limit: 5000,
        }).catch(() => ({ data: [] as any[] }));
        if (load !== this._load_count) return;
        this.space_list.set(
            response.data
                .filter((s) => inGroupScope(s.zones || [], scope))
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
