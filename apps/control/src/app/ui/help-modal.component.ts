import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';

import { marked } from 'marked';

@Component({
    selector: 'help-modal',
    template: `
        <div
            class="flex flex-col sm:flex-row items-center bg-base-100 rounded overflow-hidden sm:h-[80vh] sm:w-[80vw] sm:relative absolute inset-0 sm:inset-auto"
        >
            <div sidebar class="bg-base-300 sm:h-full w-full sm:w-64">
                <img [src]="logo?.src" class="w-32 mx-auto mt-6 sm:mb-8" />
                <ul class="list-none p-0 pl-4 space-y-2 hidden sm:block">
                    <li
                        class="flex items-center rounded-l-3xl pl-4 py-2 relative"
                        *ngFor="let item of items"
                        [class.active]="item.id === active_item.id"
                        (click)="active_item = item"
                    >
                        <div
                            class="w-6 h-[5.5rem] absolute bg-base-100 right-0 top-1/2 -translate-y-1/2 overflow-hidden"
                            *ngIf="item.id === active_item.id"
                        >
                            <div
                                class="w-12 h-12 absolute top-0 right-0 -translate-y-1/2 bg-base-300 rounded-full"
                            ></div>
                            <div
                                class="w-12 h-12 absolute bottom-0 right-0 translate-y-1/2 bg-base-300 rounded-full"
                            ></div>
                        </div>
                        <app-icon>{{ item.icon || 'help' }}</app-icon>
                        <div class="ml-4">{{ item.title }}</div>
                        <div
                            class="absolute inset-0 overflow-hidden rounded-3xl"
                            matRipple
                        ></div>
                    </li>
                </ul>
                <div class="px-2 pb-2 w-full dark">
                    <mat-form-field
                        class="block sm:hidden h-12 w-full"
                        appearance="outline"
                    >
                        <mat-select [(ngModel)]="active_item">
                            <mat-option
                                *ngFor="let item of items"
                                [value]="item"
                            >
                                {{ item.title }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div
                content
                class="overflow-auto flex-1 h-1/2 w-full sm:w-1/2 sm:h-full p-4 sm:p-8 bg-base-100"
                [innerHTML]="content | safe"
            ></div>
            <button
                icon
                matRipple
                class="absolute top-2 right-2"
                mat-dialog-close
            >
                <app-icon>close</app-icon>
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
})
export class HelpModalComponent {
    public active_item = { id: '', content: `` };
    public readonly items = this._data.items;

    /** Application logo to display */
    public get logo() {
        return this._settings.get('theme') === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

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
        private _settings: SettingsService
    ) {
        this.active_item =
            this.items?.find((_) => _.id === this._data.active_id) ||
            this.items[0] ||
            this.active_item;
    }
}
