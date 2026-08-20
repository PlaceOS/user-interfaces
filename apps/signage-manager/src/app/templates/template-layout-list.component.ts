import {
    CdkDrag,
    CdkDragDrop,
    CdkDragHandle,
    CdkDropList,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, computed, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    SchemaFormComponent,
    TranslatePipe,
} from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';
import {
    SignageTemplateLayout,
    SignageTemplateLayoutPosition,
} from '@placeos/ts-client';
import { pluginSchema, schemaDefaults } from '../signage-plugin.util';
import { SignageService } from '../signage.service';
import {
    EDGE_BAR_HEIGHT_PC,
    FLOATING_DEFAULT_X_PC,
    FLOATING_DEFAULT_Y_PC,
    LAYOUT_POSITIONS,
    SIDEBAR_WIDTH_PC,
    layoutPercentageToRatio,
    layoutPositionIcon,
    layoutPositionLabel,
    layoutRatioToPercentage,
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
                                            plugin of widgets();
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
                                        <label class="min-w-0 flex-1">
                                            <div class="mb-1 text-sm">
                                                {{
                                                    xLabel(layout.position)
                                                        | translate
                                                }}
                                            </div>
                                            <a-counter
                                                class="block"
                                                [min]="0"
                                                [max]="100"
                                                [ngModel]="
                                                    axisPercentage(
                                                        layout,
                                                        'x_pos'
                                                    )
                                                "
                                                (ngModelChange)="
                                                    setAxis(
                                                        $index,
                                                        'x_pos',
                                                        $event
                                                    )
                                                "
                                                [disabled]="!can_update()"
                                                [render_fn]="renderPercent"
                                                [attr.aria-label]="
                                                    xLabel(layout.position)
                                                        | translate
                                                "
                                            />
                                        </label>
                                    }
                                    @if (hasYValue(layout.position)) {
                                        <label class="min-w-0 flex-1">
                                            <div class="mb-1 text-sm">
                                                {{
                                                    yLabel(layout.position)
                                                        | translate
                                                }}
                                            </div>
                                            <a-counter
                                                class="block"
                                                [min]="0"
                                                [max]="100"
                                                [ngModel]="
                                                    axisPercentage(
                                                        layout,
                                                        'y_pos'
                                                    )
                                                "
                                                (ngModelChange)="
                                                    setAxis(
                                                        $index,
                                                        'y_pos',
                                                        $event
                                                    )
                                                "
                                                [disabled]="!can_update()"
                                                [render_fn]="renderPercent"
                                                [attr.aria-label]="
                                                    yLabel(layout.position)
                                                        | translate
                                                "
                                            />
                                        </label>
                                    }
                                </div>
                                @if (selected_plugin_schema()) {
                                    <label>
                                        {{
                                            'SIGNAGE_MANAGER.PLUGIN_PARAMETERS'
                                                | translate
                                        }}
                                    </label>
                                    <div
                                        class="bg-base-200/60 rounded-lg p-4"
                                        [class.opacity-70]="!can_update()"
                                        [attr.inert]="can_update() ? null : ''"
                                    >
                                        <schema-form
                                            [schema]="selected_plugin_schema()"
                                            [ngModel]="
                                                layout.plugin_params || {}
                                            "
                                            (ngModelChange)="
                                                setParams($index, $event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></schema-form>
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
        MatMenuModule,
        MatSelectModule,
        MatTooltipModule,
        CounterComponent,
        IconComponent,
        SchemaFormComponent,
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
    public readonly widgets = this._service.widgets;
    public readonly selected_plugin = computed(() => {
        const index = this.selected_index();
        const plugin_id =
            index === null ? '' : this.layouts()[index]?.plugin_id;
        return this.widgets().find((plugin) => plugin.id === plugin_id);
    });
    public readonly selected_plugin_schema = computed(() =>
        pluginSchema(this.selected_plugin()?.params),
    );
    private readonly _schema_form = viewChild(SchemaFormComponent);

    public positionIcon = layoutPositionIcon;
    public positionLabel = layoutPositionLabel;
    public renderPercent = (value = 0) => `${value}%`;

    public pluginName(plugin_id?: string) {
        if (!plugin_id) return '';
        return (
            this.widgets().find((item) => item.id === plugin_id)?.name ||
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
        const plugin = this.widgets().find((item) => item.id === plugin_id);
        if (plugin_id && !plugin) return;
        const defaults = {
            ...(plugin?.defaults ?? {}),
            ...schemaDefaults(pluginSchema(plugin?.params)),
        };
        this.layouts.update((layouts) =>
            layouts.map((layout, item_index) => {
                if (item_index !== index) return layout;
                return {
                    ...layout,
                    plugin_id: plugin_id || undefined,
                    plugin_params: {
                        ...defaults,
                        ...(layout.plugin_params ?? {}),
                    } as SignageTemplateLayout['plugin_params'],
                };
            }),
        );
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

    public axisPercentage(
        layout: SignageTemplateLayout,
        axis: 'x_pos' | 'y_pos',
    ) {
        const percentage = layoutRatioToPercentage(layout[axis]);
        if (percentage !== null) return percentage;
        if (layout.position === 'floating') {
            return axis === 'x_pos'
                ? FLOATING_DEFAULT_X_PC
                : FLOATING_DEFAULT_Y_PC;
        }
        return axis === 'x_pos' ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
    }

    public setAxis(
        index: number,
        axis: 'x_pos' | 'y_pos',
        value: number | null,
    ) {
        const ratio = layoutPercentageToRatio(value);
        this.layouts.update((layouts) =>
            layouts.map((layout, item_index) =>
                item_index === index
                    ? { ...layout, [axis]: ratio }
                    : layout,
            ),
        );
    }

    public setParams(index: number, params: Record<string, unknown>) {
        if (!params || typeof params !== 'object' || Array.isArray(params)) {
            return;
        }
        this.layouts.update((layouts) =>
            layouts.map((layout, item_index) =>
                item_index === index
                    ? {
                          ...layout,
                          plugin_params:
                              params as SignageTemplateLayout['plugin_params'],
                      }
                    : layout,
            ),
        );
    }

    public save() {
        const schema_form = this._schema_form();
        if (schema_form && !schema_form.isValid()) return;
        this._service.saveTemplateLayouts();
    }

    public discard() {
        this._service.discardTemplateLayoutDraft();
    }
}
