import { Injectable, Signal, inject, resource, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    BuildingLevel,
    OrganisationService,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { requestSpacesForZone } from '@placeos/events';
import { PlaceZone, removeZone } from '@placeos/ts-client';
import { LevelMapEditorModalComponent } from './level-map-editor-modal.component';
import { LevelModalComponent } from './level-modal.component';

export interface LevelListOptions {
    zone?: string;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LevelManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private _options = signal<LevelListOptions>({});

    public readonly options = this._options.asReadonly();

    public readonly level_list = this._org.level_list;

    private readonly _filtered_levels = resource({
        params: () => ({
            buildings: this._org.building_list(),
            levels: this.level_list(),
            options: this._options(),
        }),
        defaultValue: [] as BuildingLevel[],
        loader: async ({ params }) => {
            const { buildings, options } = params;
            let list = params.levels.filter((_) =>
                buildings.find((bld) => bld.id === _.parent_id),
            );
            if (options.zone) {
                list = list.filter((_) => _.parent_id === options.zone);
            }
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase()),
                );
            }
            for (const level of list) {
                const parent = this._org.buildings.find(
                    (bld) => bld.id === level.parent_id,
                );
                if (parent) {
                    (level as any).building =
                        parent.display_name || parent.name;
                }
                (level as any).room_count = await nextValueFrom(
                    requestSpacesForZone(level.id),
                ).then((spaces) => spaces.length);
            }
            return list;
        },
    });
    public readonly filtered_levels: Signal<BuildingLevel[]> =
        this._filtered_levels.value;

    public setFilters(options: Partial<LevelListOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public setSearchString(search: string) {
        this._options.update((current) => ({ ...current, search }));
    }

    public editLevel(level: PlaceZone = new PlaceZone()) {
        const ref = this._dialog.open(LevelModalComponent, {
            data: level,
        });
        ref.afterClosed().subscribe((data) => {
            if (data) this._org.addZone(data);
        });
    }

    public editLevelMap(level: BuildingLevel) {
        const ref = this._dialog.open(LevelMapEditorModalComponent, {
            data: level,
        });
        ref.afterClosed().subscribe((data) => {
            if (data) this._org.addZone(data);
        });
    }

    public async removeLevel(level: BuildingLevel) {
        const ref = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.LEVELS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.LEVELS_REMOVE_MSG', {
                    name: level.name,
                }),
                icon: { content: 'delete_forever' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            this._dialog,
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading(i18n('APP.CONCIERGE.LEVELS_REMOVE_LOADING'));
        await removeZone(level.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.LEVELS_REMOVE_ERROR', { error: e }),
            );
            ref.close();
            throw e;
        });
        this._org.removeZone({ id: level.id, tags: ['level'] } as any);
        notifySuccess(i18n('APP.CONCIERGE.LEVELS_REMOVE_SUCCESS'));
        ref.close();
    }
}
