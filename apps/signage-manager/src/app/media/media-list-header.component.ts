import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifyError } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { AiImageService } from '../ai/ai-image.service';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { MediaAddModalComponent } from '../shared/media-add-modal.component';
import { SignageService } from '../signage.service';
import {
    DEFAULT_MEDIA_VIEW,
    MEDIA_EXPIRY_FILTERS,
    MEDIA_SORTS,
    MEDIA_TYPE_FILTERS,
    type MediaExpiryFilter,
    type MediaSort,
    type MediaTypeFilter,
    type MediaViewOptions,
} from './media-view.util';

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
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-1 border-b px-4 py-2 shadow sm:flex-nowrap sm:gap-2"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.MEDIA_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            <div
                class="border-base-300 bg-base-200 flex items-center rounded-lg border p-1"
                role="group"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.MEDIA_VIEW_ARIA' | translate
                "
            >
                @for (option of view_options; track option.mode) {
                    <button
                        icon
                        type="button"
                        matRipple
                        class="h-10 w-10 rounded-md"
                        [class.bg-base-100]="view_mode() === option.mode"
                        [class.shadow]="view_mode() === option.mode"
                        [class.text-base-content/60]="
                            view_mode() !== option.mode
                        "
                        [matTooltip]="option.label | translate"
                        [attr.aria-pressed]="view_mode() === option.mode"
                        [attr.aria-label]="option.label | translate"
                        (click)="view_mode.set(option.mode)"
                    >
                        <icon>{{ option.icon }}</icon>
                    </button>
                }
            </div>
            <button
                icon
                default
                type="button"
                matRipple
                class="relative text-xl"
                [matMenuTriggerFor]="view_menu"
                [matTooltip]="'SIGNAGE_MANAGER.MEDIA_SORT_FILTER' | translate"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.MEDIA_SORT_FILTER' | translate
                "
            >
                <icon>filter_list</icon>
                @if (view_active()) {
                    <span
                        class="bg-primary absolute top-1.5 right-1.5 h-2 w-2 rounded-full"
                    ></span>
                }
            </button>
            <mat-menu #view_menu="matMenu">
                <div class="px-4 pt-2 text-xs font-medium opacity-60">
                    {{ 'SIGNAGE_MANAGER.MEDIA_SORT' | translate }}
                </div>
                @for (sort of sorts; track sort) {
                    <button mat-menu-item (click)="setView({ sort })">
                        <div class="flex items-center gap-2">
                            <icon class="text-xl">{{
                                view().sort === sort ? 'check' : ''
                            }}</icon>
                            {{ sort_labels[sort] | translate }}
                        </div>
                    </button>
                }
                <div class="px-4 pt-2 text-xs font-medium opacity-60">
                    {{ 'SIGNAGE_MANAGER.MEDIA_FILTER_TYPE' | translate }}
                </div>
                @for (type of type_filters; track type) {
                    <button
                        mat-menu-item
                        (click)="
                            setView({
                                type: view().type === type ? null : type,
                            })
                        "
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-xl">{{
                                view().type === type ? 'check' : ''
                            }}</icon>
                            {{ type_labels[type] | translate }}
                        </div>
                    </button>
                }
                <div class="px-4 pt-2 text-xs font-medium opacity-60">
                    {{ 'SIGNAGE_MANAGER.MEDIA_FILTER_EXPIRY' | translate }}
                </div>
                @for (expiry of expiry_filters; track expiry) {
                    <button
                        mat-menu-item
                        (click)="
                            setView({
                                expiry:
                                    view().expiry === expiry ? null : expiry,
                            })
                        "
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-xl">{{
                                view().expiry === expiry ? 'check' : ''
                            }}</icon>
                            {{ expiry_labels[expiry] | translate }}
                        </div>
                    </button>
                }
                @if (view_active()) {
                    <button mat-menu-item (click)="resetView()">
                        <div class="flex items-center gap-2">
                            <icon class="text-xl">restart_alt</icon>
                            {{ 'SIGNAGE_MANAGER.MEDIA_VIEW_RESET' | translate }}
                        </div>
                    </button>
                }
            </mat-menu>
            <mat-form-field
                appearance="outline"
                class="no-subscript toolbar-field white order-last w-full sm:order-0 sm:w-80"
            >
                <input
                    matInput
                    [placeholder]="'SIGNAGE_MANAGER.MEDIA_SEARCH' | translate"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_MEDIA_ARIA' | translate
                    "
                />
            </mat-form-field>
            @if (can_create()) {
                @if (ai_enabled()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        class="text-xl max-sm:hidden"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.AI_CREATE_IMAGE' | translate
                        "
                        matTooltipPosition="left"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.AI_CREATE_IMAGE' | translate
                        "
                        (click)="generateWithAI()"
                    >
                        <icon>auto_awesome</icon>
                    </button>
                }
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    customTooltip
                    [content]="add_plugin_template"
                    class="text-xl max-sm:hidden"
                    [matTooltip]="'SIGNAGE_MANAGER.ADD_PLUGIN' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_PLUGIN_ARIA' | translate
                    "
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
                                    [placeholder]="
                                        'SIGNAGE_MANAGER.SELECT_PLUGIN'
                                            | translate
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA'
                                            | translate
                                    "
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
                                <div>{{ 'COMMON.ADD' | translate }}</div>
                            </button>
                        } @else {
                            <p class="text-base-content/60 m-0 text-sm">
                                {{ 'SIGNAGE_MANAGER.NO_PLUGINS' | translate }}
                            </p>
                        }
                    </div>
                </ng-template>
                <button
                    icon
                    default
                    class="text-xl max-sm:hidden"
                    type="button"
                    matRipple
                    customTooltip
                    [content]="add_link_template"
                    [matTooltip]="'SIGNAGE_MANAGER.ADD_FROM_LINK' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_FROM_LINK_ARIA' | translate
                    "
                >
                    <icon>link</icon>
                </button>
                <ng-template #add_link_template>
                    <div
                        class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                    >
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <input
                                matInput
                                [placeholder]="'COMMON.URL' | translate"
                                [(ngModel)]="link"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.MEDIA_URL_ARIA' | translate
                                "
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
                            <div>{{ 'COMMON.ADD' | translate }}</div>
                        </button>
                    </div>
                </ng-template>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl max-sm:hidden"
                    [matTooltip]="'SIGNAGE_MANAGER.UPLOAD_MEDIA' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA' | translate
                    "
                    (click)="upload_input.click()"
                >
                    <icon>add</icon>
                </button>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="desktop-hidden text-xl"
                    [matMenuTriggerFor]="actions_menu"
                    [matTooltip]="'SIGNAGE_MANAGER.MEDIA_ACTIONS' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.MEDIA_ACTIONS' | translate
                    "
                >
                    <icon>add</icon>
                </button>
                <mat-menu #actions_menu="matMenu">
                    @if (ai_enabled()) {
                        <button
                            mat-menu-item
                            type="button"
                            (click)="generateWithAI()"
                        >
                            <div class="flex items-center gap-2">
                                <icon class="text-2xl">auto_awesome</icon>
                                <div>
                                    {{
                                        'SIGNAGE_MANAGER.AI_CREATE_IMAGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <button
                        mat-menu-item
                        type="button"
                        (click)="openAdd('plugin')"
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-2xl">extension</icon>
                            <div>
                                {{ 'SIGNAGE_MANAGER.ADD_PLUGIN' | translate }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        type="button"
                        (click)="openAdd('link')"
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-2xl">link</icon>
                            <div>
                                {{
                                    'SIGNAGE_MANAGER.ADD_FROM_LINK' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        type="button"
                        (click)="upload_input.click()"
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-2xl">upload</icon>
                            <div>
                                {{ 'SIGNAGE_MANAGER.UPLOAD_MEDIA' | translate }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
                <input
                    #upload_input
                    type="file"
                    multiple
                    class="sr-only"
                    [attr.accept]="file_accept"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA' | translate
                    "
                    (change)="previewFile($event)"
                />
            }
        </div>
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatTooltipModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
    ],
})
export class MediaListHeaderComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);
    private readonly _ai = inject(AiImageService);
    public readonly link = signal('');
    public readonly selected_plugin = signal<any>(null);
    public readonly available_plugins = this._service.plugins;
    public readonly view = this._service.media_view;
    public readonly view_active = this._service.media_view_active;
    // Filters run in the browser, so count the filtered items instead of the
    // backend total while one is active.
    public readonly total_count = computed(() =>
        this.view_active()
            ? this._service.media().length
            : this._service.media_total(),
    );
    public readonly sorts = MEDIA_SORTS;
    public readonly type_filters = MEDIA_TYPE_FILTERS;
    public readonly expiry_filters = MEDIA_EXPIRY_FILTERS;
    public readonly sort_labels: Record<MediaSort, string> = {
        newest: 'SIGNAGE_MANAGER.MEDIA_SORT_NEWEST',
        oldest: 'SIGNAGE_MANAGER.MEDIA_SORT_OLDEST',
        name: 'SIGNAGE_MANAGER.MEDIA_SORT_NAME',
        expiry: 'SIGNAGE_MANAGER.MEDIA_SORT_EXPIRY',
    };
    // Same labels as the type badge on media cards
    public readonly type_labels: Record<MediaTypeFilter, string> = {
        image: 'COMMON.IMAGE',
        video: 'COMMON.VIDEO',
        webpage: 'COMMON.WEBPAGE',
        plugin: 'SIGNAGE_MANAGER.TYPE_PLUGIN',
    };
    public readonly expiry_labels: Record<MediaExpiryFilter, string> = {
        expiring: 'SIGNAGE_MANAGER.MEDIA_FILTER_EXPIRING',
        expired: 'SIGNAGE_MANAGER.STATUS_EXPIRED',
    };
    public readonly search = this._service.search_term;
    public readonly view_mode = this._service.media_view_mode;
    public readonly view_options = [
        { mode: 'grid', icon: 'grid_view', label: 'SIGNAGE_MANAGER.VIEW_GRID' },
        {
            mode: 'list',
            icon: 'view_list',
            label: 'SIGNAGE_MANAGER.VIEW_LIST',
        },
        {
            mode: 'folder',
            icon: 'folder',
            label: 'SIGNAGE_MANAGER.VIEW_FOLDER',
        },
    ] as const;
    public readonly file_accept = this._service.media_upload_accept;
    public readonly can_create = this._service.can_create;

    public readonly previewFile = (event) =>
        this._service.previewFileFromInput(event);

    public readonly ai_enabled = computed(
        () =>
            this._ai.can_generate() &&
            this._service.hasFeature('ai-generation'),
    );

    /** Change part of the media sort and filters */
    public setView(change: Partial<MediaViewOptions>) {
        this.view.update((view) => ({ ...view, ...change }));
    }

    public resetView() {
        this.view.set(DEFAULT_MEDIA_VIEW);
    }

    public generateWithAI() {
        this._service.generateMediaWithAI();
    }

    public openAdd(mode: 'plugin' | 'link') {
        this._dialog.open(MediaAddModalComponent, {
            data: { mode },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async addFromLink() {
        const link = this.link().trim();
        if (!link) return;
        const is_valid = isValidUrl(link);
        if (!is_valid) {
            notifyError(i18n('SIGNAGE_MANAGER.URL_INVALID'));
            return;
        }
        await this._service.addMediaFromLink(link);
        this.link.set('');
    }

    public async addFromPlugin() {
        const selected_plugin = this.selected_plugin();
        const plugin = this.available_plugins().find(
            ({ id }) => id === selected_plugin?.id,
        );
        if (!plugin) return;
        await this._service.addMediaFromPlugin(plugin);
        this.selected_plugin.set(null);
    }
}
