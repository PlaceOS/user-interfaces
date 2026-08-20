import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { settingSignal } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { mediaThumbnail } from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import {
    computeTemplateLayoutRects,
    layoutPositionLabel,
} from './template-layout.util';

interface AspectRatioOption {
    id: string;
    label: string;
    ratio: number;
}

const ASPECT_RATIOS: AspectRatioOption[] = [
    { id: '16:9', label: '16:9', ratio: 16 / 9 },
    { id: '9:16', label: '9:16', ratio: 9 / 16 },
    { id: '4:3', label: '4:3', ratio: 4 / 3 },
    { id: '32:9', label: '32:9', ratio: 32 / 9 },
    { id: '1:1', label: '1:1', ratio: 1 },
];

@Component({
    selector: 'template-preview',
    template: `
        <div class="flex h-full min-h-0 flex-col">
            <div
                class="flex flex-wrap items-center gap-2 px-4 py-2"
                role="radiogroup"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.TEMPLATE_ASPECT_RATIO' | translate
                "
            >
                @for (option of aspect_ratios; track option.id) {
                    <button
                        type="button"
                        role="radio"
                        matRipple
                        class="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
                        [class.border-primary]="aspect().id === option.id"
                        [class.bg-primary]="aspect().id === option.id"
                        [class.text-primary-content]="aspect().id === option.id"
                        [class.border-base-300]="aspect().id !== option.id"
                        [class.hover:bg-base-200]="aspect().id !== option.id"
                        (click)="aspect.set(option)"
                        [attr.aria-checked]="aspect().id === option.id"
                    >
                        {{ option.label }}
                    </button>
                }
                <div class="w-px flex-1"></div>
                <a
                    btn
                    matRipple
                    class="border-base-300 flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW' | translate
                    "
                    [href]="player_link()"
                    target="_blank"
                    rel="noopener noreferrer"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW' | translate
                    "
                >
                    <icon>open_in_new</icon>
                    {{ 'SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW' | translate }}
                </a>
            </div>
            <div
                class="preview-frame-container flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4"
            >
                <div
                    class="preview-frame relative overflow-hidden rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black/20"
                    [style.--ratio]="aspect().ratio"
                >
                    @if (background_url()) {
                        <img
                            auth
                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                            [source]="background_url()"
                            [alt]="
                                'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                    | translate
                            "
                        />
                    }
                    @for (item of layout_rects(); track $index) {
                        <button
                            type="button"
                            class="absolute flex flex-col items-center justify-center overflow-hidden border-2 transition-colors leading-none"
                            [class.border-primary]="selected_index() === $index"
                            [class.bg-primary/40]="
                                selected_index() === $index &&
                                item.layout.plugin_id
                            "
                            [class.bg-primary/15]="
                                selected_index() === $index &&
                                !item.layout.plugin_id
                            "
                            [class.z-10]="selected_index() === $index"
                            [class.border-white/60]="
                                selected_index() !== $index &&
                                item.layout.plugin_id
                            "
                            [class.border-white/40]="
                                selected_index() !== $index &&
                                !item.layout.plugin_id
                            "
                            [class.border-dashed]="!item.layout.plugin_id"
                            [class.backdrop-blur-sm]="item.layout.plugin_id"
                            [class.bg-black/60]="
                                selected_index() !== $index &&
                                item.layout.plugin_id
                            "
                            [class.bg-black/10]="
                                selected_index() !== $index &&
                                !item.layout.plugin_id
                            "
                            [class.hover:bg-black/70]="
                                selected_index() !== $index &&
                                item.layout.plugin_id
                            "
                            [class.hover:bg-black/20]="
                                selected_index() !== $index &&
                                !item.layout.plugin_id
                            "
                            [style.left.%]="item.rect.left"
                            [style.top.%]="item.rect.top"
                            [style.width.%]="item.rect.width"
                            [style.height.%]="item.rect.height"
                            (click)="selectLayout($index)"
                            [attr.aria-label]="
                                positionLabel(item.layout.position) | translate
                            "
                            [attr.aria-pressed]="selected_index() === $index"
                        >
                            <div
                                class="truncate px-2 text-sm font-semibold text-base-content uppercase text-shadow-lg text-shadow-base-100"
                            >
                                {{
                                    positionLabel(item.layout.position)
                                        | translate
                                }}
                            </div>
                            <div class="truncate px-2 text-sm text-base-content/60 text-shadow-lg text-shadow-base-100">
                                {{
                                    pluginName(item.layout.plugin_id) ||
                                        ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                            | translate)
                                }}
                            </div>
                        </button>
                    }
                    @if (!layout_rects().length) {
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
        </div>
    `,
    styles: [
        `
            .preview-frame-container {
                container-type: size;
            }

            /* Largest frame with the chosen aspect ratio that fits the pane */
            .preview-frame {
                width: min(100%, calc(100cqh * var(--ratio)));
                aspect-ratio: var(--ratio);
            }

            .text-outline {
                -webkit-text-stroke: 1px var(--base-100);
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        AuthenticatedImageDirective,
    ],
})
export class TemplatePreviewComponent {
    private readonly _service = inject(SignageService);

    public readonly aspect_ratios = ASPECT_RATIOS;
    public readonly aspect = signal(ASPECT_RATIOS[0]);
    public readonly signage_path = settingSignal('signage_path');

    public readonly selected_index =
        this._service.selected_template_layout_index;
    private readonly _layouts = this._service.template_layout_draft;

    public readonly layout_rects = computed(() => {
        const layouts = this._layouts();
        const rects = computeTemplateLayoutRects(layouts);
        return layouts.map((layout, index) => ({
            layout,
            rect: rects[index],
        }));
    });

    public readonly background_url = computed(() => {
        const background_id =
            this._service.selected_template()?.background_item_id;
        return background_id ? mediaThumbnail(background_id) : '';
    });

    public readonly player_link = computed(() => {
        const template_id = this._service.selected_template()?.id;
        if (!template_id) return '';
        const signage_path = this.signage_path() || '/signage';
        return `${signage_path.replace(/\/$/, '')}/#/template/${encodeURIComponent(template_id)}?debug=true`;
    });

    public selectLayout(index: number) {
        this.selected_index.set(this.selected_index() === index ? null : index);
    }

    public pluginName(plugin_id?: string) {
        if (!plugin_id) return '';
        return (
            this._service.plugins().find((item) => item.id === plugin_id)
                ?.name || plugin_id
        );
    }

    public positionLabel = layoutPositionLabel;
}
