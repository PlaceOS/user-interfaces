import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, log } from '@placeos/common';
import { PluginConfigPayload, PluginEmbedComponent } from '@placeos/components';
import {
    MediaAnimation,
    querySignagePlugins,
    showSignageMedia,
    showSignageTemplate,
    SignageMedia,
    SignagePlugin,
    SignageTemplate,
    SignageTemplateLayout,
    SignageTemplateMapping,
} from '@placeos/ts-client';
import { isDebugEnabled } from './debug-state';
import { MediaCacheService } from './media-cache.service';
import { MediaPlayerComponent } from './media-player.component';
import { SignagePanelComponent } from './signage.component';
import { SignageService } from './signage.service';
import { computeTemplateLayout, TemplateLayoutRect } from './template-layout';
import { MediaPlayerItem } from './types';

const STORE_DISPLAY_KEY = 'PlaceOS.SIGNAGE.display';
/** Message type the signage manager posts with unsaved layouts to preview */
const PREVIEW_LAYOUTS_MESSAGE = 'signage:template-layouts';
/** Message type posted to the signage manager to request its unsaved layouts */
const PREVIEW_READY_MESSAGE = 'signage:template-preview-ready';
/** First delay before a failed template load is tried again */
const RETRY_BASE_MS = 15_000;
/** Longest delay between template load retries */
const RETRY_MAX_MS = 5 * 60_000;

interface RenderedLayoutItem {
    plugin: SignagePlugin;
    config: PluginConfigPayload;
    rect: TemplateLayoutRect;
}

function backgroundPlayerItem(
    media: SignageMedia,
    plugins: SignagePlugin[],
    media_cache: MediaCacheService,
    cache_owner: string,
): MediaPlayerItem {
    const plugin = plugins.find((item) => item.id === media.plugin_id);
    const cacheable =
        media.media_type !== 'webpage' && media.media_type !== 'plugin';
    if (cacheable) {
        media_cache
            .requestFilesToCache([media.media_url], cache_owner, {
                prune_other_owners: false,
            })
            .catch(() => undefined);
    }
    return {
        id: media.id,
        name: media.name,
        playlist: '',
        playlist_name: '',
        animation: media.animation || MediaAnimation.Cut,
        type: media.media_type,
        url: media.media_url,
        start_time: media.start_time,
        duration: media.play_time || media.video_length || 15_000,
        valid_from: media.valid_from || 0,
        valid_until: media.valid_until || 0,
        plugin,
        plugin_params: plugin
            ? { ...plugin.defaults, ...media.plugin_params }
            : undefined,
        getURL: async () => {
            if (!cacheable) return media.media_url || plugin?.uri || '';
            let file = await media_cache
                .getFile(media.media_url)
                .catch(() => null);
            if (!file) {
                await media_cache
                    .requestFilesToCache([media.media_url], cache_owner, {
                        prune_other_owners: false,
                    })
                    .catch(() => undefined);
                file = await media_cache
                    .getFile(media.media_url)
                    .catch(() => null);
            }
            try {
                if (file) return URL.createObjectURL(file);
            } catch {}
            // Not cached (for example too large to cache): play from the server
            return media_cache.directURL(media.media_url);
        },
        isLoading: cacheable
            ? () => media_cache.isLoadingFile(media.media_url)
            : () => false,
        isCached: cacheable
            ? () => media_cache.isCachedFile(media.media_url)
            : () => false,
    };
}

@Component({
    selector: 'signage-template',
    host: {
        class: 'bg-[var(--bg)]',
    },
    template: `
        @if (background_playlist().length) {
            <media-player
                class="absolute inset-0 z-0"
                [playlist]="background_playlist()"
                [loop]="'ONE'"
                [muted]="true"
                [transparent]="true"
            />
        }
        <signage-panel
            class="absolute z-10"
            [transparent]="true"
            [style.left.%]="player_rect().left"
            [style.top.%]="player_rect().top"
            [style.width.%]="player_rect().width"
            [style.height.%]="player_rect().height"
        />
        @if (template()) {
            @for (item of layout_items(); track item.config.instance_id) {
                <plugin-embed
                    class="absolute z-20 bg-transparent"
                    [class.pointer-events-none]="debug()"
                    [plugin]="item.plugin"
                    [config]="item.config"
                    [auto_play]="true"
                    [style.left.%]="item.rect.left"
                    [style.top.%]="item.rect.top"
                    [style.width.%]="item.rect.width"
                    [style.height.%]="item.rect.height"
                />
            }
        }
    `,
    styles: `
        :host {
            position: relative;
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
    `,
    imports: [
        MediaPlayerComponent,
        PluginEmbedComponent,
        SignagePanelComponent,
    ],
})
export class SignageTemplateComponent extends AsyncHandler implements OnInit {
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _media_cache = inject(MediaCacheService);
    private readonly _signage = inject(SignageService);
    private readonly _plugins = signal<SignagePlugin[]>([]);
    private readonly _route_template_id = signal('');
    private _load_id = 0;

    public readonly debug = this._signage.debug;
    public readonly template = signal<SignageTemplate | null>(null);
    // Unsaved layouts posted by the manager preview; only used in debug mode
    private readonly _preview_layouts = signal<SignageTemplateLayout[] | null>(
        null,
    );
    public readonly background_playlist = signal<MediaPlayerItem[]>([]);

    private readonly _template_mappings = computed(() => {
        const template_id = this._route_template_id();
        return template_id
            ? [new SignageTemplateMapping({ template_id })]
            : this._signage.active_templates();
    });
    private readonly _template_mappings$ = toObservable(
        this._template_mappings,
    );

    private readonly _layout = computed(() =>
        computeTemplateLayout(
            (this.debug() && this._preview_layouts()) ||
                this.template()?.layouts ||
                [],
        ),
    );

    public readonly player_rect = computed(() => this._layout().player);
    public readonly layout_items = computed<RenderedLayoutItem[]>(() => {
        const template_id = this.template()?.id || 'template';
        const plugins = this._plugins();
        return this._layout()
            .items.map(({ layout, rect }, index) => {
                const plugin = plugins.find(
                    (item) => item.id === layout.plugin_id,
                );
                return plugin
                    ? {
                          plugin,
                          rect,
                          config: {
                              instance_id: `${template_id}-layout-${index}`,
                              config: {
                                  ...plugin.defaults,
                                  ...layout.plugin_params,
                              },
                          },
                      }
                    : null;
            })
            .filter((item): item is RenderedLayoutItem => !!item);
    });

    public ngOnInit() {
        // Read preview mode before the child panel starts and templates load.
        const params = this._route.snapshot.queryParamMap;
        if (params.has('debug')) {
            this.debug.set(isDebugEnabled(params.get('debug')));
        }
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                const template_id = params.get('template_id') || '';
                const system_id = params.get('system_id') || '';
                if (template_id && !system_id) {
                    this._bootstrapTemplate(template_id);
                    return;
                }
                this._route_template_id.set(template_id);
            }),
        );
        this.subscription(
            'template',
            this._template_mappings$.subscribe((mappings) =>
                this._loadTemplates(mappings),
            ),
        );
        window.addEventListener('message', this._preview_message_handler);
        this.subscription('preview-message', () =>
            window.removeEventListener(
                'message',
                this._preview_message_handler,
            ),
        );
        // Marks any load still in flight as stale, so it schedules no retry
        this.subscription('stale-loads', () => this._load_id++);
    }

    /**
     * Unsaved layouts from the manager preview, which embeds the player in an
     * iframe. Only the parent frame is listened to, so content on screen
     * cannot replace the layout.
     */
    private readonly _preview_message_handler = (event: MessageEvent) => {
        if (window.parent === window || event?.source !== window.parent) return;
        const data = event?.data;
        if (!this.debug() || data?.type !== PREVIEW_LAYOUTS_MESSAGE) return;
        this._preview_layouts.set(
            Array.isArray(data.layouts) ? data.layouts : null,
        );
    };

    /**
     * Ask the embedding manager preview for its unsaved layouts. The manager
     * cannot know when this listener is ready, so the player asks first.
     * Only previews run in debug mode, so a player embedded anywhere else
     * says nothing to its parent.
     */
    private _requestPreviewLayouts() {
        if (!this.debug() || window.parent === window) return;
        window.parent.postMessage({ type: PREVIEW_READY_MESSAGE }, '*');
    }

    private _bootstrapTemplate(template_id: string) {
        const display_id = localStorage.getItem(STORE_DISPLAY_KEY);
        if (display_id) {
            this._router.navigate(['/template', template_id, display_id], {
                replaceUrl: true,
            });
            return;
        }
        this._router.navigate(['/bootstrap'], {
            queryParams: { template: template_id },
            replaceUrl: true,
        });
    }

    private _loadTemplates(mappings: SignageTemplateMapping[]) {
        const load_id = ++this._load_id;
        this.clearTimeout('retry-templates');
        this._preview_layouts.set(null);
        this._requestPreviewLayouts();
        if (!mappings.length) {
            this._plugins.set([]);
            this.template.set(null);
            this.background_playlist.set([]);
            return;
        }
        return this._fetchTemplates(mappings, load_id, 0);
    }

    /**
     * Load and show the templates for `mappings`. While any part fails it
     * tries again, with the delay doubling up to `RETRY_MAX_MS`, until it
     * succeeds or the mappings change. A display that boots offline, or hits
     * a passing server error, then gets its template once the server answers.
     */
    private async _fetchTemplates(
        mappings: SignageTemplateMapping[],
        load_id: number,
        attempt: number,
    ) {
        let complete = false;
        try {
            complete = await this._showTemplates(mappings, load_id);
        } catch (error) {
            if (load_id !== this._load_id) return;
            log('SIGNAGE', 'Unable to show templates', [error], 'error');
            this.template.set(null);
            this.background_playlist.set([]);
        }
        if (complete || load_id !== this._load_id) return;
        const delay = Math.min(
            RETRY_BASE_MS * 2 ** Math.min(attempt, 10),
            RETRY_MAX_MS,
        );
        this.timeout(
            'retry-templates',
            () => this._fetchTemplates(mappings, load_id, attempt + 1),
            delay,
        );
    }

    /**
     * Show what loads of the templates for `mappings`. Each template is loaded
     * on its own, so one that fails does not hide the others.
     * @returns Whether everything loaded, including plugins and background
     */
    private async _showTemplates(
        mappings: SignageTemplateMapping[],
        load_id: number,
    ) {
        // Preview the pending template even before its first approval.
        const results = await Promise.allSettled(
            mappings.map((mapping) =>
                showSignageTemplate(
                    mapping.template_id,
                    this.debug() ? {} : { approved: true },
                ),
            ),
        );
        if (load_id !== this._load_id) return false;
        const failed = mappings.filter(
            (_, index) => results[index].status === 'rejected',
        );
        if (failed.length) {
            log(
                'SIGNAGE',
                `Unable to load templates "${failed.map((mapping) => mapping.template_id).join(', ')}"`,
                results.flatMap((result) =>
                    result.status === 'rejected' ? [result.reason] : [],
                ),
                'error',
            );
        }
        const candidates = mappings.flatMap((mapping, index) => {
            const result = results[index];
            return result.status === 'fulfilled'
                ? [{ mapping, template: result.value }]
                : [];
        });
        const non_merge = candidates.filter(({ template }) => !template.merge);
        const merge = candidates.filter(({ template }) => template.merge);
        const base =
            non_merge.filter(({ mapping }) => mapping.schedule).at(-1) ||
            non_merge[0] ||
            merge.shift();
        if (!base) {
            this.template.set(null);
            this.background_playlist.set([]);
            return false;
        }
        const template = merge.length
            ? new SignageTemplate({
                  ...base.template,
                  layouts: [
                      ...base.template.layouts,
                      ...merge.flatMap(({ template }) => template.layouts),
                  ],
              })
            : base.template;
        const failedPart = (part: string) => (error: unknown) => {
            log('SIGNAGE', `Unable to load template ${part}`, [error], 'error');
            return null;
        };
        const [plugin_result, background] = await Promise.all([
            querySignagePlugins({ limit: 500 }).catch(failedPart('plugins')),
            template.background_item_id
                ? showSignageMedia(template.background_item_id).catch(
                      failedPart('background'),
                  )
                : null,
        ]);
        if (load_id !== this._load_id) return false;
        // Keep the last known plugins rather than leave the layout empty
        const plugins = plugin_result
            ? plugin_result.data || []
            : this._plugins();
        this._plugins.set(plugins);
        this.template.set(template);
        this.background_playlist.set(
            background
                ? [
                      backgroundPlayerItem(
                          background,
                          plugins,
                          this._media_cache,
                          `template:${template.id}`,
                      ),
                  ]
                : [],
        );
        return (
            !failed.length &&
            !!plugin_result &&
            (!template.background_item_id || !!background)
        );
    }
}
