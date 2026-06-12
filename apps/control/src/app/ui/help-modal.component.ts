import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    SafePipe,
} from '@placeos/components';

import { marked } from 'marked';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'help-modal',
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col items-center overflow-hidden rounded-sm sm:h-[80vh] sm:w-[80vw] sm:flex-row"
        >
            <div sidebar class="bg-base-300 w-full sm:h-full sm:w-64">
                <img
                    auth
                    class="mx-auto my-2 w-48 sm:mt-6 sm:mb-8 sm:w-32"
                    [source]="logo()?.src || logo()"
                />
                <ul class="hidden list-none space-y-2 p-0 pl-4 sm:block">
                    @for (item of items; track item) {
                        <li
                            class="relative flex items-center rounded-l-3xl py-2 pl-4"
                            [class.active]="item.id === active_item().id"
                            (click)="active_item.set(item)"
                        >
                            @if (item.id === active_item().id) {
                                <div
                                    class="bg-base-100 absolute top-1/2 right-0 h-22 w-6 -translate-y-1/2 overflow-hidden"
                                >
                                    <div
                                        class="bg-base-300 absolute top-0 right-0 h-12 w-12 -translate-y-1/2 rounded-full"
                                    ></div>
                                    <div
                                        class="bg-base-300 absolute right-0 bottom-0 h-12 w-12 translate-y-1/2 rounded-full"
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
                        <mat-select
                            [ngModel]="active_item()"
                            (ngModelChange)="active_item.set($event)"
                        >
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
                class="bg-base-100 h-1/2 w-full flex-1 overflow-auto p-4 sm:h-full sm:w-1/2 sm:p-8"
                [innerHTML]="content() | safe"
            ></div>
            <button
                icon
                matRipple
                class="absolute top-2 right-2"
                mat-dialog-close
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [
        `
            li.active {
                background-color: var(--base-100);
                color: var(--base-content);
                overflow: visible !important;
            }
        `,
    ],
    imports: [
        MatDialogModule,
        SafePipe,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatRippleModule,
        IconComponent,
        AuthenticatedImageDirective,
    ],
})
export class HelpModalComponent {
    private _data = inject<{
        items: {
            id: string;
            title: string;
            content: string;
            icon?: string;
        }[];
        active_id?: string;
    }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly items = this._data.items;
    public readonly active_item = signal(
        this.items?.find((_) => _.id === this._data.active_id) ||
            this.items?.[0] || { id: '', content: `` },
    );

    public readonly logo = toSignal(
        this._org.active_building.pipe(
            debounceTime(500),
            map(
                () =>
                    (this._settings.theme === 'dark'
                        ? this._settings.get('app.logo_dark')
                        : this._settings.get('app.logo_light')) || {},
            ),
        ),
    );

    public readonly content = computed(() => {
        const item = this.active_item();
        return item?.content ? (marked(item.content) as string) : '';
    });
}
