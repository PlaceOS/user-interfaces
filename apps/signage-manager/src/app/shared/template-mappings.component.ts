import { Component, computed, inject, input, resource } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { i18n } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    mediaThumbnail,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import {
    playlistScheduleExpiryTooltip,
    playlistScheduleLabel,
    playlistScheduleNextPlayLabels,
} from '../signage-playlist.util';
import {
    HydratedSignageTemplateMapping,
    SignageTemplateMappingTarget,
} from '../signage-template-mapping';
import { SignageService } from '../signage.service';
import { computeTemplateLayoutRects } from '../templates/template-layout.util';

export type TemplateMappingTargetType = 'display' | 'zone';

@Component({
    selector: 'template-mappings',
    template: `
        <div class="flex h-full min-h-0 w-full flex-col">
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h5
                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                >
                    <icon class="text-lg">dashboard</icon>
                    {{ 'SIGNAGE_MANAGER.NAV_TEMPLATES' | translate }}
                    <span>({{ mappings().length }})</span>
                </h5>
                @if (can_update()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.APPLY_TEMPLATE' | translate
                        "
                        (click)="editMapping()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.APPLY_TEMPLATE' | translate
                        "
                    >
                        <icon>add</icon>
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-auto p-3">
                @if (loading()) {
                    <div
                        class="text-base-content/70 flex h-full items-center justify-center p-8"
                    >
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                } @else if (load_error()) {
                    <div
                        class="text-error flex h-full flex-col items-center justify-center gap-2 p-8 text-center"
                    >
                        <icon class="text-4xl">error</icon>
                        <p>
                            {{
                                'SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR'
                                    | translate
                            }}
                        </p>
                    </div>
                } @else if (mapping_cards().length) {
                    <div
                        class="grid grid-cols-1 gap-3 xl:grid-cols-2 2xl:grid-cols-3"
                    >
                        @for (card of mapping_cards(); track card.mapping.id) {
                            <article
                                class="border-base-300 bg-base-100 overflow-hidden rounded-lg border"
                            >
                                <div
                                    role="img"
                                    class="bg-neutral relative aspect-video overflow-hidden"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA'
                                            | translate
                                                : {
                                                      name: card.mapping
                                                          .template_details
                                                          .name,
                                                  }
                                    "
                                >
                                    @if (
                                        backgroundUrl(card.mapping);
                                        as background_url
                                    ) {
                                        <img
                                            auth
                                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                                            [source]="background_url"
                                            [alt]="
                                                card.mapping.template_details
                                                    .name
                                            "
                                        />
                                    }
                                    @for (
                                        item of card.layout_items;
                                        track item.index
                                    ) {
                                        <div
                                            class="absolute flex items-center justify-center overflow-hidden border border-white/60 bg-black/50"
                                            [class.border-dashed]="
                                                !item.plugin_id
                                            "
                                            [style.left.%]="item.left"
                                            [style.top.%]="item.top"
                                            [style.width.%]="item.width"
                                            [style.height.%]="item.height"
                                        >
                                            @if (item.plugin_id) {
                                                <icon class="text-sm text-white"
                                                    >widgets</icon
                                                >
                                            }
                                        </div>
                                    }
                                    @if (!card.layout_items.length) {
                                        <div
                                            class="absolute inset-0 flex items-center justify-center"
                                        >
                                            <icon class="text-4xl text-white/50"
                                                >dashboard</icon
                                            >
                                        </div>
                                    }
                                </div>
                                <div class="p-3">
                                    <div class="flex items-start gap-2">
                                        <div class="min-w-0 flex-1">
                                            <h6 class="truncate font-medium">
                                                {{
                                                    card.mapping
                                                        .template_details.name
                                                }}
                                            </h6>
                                            @if (
                                                target_type() === 'display' &&
                                                    card.mapping.zone_id;
                                                as zone_id
                                            ) {
                                                <div
                                                    class="text-base-content/60 text-xs flex items-center gap-1"
                                                >
                                                    <div>Configured on zone:</div>
                                                    <a
                                                        class="text-primary block truncate hover:underline"
                                                        [routerLink]="[
                                                            '/zones',
                                                            zone_id,
                                                        ]"
                                                        [queryParams]="{ tab: 'templates' }"
                                                    >
                                                        {{ card.zone_name }}
                                                    </a>
                                                </div>
                                            }
                                            @if (
                                                card.mapping.template_details
                                                    .description
                                            ) {
                                                <p
                                                    class="text-base-content/70 mt-1 line-clamp-2 text-xs"
                                                >
                                                    {{
                                                        card.mapping
                                                            .template_details
                                                            .description
                                                    }}
                                                </p>
                                            }
                                        </div>
                                        @if (can_update()) {
                                            <div class="flex shrink-0 gap-1">
                                                <button
                                                    icon
                                                    default
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'COMMON.EDIT'
                                                            | translate
                                                    "
                                                    (click)="
                                                        editMapping(
                                                            card.mapping
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'COMMON.EDIT'
                                                            | translate
                                                    "
                                                >
                                                    <icon>edit</icon>
                                                </button>
                                                @if (
                                                    target_type() === 'zone' ||
                                                    !card.mapping.zone_id
                                                ) {
                                                    <button
                                                        icon
                                                        default
                                                        error
                                                        type="button"
                                                        matRipple
                                                        [matTooltip]="
                                                            'COMMON.REMOVE'
                                                                | translate
                                                        "
                                                        (click)="
                                                            removeMapping(
                                                                card.mapping
                                                            )
                                                        "
                                                        [attr.aria-label]="
                                                            'COMMON.REMOVE'
                                                                | translate
                                                        "
                                                    >
                                                        <icon>delete</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                    @if (card.mapping.schedule; as schedule) {
                                        <div
                                            class="border-base-300 bg-base-100 text-base-content relative mt-4 flex flex-col rounded-lg border text-sm"
                                        >
                                            <div
                                                class="bg-base-100 absolute -top-3 left-4 rounded-lg px-2 text-xs font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.SCHEDULE'
                                                        | translate
                                                }}
                                            </div>
                                            <div
                                                class="rounded-md p-2"
                                                [matTooltip]="
                                                    scheduleTooltip(schedule)
                                                "
                                                matTooltipClass="playlist-schedule-tooltip"
                                            >
                                                {{ scheduleLabel(schedule) }}
                                            </div>
                                        </div>
                                    } @else {
                                        <div class="mt-2 text-xs">
                                            <span
                                                class="bg-primary text-primary-content rounded px-2 py-1 font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.DEFAULT_TEMPLATE'
                                                        | translate
                                                }}
                                            </span>
                                        </div>
                                    }
                                </div>
                            </article>
                        }
                    </div>
                } @else {
                    <div
                        class="text-base-content/70 flex h-full flex-col items-center justify-center gap-2 p-8 text-center"
                    >
                        <icon class="text-5xl">dashboard</icon>
                        <p>
                            {{
                                'SIGNAGE_MANAGER.NO_TEMPLATE_MAPPINGS'
                                    | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                min-height: 0;
                height: 100%;
            }

            ::ng-deep .playlist-schedule-tooltip .mdc-tooltip__surface {
                white-space: pre-line;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        RouterLink,
        TranslatePipe,
    ],
})
export class TemplateMappingsComponent {
    private readonly _service = inject(SignageService);

    public readonly target_type = input<TemplateMappingTargetType>('display');
    public readonly target_id = input('');
    public readonly can_update = this._service.can_update;

    private readonly _mappings = resource({
        params: () => ({
            target_type: this.target_type(),
            target_id: this.target_id(),
        }),
        loader: ({ params }) =>
            params.target_id
                ? this._service.listTemplateMappings(
                      this._target(params.target_type, params.target_id),
                  )
                : Promise.resolve([]),
    });
    public readonly mappings = computed(() => this._mappings.value() || []);
    public readonly loading = this._mappings.isLoading;
    public readonly load_error = this._mappings.error;
    public readonly mapping_cards = computed(() => {
        const zone_names = new Map(
            this._service
                .all_zones()
                .map((zone) => [
                    zone.id,
                    zone.display_name || zone.name || zone.id,
                ]),
        );
        return this.mappings().map((mapping) => {
            const layouts = mapping.template_details.layouts || [];
            const rects = computeTemplateLayoutRects(layouts);
            return {
                mapping,
                zone_name: zone_names.get(mapping.zone_id) || mapping.zone_id,
                layout_items: layouts.map((layout, index) => ({
                    index,
                    plugin_id: layout.plugin_id,
                    ...rects[index],
                })),
            };
        });
    });

    public backgroundUrl(mapping: HydratedSignageTemplateMapping) {
        const template = mapping.template_details;
        return (
            template.background_media?.media_url ||
            (template.background_item_id
                ? mediaThumbnail(template.background_item_id)
                : '')
        );
    }

    public scheduleLabel = playlistScheduleLabel;

    public scheduleTooltip(schedule: Partial<SignagePlaylistSchedule>) {
        const labels = playlistScheduleNextPlayLabels(schedule);
        const expiry = playlistScheduleExpiryTooltip(schedule);
        return [
            `-- ${i18n('SIGNAGE_MANAGER.NEXT_5_PLAYS')} --`,
            ...(labels.length
                ? labels
                : [i18n('SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES')]),
            ...(expiry ? [`${i18n('FORM.EXPIRES_AT')}: ${expiry}`] : []),
        ].join('\n');
    }

    public async editMapping(
        mapping: HydratedSignageTemplateMapping | null = null,
    ) {
        const changed = await this._service.editTemplateMapping(
            this._target(this.target_type(), this.target_id()),
            mapping,
        );
        if (changed) this._mappings.reload();
    }

    public async removeMapping(mapping: HydratedSignageTemplateMapping) {
        if (await this._service.removeTemplateMapping(mapping)) {
            this._mappings.reload();
        }
    }

    private _target(
        type: TemplateMappingTargetType,
        id: string,
    ): SignageTemplateMappingTarget {
        return type === 'display' ? { control_system_id: id } : { zone_id: id };
    }
}
