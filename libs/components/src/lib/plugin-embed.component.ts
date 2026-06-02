import {
    Component,
    computed,
    ElementRef,
    input,
    model,
    OnChanges,
    OnInit,
    output,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { SignagePlugin } from '@placeos/ts-client';
import { SafePipe } from './safe.pipe';

const API_VERSION = 'signage-plugin/v1';

export type SignagePluginMessageType =
    | 'loaded'
    | 'ready'
    | 'interaction'
    | 'finished'
    | 'error';

export type SignageHostMessageType = 'config' | 'play';

export type SignageMessage<T = unknown> = {
    api: 'signage-plugin/v1';
    type: SignagePluginMessageType | SignageHostMessageType;
    request_id?: string;
    payload?: T;
};

export type PluginLoadedPayload = {
    plugin: {
        name: string;
        version: string;
    };
    capabilities: {
        requires_play_signal: boolean;
        can_finish: boolean;
        static_media: boolean;
    };
    config_schema: Record<string, unknown>;
};

export type PluginConfigPayload = {
    instance_id: string;
    config: Record<string, unknown>;
    content?: {
        kind?: string;
        source?: string;
        url?: string;
        mime_type?: string;
    };
    timing?: {
        scheduled_duration_ms?: number;
    };
};

export type PluginErrorPayload = {
    code: string;
    message: string;
    fatal?: boolean;
    details?: Record<string, unknown>;
};

export type PluginInteractionPayload = {
    new_duration?: number;
};

@Component({
    selector: 'plugin-embed',
    template: `
        @if (plugin()?.uri) {
            <iframe
                #plugin_el
                sandbox="allow-scripts allow-same-origin"
                referrerpolicy="no-referrer"
                [src]="plugin().uri | safe: 'resource'"
                (load)="loaded.emit()"
                (error)="onIframeError()"
            >
            </iframe>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
            iframe {
                width: 100%;
                height: 100%;
                border: 0;
            }
        `,
    ],
    imports: [SafePipe],
})
export class PluginEmbedComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    public readonly plugin = input<SignagePlugin>(null);
    public readonly config = input<PluginConfigPayload>(null);
    public readonly play = input<number>(0);
    public readonly auto_play = input(false);
    public readonly play_delay = input(100);
    public readonly details = model<PluginLoadedPayload>(null);
    public readonly schema = model<Record<string, any>>({});
    public readonly status = model<SignagePluginMessageType | 'unknown'>(
        'unknown',
    );
    public readonly loaded = output<void>();
    public readonly plugin_error = output<PluginErrorPayload>();
    public readonly plugin_interaction = output<PluginInteractionPayload>();
    private readonly _plugin_el =
        viewChild<ElementRef<HTMLIFrameElement>>('plugin_el');

    public readonly plugin_origin = computed(() => {
        try {
            const uri = this.plugin()?.uri;
            if (!uri) return '';
            return new URL(uri, window.location.origin).origin;
        } catch {
            return '';
        }
    });

    private _handle_messages = (e) => this._handleMessage(e);
    private _play_timer: ReturnType<typeof setTimeout> | null = null;
    private _pending_auto_config = false;

    public ngOnInit() {
        this._setupChannels();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.plugin) {
            this.status.set('unknown');
            this._clearPlayTimer();
            this._pending_auto_config = this.auto_play() && !!this.config();
            this._setupChannels();
        }
        if (changes.config && this.auto_play()) {
            this._pending_auto_config = !!this.config();
        }
        if (changes.play && this.play()) this.send('play');
        if (changes.config && this.config() && !this.auto_play()) {
            this.send('config', this.config());
        }
    }

    public send(
        type: SignageHostMessageType,
        payload: PluginConfigPayload | null = null,
    ) {
        const origin = this.plugin_origin();
        if (!origin) return;
        this._plugin_el()?.nativeElement?.contentWindow.postMessage(
            { api: API_VERSION, type, payload },
            origin,
        );
    }

    public onIframeError() {
        this.plugin_error.emit({
            code: 'iframe_load_error',
            message: 'Plugin iframe failed to load.',
            fatal: true,
        });
    }

    private _setupChannels() {
        if (!this.plugin()?.uri) return;
        this.subscription('channel', () =>
            window.removeEventListener('message', this._handle_messages),
        );
        window.addEventListener('message', this._handle_messages);
    }

    private _handleMessage(event) {
        if (event.origin !== this.plugin_origin()) return;
        if (event.source !== this._plugin_el()?.nativeElement?.contentWindow)
            return;

        const msg = event.data;
        if (!msg || msg.api !== API_VERSION || typeof msg.type !== 'string')
            return;

        if (msg.type === 'interaction') {
            this.plugin_interaction.emit(msg.payload);
            return;
        }

        this.status.set(msg.type as SignagePluginMessageType);
        switch (msg.type) {
            case 'loaded':
                this.details.set(msg.payload);
                this.schema.set(msg.payload?.config_schema);
                this._autoConfigure();
                break;
            case 'ready':
                this._autoConfigure();
                break;
            case 'error':
                this.plugin_error.emit(msg.payload);
                break;
        }
    }

    private _autoConfigure() {
        if (!this.auto_play() || !this.config() || !this._pending_auto_config) {
            return;
        }
        this._pending_auto_config = false;
        this.send('config', this.config());
        this._clearPlayTimer();
        this._play_timer = setTimeout(
            () => this.send('play'),
            this.play_delay(),
        );
    }

    private _clearPlayTimer() {
        if (!this._play_timer) return;
        clearTimeout(this._play_timer);
        this._play_timer = null;
    }
}
