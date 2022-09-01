import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

const EMPTY = [];

@Component({
    selector: 'landing-favourites',
    template: `
        <div
            class="flex items-center justify-between py-2 mx-2 border-b border-gray-200"
        >
            <h2 class="mx-2">{{ spaces?.length || 0 }} Resources</h2>
            <div class="flex items-center space-x-2 text-primary">
                <button
                    mat-icon-button
                    class="!border !border-solid !border-primary"
                >
                    <app-icon>search</app-icon>
                </button>
                <button
                    mat-icon-button
                    class="!border !border-solid !border-primary"
                >
                    <app-icon>filter_list</app-icon>
                </button>
            </div>
        </div>
        <div class="flex-1 h-1/2 w-full space-y-4 overflow-auto pt-4">
            <ng-container *ngIf="spaces?.length; else empty_state">
                <div
                    class="flex flex-col items-center px-4 space-y-2 relative"
                    user
                    *ngFor="let item of spaces"
                >
                    <div class="flex w-full items-center space-x-2">
                        <div class="w-24 h-20 overflow-hidden rounded relative">
                            <img
                                *ngIf="(item | space | async)?.images?.length"
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full"
                                [src]="(item | space | async)?.images[0]"
                            />
                        </div>
                        <div class="space-y-1">
                            <div class="truncate">
                                {{
                                    (item | space | async)?.display_name ||
                                        (item | space | async)?.name
                                }}
                            </div>
                            <div
                                class="flex items-center text-xs opacity-60 truncate space-x-2"
                            >
                                <app-icon class="text-blue-500">place</app-icon>
                                <div>
                                    {{
                                        (item | space | async)?.level
                                            ?.display_name
                                    }}
                                </div>
                            </div>
                            <div
                                class="flex items-center text-xs opacity-60 truncate space-x-2"
                            >
                                <app-icon class="text-blue-500"
                                    >people</app-icon
                                >
                                <div>
                                    {{
                                        (item | space | async)?.capacity || 2
                                    }}
                                    People
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        mat-button
                        class="w-full inverse"
                        (click)="newSpaceMeeting(item)"
                    >
                        Book
                    </button>
                </div>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <img src="assets/icons/no-favourites.svg" />
                <p class="opacity-60 text-sm text-center">
                    You have no favourites hearted. To add a favourites heart a
                    room, desk or parking space.
                </p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [user]:hover button {
                opacity: 1;
            }

            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    providers: [SpacePipe],
})
export class LandingFavouritesComponent extends BaseClass {
    public get spaces() {
        return this._settings.get<string[]>('favourite_spaces') || EMPTY;
    }

    constructor(
        private _settings: SettingsService,
        private _space_pipe: SpacePipe,
        private _event_form: EventFormService,
        private _router: Router
    ) {
        super();
    }

    public async newSpaceMeeting(id: string) {
        const space = await this._space_pipe.transform(id);
        if (!space) return;
        this._event_form.newForm();
        this._event_form.form.patchValue({ resources: [space] });
        if (this._settings.get('app.new_features')) {
            this._router.navigate(['/book', 'meeting']);
        } else {
            this._router.navigate(['/book', 'spaces']);
        }
    }
}
