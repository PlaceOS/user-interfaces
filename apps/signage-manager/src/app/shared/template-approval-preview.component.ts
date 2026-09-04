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
    EDGE_BAR_HEIGHT_PC,
    FLOATING_DEFAULT_X_PC,
    FLOATING_DEFAULT_Y_PC,
    layoutPositionLabel,
    layoutRatioToPercentage,
    SIDEBAR_WIDTH_PC,
} from '../templates/template-layout.util';
import {
    signageTemplateLayoutsEqual,
    signageTemplateVersionsEqual,
} from './template-approval.util';

interface TemplateLayoutPreview {
    index: number;
    layout: SignageTemplateLayout;
}

interface TemplateVersionPreview {
    current: boolean;
    layouts: TemplateLayoutPreview[];
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
                            <div class="font-medium">{{ template.name }}</div>
                            @if (template.description) {
                                <div class="text-base-content/70 mt-1 text-sm">
                                    {{ template.description }}
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
                                @if (template.full_screen_takeover) {
                                    <span class="bg-base-200 rounded px-2 py-1">
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                                | translate
                                        }}
                                    </span>
                                }
                                @if (template.background_item_id) {
                                    <span class="bg-base-200 rounded px-2 py-1">
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                | translate
                                        }}
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
                                    <div
                                        data-template-layout
                                        class="absolute flex flex-col items-center justify-center overflow-hidden border-2 border-white/60 bg-black/60 leading-none text-white backdrop-blur-sm"
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
                        @for (item of version.layouts; track item.index) {
                            @let layout = item.layout;
                            <div
                                data-layout-item
                                class="border-base-300 bg-base-100 flex items-center gap-2 rounded-sm border p-2"
                            >
                                <icon class="text-xl">space_dashboard</icon>
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ positionLabel(layout) | translate }}
                                    </div>
                                    <div class="truncate text-xs opacity-60">
                                        {{
                                            pluginName(layout.plugin_id) ||
                                                ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                    | translate)
                                        }}
                                    </div>
                                    <div
                                        data-layout-values
                                        class="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-xs opacity-70"
                                    >
                                        @for (
                                            item of positionValues(layout);
                                            track item.axis
                                        ) {
                                            <span>
                                                {{ item.label | translate }}:
                                                {{ item.value }}%
                                            </span>
                                        }
                                    </div>
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
                versions: [
                    {
                        current: true,
                        layouts: current_version.layouts.map(
                            (layout, index) => ({ layout, index }),
                        ),
                        template: current_version,
                    },
                ],
                show_no_older_version: true,
            };
        }
        return {
            versions: [
                this.differentVersion(current_version, older_version, true),
                this.differentVersion(older_version, current_version, false),
            ],
            show_no_older_version: false,
        };
    });

    public previewItems(version: TemplateVersionPreview) {
        const rects = computeTemplateLayoutRects(version.template.layouts);
        return version.layouts.map(({ layout, index }) => ({
            index,
            layout,
            rect: rects[index],
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
        const position_axes: ('x_pos' | 'y_pos')[] = [];
        if (
            layout.position === 'left' ||
            layout.position === 'right' ||
            layout.position === 'floating'
        ) {
            position_axes.push('x_pos');
        }
        if (
            layout.position === 'top' ||
            layout.position === 'bottom' ||
            layout.position === 'floating'
        ) {
            position_axes.push('y_pos');
        }
        return position_axes.map((axis) => ({
            axis,
            label:
                axis === 'x_pos'
                    ? 'SIGNAGE_MANAGER.TEMPLATE_X_POS'
                    : 'SIGNAGE_MANAGER.TEMPLATE_Y_POS',
            value: this.axisPercentage(layout, axis),
        }));
    }

    public axisPercentage(
        layout: SignageTemplateLayout,
        axis: 'x_pos' | 'y_pos',
    ) {
        const percentage = layoutRatioToPercentage(layout[axis]);
        if (percentage !== null) return Math.round(percentage * 100) / 100;
        if (layout.position === 'floating') {
            return axis === 'x_pos'
                ? FLOATING_DEFAULT_X_PC
                : FLOATING_DEFAULT_Y_PC;
        }
        return axis === 'x_pos' ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
    }

    public pluginName(plugin_id?: string) {
        if (!plugin_id) return '';
        return (
            this._service.widgets().find((item) => item.id === plugin_id)
                ?.name || plugin_id
        );
    }

    private differentVersion(
        template: SignageTemplate,
        comparison: SignageTemplate,
        current: boolean,
    ): TemplateVersionPreview {
        return {
            current,
            layouts: template.layouts
                .map((layout, index) => ({ layout, index }))
                .filter(
                    ({ layout, index }) =>
                        !signageTemplateLayoutsEqual(
                            layout,
                            comparison.layouts[index],
                        ),
                ),
            template,
        };
    }
}
