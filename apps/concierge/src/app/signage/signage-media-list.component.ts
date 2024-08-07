import { Component, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';
import { SignageMedia } from '@placeos/ts-client';

@Component({
    selector: 'signage-media-list',
    template: `
        <div class="px-4 pb-4 pt-2">
            <h3 class="text-xl font-medium text-center mb-2">Media</h3>
            <mat-form-field appearance="outline" class="w-full no-subscript">
                <input
                    matInput
                    placeholder="Search..."
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
        </div>
        @if ((media | async)?.length > 0) {
            <div class="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
                @for (media of media | async; track media.id) {
                    <div
                        class="bg-base-100 rounded-lg shadow flex flex-col items-center justify-center p-3 hover:opacity-80"
                    >
                        <div
                            preview
                            class="relative w-full h-36 bg-base-200 rounded-lg overflow-hidden"
                        >
                            <img
                                auth
                                [source]="media.thumbnail_id"
                                *ngIf="media.thumbnail_id"
                                class="w-full h-full object-contain"
                            />
                            <div
                                class="absolute top-1 left-1 px-2 py-1 text-xs rounded-lg bg-neutral text-neutral-content capitalize font-mono"
                            >
                                {{ media.type }}
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between w-full relative top-1"
                        >
                            <div
                                class="text-base-content truncate flex-1 w-1/2"
                            >
                                {{ media.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                aria-label="Media Actions"
                            >
                                <app-icon>more_vert</app-icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl"
                                            >visibility</app-icon
                                        >
                                        <div class="pr-2">
                                            Preview Media Item
                                        </div>
                                    </div>
                                </button>
                                <button mat-menu-item (click)="removeItem(row)">
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl text-error">
                                            delete
                                        </app-icon>
                                        <div class="pr-2">
                                            Remove Media Item
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30 mx-auto"
            >
                <app-icon class="text-6xl">hide_image</app-icon>
                <p>No media found.</p>
            </div>
        }
    `,
    styles: [``],
})
export class SignageMediaListComponent {
    public readonly search = new BehaviorSubject<string>('');
    public readonly media = combineLatest([
        this.search,
        this._state.media,
    ]).pipe(
        map(([search, media]) =>
            media.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly removeItem = async (item: SignageMedia) =>
        this._state.removeMedia(item);

    constructor(private _state: SignageStateService) {}
}
