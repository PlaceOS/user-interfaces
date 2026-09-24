import { Component, computed, inject, resource } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import type { SignageMedia } from '@placeos/ts-client';
import { format } from 'date-fns';
import { CONFLICT_WINDOW_DAYS } from '../schedules/schedule-conflicts.util';
import { SignageService } from '../signage.service';

/** Most rows shown in each report section */
const MAX_ROWS = 50;

/** One row of a report section */
interface ReportRow {
    key: string;
    label: string;
    detail: string;
    route?: string[];
    media?: SignageMedia;
}

/** A report section: a heading, a hint and the rows that need attention */
interface ReportSection {
    id: string;
    icon: string;
    title: string;
    hint: string;
    rows: ReportRow[];
}

/**
 * Report of content that needs attention: displays with no playlists,
 * playlists that play nowhere, expired content that is still in use, and
 * takeover conflicts.
 */
@Component({
    selector: 'content-report',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-auto p-6">
            <div class="mb-6 flex items-start gap-4">
                <div class="flex-1">
                    <h1 class="mb-1 text-2xl">
                        {{ 'SIGNAGE_MANAGER.REPORT_HEADER' | translate }}
                    </h1>
                    <p class="text-base-content/60 text-sm">
                        {{ 'SIGNAGE_MANAGER.REPORT_HINT' | translate }}
                    </p>
                </div>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [disabled]="report.isLoading()"
                    [attr.aria-label]="'COMMON.REFRESH' | translate"
                    (click)="report.reload()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
            @if (report.isLoading()) {
                <div
                    class="flex flex-1 flex-col items-center justify-center gap-3 opacity-70"
                >
                    <mat-spinner diameter="32" />
                    <p>
                        {{ 'SIGNAGE_MANAGER.REPORT_LOADING' | translate }}
                    </p>
                </div>
            } @else if (report.error()) {
                <p class="border-error text-error rounded border p-3 text-sm">
                    {{ 'SIGNAGE_MANAGER.REPORT_ERROR' | translate }}
                </p>
            } @else {
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    @for (section of sections(); track section.id) {
                        <section
                            class="border-base-300 min-w-0 rounded-lg border"
                            [attr.aria-labelledby]="'report-' + section.id"
                        >
                            <header
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <icon class="text-xl opacity-60">{{
                                    section.icon
                                }}</icon>
                                <h2
                                    class="min-w-0 flex-1 font-medium"
                                    [id]="'report-' + section.id"
                                >
                                    {{ section.title | translate }}
                                </h2>
                                <span
                                    class="rounded-full px-2 text-sm tabular-nums"
                                    [class.bg-warning]="section.rows.length"
                                    [class.text-warning-content]="
                                        section.rows.length
                                    "
                                    [class.bg-base-200]="!section.rows.length"
                                >
                                    {{ section.rows.length }}
                                </span>
                            </header>
                            <p class="px-4 pt-2 text-xs opacity-60">
                                {{
                                    section.hint
                                        | translate: { days: window_days }
                                }}
                            </p>
                            @if (section.rows.length) {
                                <ul class="p-2">
                                    @for (
                                        row of visibleRows(section);
                                        track row.key
                                    ) {
                                        <li>
                                            @if (row.route) {
                                                <a
                                                    matRipple
                                                    class="hover:bg-base-200 block rounded px-2 py-1.5"
                                                    [routerLink]="row.route"
                                                    queryParamsHandling="merge"
                                                >
                                                    <div class="truncate">
                                                        {{ row.label }}
                                                    </div>
                                                    @if (row.detail) {
                                                        <div
                                                            class="truncate text-xs opacity-60"
                                                        >
                                                            {{ row.detail }}
                                                        </div>
                                                    }
                                                </a>
                                            } @else if (row.media) {
                                                <button
                                                    type="button"
                                                    matRipple
                                                    class="hover:bg-base-200 block w-full rounded px-2 py-1.5 text-left"
                                                    (click)="preview(row.media)"
                                                >
                                                    <div class="truncate">
                                                        {{ row.label }}
                                                    </div>
                                                    <div
                                                        class="truncate text-xs opacity-60"
                                                    >
                                                        {{ row.detail }}
                                                    </div>
                                                </button>
                                            }
                                        </li>
                                    }
                                    @if (section.rows.length > max_rows) {
                                        <li
                                            class="px-2 py-1.5 text-xs opacity-60"
                                        >
                                            +{{
                                                section.rows.length - max_rows
                                            }}
                                        </li>
                                    }
                                </ul>
                            } @else {
                                <p
                                    class="flex items-center gap-2 px-4 py-3 text-sm opacity-60"
                                >
                                    <icon class="text-success"
                                        >check_circle</icon
                                    >
                                    {{
                                        'SIGNAGE_MANAGER.REPORT_ALL_CLEAR'
                                            | translate
                                    }}
                                </p>
                            }
                        </section>
                    }
                </div>
            }
        </div>
    `,
    imports: [
        MatProgressSpinnerModule,
        MatRippleModule,
        RouterLink,
        IconComponent,
        TranslatePipe,
    ],
})
export class ContentReportComponent {
    private readonly _service = inject(SignageService);

    public readonly max_rows = MAX_ROWS;
    public readonly window_days = CONFLICT_WINDOW_DAYS;
    // Loads when the page opens. The refresh button loads it again.
    public readonly report = resource({
        loader: () => this._service.loadContentReport(),
    });

    public readonly sections = computed<ReportSection[]>(() => {
        const report = this.report.value();
        if (!report) return [];
        return [
            {
                id: 'conflicts',
                icon: 'warning',
                title: 'SIGNAGE_MANAGER.REPORT_CONFLICTS',
                hint: 'SIGNAGE_MANAGER.REPORT_CONFLICTS_HINT',
                rows: report.conflicts.map((conflict) => ({
                    key: `${conflict.display.id}-${conflict.playlists[0].id}-${conflict.playlists[1].id}`,
                    label: `${conflict.playlists[0].name} · ${conflict.playlists[1].name}`,
                    detail: `${conflict.display.display_name || conflict.display.name} · ${format(conflict.starts_at, 'EEE d MMM, HH:mm')}`,
                    route: ['/displays', conflict.display.id],
                })),
            },
            {
                id: 'empty-displays',
                icon: 'tv_off',
                title: 'SIGNAGE_MANAGER.REPORT_EMPTY_DISPLAYS',
                hint: 'SIGNAGE_MANAGER.REPORT_EMPTY_DISPLAYS_HINT',
                rows: report.empty_displays.map((display) => ({
                    key: display.id,
                    label: display.display_name || display.name,
                    detail: display.description || '',
                    route: ['/displays', display.id],
                })),
            },
            {
                id: 'unassigned-playlists',
                icon: 'playlist_remove',
                title: 'SIGNAGE_MANAGER.REPORT_UNASSIGNED_PLAYLISTS',
                hint: 'SIGNAGE_MANAGER.REPORT_UNASSIGNED_PLAYLISTS_HINT',
                rows: report.unassigned_playlists.map((playlist) => ({
                    key: playlist.id,
                    label: playlist.name,
                    detail: playlist.description || '',
                    route: ['/playlists', playlist.id],
                })),
            },
            {
                id: 'expired-playlists',
                icon: 'event_busy',
                title: 'SIGNAGE_MANAGER.REPORT_EXPIRED_PLAYLISTS',
                hint: 'SIGNAGE_MANAGER.REPORT_EXPIRED_PLAYLISTS_HINT',
                rows: report.expired_playlists.map((playlist) => ({
                    key: playlist.id,
                    label: playlist.name,
                    detail: format(
                        (playlist.valid_until || 0) * 1000,
                        'd MMM yyyy',
                    ),
                    route: ['/playlists', playlist.id],
                })),
            },
            {
                id: 'expired-media',
                icon: 'hide_image',
                title: 'SIGNAGE_MANAGER.REPORT_EXPIRED_MEDIA',
                hint: 'SIGNAGE_MANAGER.REPORT_EXPIRED_MEDIA_HINT',
                rows: report.expired_media.map(({ media, playlists }) => ({
                    key: media.id,
                    label: media.name,
                    detail: playlists.map(({ name }) => name).join(', '),
                    media,
                })),
            },
        ];
    });

    public visibleRows(section: ReportSection) {
        return section.rows.slice(0, MAX_ROWS);
    }

    public preview(media: SignageMedia) {
        void this._service.previewMedia(media);
    }
}
