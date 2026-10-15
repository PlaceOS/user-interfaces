import {
    Component,
    computed,
    DestroyRef,
    effect,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    BuildingLevel,
    i18n,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarn,
    OrganisationService,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
import {
    BrowserRenderCheck,
    collectProtectedIds,
    DEFAULT_AI_STRINGS,
    DEFAULT_MAP_EDITOR_STRINGS,
    IndexedDbDraftStore,
    LiveGeometryProvider,
    MapDocument,
    MapEditorAiPanelComponent,
    MapEditorAiStringsOverride,
    MapEditorComponent,
    MapEditorNotifier,
    MapEditorSession,
    MapEditorStrings,
    NotifyAction,
    NotifyKind,
    UploadPort,
} from '@placeos/map-editor';
import { HasUnsavedChanges } from '../ui/unsaved-changes.guard';
import { MapManagementService } from './map-management.service';

/** The lib's English strings looked up as MAP_EDITOR.* locale keys. */
export function mapEditorStrings(): MapEditorStrings {
    const strings = { ...DEFAULT_MAP_EDITOR_STRINGS };
    for (const key of Object.keys(strings) as (keyof MapEditorStrings)[]) {
        const locale_key = `MAP_EDITOR.${key.toUpperCase()}`;
        const value = i18n(locale_key);
        if (value && value !== locale_key) strings[key] = value;
    }
    return strings;
}

/**
 * The AI panel's English strings looked up as MAP_EDITOR.AI.* locale keys; a
 * group such as `reasons` reads MAP_EDITOR.AI.REASONS.*.
 */
export function mapEditorAiStrings(
    lookup: (key: string) => string = i18n,
): MapEditorAiStringsOverride {
    const strings: Record<string, string | Record<string, string>> = {};
    for (const [name, value] of Object.entries(DEFAULT_AI_STRINGS)) {
        const prefix = `MAP_EDITOR.AI.${name.toUpperCase()}`;
        if (typeof value === 'string') {
            strings[name] = localised(lookup, prefix, value);
            continue;
        }
        const group: Record<string, string> = {};
        for (const [key, text] of Object.entries(
            value as Record<string, string>,
        )) {
            group[key] = localised(
                lookup,
                `${prefix}.${key.toUpperCase()}`,
                text,
            );
        }
        strings[name] = group;
    }
    return strings as MapEditorAiStringsOverride;
}

function localised(
    lookup: (key: string) => string,
    key: string,
    fallback: string,
): string {
    const value = lookup(key);
    return value && value !== key ? value : fallback;
}

@Component({
    selector: '[app-map-editor-page]',
    host: {
        '(window:beforeunload)':
            'hasUnsavedChanges() && $event.preventDefault()',
    },
    template: `
        <header
            class="border-base-200 bg-base-100 flex h-16 flex-none items-center gap-3 border-b pr-4 pl-2"
        >
            <a
                icon
                matRipple
                routerLink="/map-management"
                [matTooltip]="'APP.CONCIERGE.MAPS_BACK' | translate"
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
                    {{ 'APP.CONCIERGE.MAPS_SUBTITLE' | translate }}
                </div>
            </div>
            @if (bindings_incomplete()) {
                <span
                    class="bg-warning/20 text-base-content ml-2 inline-flex h-6 items-center gap-1 rounded-full px-2 text-xs font-medium"
                    [matTooltip]="failed_sources().join(', ')"
                >
                    <icon class="text-base">link_off</icon>
                    {{ 'APP.CONCIERGE.MAPS_BINDINGS_INCOMPLETE' | translate }}
                </span>
            }
            @if (changed_elsewhere()) {
                <span
                    class="bg-error/15 text-base-content ml-2 inline-flex h-6 items-center gap-1 rounded-full px-2 text-xs font-medium"
                >
                    <icon class="text-base">sync_problem</icon>
                    {{ 'APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE' | translate }}
                </span>
            }
            <div class="ml-auto flex items-center gap-2">
                @if (session()) {
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
                        {{ dirty() ? strings.unsaved : strings.saved }}
                    </p>
                }
                <button btn matRipple class="clear" (click)="openStudio()">
                    <div class="flex items-center space-x-2">
                        <icon>open_in_new</icon>
                        <div class="pr-2 max-md:sr-only">
                            {{ 'APP.CONCIERGE.MAPS_OPEN_STUDIO' | translate }}
                        </div>
                    </div>
                </button>
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
                    class="w-32"
                    [disabled]="!dirty() || !!saving()"
                    (click)="save()"
                >
                    {{ saving() || ('APP.CONCIERGE.MAPS_SAVE' | translate) }}
                </button>
            </div>
        </header>
        @if (error()) {
            <div
                class="border-error/30 bg-error/10 mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded border p-8 text-center"
            >
                <icon class="text-error text-4xl">error</icon>
                <p class="mt-2">{{ error() }}</p>
            </div>
        } @else if (session(); as editor_session) {
            <map-editor
                class="min-h-0 flex-1"
                [session]="editor_session"
                [strings]="strings"
                [notifier]="notifier"
            >
                @if (!ai_hidden()) {
                    <map-editor-ai-panel
                        panel
                        [session]="editor_session"
                        [zone_id]="level_id()"
                        [upload]="upload_port"
                        [strings]="ai_strings"
                    />
                }
            </map-editor>
        } @else {
            <div class="flex flex-1 items-center justify-center opacity-60">
                {{ loading() }}
            </div>
        }
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
        `,
    ],
    imports: [
        RouterModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        MapEditorComponent,
        MapEditorAiPanelComponent,
    ],
})
export class MapEditorPageComponent implements OnInit, HasUnsavedChanges {
    private readonly _route = inject(ActivatedRoute);
    private readonly _org = inject(OrganisationService);
    private readonly _dialog = inject(MatDialog);
    private readonly _manager = inject(MapManagementService);
    private readonly _destroy = inject(DestroyRef);

    public readonly level_id = signal('');
    public readonly level = signal<BuildingLevel | null>(null);
    public readonly session = signal<MapEditorSession | null>(null);
    public readonly loading = signal('');
    public readonly saving = signal('');
    public readonly error = signal('');
    public readonly failed_sources = signal<readonly string[]>([]);
    public readonly changed_elsewhere = signal(false);
    /** Set once the server answered that it has no map AI; drops the panel. */
    public readonly ai_hidden = signal(false);

    public readonly building = computed(() =>
        this._manager.building(this.level() || undefined),
    );
    public readonly bindings_incomplete = computed(
        () => this.failed_sources().length > 0,
    );
    public readonly dirty = computed(() => this.session()?.dirty() ?? false);

    public readonly strings = mapEditorStrings();
    public readonly ai_strings = mapEditorAiStrings();
    public readonly notifier: MapEditorNotifier = {
        confirm: (title, message, confirm_text) =>
            this._confirm(title, message, confirm_text),
        notify: (kind, message, action) => this._notify(kind, message, action),
    };
    public readonly upload_port: UploadPort = (blob, name) =>
        this._manager.uploadMapSnapshot(blob, name);

    private readonly _ai_panel = viewChild(MapEditorAiPanelComponent);
    private _loaded_map_id = '';

    constructor() {
        this._destroy.onDestroy(() => this.session()?.dispose());
        effect(() => {
            if (this._ai_panel()?.hidden()) this.ai_hidden.set(true);
        });
    }

    public hasUnsavedChanges(): boolean {
        return this.dirty();
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

    public openStudio() {
        this._manager.openStudio();
    }

    public async discard() {
        const session = this.session();
        if (!session || !session.dirty()) return;
        const ok = await this._confirm(
            i18n('APP.CONCIERGE.MAPS_DISCARD_TITLE'),
            i18n('APP.CONCIERGE.MAPS_DISCARD_MSG'),
            i18n('APP.CONCIERGE.MAPS_DISCARD_CONFIRM'),
        );
        if (!ok) return;
        session.revert(this.strings.undo);
        await session.clearDraft();
    }

    public async save() {
        const session = this.session();
        const level = this.level();
        if (!session || !level || !session.dirty() || this.saving()) return;
        this.saving.set(i18n('APP.CONCIERGE.MAPS_SAVING'));
        try {
            const current_map_id = await this._manager
                .currentMapId(level.id)
                .catch(() => this._loaded_map_id);
            if (current_map_id !== this._loaded_map_id) {
                this.changed_elsewhere.set(true);
                const ok = await this._confirm(
                    i18n('APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_TITLE'),
                    i18n('APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_MSG'),
                    i18n('APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_CONFIRM'),
                );
                if (!ok) return;
            }
            const markup = session.doc.serialise();
            const render = await session.render_check.check(markup);
            if (!render.ok) {
                notifyError(
                    `${i18n('APP.CONCIERGE.MAPS_RENDER_ERROR')} ${render.error || ''}`,
                );
                return;
            }
            const saved = await this._manager.saveLevelMap(
                level,
                markup,
                session.undo_label() || i18n('APP.CONCIERGE.MAPS_SUMMARY'),
            );
            this._loaded_map_id = saved.map_id;
            this.level.set(this._manager.level(level.id) || level);
            this.changed_elsewhere.set(false);
            session.markSaved();
            await session.clearDraft();
            notifySuccess(i18n('APP.CONCIERGE.MAPS_SAVED'));
        } catch (error) {
            notifyError(
                `${i18n('APP.CONCIERGE.MAPS_SAVE_ERROR')} ${errorText(error)}`,
            );
        } finally {
            this.saving.set('');
        }
    }

    private async _load(level: BuildingLevel) {
        const [text, protected_ids] = await Promise.all([
            this._manager.loadMapText(level),
            collectProtectedIds(this._manager.protectedIdSources(level)),
        ]);
        this.failed_sources.set(protected_ids.failed_sources);
        let doc: MapDocument | null = null;
        const geometry = new LiveGeometryProvider(
            () => (doc as MapDocument).root,
        );
        doc = MapDocument.load(text, { geometry, protected: protected_ids });
        const session = new MapEditorSession(doc, {
            zone_id: level.id,
            source_text: text,
            geometry,
            protected: protected_ids,
            render_check: new BrowserRenderCheck(),
            draft_store: IndexedDbDraftStore.isAvailable()
                ? new IndexedDbDraftStore()
                : null,
        });
        this.session.set(session);
        const draft = await session.loadDraft().catch(() => null);
        if (draft && draft !== session.doc.serialise()) {
            const ok = await this._confirm(
                i18n('APP.CONCIERGE.MAPS_DRAFT_TITLE'),
                i18n('APP.CONCIERGE.MAPS_DRAFT_MSG'),
                i18n('APP.CONCIERGE.MAPS_DRAFT_RESTORE'),
            );
            if (ok) {
                try {
                    session.restore(
                        draft,
                        i18n('APP.CONCIERGE.MAPS_DRAFT_LABEL'),
                    );
                } catch (error) {
                    notifyWarn(
                        `${i18n('APP.CONCIERGE.MAPS_DRAFT_ERROR')} ${errorText(error)}`,
                    );
                    await session.clearDraft();
                }
            } else {
                await session.clearDraft();
            }
        }
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

    private _notify(kind: NotifyKind, message: string, action?: NotifyAction) {
        const label = action?.label;
        const run = action?.run;
        switch (kind) {
            case 'success':
                notifySuccess(message, label, run);
                break;
            case 'error':
                notifyError(message, label, run);
                break;
            case 'warning':
                notifyWarn(message, label, run);
                break;
            default:
                notifyInfo(message, label, run);
        }
    }
}

function errorText(error: unknown): string {
    const detail = error as { message?: string; error?: string } | null;
    return detail?.message || detail?.error || `${error || ''}`;
}
