import { DOCUMENT } from '@angular/common';
import {
    Component,
    inject,
    input,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { type HashMap } from 'libs/common/src/lib/types';

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
        <button
            type="button"
            class="absolute bottom-0 left-0 z-999 h-px w-px"
            aria-label="Open debugging tools"
            [matMenuTriggerFor]="debug_menu"
            #menu_trigger="matMenuTrigger"
            (contextmenu)="openMenu($event, menu_trigger)"
        >
            <span aria-hidden="true">⋮</span>
        </button>
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
    `,
    styles: [``],
})
export class SettingsDebugPanelLauncherComponent
    extends AsyncHandler
    implements OnInit
{
    private readonly _hotkey = inject(HotkeysService);
    private readonly _document = inject(DOCUMENT);
    private readonly _menu_trigger = viewChild.required(MatMenuTrigger);
    private _schema_request?: Promise<void>;

    public readonly loadSchema = input<() => Promise<HashMap>>();
    public readonly schema = signal<HashMap | null>(null);
    public readonly panel = signal<DebugPanel | null>(null);

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
                    if (this.panel() === panel) this.panel.set(null);
                    else this.openPanel(panel);
                }),
            );
        }
    }

    /** Observe the corner without placing a pointer target over app controls. */
    public onContextMenu(event: MouseEvent): void {
        const height = this._document.documentElement.clientHeight;
        if (
            event.clientX < 0 ||
            event.clientX > 32 ||
            event.clientY < height - 32 ||
            event.clientY > height
        )
            return;
        this.openMenu(event, this._menu_trigger());
    }

    public openMenu(event: MouseEvent, trigger: MatMenuTrigger): void {
        event.preventDefault();
        trigger.openMenu();
    }

    public openPanel(panel: DebugPanel): void {
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
