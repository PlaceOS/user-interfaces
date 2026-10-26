import {
    Component,
    computed,
    inject,
    linkedSignal,
    signal,
} from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { PlaceZone, QueryResponse } from '@placeos/ts-client';
import { byDisplayName, PagedSearch } from '../shared/paged-search';
import { ZoneSelectTreeComponent } from '../shared/zone-select-tree.component';

export interface ZoneEditModalData {
    zone: PlaceZone;
    default_parent_id?: string;
    roots: () => PlaceZone[];
    zones: () => PlaceZone[];
    load_children: (parent_id: string) => Promise<PlaceZone[]>;
    query_zones: (
        search: string,
        parent_id: string,
    ) => QueryResponse<PlaceZone> | null;
    onSave: (
        zone: PlaceZone,
        data: ZoneEditFormModel,
    ) => Promise<PlaceZone | null>;
}

export interface ZoneEditFormModel {
    display_name: string;
    description: string;
    parent_id: string;
}

@Component({
    selector: 'zone-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (zone.id
                    ? 'SIGNAGE_MANAGER.ZONE_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_ZONE'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveZone()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.ZONE_SAVING' | translate) : ''
            "
        >
            <form class="flex flex-col gap-4">
                <div>
                    <label for="signage-zone-name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            id="signage-zone-name"
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.display_name"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.ZONE_NAME_ARIA' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div>
                    <label for="signage-zone-description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            id="signage-zone-description"
                            class="min-h-24"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <section>
                    <h3 class="mb-1 font-medium">
                        {{ 'SIGNAGE_MANAGER.ZONE_PARENT' | translate
                        }}<span required>*</span>
                    </h3>
                    <p class="mb-3 text-sm opacity-70">
                        {{ 'SIGNAGE_MANAGER.ZONE_PARENT_HINT' | translate }}
                    </p>
                    @if (selected_parent()) {
                        <div
                            class="bg-base-200 mb-3 rounded-lg px-3 py-2 text-sm"
                        >
                            {{ 'SIGNAGE_MANAGER.ZONE_PARENT' | translate }}:
                            {{
                                selected_parent()?.display_name ||
                                    selected_parent()?.name ||
                                    selected_parent()?.id
                            }}
                        </div>
                    }
                    <div
                        class="border-base-300 h-80 overflow-auto rounded-lg border p-2"
                    >
                        <zone-select-tree
                            [list]="zone_list"
                            [roots]="roots()"
                            [load_children]="loadChildren"
                            [exclude_ids]="zone.id ? [zone.id] : []"
                            [scoped_search]="true"
                            [(selected)]="selected_parent"
                            (zoneSelected)="selectParent($event)"
                        />
                    </div>
                    @if (form.parent_id().touched() && !model().parent_id) {
                        <div class="text-error mt-1 text-sm">
                            {{
                                'SIGNAGE_MANAGER.ZONE_PARENT_REQUIRED'
                                    | translate
                            }}
                        </div>
                    }
                </section>
            </form>
        </fullscreen-modal-shell>
    `,
    imports: [
        FormField,
        MatFormFieldModule,
        MatInputModule,
        FullscreenModalShellComponent,
        TranslatePipe,
        ZoneSelectTreeComponent,
    ],
})
export class ZoneEditModalComponent {
    private readonly _data = inject<ZoneEditModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref = inject(MatDialogRef<ZoneEditModalComponent>);

    public readonly zone = this._data.zone;
    public readonly loading = signal(false);
    public readonly roots = this._data.roots;
    public readonly available_zones = computed(() => [
        ...this.roots(),
        ...this._data.zones(),
    ]);
    public readonly model = signal<ZoneEditFormModel>({
        display_name: this.zone.display_name || this.zone.name || '',
        description: this.zone.description || '',
        parent_id: this.zone.parent_id || this._data.default_parent_id || '',
    });
    public readonly form = form(this.model, (path) => {
        required(path.display_name);
        required(path.parent_id);
    });
    public readonly selected_parent = linkedSignal<
        PlaceZone[],
        PlaceZone | null
    >({
        source: this.available_zones,
        computation: (zones, previous) => {
            const parent_id = this.model().parent_id;
            return (
                zones.find((zone) => zone.id === parent_id) ||
                previous?.value ||
                (parent_id ? new PlaceZone({ id: parent_id }) : null)
            );
        },
    });
    public readonly zone_list = new PagedSearch<PlaceZone>((search) => {
        const parent_id = this.selected_parent()?.id;
        return parent_id && search.trim()
            ? this._data.query_zones(search, parent_id)
            : null;
    }, byDisplayName);
    public readonly loadChildren = this._data.load_children;

    public selectParent(zone: PlaceZone) {
        this.model.update((model) => ({ ...model, parent_id: zone.id }));
    }

    public async saveZone() {
        await submit(this.form, async () => {
            this.loading.set(true);
            this._dialog_ref.disableClose = true;
            try {
                const result = await this._data.onSave(this.zone, this.model());
                if (result) this._dialog_ref.close(result);
            } finally {
                this.loading.set(false);
                this._dialog_ref.disableClose = false;
            }
        });
    }
}
