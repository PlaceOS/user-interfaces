import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '@placeos/components';
import { PlaceZone } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';

@Component({
    selector: 'signage-group-zone-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Add Zone</h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                aria-label="Close add zone dialog"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [ngModel]="search()"
                    (ngModelChange)="setSearch($event)"
                    placeholder="Search zones"
                    aria-label="Search zones"
                />
            </mat-form-field>
            @if (zones().length > 0) {
                @for (zone of zones(); track zone.id) {
                    <button
                        type="button"
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="zone"
                    >
                        <icon class="text-base-content/60 shrink-0 text-2xl"
                            >layers</icon
                        >
                        <div class="min-w-0 flex-1">
                            <div class="truncate">
                                {{ zone.display_name || zone.name }}
                            </div>
                            @if (zone.description) {
                                <div
                                    class="text-base-content/70 truncate text-xs"
                                >
                                    {{ zone.description }}
                                </div>
                            }
                        </div>
                    </button>
                }
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl"
                        >layers_clear</icon
                    >
                    <div class="text-base-content/70">No zones found</div>
                </div>
            }
        </main>
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
    ],
})
export class SignageGroupZoneSelectModalComponent {
    private readonly _service = inject(SignageService);
    private readonly _data = inject<{ exclude_ids?: string[] }>(
        MAT_DIALOG_DATA,
    );

    public readonly search = signal('');
    public readonly zones = signal<PlaceZone[]>([]);

    constructor() {
        this.searchZones();
    }

    public setSearch(value: string) {
        this.search.set(value);
        this.searchZones();
    }

    private async searchZones() {
        const exclude_ids = new Set(this._data.exclude_ids || []);
        const zones = await lastValueFrom(
            this._service.searchGroupZones(this.search()),
        );
        this.zones.set(zones.filter((zone) => !exclude_ids.has(zone.id)));
    }
}
