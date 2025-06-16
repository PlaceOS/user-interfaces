import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { marked } from 'marked';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'help-modal',
    template: `
        <div
            class="flex h-screen w-screen flex-col items-center overflow-hidden rounded bg-base-100 sm:h-[80vh] sm:w-[80vw] sm:flex-row"
        >
            <div sidebar class="w-full bg-base-300 sm:h-full sm:w-64">
                <img
                    auth
                    class="mx-auto my-2 w-48 sm:mb-8 sm:mt-6 sm:w-32"
                    [source]="(logo | async)?.src || (logo | async)"
                />
                <ul class="hidden list-none space-y-2 p-0 pl-4 sm:block">
                    @for (item of items; track item) {
                        <li
                            class="relative flex items-center rounded-l-3xl py-2 pl-4"
                            [class.active]="item.id === active_item.id"
                            (click)="active_item = item"
                        >
                            @if (item.id === active_item.id) {
                                <div
                                    class="absolute right-0 top-1/2 h-[5.5rem] w-6 -translate-y-1/2 overflow-hidden bg-base-100"
                                >
                                    <div
                                        class="absolute right-0 top-0 h-12 w-12 -translate-y-1/2 rounded-full bg-base-300"
                                    ></div>
                                    <div
                                        class="absolute bottom-0 right-0 h-12 w-12 translate-y-1/2 rounded-full bg-base-300"
                                    ></div>
                                </div>
                            }
                            <icon>{{ item.icon || 'help' }}</icon>
                            <div class="ml-4">{{ item.title }}</div>
                            <div
                                class="absolute inset-0 overflow-hidden rounded-3xl"
                                matRipple
                            ></div>
                        </li>
                    }
                </ul>
                <div class="dark w-full px-2 pb-2">
                    <mat-form-field
                        class="block h-12 w-full sm:hidden"
                        appearance="outline"
                    >
                        <mat-select [(ngModel)]="active_item">
                            @for (item of items; track item) {
                                <mat-option [value]="item">
                                    {{ item.title }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div
                content
                class="h-1/2 w-full flex-1 overflow-auto bg-base-100 p-4 sm:h-full sm:w-1/2 sm:p-8"
                [innerHTML]="content | safe"
            ></div>
            <button
                icon
                matRipple
                class="absolute right-2 top-2"
                mat-dialog-close
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [
        `
            li.active {
                background-color: var(--b1);
                color: var(--bc);
                overflow: visible !important;
            }
        `,
    ],
    standalone: false,
})
export class HelpModalComponent {
    public active_item = { id: '', content: `` };
    public readonly items = this._data.items;

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    public get content() {
        return this.active_item?.content
            ? marked(this.active_item.content)
            : '';
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            items: { id: string; title: string; content: string }[];
            active_id?: string;
        },
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {
        this.active_item =
            this.items?.find((_) => _.id === this._data.active_id) ||
            this.items[0] ||
            this.active_item;
    }
}
