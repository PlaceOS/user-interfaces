import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageService } from '../signage.service';
import { IntersectDirective } from './intersect.directive';
import { byDisplayName, PagedSearch } from './paged-search';

@Component({
    selector: 'zone-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.ADD_ZONE_TITLE' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="'SIGNAGE_MANAGER.CLOSE_ADD_ZONE' | translate"
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
                    [ngModel]="list.search()"
                    (ngModelChange)="list.search.set($event)"
                    [placeholder]="'SIGNAGE_MANAGER.SEARCH_ZONES' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_ZONES' | translate
                    "
                />
            </mat-form-field>
            @if (list.items().length > 0) {
                @for (zone of list.items(); track zone.id) {
                    <button
                        type="button"
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="zone.id"
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
                @if (list.has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="list.loadMore()"
                    ></div>
                }
            } @else if (list.loading()) {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">layers</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_ZONES' | translate }}
                    </div>
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
        TranslatePipe,
        IntersectDirective,
    ],
})
export class ZoneSelectModalComponent {
    private readonly _service = inject(SignageService);

    public readonly list = new PagedSearch<any>(
        (search) => this._service.querySignageZones(search),
        byDisplayName,
    );
}
