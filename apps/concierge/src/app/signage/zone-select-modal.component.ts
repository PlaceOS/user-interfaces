import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { queryZones } from '@placeos/ts-client';
import {
    BehaviorSubject,
    catchError,
    debounceTime,
    map,
    of,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs';

@Component({
    selector: 'app-zone-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.ZONE_SELECT_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [ngModel]="search_term.getValue()"
                    (ngModelChange)="search_term.next($event)"
                    placeholder="Search zones"
                />
            </mat-form-field>
            @let zone_list = zones | async;
            @if (zone_list.length > 0) {
                @for (zone of zone_list; track zone) {
                    <button
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center justify-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="zone.id"
                    >
                        <div class="flex-1">
                            <div class="">
                                {{ zone.display_name || zone.name }}
                            </div>
                            <div class="text-xs opacity-30">
                                {{ zone.id }}
                            </div>
                        </div>
                        @for (tag of zone.tags | slice: 0 : 3; track $index) {
                            <div
                                class="bg-info text-info-content rounded-lg px-2 py-1 font-mono text-[0.625rem]"
                            >
                                {{ tag }}
                            </div>
                        }
                    </button>
                }
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-8xl opacity-30">layers_clear</icon>
                    <div class="opacity-30">No zones found</div>
                </div>
            }
        </main>
    `,
    styles: ``,
    imports: [
        CommonModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
        FormsModule,
    ],
})
export class ZoneSelectModalComponent {
    private _data: { ignore: string[]; query: Record<string, any> } =
        inject(MAT_DIALOG_DATA);

    public readonly query = this._data.query || {};
    public readonly ignore = this._data.ignore || [];
    public readonly search_term = new BehaviorSubject<string>('');
    public readonly zones = this.search_term.pipe(
        debounceTime(300),
        switchMap((term) =>
            queryZones({ ...this.query, q: term, limit: 100 }).pipe(
                map((_) => _.data),
                catchError(() => of([])),
            ),
        ),
        map((zones) => zones.filter((zone) => !this.ignore.includes(zone.id))),
        startWith([]),
        shareReplay(1),
    );
}
