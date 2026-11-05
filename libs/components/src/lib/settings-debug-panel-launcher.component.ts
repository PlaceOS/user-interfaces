import { DOCUMENT } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    Injector,
    input,
    OnInit,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { RemoteLoggingService } from 'libs/common/src/lib/remote-logging.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { type HashMap } from 'libs/common/src/lib/types';
import { user_group_names } from 'libs/common/src/lib/user-state';

import { installBindingDebugHooks } from './binding-debug-hooks';
import { BindingDebugPanelComponent } from './binding-debug-panel.component';
import { DebugConsoleComponent } from './debug-console.component';
import { IconComponent } from './icon.component';
import { SettingsDebugPanelComponent } from './settings-debug-panel.component';

type DebugPanel = 'settings' | 'bindings' | 'console';

@Component({
    selector: 'settings-debug-panel-launcher',
    host: { '(document:contextmenu)': 'onContextMenu($event)' },
    imports: [
        MatMenuModule,
        SettingsDebugPanelComponent,
        BindingDebugPanelComponent,
        DebugConsoleComponent,
        IconComponent,
    ],
    template: `
        @if (allowed()) {
            <button
                type="button"
                class="absolute bottom-0 left-0 z-999 h-px w-px"
                aria-label="Open debugging tools"
                [matMenuTriggerFor]="debug_menu"
                #menu_trigger="matMenuTrigger"
                (contextmenu)="openMenu($event, menu_trigger)"
            ></button>
            <mat-menu #debug_menu="matMenu" yPosition="above">
                <div
                    class="flex w-64 items-center justify-center pb-2 text-sm opacity-60"
                >
                    Debugging Panels
                </div>
                <button mat-menu-item (click)="openPanel('settings')">
                    <div class="flex items-center gap-2">
                        <icon>discover_tune</icon>
                        <div>Settings</div>
                    </div>
                </button>
                <button mat-menu-item (click)="openPanel('bindings')">
                    <div class="flex items-center gap-2">
                        <icon>linked_services</icon>
                        <div>Driver bindings</div>
                    </div>
                </button>
                <button mat-menu-item (click)="openPanel('console')">
                    <div class="flex items-center gap-2">
                        <icon>terminal_2</icon>
                        <div>Console</div>
                    </div>
                </button>
            </mat-menu>
            @if (override_count()) {
                <button
                    type="button"
                    class="bg-warning fixed bottom-1 left-1 z-999 rounded-sm px-2 py-0.5 text-xs text-black shadow"
                    (click)="openPanel('settings')"
                >
                    {{ override_count() }} setting
                    {{ override_count() === 1 ? 'override' : 'overrides' }}
                    active
                </button>
            }
            @defer (when panel() === 'settings') {
                @if (panel() === 'settings') {
                    <settings-debug-panel
                        [show]="true"
                        (showChange)="panel.set(null)"
                        [schema]="schema()"
                    />
                }
            }
            @defer (when panel() === 'bindings') {
                @if (panel() === 'bindings') {
                    <binding-debug-panel
                        [show]="true"
                        (showChange)="panel.set(null)"
                        [hotkeysEnabled]="false"
                    />
                }
            }
            @defer (when panel() === 'console') {
                @if (panel() === 'console') {
                    <debug-console
                        [show]="true"
                        (showChange)="panel.set(null)"
                        [hotkeysEnabled]="false"
                    />
                }
            }
        }
    `,
    styles: [``],
})
export class SettingsDebugPanelLauncherComponent
    extends AsyncHandler
    implements OnInit
{
    private readonly _hotkey = inject(HotkeysService);
    private readonly _document = inject(DOCUMENT);
    private readonly _injector = inject(Injector);
    private readonly _menu_trigger = viewChild(MatMenuTrigger);
    private readonly _settings = signal<SettingsService | null>(null);
    private _schema_request?: Promise<void>;

    public readonly loadSchema = input<() => Promise<HashMap>>();
    public readonly schema = signal<HashMap | null>(null);
    public readonly panel = signal<DebugPanel | null>(null);
    /** Debug tools are only for PlaceOS admin and support users. */
    public readonly allowed = computed(() => {
        const groups = user_group_names();
        return (
            groups.includes('placeos_admin') ||
            groups.includes('placeos_support')
        );
    });
    /** Local setting overrides. They stay in this browser for later users. */
    public readonly override_count = computed(
        () => Object.keys(this._settings()?.debug_overrides() ?? {}).length,
    );

    constructor() {
        super();
        // Start capture when the user may open the panels, so the panels
        // also show activity from before they first open. For other users
        // the launcher starts no capture and keeps no data.
        effect(() => {
            if (!this.allowed()) return;
            untracked(() => {
                installBindingDebugHooks();
                this._injector.get(RemoteLoggingService);
                this._settings.set(this._injector.get(SettingsService));
            });
        });
    }

    public ngOnInit(): void {
        const shortcuts: [DebugPanel, string[]][] = [
            ['settings', ['Control', 'Alt', 'Shift', 'KeyS']],
            ['bindings', ['Control', 'Alt', 'Shift', 'KeyB']],
            ['console', ['Control', 'Backquote']],
        ];
        for (const [panel, keys] of shortcuts) {
            this.subscription(
                panel,
                this._hotkey.listen(keys, () => {
                    if (!this.allowed()) return;
                    if (this.panel() === panel) this.panel.set(null);
                    else this.openPanel(panel);
                }),
            );
        }
    }

    /** Observe the corner without placing a pointer target over app controls. */
    public onContextMenu(event: MouseEvent): void {
        if (!this.allowed()) return;
        const height = this._document.documentElement.clientHeight;
        if (
            event.clientX < 0 ||
            event.clientX > 32 ||
            event.clientY < height - 32 ||
            event.clientY > height
        )
            return;
        const trigger = this._menu_trigger();
        if (trigger) this.openMenu(event, trigger);
    }

    public openMenu(event: MouseEvent, trigger: MatMenuTrigger): void {
        event.preventDefault();
        trigger.openMenu();
    }

    public openPanel(panel: DebugPanel): void {
        if (!this.allowed()) return;
        this.panel.set(panel);
        if (panel === 'settings') {
            this._schema_request ??= this.loadSettingsSchema();
        }
    }

    private async loadSettingsSchema(): Promise<void> {
        try {
            this.schema.set((await this.loadSchema()?.()) ?? null);
        } catch {
            this.schema.set(null);
        }
    }
}
