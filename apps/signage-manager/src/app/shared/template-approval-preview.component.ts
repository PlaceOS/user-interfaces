import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    mediaThumbnail,
    SignageTemplate,
    SignageTemplateLayout,
} from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import {
    computeTemplateLayoutRects,
    layoutPositionLabel,
} from '../templates/template-layout.util';
import {
    layoutAxisPercentage,
    layoutPositionAxes,
    signageTemplateFieldChanges,
    signageTemplateLayoutChanges,
    signageTemplateVersionsEqual,
    TemplateField,
    TemplateLayoutField,
} from './template-approval.util';

type TemplateLayoutStatus = 'added' | 'removed' | 'changed' | 'unchanged';

interface TemplateLayoutPreview {
    index: number;
    layout: SignageTemplateLayout;
    status: TemplateLayoutStatus;
    /** Fields that differ from the layout at the same index in the other version */
    changes: TemplateLayoutField[];
    /** Plugin parameters that differ from the other version */
    params: { key: string; value: string }[];
}

interface TemplateVersionPreview {
    current: boolean;
    /** Whether an other version exists to compare with */
    compared: boolean;
    /** Classes that highlight a changed value */
    mark: string;
    /** Template details that differ from the other version */
    fields: TemplateField[];
    tags: { name: string; changed: boolean }[];
    /** All layouts, drawn in the visual preview */
    layouts: TemplateLayoutPreview[];
    /** Layouts shown in the list. Only the changes when versions are compared */
    listed: TemplateLayoutPreview[];
    template: SignageTemplate;
}

@Component({
    selector: 'template-approval-preview',
    template: `
        <div class="flex gap-2 max-md:flex-col">
            @for (version of versionComparison().versions; track $index) {
                @let template = version.template;
                <section
                    data-template-version
                    class="border-base-300 min-w-0 flex-1 rounded-sm border"
                    [class.bg-success-light]="version.current"
                    [class.bg-error-light]="!version.current"
                >
                    <header
                        class="border-base-300 bg-base-200 flex items-center justify-between gap-2 rounded-sm border-b px-4 py-2"
                    >
                        <h3>
                            {{
                                (version.current
                                    ? 'SIGNAGE_MANAGER.VERSION_TO_APPROVE'
                                    : 'SIGNAGE_MANAGER.PREVIOUS_VERSION'
                                ) | translate
                            }}
                        </h3>
                        <div class="text-base-content/70 font-mono text-xs">
                            {{ template.updated_at | date: 'dd MMM, HH:mm' }}
                        </div>
                    </header>
                    <div class="space-y-2 p-2">
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-3"
                        >
                            <div class="font-medium">
                                <span
                                    data-template-name
                                    class="rounded-sm"
                                    [class]="
                                        version.fields.includes('name')
                                            ? version.mark
                                            : ''
                                    "
                                >
                                    {{ template.name }}
                                </span>
                            </div>
                            @if (template.description) {
                                <div class="text-base-content/70 mt-1 text-sm">
                                    <span
                                        class="rounded-sm"
                                        [class]="
                                            version.fields.includes(
                                                'description'
                                            )
                                                ? version.mark
                                                : ''
                                        "
                                    >
                                        {{ template.description }}
                                    </span>
                                </div>
                            }
                            <div class="mt-2 flex flex-wrap gap-1 text-xs">
                                <span class="bg-base-200 rounded px-2 py-1">
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT'
                                            | translate
                                                : {
                                                      count: version.layouts
                                                          .length,
                                                  }
                                    }}
                                </span>
                                @let takeover_changed =
                                    version.fields.includes(
                                        'full_screen_takeover'
                                    );
                                @if (
                                    template.full_screen_takeover ||
                                    takeover_changed
                                ) {
                                    <span
                                        class="rounded px-2 py-1"
                                        [class]="
                                            takeover_changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                        [class.line-through]="
                                            !template.full_screen_takeover
                                        "
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                                | translate
                                        }}
                                    </span>
                                }
                                @let merge_changed =
                                    version.fields.includes('merge');
                                @if (template.merge || merge_changed) {
                                    <span
                                        class="rounded px-2 py-1"
                                        [class]="
                                            merge_changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                        [class.line-through]="!template.merge"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_MERGE'
                                                | translate
                                        }}
                                    </span>
                                }
                                @let background_changed =
                                    version.fields.includes(
                                        'background_item_id'
                                    );
                                @if (
                                    template.background_item_id ||
                                    background_changed
                                ) {
                                    <span
                                        class="rounded px-2 py-1"
                                        [class]="
                                            background_changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                    >
                                        {{
                                            (template.background_item_id
                                                ? 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                : 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY'
                                            ) | translate
                                        }}
                                    </span>
                                }
                                @for (tag of version.tags; track tag.name) {
                                    <span
                                        data-template-tag
                                        class="rounded px-2 py-1"
                                        [class]="
                                            tag.changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                    >
                                        #{{ tag.name }}
                                    </span>
                                }
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-base-200 rounded-sm border p-2"
                        >
                            <div
                                data-template-preview
                                role="img"
                                class="relative aspect-video overflow-hidden rounded-sm bg-neutral-900 ring-1 ring-black/20"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA'
                                        | translate: { name: template.name }
                                "
                            >
                                @if (
                                    backgroundUrl(template);
                                    as background_url
                                ) {
                                    <img
                                        auth
                                        class="absolute inset-0 h-full w-full object-cover opacity-80"
                                        [source]="background_url"
                                        [alt]="
                                            'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                | translate
                                        "
                                    />
                                }
                                @for (
                                    item of previewItems(version);
                                    track item.index
                                ) {
                                    @let highlight =
                                        item.status !== 'unchanged';
                                    <div
                                        data-template-layout
                                        class="absolute flex flex-col items-center justify-center overflow-hidden border-2 bg-black/60 leading-none text-white backdrop-blur-sm"
                                        [attr.data-status]="item.status"
                                        [class.border-white/60]="!highlight"
                                        [class.border-success]="
                                            highlight && version.current
                                        "
                                        [class.border-error]="
                                            highlight && !version.current
                                        "
                                        [class.z-10]="highlight"
                                        [class.opacity-50]="
                                            !highlight && version.compared
                                        "
                                        [class.border-dashed]="
                                            !item.layout.plugin_id
                                        "
                                        [class.bg-black/10]="
                                            !item.layout.plugin_id
                                        "
                                        [style.left.%]="item.rect.left"
                                        [style.top.%]="item.rect.top"
                                        [style.width.%]="item.rect.width"
                                        [style.height.%]="item.rect.height"
                                    >
                                        <div
                                            class="w-full truncate px-1 text-center text-xs font-semibold uppercase text-shadow-lg"
                                        >
                                            {{
                                                positionLabel(item.layout)
                                                    | translate
                                            }}
                                        </div>
                                        <div
                                            class="w-full truncate px-1 text-center text-[0.625rem] opacity-80 text-shadow-lg"
                                        >
                                            {{
                                                pluginName(
                                                    item.layout.plugin_id
                                                ) ||
                                                    ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                } @empty {
                                    <div
                                        class="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-white/60"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS_HINT'
                                                | translate
                                        }}
                                    </div>
                                }
                            </div>
                        </div>
                        @for (item of version.listed; track item.index) {
                            @let layout = item.layout;
                            <div
                                data-layout-item
                                class="border-base-300 bg-base-100 flex items-center gap-2 rounded-sm border p-2"
                            >
                                <icon class="text-xl">space_dashboard</icon>
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 truncate rounded-sm text-sm font-medium"
                                            [class]="
                                                item.changes.includes(
                                                    'position'
                                                )
                                                    ? version.mark
                                                    : ''
                                            "
                                        >
                                            {{
                                                positionLabel(layout)
                                                    | translate
                                            }}
                                        </div>
                                        @if (item.status !== 'unchanged') {
                                            <span
                                                data-layout-status
                                                class="shrink-0 rounded px-1.5 py-0.5 text-[0.625rem] font-bold uppercase"
                                                [class]="version.mark"
                                            >
                                                {{
                                                    STATUS_LABELS[item.status]
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    <div class="flex">
                                        <div
                                            class="min-w-0 truncate rounded-sm text-xs"
                                            [class]="
                                                item.changes.includes(
                                                    'plugin_id'
                                                )
                                                    ? version.mark
                                                    : 'opacity-60'
                                            "
                                        >
                                            {{
                                                pluginName(layout.plugin_id) ||
                                                    ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        data-layout-values
                                        class="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-xs"
                                    >
                                        @for (
                                            value of positionValues(layout);
                                            track value.axis
                                        ) {
                                            <span
                                                class="rounded-sm"
                                                [class]="
                                                    item.changes.includes(
                                                        value.axis
                                                    )
                                                        ? version.mark
                                                        : 'opacity-70'
                                                "
                                            >
                                                {{ value.label | translate }}:
                                                {{ value.value }}%
                                            </span>
                                        }
                                    </div>
                                    @if (item.params.length) {
                                        <div
                                            data-layout-params
                                            class="mt-1 space-y-0.5 font-mono text-xs"
                                        >
                                            <div class="font-sans opacity-60">
                                                {{
                                                    'SIGNAGE_MANAGER.PLUGIN_PARAMETERS'
                                                        | translate
                                                }}
                                            </div>
                                            @for (
                                                param of item.params;
                                                track param.key
                                            ) {
                                                <div class="flex">
                                                    <span
                                                        class="min-w-0 truncate rounded-sm"
                                                        [class]="version.mark"
                                                        [title]="param.value"
                                                    >
                                                        {{ param.key }}:
                                                        {{ param.value }}
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        } @empty {
                            <div
                                class="text-base-content/70 flex flex-col items-center justify-center p-8"
                            >
                                <icon class="text-4xl">space_dashboard</icon>
                                <p class="text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUT_CHANGES'
                                            | translate
                                    }}
                                </p>
                            </div>
                        }
                    </div>
                </section>
            }
            @if (versionComparison().show_no_older_version) {
                <section
                    data-no-older-version
                    class="border-base-300 bg-base-200 text-base-content/70 flex min-h-48 min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-sm border p-8 text-center"
                >
                    <icon class="text-4xl">history</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_OLDER_VERSION' | translate }}</p>
                </section>
            }
        </div>
    `,
    imports: [
        CommonModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
    ],
})
export class TemplateApprovalPreviewComponent {
    private readonly _service = inject(SignageService);

    public readonly versions = input<SignageTemplate[]>([]);
    public readonly versionComparison = computed(() => {
        const [current_version, older_version] = this.versions();
        if (!current_version) {
            return {
                versions: [] as TemplateVersionPreview[],
                show_no_older_version: false,
            };
        }
        const has_older_version =
            !!older_version &&
            !signageTemplateVersionsEqual(current_version, older_version);
        if (!has_older_version) {
            return {
                versions: [this.versionPreview(current_version, null, true)],
                show_no_older_version: true,
            };
        }
        return {
            versions: [
                this.versionPreview(current_version, older_version, true),
                this.versionPreview(older_version, current_version, false),
            ],
            show_no_older_version: false,
        };
    });

    public readonly STATUS_LABELS: Record<TemplateLayoutStatus, string> = {
        added: 'SIGNAGE_MANAGER.TEMPLATE_CHANGE_ADDED',
        removed: 'SIGNAGE_MANAGER.TEMPLATE_CHANGE_REMOVED',
        changed: 'SIGNAGE_MANAGER.TEMPLATE_CHANGE_CHANGED',
        unchanged: '',
    };

    public previewItems(version: TemplateVersionPreview) {
        const rects = computeTemplateLayoutRects(version.template.layouts);
        return version.layouts.map((item) => ({
            ...item,
            rect: rects[item.index],
        }));
    }

    public backgroundUrl(template: SignageTemplate) {
        return template.background_item_id
            ? mediaThumbnail(template.background_item_id)
            : '';
    }

    public positionLabel(layout: SignageTemplateLayout) {
        return layoutPositionLabel(layout.position);
    }

    public positionValues(layout: SignageTemplateLayout) {
        return layoutPositionAxes(layout).map((axis) => ({
            axis,
            label:
                axis === 'x_pos'
                    ? 'SIGNAGE_MANAGER.TEMPLATE_X_POS'
                    : 'SIGNAGE_MANAGER.TEMPLATE_Y_POS',
            value: layoutAxisPercentage(layout, axis),
        }));
    }

    public pluginName(plugin_id?: string) {
        if (!plugin_id) return '';
        return (
            this._service.widgets().find((item) => item.id === plugin_id)
                ?.name || plugin_id
        );
    }

    /** Build the view of `template` with its differences from `other`. */
    private versionPreview(
        template: SignageTemplate,
        other: SignageTemplate | null,
        current: boolean,
    ): TemplateVersionPreview {
        const layouts = template.layouts.map((layout, index) =>
            this.layoutPreview(layout, index, other, current),
        );
        const other_tags = other?.tags || [];
        return {
            current,
            compared: !!other,
            mark: current ? 'bg-success/20 px-1' : 'bg-error/20 px-1',
            fields: other ? signageTemplateFieldChanges(template, other) : [],
            tags: (template.tags || []).map((name) => ({
                name,
                changed: !!other && !other_tags.includes(name),
            })),
            layouts,
            listed: other
                ? layouts.filter((item) => item.status !== 'unchanged')
                : layouts,
            template,
        };
    }

    private layoutPreview(
        layout: SignageTemplateLayout,
        index: number,
        other: SignageTemplate | null,
        current: boolean,
    ): TemplateLayoutPreview {
        const unchanged = {
            index,
            layout,
            status: 'unchanged' as const,
            changes: [],
            params: [],
        };
        if (!other) return unchanged;
        const other_layout = other.layouts[index];
        if (!other_layout) {
            return { ...unchanged, status: current ? 'added' : 'removed' };
        }
        const changes = signageTemplateLayoutChanges(layout, other_layout);
        if (!changes.length) return unchanged;
        const other_params = other_layout.plugin_params || {};
        const params = Object.entries(layout.plugin_params || {})
            .map(([key, value]) => ({ key, value: JSON.stringify(value) }))
            .filter(
                ({ key, value }) => value !== JSON.stringify(other_params[key]),
            );
        return { index, layout, status: 'changed', changes, params };
    }
}
