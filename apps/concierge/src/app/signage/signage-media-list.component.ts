import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';
import { SignageMedia } from '@placeos/ts-client';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
    selector: 'signage-media-list',
    template: `
        <div class="p-4">
            <h3 class="text-xl font-medium text-center mb-4">Media</h3>
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
            <div
                class="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3 p-4"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media | async"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media of media | async; track media.id) {
                    <div
                        class="bg-base-100 rounded-lg flex flex-col items-center justify-center p-3 hover:opacity-80 border border-base-300"
                        cdkDrag
                    >
                        <div
                            class="min-h-10 min-w-10 border-4 rounded-2xl border-base-400 bg-base-300 border-dashed flex items-center justify-center"
                            *cdkDragPlaceholder
                        >
                            <app-icon class="text-2xl text-base-100">
                                add
                            </app-icon>
                        </div>
                        <div
                            preview
                            class="relative w-full h-36 bg-base-200 rounded-lg overflow-hidden"
                        >
                            <img
                                auth
                                [source]="media.thumbnail_url"
                                *ngIf="media.thumbnail_url"
                                class="w-full h-full object-contain rounded-lg"
                            />
                            <div
                                class="absolute top-1 left-1 px-2 py-1 text-xs rounded-lg bg-neutral text-neutral-content capitalize font-mono"
                            >
                                {{ media.media_type }}
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between w-full relative top-1"
                        >
                            <div
                                class="text-base-content truncate flex-1 w-1/2"
                                [matTooltip]="media.name"
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
                                    (click)="previewItem(media)"
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
                                <button
                                    mat-menu-item
                                    (click)="removeItem(media)"
                                >
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
                class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30 mx-auto flex-1"
            >
                <app-icon class="text-6xl">hide_image</app-icon>
                <p>No media found.</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
})
export class SignageMediaListComponent {
    @Input() public playlist_count = 0;
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

    public playlist_ids: string[] = [];

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly removeItem = async (item: SignageMedia) =>
        this._state.removeMedia(item);

    constructor(private _state: SignageStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist_count) {
            this.playlist_ids = new Array(this.playlist_count)
                .fill(0)
                .map((_, idx) => `playlist-${idx}`);
        }
    }

    public drop(event) {}
}
