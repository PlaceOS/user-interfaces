import {
    CdkDrag,
    CdkDragDrop,
    CdkDragHandle,
    CdkDropList,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, computed, inject, linkedSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    SignageTemplateLayout,
    SignageTemplateLayoutPosition,
} from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import {
    LAYOUT_POSITIONS,
    layoutPositionIcon,
    layoutPositionLabel,
} from './template-layout.util';

@Component({
    selector: 'template-layout-list',
    template: `
        <div
            class="bg-base-100 border-base-300 flex h-full w-full flex-col lg:w-96 lg:border-l"
        >
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h4 class="flex-1 text-lg font-medium">
                    {{ 'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS' | translate }}
                </h4>
                @if (can_update()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="bg-secondary text-secondary-content flex items-center rounded-lg py-1.5 pr-4 pl-2"
                        [matMenuTriggerFor]="position_menu"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT' | translate
                        "
                    >
                        <icon class="mr-1 text-2xl">add</icon>
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT' | translate }}
                    </button>
                    <mat-menu #position_menu="matMenu">
                        @for (position of positions; track position) {
                            <button
                                type="button"
                                mat-menu-item
                                (click)="addLayout(position)"
                            >
                                <div class="flex items-center gap-2">
                                    <icon class="text-2xl">{{
                                        positionIcon(position)
                                    }}</icon>
                                    <span>{{
                                        positionLabel(position) | translate
                                    }}</span>
                                </div>
                            </button>
                        }
                    </mat-menu>
                }
            </div>
            <div
                class="min-h-0 flex-1 overflow-auto px-3 py-2"
                cdkDropList
                role="list"
                (cdkDropListDropped)="onDrop($event)"
            >
                @for (layout of layouts(); track $index) {
                    <div
                        cdkDrag
                        [cdkDragDisabled]="!can_update()"
                        role="listitem"
                        class="border-base-300 bg-base-100 mb-2 rounded-lg border"
                        [class.border-primary]="selected_index() === $index"
                    >
                        <div
                            class="flex w-full cursor-pointer items-center gap-2 px-2 py-2"
                            (click)="selectLayout($index)"
                        >
                            @if (can_update()) {
                                <icon
                                    cdkDragHandle
                                    class="shrink-0 cursor-grab opacity-40"
                                    >drag_indicator</icon
                                >
                            }
                            <icon class="shrink-0 text-2xl opacity-70">{{
                                positionIcon(layout.position)
                            }}</icon>
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{
                                        positionLabel(layout.position)
                                            | translate
                                    }}
                                </div>
                                <div class="truncate text-xs opacity-60">
                                    {{
                                        pluginName(layout.plugin_id) ||
                                            ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                | translate)
                                    }}
                                </div>
                            </div>
                            @if (can_update()) {
                                <button
                                    icon
                                    default
                                    error
                                    type="button"
                                    matRipple
                                    (click)="removeLayout($event, $index)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_REMOVE_LAYOUT'
                                            | translate
                                    "
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                        @if (selected_index() === $index) {
                            <div
                                class="border-base-300 flex flex-col gap-2 border-t px-3 py-3"
                            >
                                <label [for]="'plugin-' + $index">{{
                                    'SIGNAGE_MANAGER.SELECT_PLUGIN' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select
                                        [id]="'plugin-' + $index"
                                        [ngModel]="layout.plugin_id || ''"
                                        (ngModelChange)="
                                            setPlugin($index, $event)
                                        "
                                        [disabled]="!can_update()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA'
                                                | translate
                                        "
                                    >
                                        <mat-option value="">{{
                                            'SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                | translate
                                        }}</mat-option>
                                        @for (
                                            plugin of plugins();
                                            track plugin.id
                                        ) {
                                            <mat-option [value]="plugin.id">{{
                                                plugin.name
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                <!-- Edge panels size along their consumed
                                     axis; floating panels position their
                                     top-left corner and fill from there -->
                                <div class="flex gap-2">
                                    @if (hasXValue(layout.position)) {
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript flex-1"
                                        >
                                            <input
                                                matInput
                                                type="number"
                                                min="0"
                                                max="100"
                                                [placeholder]="
                                                    xLabel(layout.position)
                                                        | translate
                                                "
                                                [ngModel]="layout.x_pos ?? null"
                                                (ngModelChange)="
                                                    setAxis(
                                                        $index,
                                                        'x_pos',
                                                        $event
                                                    )
                                                "
                                                [disabled]="!can_update()"
                                                [attr.aria-label]="
                                                    xLabel(layout.position)
                                                        | translate
                                                "
                                            />
                                            <span matTextSuffix>%</span>
                                        </mat-form-field>
                                    }
                                    @if (hasYValue(layout.position)) {
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript flex-1"
                                        >
                                            <input
                                                matInput
                                                type="number"
                                                min="0"
                                                max="100"
                                                [placeholder]="
                                                    yLabel(layout.position)
                                                        | translate
                                                "
                                                [ngModel]="layout.y_pos ?? null"
                                                (ngModelChange)="
                                                    setAxis(
                                                        $index,
                                                        'y_pos',
                                                        $event
                                                    )
                                                "
                                                [disabled]="!can_update()"
                                                [attr.aria-label]="
                                                    yLabel(layout.position)
                                                        | translate
                                                "
                                            />
                                            <span matTextSuffix>%</span>
                                        </mat-form-field>
                                    }
                                </div>
                                <label [for]="'params-' + $index">{{
                                    'SIGNAGE_MANAGER.PLUGIN_PARAMETERS'
                                        | translate
                                }}</label>
                                <textarea
                                    [id]="'params-' + $index"
                                    class="border-base-300 min-h-24 w-full rounded border p-2 font-mono text-xs"
                                    [class.border-error]="params_error()"
                                    [ngModel]="params_text()"
                                    (ngModelChange)="setParamsText($event)"
                                    [disabled]="!can_update()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.PLUGIN_PARAMETERS'
                                            | translate
                                    "
                                ></textarea>
                                @if (params_error()) {
                                    <div class="text-error text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_PARAMS_INVALID'
                                                | translate
                                        }}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                } @empty {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8 text-center"
                    >
                        <icon class="text-5xl">space_dashboard</icon>
                        <p class="text-sm">
                            {{
                                'SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS'
                                    | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            @if (dirty()) {
                <div
                    class="border-base-300 flex items-center gap-2 border-t px-4 py-3"
                >
                    <button
                        btn
                        type="button"
                        matRipple
                        class="bg-base-200 flex-1 rounded-lg py-2"
                        (click)="discard()"
                    >
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_DISCARD' | translate }}
                    </button>
                    @if (can_update()) {
                        <button
                            btn
                            type="button"
                            matRipple
                            class="bg-secondary text-secondary-content flex-1 rounded-lg py-2"
                            [disabled]="params_error()"
                            (click)="save()"
                        >
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    }
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }
        `,
    ],
    imports: [
        CdkDropList,
        CdkDrag,
        CdkDragHandle,
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class TemplateLayoutListComponent {
    private readonly _service = inject(SignageService);

    public readonly positions = LAYOUT_POSITIONS;
    public readonly layouts = this._service.template_layout_draft;
    public readonly selected_index =
        this._service.selected_template_layout_index;
    public readonly dirty = this._service.template_layout_dirty;
    public readonly can_update = this._service.can_update;
    public readonly plugins = this._service.plugins;

    // Editable JSON text for the selected layout's plugin params. Only resets
    // when the selection moves so typing doesn't get reformatted mid-edit;
    // handlers that change params through other paths update it explicitly.
    public readonly params_text = linkedSignal({
        source: () => ({
            template_id: this._service.selected_template()?.id,
            index: this.selected_index(),
        }),
        computation: ({ index }) => {
            if (index === null || index === undefined) return '';
            const layout = this.layouts()[index];
            return layout
                ? JSON.stringify(layout.plugin_params ?? {}, null, 2)
                : '';
        },
    });
    public readonly params_error = computed(() => {
        const text = this.params_text().trim();
        if (!text) return false;
        try {
            JSON.parse(text);
            return false;
        } catch {
            return true;
        }
    });

    public positionIcon = layoutPositionIcon;
    public positionLabel = layoutPositionLabel;

    public pluginName(plugin_id?: string) {
        if (!plugin_id) return '';
        return (
            this.plugins().find((item) => item.id === plugin_id)?.name ||
            plugin_id
        );
    }

    public selectLayout(index: number) {
        this.selected_index.set(this.selected_index() === index ? null : index);
    }

    public addLayout(position: SignageTemplateLayoutPosition) {
        this.layouts.update((layouts) => [
            ...layouts,
            { position, plugin_params: {} },
        ]);
        this.selected_index.set(this.layouts().length - 1);
    }

    public removeLayout(event: Event, index: number) {
        event.stopPropagation();
        this.layouts.update((layouts) =>
            layouts.filter((_, item_index) => item_index !== index),
        );
        this.selected_index.update((selected) => {
            if (selected === index) return null;
            return selected !== null && selected > index
                ? selected - 1
                : selected;
        });
    }

    public onDrop(event: CdkDragDrop<SignageTemplateLayout[]>) {
        if (!this.can_update()) return;
        if (event.previousIndex === event.currentIndex) return;
        const layouts = [...this.layouts()];
        moveItemInArray(layouts, event.previousIndex, event.currentIndex);
        // Keep the selection on the same layout item after the move
        const selected = this.selected_index();
        if (selected !== null) {
            const selected_item = this.layouts()[selected];
            this.selected_index.set(layouts.indexOf(selected_item));
        }
        this.layouts.set(layouts);
    }

    public setPlugin(index: number, plugin_id: string) {
        const plugin = this.plugins().find((item) => item.id === plugin_id);
        this.layouts.update((layouts) =>
            layouts.map((layout, item_index) => {
                if (item_index !== index) return layout;
                const keep_params = Object.keys(
                    layout.plugin_params ?? {},
                ).length;
                return {
                    ...layout,
                    plugin_id: plugin_id || undefined,
                    plugin_params: keep_params
                        ? layout.plugin_params
                        : ((plugin?.defaults ??
                              {}) as SignageTemplateLayout['plugin_params']),
                };
            }),
        );
        if (this.selected_index() === index) {
            this.params_text.set(
                JSON.stringify(
                    this.layouts()[index]?.plugin_params ?? {},
                    null,
                    2,
                ),
            );
        }
    }

    public hasXValue(position: SignageTemplateLayoutPosition) {
        return (
            position === 'left' ||
            position === 'right' ||
            position === 'floating'
        );
    }

    public hasYValue(position: SignageTemplateLayoutPosition) {
        return (
            position === 'top' ||
            position === 'bottom' ||
            position === 'floating'
        );
    }

    public xLabel(position: SignageTemplateLayoutPosition) {
        return position === 'floating'
            ? 'SIGNAGE_MANAGER.TEMPLATE_X_POS'
            : 'SIGNAGE_MANAGER.TEMPLATE_PANEL_WIDTH';
    }

    public yLabel(position: SignageTemplateLayoutPosition) {
        return position === 'floating'
            ? 'SIGNAGE_MANAGER.TEMPLATE_Y_POS'
            : 'SIGNAGE_MANAGER.TEMPLATE_PANEL_HEIGHT';
    }

    public setAxis(
        index: number,
        axis: 'x_pos' | 'y_pos',
        value: number | null,
    ) {
        this.layouts.update((layouts) =>
            layouts.map((layout, item_index) =>
                item_index === index
                    ? { ...layout, [axis]: value ?? undefined }
                    : layout,
            ),
        );
    }

    public setParamsText(text: string) {
        this.params_text.set(text);
        const index = this.selected_index();
        if (index === null) return;
        let params: SignageTemplateLayout['plugin_params'];
        try {
            params = JSON.parse(text.trim() || '{}');
        } catch {
            return;
        }
        if (!params || typeof params !== 'object' || Array.isArray(params))
            return;
        this.layouts.update((layouts) =>
            layouts.map((layout, item_index) =>
                item_index === index
                    ? { ...layout, plugin_params: params }
                    : layout,
            ),
        );
    }

    public save() {
        this._service.saveTemplateLayouts();
    }

    public discard() {
        this._service.discardTemplateLayoutDraft();
    }
}
