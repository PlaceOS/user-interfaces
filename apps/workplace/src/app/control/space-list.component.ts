import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler, OrganisationService, Space } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { ControlSpaceListItemComponent } from './list-item.component';

@Component({
    selector: 'a-control-space-list',
    template: `
        <div
            class="border-base-300 bg-base-100 flex w-full items-center justify-center border-b p-2"
        >
            <mat-form-field
                overlay
                class="h-12 rounded-sm"
                appearance="outline"
            >
                <icon class="text-xl" matPrefix>search</icon>
                <input matInput [(ngModel)]="search" placeholder="Search..." />
                @if (loading()) {
                    <mat-spinner
                        matSuffix
                        class="top-2"
                        [diameter]="32"
                    ></mat-spinner>
                }
            </mat-form-field>
        </div>
        @let spaces = filtered_spaces();
        @if (spaces.length) {
            <div class="flex w-full flex-1 flex-col overflow-auto p-4">
                @for (space of spaces; track space.id) {
                    <a-control-space-list-item
                        [space]="space"
                    ></a-control-space-list-item>
                }
            </div>
        } @else {
            <div class="flex flex-col items-center space-y-4 p-8 opacity-30">
                <icon class="text-6xl">no_meeting_room</icon>
                <p>
                    {{
                        search()
                            ? ' No matches for "' + search() + '"'
                            : 'No controllable spaces'
                    }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }

            mat-form-field {
                width: 48rem;
                max-width: calc(100% - 2rem);
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        ControlSpaceListItemComponent,
        MatProgressSpinnerModule,
    ],
})
export class ControlSpaceListComponent extends AsyncHandler {
    private _spaces = inject(SpacesService);
    private _org = inject(OrganisationService);

    /** Filter string */
    public readonly search = signal('');
    /** List of controlable spaces for the active building */
    public readonly space_list = computed(() => {
        const bld = this._org.active_building();
        if (!bld) return [];
        const all_spaces = this._spaces.all_spaces as any;
        const list =
            typeof all_spaces === 'function'
                ? all_spaces()
                : all_spaces?.getValue?.() || [];
        return list
            .filter((s) => !!s.support_url && s.zones.includes(bld.id))
            .sort((a, b) => this.sortSpaces(a, b));
    });
    // Filtered list of controlable spaces
    public readonly filtered_spaces = computed(() => {
        const list = this.space_list();
        const search = (this.search() || '').toLowerCase();
        if (!search) return list;
        return list.filter((space) => {
            const bld = this._org.buildings.find(
                (building) => building.id === space.level.parent_id,
            );
            const space_name = (space.name || '').toLowerCase();
            const level_name = (
                (space.level ? space.level.name : '') || ''
            ).toLowerCase();
            const bld_name = ((bld ? bld.name : '') || '').toLowerCase();
            return (
                space_name.indexOf(search) >= 0 ||
                (level_name && level_name.indexOf(search) >= 0) ||
                (bld_name && bld_name.indexOf(search) >= 0)
            );
        });
    });
    /** Whether space list is being filtered */
    public readonly loading = computed(() => {
        const initialised = this._spaces.initialised as any;
        return typeof initialised === 'function'
            ? !initialised()
            : !initialised?.getValue?.();
    });

    private sortSpaces(first: Space, second: Space) {
        const bld_a = this._org.buildings.find(
            (building) => building.id === first.level?.parent_id,
        );
        const space_a_name = (first.name || '').toLowerCase();
        const level_a_name = (
            (first.level ? first.level.name : '') || ''
        ).toLowerCase();
        const bld_a_name = (bld_a?.name || '').toLowerCase();
        const bld_b = this._org.buildings.find(
            (building) => building.id === second.level?.parent_id,
        );
        const space_b_name = (second.name || '').toLowerCase();
        const level_b_name = (
            (second.level ? second.level.name : '') || ''
        ).toLowerCase();
        const bld_b_name = (bld_b?.name || '').toLowerCase();
        return (
            bld_a_name.localeCompare(bld_b_name) ||
            level_a_name.localeCompare(level_b_name) ||
            space_a_name.localeCompare(space_b_name)
        );
    }
}
