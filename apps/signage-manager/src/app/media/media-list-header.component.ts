import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { notifyError } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignageService } from '../signage.service';

function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

@Component({
    selector: 'media-list-header',
    template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">Signage Media</h3>
                <div class="text-sm opacity-60">
                    @if (search()) {
                        {{
                            item_count() +
                                ' of ' +
                                ('COMMON.ITEM_COUNT'
                                    | translate: { count: total_count() })
                        }}
                    } @else {
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    }
                </div>
            </div>
            <div class="w-px flex-1"></div>
            <mat-form-field
                appearance="outline"
                class="no-subscript white order-last w-full sm:order-none sm:flex-1"
            >
                <input
                    matInput
                    placeholder="Search"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    aria-label="Search media"
                />
            </mat-form-field>
            <button
                icon
                type="button"
                matRipple
                customTooltip
                [content]="add_plugin_template"
                class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                matTooltip="Add plugin"
                matTooltipPosition="left"
                aria-label="Add plugin media"
            >
                <icon>extension</icon>
            </button>
            <ng-template #add_plugin_template>
                <div
                    class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                >
                    @if (available_plugins().length) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                [(ngModel)]="selected_plugin"
                                placeholder="Select a plugin"
                                aria-label="Select plugin"
                            >
                                @for (
                                    plugin of available_plugins();
                                    track plugin.id
                                ) {
                                    <mat-option [value]="plugin">
                                        {{ plugin.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <button
                            btn
                            type="button"
                            matRipple
                            class="w-full"
                            [disabled]="!selected_plugin()"
                            (click)="addFromPlugin()"
                        >
                            <icon class="mr-2 text-2xl">add</icon>
                            <div>Add</div>
                        </button>
                    } @else {
                        <p class="text-base-content/60 m-0 text-sm">
                            No plugins available.
                        </p>
                    }
                </div>
            </ng-template>
            <button
                icon
                type="button"
                matRipple
                customTooltip
                [content]="add_link_template"
                class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                matTooltip="Add from link"
                matTooltipPosition="left"
                aria-label="Add media from link"
            >
                <icon>link</icon>
            </button>
            <ng-template #add_link_template>
                <div
                    class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                >
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            placeholder="URL"
                            [(ngModel)]="link"
                            aria-label="Media URL"
                        />
                    </mat-form-field>
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-full"
                        (click)="addFromLink()"
                    >
                        <icon class="mr-2 text-2xl">add</icon>
                        <div>Add</div>
                    </button>
                </div>
            </ng-template>
            <button
                icon
                type="button"
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                matTooltip="Upload media"
                matTooltipPosition="left"
                aria-label="Upload media file"
                (click)="upload_input.click()"
            >
                <icon>add</icon>
            </button>
            <input
                #upload_input
                type="file"
                class="sr-only"
                [attr.accept]="file_accept"
                aria-label="Upload media file"
                (change)="previewFile($event)"
            />
        </div>
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe,
    ],
})
export class MediaListHeaderComponent {
    private readonly _service = inject(SignageService);
    private readonly _media = toSignal(this._service.filtered_media, {
        initialValue: [],
    });
    private readonly _all_media = toSignal(this._service.media, {
        initialValue: [],
    });
    private readonly _plugins = toSignal(this._service.plugins, {
        initialValue: [],
    });
    public readonly link = signal('');
    public readonly selected_plugin = signal<any>(null);
    public readonly available_plugins = computed(() => this._plugins());
    public readonly item_count = computed(() => this._media().length);
    public readonly total_count = computed(() => this._all_media().length);
    public readonly search = this._service.search_term;
    public readonly file_accept = this._service.media_upload_accept;

    public readonly previewFile = (event) =>
        this._service.previewFileFromInput(event);

    public async addFromLink() {
        const link = this.link().trim();
        if (!link) return;
        const is_valid = isValidUrl(link);
        if (!is_valid) {
            notifyError('Supplied URL is not valid.');
            return;
        }
        await this._service.addMediaFromLink(link);
        this.link.set('');
    }

    public async addFromPlugin() {
        const plugin = this.selected_plugin();
        if (!plugin) return;
        await this._service.addMediaFromPlugin(plugin);
        this.selected_plugin.set(null);
    }
}
