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
            <h2 class="mx-2" i18n>{{ spaces?.length || 0 }} { spaces?.length, plural, =1 { Resource } other { Resources } }</h2>
            <!-- <div class="flex items-center space-x-2 text-primary">
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
            </div> -->
        </div>
        <div class="flex-1 h-1/2 w-full space-y-2 overflow-auto pt-4 divide-y divide-gray-300">
            <ng-container *ngIf="spaces?.length; else empty_state">
                <div
                    class="flex flex-col items-center mx-2 pt-4 space-y-2 relative"
                    item
                    *ngFor="let item of spaces"
                >
                    <div class="flex w-full items-center space-x-2 relative">
                        <div class="w-24 h-20 overflow-hidden rounded relative">
                            <img
                                *ngIf="(item | space | async)?.images?.length"
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full"
                                [src]="(item | space | async)?.images[0]"
                            />
                        </div>
                        <div class="h-20">
                            <div class="truncate mb-4">
                                {{
                                    (item | space | async)?.display_name ||
                                        (item | space | async)?.name
                                }}
                            </div>
                            <div
                                class="flex items-center text-xs opacity-60 truncate space-x-2 mb-2"
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
                                <div i18n>
                                    {{ (item | space | async)?.capacity || 2 }}
                                    { (item | space | async)?.capacity || 2, plural, =1 { Person } other { People } }
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        mat-button
                        class="w-full inverse"
                        (click)="newSpaceMeeting(item)"
                        i18n
                    >
                        Book
                    </button>
                    <button
                        mat-icon-button
                        [matMenuTriggerFor]="menu"
                        class="absolute top-2 right-0 bg-gray-200 dark:bg-neutral-600 rounded !m-0"
                    >
                        <app-icon>more_horiz</app-icon>
                    </button>
                    <mat-menu #menu="matMenu" xPosition="before">
                        <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                        >
                            <app-icon class="text-2xl">info</app-icon>
                            <div i18n>View Details</div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="toggleFavourite('space', id)"
                            class="flex items-center space-x-2"
                        >
                            <app-icon class="text-2xl">cancel</app-icon>
                            <div i18n>Remove Favourite</div>
                        </button>
                    </mat-menu>
                </div>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <img src="assets/icons/no-favourites.svg" />
                <p class="opacity-60 text-sm text-center" i18n>
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

    public toggleFavourite(type: 'space' | 'desk' | 'parking', id: string) {
        const fav_list = type === 'space' ? this.spaces : [];
        const key = type === 'space' ? 'favourite_spaces' : '';
        const new_state = !fav_list.includes(id);
        if (new_state) {
            this._settings.saveUserSetting(key, [...fav_list, id]);
        } else {
            this._settings.saveUserSetting(
                key,
                fav_list.filter((_) => _ !== id)
            );
        }
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
