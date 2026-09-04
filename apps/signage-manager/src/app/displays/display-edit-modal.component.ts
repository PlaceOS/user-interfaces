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
import { MatSelectModule } from '@angular/material/select';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { PlaceSystem, PlaceZone, QueryResponse } from '@placeos/ts-client';
import { byDisplayName, PagedSearch } from '../shared/paged-search';
import { ZoneSelectTreeComponent } from '../shared/zone-select-tree.component';

export interface DisplayEditModalData {
    display: PlaceSystem;
    default_zone_ids: string[];
    roots: () => PlaceZone[];
    zones: () => PlaceZone[];
    load_children: (parent_id: string) => Promise<PlaceZone[]>;
    query_zones: (
        search: string,
        parent_id: string,
    ) => QueryResponse<PlaceZone> | null;
    onAdd: (data: Partial<PlaceSystem>) => Promise<PlaceSystem>;
    onEdit: (id: string, data: Partial<PlaceSystem>) => Promise<PlaceSystem>;
}

interface DisplayEditFormModel {
    name: string;
    description: string;
    orientation: PlaceSystem['orientation'];
    zones: string[];
}

@Component({
    selector: 'display-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (display.id
                    ? 'SIGNAGE_MANAGER.DISPLAY_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_DISPLAY'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveDisplay()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.DISPLAY_SAVING' | translate) : ''
            "
        >
            <form class="flex flex-col gap-4">
                <div>
                    <label for="name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.DISPLAY_NAME_ARIA' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            class="min-h-24"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div>
                    <label for="orientation">{{
                        'SIGNAGE_MANAGER.ORIENTATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [formField]="form.orientation"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.DISPLAY_ORIENTATION_ARIA'
                                    | translate
                            "
                        >
                            <mat-option value="unspecified">{{
                                'SIGNAGE_MANAGER.ORIENTATION_UNSPECIFIED'
                                    | translate
                            }}</mat-option>
                            <mat-option value="landscape">{{
                                'SIGNAGE_MANAGER.ORIENTATION_LANDSCAPE'
                                    | translate
                            }}</mat-option>
                            <mat-option value="portrait">{{
                                'SIGNAGE_MANAGER.ORIENTATION_PORTRAIT'
                                    | translate
                            }}</mat-option>
                            <mat-option value="square">{{
                                'SIGNAGE_MANAGER.ORIENTATION_SQUARE' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <section>
                    <h3 class="mb-1 font-medium">
                        {{ 'SIGNAGE_MANAGER.DISPLAY_ZONES' | translate }}
                    </h3>
                    <p class="mb-3 text-sm opacity-70">
                        {{ 'SIGNAGE_MANAGER.DISPLAY_ZONES_HINT' | translate }}
                    </p>
                    @if (selected_zones().length) {
                        <div class="mb-3 flex flex-wrap gap-2">
                            @for (zone of selected_zones(); track zone.id) {
                                <div
                                    class="bg-base-200 flex items-center gap-1 rounded-full py-1 pr-1 pl-3 text-sm"
                                >
                                    <span>{{
                                        zone.display_name ||
                                            zone.name ||
                                            zone.id
                                    }}</span>
                                    <button
                                        icon
                                        default
                                        type="button"
                                        class="rounded-full"
                                        (click)="removeZone(zone.id)"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.REMOVE_DISPLAY_ZONE'
                                                | translate
                                                    : {
                                                          name:
                                                              zone.display_name ||
                                                              zone.name ||
                                                              zone.id,
                                                      }
                                        "
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                            }
                        </div>
                    }
                    <div
                        class="border-base-300 h-80 overflow-auto rounded-lg border p-2"
                    >
                        <zone-select-tree
                            [list]="zone_list"
                            [roots]="roots()"
                            [load_children]="loadChildren"
                            [scoped_search]="true"
                            [(selected)]="selected_zone"
                            (zoneSelected)="addZone($event)"
                        />
                    </div>
                </section>
            </form>
        </fullscreen-modal-shell>
    `,
    imports: [
        FormField,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FullscreenModalShellComponent,
        IconComponent,
        TranslatePipe,
        ZoneSelectTreeComponent,
    ],
})
export class DisplayEditModalComponent {
    private readonly _data = inject<DisplayEditModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref = inject(
        MatDialogRef<DisplayEditModalComponent>,
    );
    private readonly _selected_zone_items = signal<PlaceZone[]>([]);

    public readonly display = this._data.display;
    public readonly loading = signal(false);
    public readonly roots = this._data.roots;
    public readonly selected_zone = linkedSignal<PlaceZone[], PlaceZone | null>(
        {
            source: this.roots,
            computation: (roots, previous) =>
                previous?.value || roots[0] || null,
        },
    );
    public readonly zone_list = new PagedSearch<PlaceZone>((search) => {
        const parent_id = this.selected_zone()?.id;
        return parent_id && search.trim()
            ? this._data.query_zones(search, parent_id)
            : null;
    }, byDisplayName);
    public readonly loadChildren = this._data.load_children;
    public readonly model = signal<DisplayEditFormModel>({
        name: this.display.display_name || '',
        description: this.display.description || '',
        orientation: this.display.orientation || 'unspecified',
        zones: this.display.id
            ? [...this.display.zones]
            : [...this._data.default_zone_ids],
    });
    public readonly form = form(this.model, (path) => required(path.name));
    public readonly selected_zones = computed(() => {
        const selected_zone_ids = this.model().zones;
        const zones = new Map(
            [...this._data.zones(), ...this._selected_zone_items()].map(
                (zone) => [zone.id, zone],
            ),
        );
        return selected_zone_ids.map(
            (zone_id) => zones.get(zone_id) || new PlaceZone({ id: zone_id }),
        );
    });

    public addZone(zone: PlaceZone) {
        this._selected_zone_items.update((zones) => [
            ...zones.filter((item) => item.id !== zone.id),
            zone,
        ]);
        this.model.update((model) => ({
            ...model,
            zones: model.zones.includes(zone.id)
                ? model.zones
                : [...model.zones, zone.id],
        }));
    }

    public removeZone(zone_id: string) {
        this.model.update((model) => ({
            ...model,
            zones: model.zones.filter((id) => id !== zone_id),
        }));
    }

    public async saveDisplay() {
        await submit(this.form, async () => {
            this.loading.set(true);
            this._dialog_ref.disableClose = true;
            const form_value = this.model();
            const data: Partial<PlaceSystem> = {
                name: `SIGNAGE ${form_value.name}`,
                display_name: form_value.name,
                description: form_value.description,
                orientation: form_value.orientation,
                signage: true,
                zones: form_value.zones,
                ...(this.display.id ? { version: this.display.version } : {}),
            };
            try {
                const result = this.display.id
                    ? await this._data.onEdit(this.display.id, data)
                    : await this._data.onAdd(data);
                this._dialog_ref.disableClose = false;
                this._dialog_ref.close(result);
            } finally {
                this.loading.set(false);
                this._dialog_ref.disableClose = false;
            }
        });
    }
}
