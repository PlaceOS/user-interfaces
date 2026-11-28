import {
    Component,
    computed,
    DestroyRef,
    ElementRef,
    inject,
    NgZone,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    BuildingLevel,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
import {
    DEFAULT_TILT,
    FLOOR_KINDS,
    Map3DKind,
    Map3DLayer,
    Map3DSession,
    Map3DViewer,
    MAP_3D_KINDS,
    MapShape,
} from '@placeos/map-3d';
import { BrowserRenderCheck, collectProtectedIds } from '@placeos/map-editor';
import { HasUnsavedChanges } from '../ui/unsaved-changes.guard';
import { MapManagementService } from './map-management.service';

interface KindOption {
    id: Map3DKind;
    /** Locale key of the name */
    name: string;
    /** Colour of the dot that stands for the kind */
    colour: string;
}

export const MAP_3D_KIND_OPTIONS: readonly KindOption[] = [
    { id: 'wall', name: 'APP.CONCIERGE.MAPS_3D_KIND_WALL', colour: '#475569' },
    {
        id: 'glass',
        name: 'APP.CONCIERGE.MAPS_3D_KIND_GLASS',
        colour: '#38bdf8',
    },
    {
        id: 'partition',
        name: 'APP.CONCIERGE.MAPS_3D_KIND_PARTITION',
        colour: '#94a3b8',
    },
    { id: 'desk', name: 'APP.CONCIERGE.MAPS_3D_KIND_DESK', colour: '#22c55e' },
    { id: 'seat', name: 'APP.CONCIERGE.MAPS_3D_KIND_SEAT', colour: '#f59e0b' },
    {
        id: 'furniture',
        name: 'APP.CONCIERGE.MAPS_3D_KIND_FURNITURE',
        colour: '#a855f7',
    },
    {
        id: 'space',
        name: 'APP.CONCIERGE.MAPS_3D_KIND_SPACE',
        colour: '#14b8a6',
    },
    {
        id: 'label',
        name: 'APP.CONCIERGE.MAPS_3D_KIND_LABEL',
        colour: '#ec4899',
    },
    { id: 'flat', name: 'APP.CONCIERGE.MAPS_3D_KIND_FLAT', colour: '#cbd5e1' },
];

/** Colour of each kind, and none for a group of mixed kinds */
const KIND_COLOURS: Readonly<Record<Map3DKind | 'mixed', string>> = {
    ...(Object.fromEntries(
        MAP_3D_KIND_OPTIONS.map((option) => [option.id, option.colour]),
    ) as Record<Map3DKind, string>),
    mixed: 'transparent',
};

const RAISED_KINDS = MAP_3D_KIND_OPTIONS.filter(
    (option) => !FLOOR_KINDS.has(option.id),
);

@Component({
    selector: '[app-map-3d-page]',
    host: {
        '(window:beforeunload)': 'onBeforeUnload($event)',
        '(window:keydown)': 'onKeydown($event)',
    },
    template: `
        <header
            class="border-base-200 bg-base-100 flex min-h-16 flex-none flex-wrap items-center gap-x-3 gap-y-1 border-b py-2 pr-4 pl-2"
        >
            <a
                icon
                matRipple
                routerLink="/map-management"
                [matTooltip]="'APP.CONCIERGE.MAPS_BACK' | translate"
                [attr.aria-label]="'APP.CONCIERGE.MAPS_BACK' | translate"
            >
                <icon>arrow_back</icon>
            </a>
            <div class="flex min-w-0 flex-col gap-0.5">
                <h1 class="truncate text-lg leading-6 font-medium">
                    {{ level()?.display_name || level()?.name || level_id() }}
                </h1>
                <div class="truncate text-xs leading-4 opacity-70">
                    @if (building()) {
                        {{ building()?.display_name || building()?.name }}
                        &middot;
                    }
                    {{ 'APP.CONCIERGE.MAPS_3D_SUBTITLE' | translate }}
                </div>
            </div>
            <div class="ml-auto flex flex-wrap items-center justify-end gap-2">
                @if (ready()) {
                    <p
                        class="mr-2 flex items-center gap-1.5 text-sm"
                        role="status"
                        aria-live="polite"
                    >
                        <span
                            class="size-2 rounded-full"
                            [class.bg-warning]="dirty()"
                            [class.bg-success]="!dirty()"
                            aria-hidden="true"
                        ></span>
                        {{
                            (dirty()
                                ? 'APP.CONCIERGE.MAPS_3D_UNSAVED'
                                : 'APP.CONCIERGE.MAPS_3D_SAVED_STATE'
                            ) | translate
                        }}
                    </p>
                    <button
                        icon
                        matRipple
                        [disabled]="!can_undo()"
                        [matTooltip]="'APP.CONCIERGE.MAPS_3D_UNDO' | translate"
                        [attr.aria-label]="
                            'APP.CONCIERGE.MAPS_3D_UNDO' | translate
                        "
                        (click)="undo()"
                    >
                        <icon>undo</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [disabled]="!can_redo()"
                        [matTooltip]="'APP.CONCIERGE.MAPS_3D_REDO' | translate"
                        [attr.aria-label]="
                            'APP.CONCIERGE.MAPS_3D_REDO' | translate
                        "
                        (click)="redo()"
                    >
                        <icon>redo</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        more-actions
                        [disabled]="!!saving()"
                        [matMenuTriggerFor]="more_menu"
                        [matTooltip]="'COMMON.MORE_OPTIONS' | translate"
                        [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                    >
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #more_menu="matMenu" xPosition="before">
                        <button mat-menu-item (click)="detect()">
                            <div class="flex items-center gap-2">
                                <icon class="text-2xl">auto_fix_high</icon>
                                <span>{{
                                    'APP.CONCIERGE.MAPS_3D_DETECT' | translate
                                }}</span>
                            </div>
                        </button>
                        @if (has_saved_3d()) {
                            <button mat-menu-item remove-3d (click)="remove()">
                                <div class="text-error flex items-center gap-2">
                                    <icon class="text-2xl">layers_clear</icon>
                                    <span>{{
                                        'APP.CONCIERGE.MAPS_3D_REMOVE'
                                            | translate
                                    }}</span>
                                </div>
                            </button>
                        }
                    </mat-menu>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        [disabled]="!dirty() || !!saving()"
                        (click)="discard()"
                    >
                        {{ 'APP.CONCIERGE.MAPS_DISCARD' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-24 md:w-32"
                        [disabled]="!dirty() || !!saving()"
                        (click)="save()"
                    >
                        {{ saving() || ('COMMON.SAVE' | translate) }}
                    </button>
                }
            </div>
        </header>
        @if (error()) {
            <div
                class="border-error/30 bg-error/10 mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded border p-8 text-center"
            >
                <icon class="text-error text-4xl">error</icon>
                <p class="mt-2">{{ error() }}</p>
            </div>
        }
        <div
            role="tablist"
            class="border-base-200 bg-base-100 flex flex-none border-b md:hidden"
            [class.hidden]="!!error()"
        >
            @for (tab of narrow_tabs; track tab.id) {
                <button
                    role="tab"
                    class="h-10 flex-1 border-b-2 text-sm"
                    [id]="'map-3d-tab-' + tab.id"
                    [attr.aria-controls]="'map-3d-' + tab.id"
                    [attr.aria-selected]="narrow_tab() === tab.id"
                    [attr.tabindex]="narrow_tab() === tab.id ? 0 : -1"
                    [class.border-transparent]="narrow_tab() !== tab.id"
                    [class.opacity-70]="narrow_tab() !== tab.id"
                    [class.border-secondary]="narrow_tab() === tab.id"
                    [class.font-medium]="narrow_tab() === tab.id"
                    (click)="narrow_tab.set(tab.id)"
                    (keydown)="onTabKeydown($event)"
                >
                    {{ tab.name | translate }}
                </button>
            }
        </div>
        <div
            class="flex min-h-0 flex-1 flex-col md:flex-row"
            [class.hidden]="!!error()"
        >
            <aside
                id="map-3d-details"
                [class]="narrow_tab() === 'details' ? '' : 'max-md:hidden'"
                class="border-base-200 bg-base-100 flex min-h-0 w-full flex-1 flex-col overflow-y-auto text-sm md:w-80 md:flex-none md:border-r"
            >
                @if (ready()) {
                    <section class="border-base-200 border-b p-4">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_FOUND' | translate }}
                        </h2>
                        <ul class="flex flex-wrap gap-1.5">
                            @for (option of kinds; track option.id) {
                                @if (counts()[option.id]) {
                                    <li>
                                        <button
                                            select-kind
                                            class="bg-base-200 hover:bg-base-300 flex h-7 items-center gap-1.5 rounded-full px-2.5 text-xs"
                                            [class.selected-chip]="
                                                isKindSelected(option.id)
                                            "
                                            [attr.aria-pressed]="
                                                isKindSelected(option.id)
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.MAPS_3D_SELECT_KIND'
                                                    | translate
                                            "
                                            (click)="selectKind(option.id)"
                                        >
                                            <span
                                                class="size-2 rounded-full"
                                                [style.background]="
                                                    option.colour
                                                "
                                            ></span>
                                            {{ option.name | translate }}
                                            <span class="opacity-60">{{
                                                counts()[option.id]
                                            }}</span>
                                        </button>
                                    </li>
                                }
                            }
                        </ul>
                        @if (auto_converted()) {
                            <p class="mt-3 text-xs leading-4 opacity-70">
                                {{
                                    'APP.CONCIERGE.MAPS_3D_AUTO_HINT'
                                        | translate
                                }}
                            </p>
                        }
                    </section>
                    <section class="border-base-200 border-b p-4">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_SCALE' | translate }}
                        </h2>
                        <div class="flex items-center justify-between gap-2">
                            <span>{{
                                'APP.CONCIERGE.MAPS_3D_WIDTH' | translate
                            }}</span>
                            <span class="flex items-center gap-1">
                                <input
                                    type="number"
                                    name="map-width"
                                    min="1"
                                    step="0.1"
                                    class="border-base-300 bg-base-100 h-8 w-20 rounded border px-2 text-right"
                                    [attr.aria-label]="
                                        'APP.CONCIERGE.MAPS_3D_WIDTH'
                                            | translate
                                    "
                                    [ngModel]="width_metres()"
                                    (change)="
                                        setWidth($any($event.target).value)
                                    "
                                />
                                <span class="w-4 opacity-60">m</span>
                            </span>
                        </div>
                        <p class="mt-2 text-xs leading-4 opacity-70">
                            {{ 'APP.CONCIERGE.MAPS_3D_WIDTH_HINT' | translate }}
                        </p>
                    </section>
                    <section class="border-base-200 border-b p-4">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_HEIGHTS' | translate }}
                        </h2>
                        <div class="flex flex-col gap-1.5">
                            @for (option of raised_kinds; track option.id) {
                                <div
                                    class="flex items-center justify-between gap-2"
                                >
                                    <span class="flex items-center gap-2">
                                        <span
                                            class="size-2 rounded-full"
                                            [style.background]="option.colour"
                                        ></span>
                                        {{ option.name | translate }}
                                        @if (option.id === 'wall') {
                                            <icon
                                                wall-tip
                                                tabindex="0"
                                                class="cursor-help text-base opacity-60"
                                                [matTooltip]="
                                                    'APP.CONCIERGE.MAPS_3D_WALL_TIP'
                                                        | translate
                                                "
                                                [attr.aria-label]="
                                                    'APP.CONCIERGE.MAPS_3D_WALL_TIP'
                                                        | translate
                                                "
                                                >info</icon
                                            >
                                        }
                                    </span>
                                    <span class="flex items-center gap-1">
                                        <input
                                            type="number"
                                            [name]="'height-' + option.id"
                                            min="0.05"
                                            max="20"
                                            step="0.01"
                                            class="border-base-300 bg-base-100 h-8 w-20 rounded border px-2 text-right"
                                            [attr.aria-label]="
                                                option.name | translate
                                            "
                                            [ngModel]="heights()[option.id]"
                                            (change)="
                                                setKindHeight(
                                                    option.id,
                                                    $any($event.target).value
                                                )
                                            "
                                        />
                                        <span class="w-4 opacity-60">m</span>
                                    </span>
                                </div>
                            }
                        </div>
                        <p class="mt-2 text-xs leading-4 opacity-70">
                            {{
                                'APP.CONCIERGE.MAPS_3D_HEIGHTS_HINT' | translate
                            }}
                        </p>
                    </section>
                    <section class="p-4" [class.hidden]="!layers().length">
                        <h2 class="mb-2 font-medium">
                            {{ 'APP.CONCIERGE.MAPS_3D_LAYERS' | translate }}
                        </h2>
                        <ul layers class="flex flex-col">
                            @for (
                                layer of visible_layers();
                                track layer.element
                            ) {
                                <li
                                    class="hover:bg-base-200 flex h-9 items-center gap-1 rounded pr-1"
                                    [class.selected-row]="
                                        isTarget(layer.element)
                                    "
                                    [style.padding-left.rem]="
                                        layer.depth * 0.75
                                    "
                                >
                                    <button
                                        icon
                                        class="size-6 flex-none"
                                        [class.invisible]="
                                            !layer.has_children &&
                                            !layer_shapes().has(layer.element)
                                        "
                                        [attr.aria-expanded]="
                                            expanded().has(layer.element)
                                        "
                                        [attr.aria-label]="
                                            'APP.CONCIERGE.MAPS_3D_EXPAND'
                                                | translate
                                        "
                                        (click)="toggleLayer(layer.element)"
                                    >
                                        <icon class="text-base">{{
                                            expanded().has(layer.element)
                                                ? 'expand_more'
                                                : 'chevron_right'
                                        }}</icon>
                                    </button>
                                    <span
                                        class="border-base-300 size-2 flex-none rounded-full"
                                        [class.border]="layer.kind === 'mixed'"
                                        [style.background]="
                                            kind_colours[layer.kind]
                                        "
                                        aria-hidden="true"
                                    ></span>
                                    <button
                                        class="ml-1 min-w-0 flex-1 truncate text-left"
                                        [title]="layer.name"
                                        [attr.aria-pressed]="
                                            isTarget(layer.element)
                                        "
                                        (click)="
                                            selectElement(
                                                layer.element,
                                                $event.shiftKey
                                            )
                                        "
                                    >
                                        {{
                                            layer.name ||
                                                ('APP.CONCIERGE.MAPS_3D_UNNAMED'
                                                    | translate)
                                        }}
                                        <span class="text-xs opacity-70">{{
                                            layer.count
                                        }}</span>
                                    </button>
                                    <button
                                        icon
                                        toggle-layer
                                        class="size-6 flex-none"
                                        [class.opacity-40]="layer.hidden"
                                        [matTooltip]="
                                            (layer.hidden
                                                ? 'APP.CONCIERGE.MAPS_3D_SHOW'
                                                : 'APP.CONCIERGE.MAPS_3D_HIDE'
                                            ) | translate
                                        "
                                        [attr.aria-label]="
                                            (layer.hidden
                                                ? 'APP.CONCIERGE.MAPS_3D_SHOW'
                                                : 'APP.CONCIERGE.MAPS_3D_HIDE'
                                            ) | translate
                                        "
                                        (click)="toggleHidden(layer)"
                                    >
                                        <icon class="text-base">{{
                                            layer.hidden
                                                ? 'visibility_off'
                                                : 'visibility'
                                        }}</icon>
                                    </button>
                                    <select
                                        class="border-base-300 bg-base-100 h-7 w-28 flex-none rounded border px-1 text-xs"
                                        [attr.aria-label]="
                                            'APP.CONCIERGE.MAPS_3D_KIND'
                                                | translate
                                        "
                                        [ngModel]="layer.kind"
                                        (ngModelChange)="
                                            assignLayer(layer, $event)
                                        "
                                    >
                                        @if (layer.kind === 'mixed') {
                                            <option value="mixed" disabled>
                                                {{
                                                    'APP.CONCIERGE.MAPS_3D_MIXED'
                                                        | translate
                                                }}
                                            </option>
                                        }
                                        @for (
                                            option of kinds;
                                            track option.id
                                        ) {
                                            <option [value]="option.id">
                                                {{ option.name | translate }}
                                            </option>
                                        }
                                    </select>
                                </li>
                                @if (expanded().has(layer.element)) {
                                    @let shapes =
                                        layer_shapes().get(layer.element) || [];
                                    @for (
                                        shape of shapes.slice(
                                            0,
                                            max_listed_shapes
                                        );
                                        track shape.index
                                    ) {
                                        <li
                                            layer-shape
                                            class="hover:bg-base-200 flex h-8 items-center rounded pr-1"
                                            [class.selected-row]="
                                                isTarget(shape.element)
                                            "
                                            [style.padding-left.rem]="
                                                (layer.depth + 1) * 0.75 + 1.75
                                            "
                                        >
                                            <button
                                                class="min-w-0 flex-1 truncate text-left text-xs"
                                                [attr.aria-pressed]="
                                                    isTarget(shape.element)
                                                "
                                                (click)="
                                                    selectElement(
                                                        shape.element,
                                                        $event.shiftKey
                                                    )
                                                "
                                            >
                                                {{
                                                    shape_names().get(
                                                        shape.element
                                                    )
                                                }}
                                            </button>
                                        </li>
                                    }
                                    @if (shapes.length > max_listed_shapes) {
                                        <li
                                            class="flex h-8 items-center text-xs opacity-70"
                                            [style.padding-left.rem]="
                                                (layer.depth + 1) * 0.75 + 1.75
                                            "
                                        >
                                            {{
                                                'APP.CONCIERGE.MAPS_3D_MORE_SHAPES'
                                                    | translate
                                                        : {
                                                              count:
                                                                  shapes.length -
                                                                  max_listed_shapes,
                                                          }
                                            }}
                                        </li>
                                    }
                                }
                            }
                        </ul>
                        <p class="mt-2 text-xs leading-4 opacity-70">
                            {{
                                'APP.CONCIERGE.MAPS_3D_LAYERS_HINT' | translate
                            }}
                        </p>
                    </section>
                } @else if (!error()) {
                    <div class="p-4 opacity-70">{{ loading() }}</div>
                }
            </aside>
            <main
                id="map-3d-map"
                [class]="narrow_tab() === 'map' ? '' : 'max-md:hidden'"
                class="bg-base-200 relative min-w-0 flex-1"
            >
                <div
                    #map
                    preview
                    tabindex="0"
                    role="region"
                    class="focus-visible:outline-info absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-2"
                    [attr.aria-label]="
                        'APP.CONCIERGE.MAPS_3D_PREVIEW' | translate
                    "
                    (keydown)="onPreviewKeydown($event)"
                ></div>
                @if (!ready() && !error()) {
                    <div
                        class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm opacity-70"
                    >
                        <mat-spinner [diameter]="32" />
                        {{ loading() }}
                    </div>
                }
                @if (ready()) {
                    <p
                        class="bg-base-100/90 border-base-300 pointer-events-none absolute top-3 left-3 max-w-[calc(100%-9rem)] rounded-2xl border px-3 py-1 text-xs shadow-sm"
                    >
                        {{ 'APP.CONCIERGE.MAPS_3D_PICK_HINT' | translate }}
                    </p>
                    <div
                        view-controls
                        class="absolute top-3 right-3 flex flex-col items-end gap-2"
                    >
                        <div
                            class="bg-base-100 border-base-300 flex overflow-hidden rounded-lg border text-sm font-medium shadow-sm"
                            role="group"
                            [attr.aria-label]="
                                'APP.CONCIERGE.MAPS_3D_VIEW' | translate
                            "
                        >
                            <button
                                class="h-9 px-3"
                                [class.bg-secondary]="!plan_view()"
                                [class.text-secondary-content]="!plan_view()"
                                [attr.aria-pressed]="!plan_view()"
                                (click)="setPlanView(false)"
                            >
                                3D
                            </button>
                            <button
                                class="h-9 px-3"
                                [class.bg-secondary]="plan_view()"
                                [class.text-secondary-content]="plan_view()"
                                [attr.aria-pressed]="plan_view()"
                                (click)="setPlanView(true)"
                            >
                                {{ 'APP.CONCIERGE.MAPS_3D_PLAN' | translate }}
                            </button>
                        </div>
                        <div
                            class="bg-base-100 divide-base-300 border-base-300 flex divide-x overflow-hidden rounded-lg border shadow-sm md:flex-col md:divide-x-0 md:divide-y"
                        >
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ROTATE_LEFT' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ROTATE_LEFT' | translate
                                "
                                (click)="rotate(-45)"
                            >
                                <icon>rotate_left</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="
                                    'EXPLORE.ROTATE_RIGHT' | translate
                                "
                                [attr.aria-label]="
                                    'EXPLORE.ROTATE_RIGHT' | translate
                                "
                                (click)="rotate(45)"
                            >
                                <icon>rotate_right</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ZOOM_IN' | translate
                                "
                                (click)="zoomBy(1.25)"
                            >
                                <icon>add</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ZOOM_OUT' | translate
                                "
                                (click)="zoomBy(0.8)"
                            >
                                <icon>remove</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                matTooltipPosition="left"
                                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                                [attr.aria-label]="
                                    'EXPLORE.ZOOM_RESET' | translate
                                "
                                (click)="resetView()"
                            >
                                <icon>refresh</icon>
                            </button>
                        </div>
                    </div>
                }
                @if (targets().length) {
                    <div
                        selection
                        class="bg-base-100 border-base-300 absolute bottom-2 left-1/2 flex w-[44rem] max-w-[calc(100%-1rem)] -translate-x-1/2 flex-col gap-2 rounded-xl border p-3 text-sm shadow-lg md:bottom-4 md:max-w-[calc(100%-2rem)] md:gap-3 md:p-4"
                    >
                        <div class="flex items-center gap-2">
                            <div class="min-w-0 flex-1">
                                <div class="font-medium">
                                    {{
                                        'APP.CONCIERGE.MAPS_3D_SELECTED'
                                            | translate
                                                : { count: selected().length }
                                    }}
                                </div>
                                @if (path().length) {
                                    <div
                                        class="flex flex-wrap items-center gap-x-1 text-xs opacity-70"
                                    >
                                        @for (
                                            step of path();
                                            track step.element
                                        ) {
                                            <button
                                                class="hover:text-info underline"
                                                (click)="
                                                    selectElement(step.element)
                                                "
                                            >
                                                {{ step.name }}
                                            </button>
                                            <span aria-hidden="true"
                                                >&rsaquo;</span
                                            >
                                        }
                                        <span>{{ path_leaf() }}</span>
                                    </div>
                                }
                            </div>
                            <button
                                btn
                                matRipple
                                class="clear h-8 text-xs"
                                (click)="selectSimilar()"
                            >
                                {{
                                    'APP.CONCIERGE.MAPS_3D_SIMILAR' | translate
                                }}
                            </button>
                            <button
                                clear-selection
                                icon
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.MAPS_3D_CLEAR' | translate
                                "
                                [attr.aria-label]="
                                    'APP.CONCIERGE.MAPS_3D_CLEAR' | translate
                                "
                                (click)="clearSelection(); focusPreview()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                        <div
                            role="group"
                            class="-mx-3 flex items-center gap-1.5 overflow-x-auto px-3 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0"
                            [attr.aria-label]="
                                'APP.CONCIERGE.MAPS_3D_KIND' | translate
                            "
                        >
                            <span
                                class="mr-1 flex-none text-xs opacity-70"
                                aria-hidden="true"
                                >{{
                                    'APP.CONCIERGE.MAPS_3D_KIND' | translate
                                }}</span
                            >
                            @for (option of kinds; track option.id) {
                                <button
                                    class="border-base-300 hover:bg-base-200 flex h-8 flex-none items-center gap-1.5 rounded-full border px-3 text-xs"
                                    [class.!bg-secondary]="
                                        selection_kind() === option.id
                                    "
                                    [class.!text-secondary-content]="
                                        selection_kind() === option.id
                                    "
                                    [attr.aria-pressed]="
                                        selection_kind() === option.id
                                    "
                                    (click)="assign(option.id)"
                                >
                                    <span
                                        class="size-2 rounded-full"
                                        [style.background]="option.colour"
                                    ></span>
                                    {{ option.name | translate }}
                                </button>
                            }
                            @if (selection_raised()) {
                                <div
                                    class="ml-auto flex flex-none items-center gap-1"
                                >
                                    <span class="text-xs opacity-70">{{
                                        'APP.CONCIERGE.MAPS_3D_HEIGHT'
                                            | translate
                                    }}</span>
                                    <input
                                        type="number"
                                        name="selection-height"
                                        min="0.05"
                                        max="20"
                                        step="0.01"
                                        class="border-base-300 bg-base-100 h-8 w-20 rounded border px-2 text-right"
                                        [attr.aria-label]="
                                            'APP.CONCIERGE.MAPS_3D_HEIGHT'
                                                | translate
                                        "
                                        [ngModel]="selection_height()"
                                        (change)="
                                            setSelectionHeight(
                                                $any($event.target).value
                                            )
                                        "
                                    />
                                    <span class="opacity-60">m</span>
                                </div>
                            }
                        </div>
                    </div>
                }
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }

            /* A selected layer or part, set apart from a hovered row */
            .selected-row {
                background-color: color-mix(
                    in srgb,
                    var(--info) 18%,
                    transparent
                );
                box-shadow: inset 3px 0 0 var(--info);
                font-weight: 500;
            }

            /* A kind chip whose whole kind is the selection */
            .selected-chip {
                background-color: color-mix(
                    in srgb,
                    var(--info) 18%,
                    transparent
                );
                box-shadow: inset 0 0 0 1px var(--info);
            }
        `,
    ],
    imports: [
        RouterModule,
        FormsModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class Map3DPageComponent implements OnInit, HasUnsavedChanges {
    private readonly _route = inject(ActivatedRoute);
    private readonly _org = inject(OrganisationService);
    private readonly _dialog = inject(MatDialog);
    private readonly _manager = inject(MapManagementService);
    private readonly _zone = inject(NgZone);
    private readonly _map = viewChild<ElementRef<HTMLDivElement>>('map');

    private _render_check = new BrowserRenderCheck();
    private _createViewer = (container: HTMLElement) =>
        new Map3DViewer(container);
    private _session: Map3DSession | null = null;
    private _viewer: Map3DViewer | null = null;
    private _loaded_map_id = '';
    /** Whether the user changed anything since the map was opened or saved */
    private _edited = false;
    /** Changes whenever the annotations do, so computed values read them again */
    private readonly _revision = signal(0);

    public readonly kinds = MAP_3D_KIND_OPTIONS;
    public readonly raised_kinds = RAISED_KINDS;
    public readonly kind_colours = KIND_COLOURS;
    /** Most drawn elements listed under one group, to keep the list short */
    public readonly max_listed_shapes = 200;
    /** Tabs that hold the map and the details on narrow screens */
    public readonly narrow_tabs = [
        { id: 'map', name: 'COMMON.MAP' },
        { id: 'details', name: 'COMMON.DETAILS' },
    ] as const;
    /** The tab on show on narrow screens. Wide screens show both. */
    public readonly narrow_tab = signal<'map' | 'details'>('map');

    public readonly level_id = signal('');
    public readonly level = signal<BuildingLevel | null>(null);
    public readonly loading = signal('');
    public readonly saving = signal('');
    public readonly error = signal('');
    public readonly ready = signal(false);
    /** Set when the page ran detection itself on a map with no 3D view */
    public readonly auto_converted = signal(false);
    public readonly plan_view = signal(false);
    /** Elements and groups the next change applies to */
    public readonly targets = signal<readonly Element[]>([]);
    public readonly expanded = signal<ReadonlySet<Element>>(new Set());

    public readonly building = computed(() =>
        this._manager.building(this.level() || undefined),
    );
    public readonly dirty = computed(
        () => !!this._revision() && !!this._session?.dirty,
    );
    public readonly can_undo = computed(
        () => !!this._revision() && !!this._session?.can_undo,
    );
    public readonly can_redo = computed(
        () => !!this._revision() && !!this._session?.can_redo,
    );
    /** Whether the map as last saved has a 3D view */
    public readonly has_saved_3d = computed(
        () => !!this._revision() && !!this._session?.has_saved_3d,
    );
    public readonly counts = computed(() => {
        this._revision();
        return this._session?.counts() || ({} as Record<Map3DKind, number>);
    });
    public readonly width_metres = computed(() => {
        this._revision();
        return Math.round((this._session?.width_metres || 0) * 10) / 10;
    });
    public readonly heights = computed(() => {
        this._revision();
        const heights = {} as Record<Map3DKind, number>;
        for (const kind of MAP_3D_KINDS) {
            heights[kind] = toStep(this._session?.kindHeight(kind) || 0);
        }
        return heights;
    });
    public readonly layers = computed(() => {
        this._revision();
        return this._session?.layers() || [];
    });
    /** Layers whose parents are all expanded */
    public readonly visible_layers = computed(() => {
        const expanded = this.expanded();
        const visible: Map3DLayer[] = [];
        let hidden_below = Infinity;
        for (const layer of this.layers()) {
            if (layer.depth > hidden_below) continue;
            hidden_below = Infinity;
            visible.push(layer);
            if (layer.has_children && !expanded.has(layer.element)) {
                hidden_below = layer.depth;
            }
        }
        return visible;
    });
    /** Drawn elements of each listed group that no listed group inside it holds */
    public readonly layer_shapes = computed(() => {
        const session = this._session;
        const by_layer = new Map<Element, MapShape[]>();
        if (!session) return by_layer;
        const listed = new Set(this.layers().map((layer) => layer.element));
        for (const shape of session.map.shapes) {
            let current = shape.element.parentElement;
            while (current && !listed.has(current)) {
                current = current.parentElement;
            }
            if (!current) continue;
            const shapes = by_layer.get(current) || [];
            shapes.push(shape);
            by_layer.set(current, shapes);
        }
        return by_layer;
    });
    /**
     * Names of the parts listed under expanded groups. A part with no id is
     * named by its kind and a count, such as "Furniture 3".
     */
    public readonly shape_names = computed(() => {
        this._revision();
        const session = this._session;
        const names = new Map<Element, string>();
        if (!session) return names;
        const by_layer = this.layer_shapes();
        for (const layer of this.expanded()) {
            const shapes = (by_layer.get(layer) || []).slice(
                0,
                this.max_listed_shapes,
            );
            const counts = new Map<Map3DKind, number>();
            for (const { element } of shapes) {
                const kind = session.kindOf(element);
                const count = (counts.get(kind) || 0) + 1;
                counts.set(kind, count);
                names.set(element, nameOf(element) || kindName(kind, count));
            }
        }
        return names;
    });
    /** Drawn elements the targets cover */
    public readonly selected = computed(() => {
        const session = this._session;
        if (!session) return [];
        const shapes = new Set<MapShape>();
        for (const element of this.targets()) {
            for (const shape of session.shapesIn(element)) shapes.add(shape);
        }
        return [...shapes];
    });
    /** The kind everything selected has, or `null` when they differ */
    public readonly selection_kind = computed(() => {
        this._revision();
        const kinds = new Set(
            this.selected().map((shape) =>
                this._session!.kindOf(shape.element),
            ),
        );
        return kinds.size === 1 ? [...kinds][0] : null;
    });
    public readonly selection_raised = computed(() => {
        const kind = this.selection_kind();
        return !!kind && !FLOOR_KINDS.has(kind);
    });
    /** The height everything selected has, or `null` when they differ */
    public readonly selection_height = computed(() => {
        this._revision();
        const heights = new Set(
            this.selected().map((shape) =>
                this._session!.heightOf(shape.element),
            ),
        );
        return heights.size === 1 ? toStep([...heights][0]) : null;
    });
    /** Named groups around a single selected element or group */
    public readonly path = computed(() => {
        const [target, ...others] = this.targets();
        if (!target || others.length || !this._session) return [];
        return this._session
            .ancestors(target)
            .map((element) => ({ element, name: nameOf(element) }))
            .filter((step) => !!step.name);
    });
    public readonly path_leaf = computed(() => {
        const [target] = this.targets();
        if (!target) return '';
        this._revision();
        return (
            nameOf(target) ||
            this.shape_names().get(target) ||
            (this._session ? kindName(this._session.kindOf(target)) : '')
        );
    });

    constructor() {
        inject(DestroyRef).onDestroy(() => this._viewer?.destroy());
    }

    /** A conversion the page ran itself, with nothing changed by the user since, is not held back. */
    public hasUnsavedChanges(): boolean {
        return this.dirty() && this._edited;
    }

    /** Asks the browser to confirm leaving only while there are unsaved changes. */
    public onBeforeUnload(event: BeforeUnloadEvent): void {
        if (this.hasUnsavedChanges()) event.preventDefault();
    }

    public onKeydown(event: KeyboardEvent) {
        const target = event.target as HTMLElement | null;
        if (
            target &&
            ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)
        ) {
            return;
        }
        if (event.key === 'Escape') return this.clearSelection();
        if (
            !(event.ctrlKey || event.metaKey) ||
            event.key.toLowerCase() !== 'z'
        ) {
            return;
        }
        event.preventDefault();
        if (event.shiftKey) this.redo();
        else this.undo();
    }

    public async ngOnInit() {
        this.loading.set(i18n('APP.CONCIERGE.MAPS_LOADING'));
        this.level_id.set(this._route.snapshot.paramMap.get('level_id') || '');
        await this._org.waitUntilInitialised();
        const level = this._manager.level(this.level_id());
        if (!level) {
            this.error.set(i18n('APP.CONCIERGE.MAPS_NO_LEVEL'));
            return;
        }
        this.level.set(level);
        if (!level.map_id) {
            this.error.set(i18n('APP.CONCIERGE.MAPS_NO_MAP'));
            return;
        }
        this._loaded_map_id = level.map_id;
        try {
            await this._load(level);
        } catch (error) {
            this.error.set(
                `${i18n('APP.CONCIERGE.MAPS_LOAD_ERROR')} ${errorText(error)}`,
            );
        } finally {
            this.loading.set('');
        }
    }

    public detect() {
        this._session?.detect();
        this.clearSelection();
    }

    public undo() {
        this._session?.undo();
    }

    public redo() {
        this._session?.redo();
    }

    public async remove() {
        const ok = await this._confirm(
            i18n('APP.CONCIERGE.MAPS_3D_REMOVE_TITLE'),
            i18n('APP.CONCIERGE.MAPS_3D_REMOVE_MSG'),
            i18n('APP.CONCIERGE.MAPS_3D_REMOVE'),
        );
        if (!ok) return;
        this._session?.remove();
        this.clearSelection();
    }

    public async discard() {
        if (!this._session?.dirty) return;
        const ok = await this._confirm(
            i18n('APP.CONCIERGE.MAPS_DISCARD_TITLE'),
            i18n('APP.CONCIERGE.MAPS_DISCARD_MSG'),
            i18n('APP.CONCIERGE.MAPS_DISCARD_CONFIRM'),
        );
        if (!ok) return;
        this._session.revert();
        this.auto_converted.set(false);
        this.clearSelection();
    }

    public setWidth(value: string) {
        const metres = parseFloat(value);
        if (metres > 0) this._session?.setWidthMetres(metres);
    }

    public setKindHeight(kind: Map3DKind, value: string) {
        const height = parseFloat(value);
        if (height > 0) this._session?.setKindHeight(kind, height);
    }

    public assign(kind: Map3DKind) {
        this._session?.assign(this.targets(), kind);
    }

    public assignLayer(layer: Map3DLayer, kind: Map3DKind | 'mixed') {
        if (kind === 'mixed') return;
        this._session?.assign([layer.element], kind);
    }

    public setSelectionHeight(value: string) {
        const height = parseFloat(value);
        const kind = this.selection_kind();
        if (!(height > 0) || !kind) return;
        this._session?.assign(this.targets(), kind, height);
    }

    public isTarget(element: Element): boolean {
        return this.targets().includes(element);
    }

    /** Select an element, or with `add`, add it to the selection or take it out. */
    public selectElement(element: Element, add = false) {
        const targets = this.targets();
        if (!add) this.targets.set([element]);
        else if (targets.includes(element)) {
            this.targets.set(targets.filter((_) => _ !== element));
        } else this.targets.set([...targets, element]);
        this._showSelection();
    }

    /** The arrow keys, Home and End move between the two tabs */
    public onTabKeydown(event: KeyboardEvent) {
        const ids = this.narrow_tabs.map((tab) => tab.id);
        const index = ids.indexOf(this.narrow_tab());
        const next = {
            ArrowLeft: ids[(index + ids.length - 1) % ids.length],
            ArrowRight: ids[(index + 1) % ids.length],
            Home: ids[0],
            End: ids[ids.length - 1],
        }[event.key];
        if (!next) return;
        event.preventDefault();
        this.narrow_tab.set(next);
        document.getElementById(`map-3d-tab-${next}`)?.focus();
    }

    public focusPreview() {
        this._map()?.nativeElement.focus();
    }

    /** Pan with the arrow keys and zoom with + and - while the preview has focus */
    public onPreviewKeydown(event: KeyboardEvent) {
        if (event.ctrlKey || event.metaKey || event.altKey) return;
        const viewer = this._viewer;
        if (!viewer) return;
        const changes: Record<string, () => void> = {
            ArrowUp: () => viewer.panBy(0, -1),
            ArrowDown: () => viewer.panBy(0, 1),
            ArrowLeft: () => viewer.panBy(-1, 0),
            ArrowRight: () => viewer.panBy(1, 0),
            '+': () => this.zoomBy(1.25),
            '=': () => this.zoomBy(1.25),
            '-': () => this.zoomBy(0.8),
        };
        if (!changes[event.key]) return;
        event.preventDefault();
        changes[event.key]();
    }

    /** Select every drawn element of a kind */
    public selectKind(kind: Map3DKind) {
        const session = this._session;
        if (!session) return;
        this.targets.set(
            session.map.shapes
                .filter((shape) => session.kindOf(shape.element) === kind)
                .map((shape) => shape.element),
        );
        this._showSelection();
    }

    /** Whether the selection is every drawn element of a kind */
    public isKindSelected(kind: Map3DKind): boolean {
        return (
            this.selection_kind() === kind &&
            this.selected().length === this.counts()[kind]
        );
    }

    public selectSimilar() {
        const session = this._session;
        const [first] = this.selected();
        if (!session || !first) return;
        this.targets.set(session.similar(first).map((shape) => shape.element));
        this._showSelection();
    }

    public clearSelection() {
        this.targets.set([]);
        this._showSelection();
    }

    /** Hide a layer in the preview, or show it again. The saved map keeps it. */
    public toggleHidden(layer: Map3DLayer) {
        const edited = this._edited;
        this._session?.setHidden(layer.element, !layer.hidden);
        this._edited = edited;
    }

    public toggleLayer(element: Element) {
        this.expanded.update((expanded) => {
            const next = new Set(expanded);
            if (!next.delete(element)) next.add(element);
            return next;
        });
    }

    public setPlanView(plan: boolean) {
        this.plan_view.set(plan);
        this._viewer?.setAngles(
            plan ? 0 : DEFAULT_TILT,
            plan ? 0 : this._viewer.bearing,
        );
    }

    public rotate(degrees: number) {
        const viewer = this._viewer;
        if (!viewer) return;
        viewer.turnBy(degrees);
    }

    public zoomBy(factor: number) {
        this._viewer?.setZoom(this._viewer.zoom * factor);
    }

    public resetView() {
        this.plan_view.set(false);
        this._viewer?.resetView();
    }

    public async save() {
        const session = this._session;
        const level = this.level();
        if (!session || !level || !session.dirty || this.saving()) return;
        this.saving.set(i18n('COMMON.SAVING'));
        try {
            // A failed lookup stops the save, which could replace a newer map
            const current_map_id = await this._manager.currentMapId(level.id);
            if (current_map_id !== this._loaded_map_id) {
                const ok = await this._confirm(
                    i18n('APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_TITLE'),
                    i18n('APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_MSG'),
                    i18n('APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_CONFIRM'),
                );
                if (!ok) return;
            }
            const markup = session.serialise();
            const render = await this._render_check.check(markup);
            if (!render.ok) {
                notifyError(
                    `${i18n('APP.CONCIERGE.MAPS_RENDER_ERROR')} ${render.error || ''}`,
                );
                return;
            }
            const saved = await this._manager.saveLevelMap(
                level,
                markup,
                i18n(
                    session.unit
                        ? 'APP.CONCIERGE.MAPS_3D_SUMMARY'
                        : 'APP.CONCIERGE.MAPS_3D_SUMMARY_REMOVED',
                ),
            );
            this._loaded_map_id = saved.map_id;
            this.level.set(this._manager.level(level.id) || level);
            session.markSaved();
            // Changes made while the map was being saved are still to save
            this._edited = session.dirty;
            this.auto_converted.set(false);
            this._revision.update((revision) => revision + 1);
            notifySuccess(i18n('APP.CONCIERGE.MAPS_3D_SAVED'));
        } catch (error) {
            notifyError(
                `${i18n('APP.CONCIERGE.MAPS_SAVE_ERROR')} ${errorText(error)}`,
            );
        } finally {
            this.saving.set('');
        }
    }

    private async _load(level: BuildingLevel) {
        const [text, bound] = await Promise.all([
            this._manager.loadMapText(level),
            collectProtectedIds(this._manager.protectedIdSources(level)),
        ]);
        const ids = bound.ids();
        const session = new Map3DSession(text, {
            desk_ids: ids.filter((_) => _.kind === 'desk').map((_) => _.id),
            space_ids: ids.filter((_) => _.kind === 'room').map((_) => _.id),
            area_ids: ids
                .filter((_) => ['parking', 'poi'].includes(_.kind))
                .map((_) => _.id),
        });
        const container = this._map()?.nativeElement;
        if (!container) return;
        const viewer = this._zone.runOutsideAngular(() =>
            this._createViewer(container),
        );
        this._session = session;
        this._viewer = viewer;
        viewer.setMapData(
            { raw_data: text, element_bounds: new Map(), aspect_ratio: 0 },
            session.map,
        );
        viewer.onPick = (pick) =>
            this._zone.run(() => this._pick(pick.shape, pick.event.shiftKey));
        viewer.onHover = (shape) => viewer.setHover(shape);
        session.onChange = () => {
            this._edited = this.ready();
            viewer.refresh();
            this._revision.update((revision) => revision + 1);
            this._showSelection();
        };
        if (!session.unit) {
            session.detect();
            this.auto_converted.set(true);
        }
        if (!(await viewer.draw())) {
            throw new Error(i18n('APP.CONCIERGE.MAPS_3D_DRAW_ERROR'));
        }
        this._revision.update((revision) => revision + 1);
        this.ready.set(true);
    }

    private _pick(shape: MapShape | null, add: boolean) {
        if (shape) this.selectElement(shape.element, add);
        else if (!add) this.clearSelection();
    }

    private _showSelection() {
        this._viewer?.setHighlight(this.selected());
    }

    private async _confirm(
        title: string,
        content: string,
        confirm_text: string,
    ): Promise<boolean> {
        const ref = await openConfirmModal(
            { title, content, confirm_text, icon: { content: 'warning' } },
            this._dialog,
        );
        ref.close();
        return ref.reason === 'done';
    }
}

function nameOf(element: Element): string {
    return (
        element.getAttribute('data-name') || element.getAttribute('id') || ''
    );
}

/** The translated name of a kind, with a count after it when given */
function kindName(kind: Map3DKind, count?: number): string {
    const option = MAP_3D_KIND_OPTIONS.find((_) => _.id === kind);
    const name = option ? i18n(option.name) : kind;
    return count ? `${name} ${count}` : name;
}

/** Rounds a height or width to the 0.01 step of its field */
function toStep(value: number): number {
    return Math.round(value * 100) / 100;
}

function errorText(error: unknown): string {
    const detail = error as { message?: string; error?: string } | null;
    return detail?.message || detail?.error || `${error || ''}`;
}
