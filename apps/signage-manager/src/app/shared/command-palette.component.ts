import {
    Component,
    computed,
    debounced,
    ElementRef,
    inject,
    linkedSignal,
    resource,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageService } from '../signage.service';
import { injectNavItems } from './nav-items';

export const PALETTE_KINDS = [
    'page',
    'display',
    'playlist',
    'template',
    'zone',
    'media',
] as const;

export type PaletteKind = (typeof PALETTE_KINDS)[number];

/** One selectable row in the command palette */
export interface PaletteResult {
    key: string;
    kind: PaletteKind;
    icon: string;
    label: string;
    detail: string;
    select: () => void;
}

const KIND_LABELS: Record<PaletteKind, string> = {
    page: 'SIGNAGE_MANAGER.PALETTE_PAGES',
    display: 'SIGNAGE_MANAGER.NAV_DISPLAYS',
    playlist: 'SIGNAGE_MANAGER.NAV_PLAYLISTS',
    template: 'SIGNAGE_MANAGER.NAV_TEMPLATES',
    zone: 'SIGNAGE_MANAGER.NAV_ZONES',
    media: 'SIGNAGE_MANAGER.NAV_MEDIA',
};

/**
 * Search pages and signage items from one place. Opened with Cmd+K or
 * Ctrl+K through the CommandPaletteService.
 */
@Component({
    selector: 'command-palette',
    template: `
        <div class="flex max-h-[70vh] flex-col">
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <icon class="text-2xl opacity-60">search</icon>
                <input
                    class="min-w-0 flex-1 bg-transparent text-lg outline-none"
                    role="combobox"
                    aria-controls="command-palette-results"
                    [attr.aria-expanded]="results().length > 0"
                    [attr.aria-activedescendant]="
                        results().length ? optionId(active_index()) : null
                    "
                    [placeholder]="'SIGNAGE_MANAGER.PALETTE_SEARCH' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PALETTE_SEARCH' | translate
                    "
                    [value]="search()"
                    (input)="search.set($any($event.target).value)"
                    (keydown)="onKeydown($event)"
                />
                @if (loading()) {
                    <mat-spinner diameter="20" />
                }
            </div>
            <div
                id="command-palette-results"
                role="listbox"
                class="min-h-0 flex-1 overflow-auto p-2"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.PALETTE_RESULTS' | translate
                "
            >
                @for (group of groups(); track group.kind) {
                    <div
                        class="px-2 pt-2 pb-1 text-xs font-medium opacity-60"
                        role="presentation"
                    >
                        {{ group.label | translate }}
                    </div>
                    @for (item of group.items; track item.key) {
                        <button
                            type="button"
                            role="option"
                            matRipple
                            tabindex="-1"
                            class="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left"
                            [id]="optionId(item.index)"
                            [class.bg-base-200]="item.index === active_index()"
                            [attr.aria-selected]="item.index === active_index()"
                            (mouseenter)="active_index.set(item.index)"
                            (click)="item.select()"
                        >
                            <icon class="shrink-0 text-xl opacity-60">{{
                                item.icon
                            }}</icon>
                            <div class="min-w-0 flex-1">
                                <div class="truncate">{{ item.label }}</div>
                                @if (item.detail) {
                                    <div class="truncate text-xs opacity-60">
                                        {{ item.detail }}
                                    </div>
                                }
                            </div>
                        </button>
                    }
                } @empty {
                    @if (!loading()) {
                        <div class="p-6 text-center text-sm opacity-60">
                            {{
                                'SIGNAGE_MANAGER.PALETTE_NO_RESULTS' | translate
                            }}
                        </div>
                    }
                }
            </div>
        </div>
    `,
    imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class CommandPaletteComponent {
    private readonly _service = inject(SignageService);
    private readonly _router = inject(Router);
    private readonly _dialog_ref = inject(MatDialogRef);
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _nav_items = injectNavItems();

    public readonly search = signal('');
    private readonly _search_debounced = debounced(this.search, 250);
    private readonly _matches = resource({
        params: () => ({ search: this._search_debounced.value() }),
        loader: ({ params }) => this._service.searchAll(params.search),
    });

    public readonly loading = computed(
        () =>
            this._matches.isLoading() ||
            this.search().trim() !== this._search_debounced.value().trim(),
    );

    /** Pages filter as the user types. Signage items come from the API. */
    public readonly results = computed<PaletteResult[]>(() => {
        const term = this.search().trim().toLowerCase();
        const pages = this._nav_items()
            .map((item) => ({ ...item, label: i18n(item.label) }))
            .filter((item) => !term || item.label.toLowerCase().includes(term))
            .map((item) => ({
                key: `page-${item.route}`,
                kind: 'page' as const,
                icon: item.icon,
                label: item.label,
                detail: '',
                select: () => this._open([item.route]),
            }));
        // Keep old matches out once the term is cleared
        const matches = term ? this._matches.value() : undefined;
        if (!matches) return pages;
        return [
            ...pages,
            ...matches.displays.map((display) => ({
                key: `display-${display.id}`,
                kind: 'display' as const,
                icon: 'tv',
                label: display.display_name || display.name,
                detail: display.description || '',
                select: () => this._open(['/displays', display.id]),
            })),
            ...matches.playlists.map((playlist) => ({
                key: `playlist-${playlist.id}`,
                kind: 'playlist' as const,
                icon: 'playlist_play',
                label: playlist.name,
                detail: playlist.description || '',
                select: () => this._open(['/playlists', playlist.id]),
            })),
            ...matches.templates.map((template) => ({
                key: `template-${template.id}`,
                kind: 'template' as const,
                icon: 'dashboard_customize',
                label: template.name,
                detail: template.description || '',
                select: () => this._open(['/templates', template.id]),
            })),
            ...matches.zones.map((zone) => ({
                key: `zone-${zone.id}`,
                kind: 'zone' as const,
                icon: 'layers',
                label: zone.display_name || zone.name,
                detail: zone.description || '',
                select: () => this._open(['/zones', zone.id]),
            })),
            ...matches.media.map((media) => ({
                key: `media-${media.id}`,
                kind: 'media' as const,
                icon: 'stock_media',
                label: media.name,
                detail: media.description || '',
                select: () => {
                    this._dialog_ref.close();
                    void this._service.previewMedia(media);
                },
            })),
        ];
    });

    /** Results grouped by kind, each row keeping its index in the flat list */
    public readonly groups = computed(() => {
        const indexed = this.results().map((item, index) => ({
            ...item,
            index,
        }));
        return PALETTE_KINDS.map((kind) => ({
            kind,
            label: KIND_LABELS[kind],
            items: indexed.filter((item) => item.kind === kind),
        })).filter((group) => group.items.length);
    });

    /** Highlighted row. Goes back to the first row when the results change. */
    public readonly active_index = linkedSignal({
        source: this.results,
        computation: () => 0,
    });

    public optionId(index: number) {
        return `command-palette-option-${index}`;
    }

    public onKeydown(event: KeyboardEvent) {
        const count = this.results().length;
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp': {
                event.preventDefault();
                if (!count) return;
                const step = event.key === 'ArrowDown' ? 1 : -1;
                this.active_index.update(
                    (index) => (index + step + count) % count,
                );
                this._element.nativeElement
                    .querySelector(`#${this.optionId(this.active_index())}`)
                    ?.scrollIntoView({ block: 'nearest' });
                return;
            }
            case 'Enter':
                event.preventDefault();
                this.results()[this.active_index()]?.select();
                return;
        }
    }

    private _open(route: string[]) {
        this._dialog_ref.close();
        void this._router.navigate(route, { queryParamsHandling: 'merge' });
    }
}
