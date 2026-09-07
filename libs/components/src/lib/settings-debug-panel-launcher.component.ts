import { Component, inject, input, OnInit, signal } from '@angular/core';
import { AsyncHandler, type HashMap, HotkeysService } from '@placeos/common';

import { SettingsDebugPanelComponent } from './settings-debug-panel.component';

@Component({
    selector: 'settings-debug-panel-launcher',
    imports: [SettingsDebugPanelComponent],
    template: `
        @defer (when show()) {
            <settings-debug-panel [(show)]="show" [schema]="schema()" />
        }
    `,
})
export class SettingsDebugPanelLauncherComponent
    extends AsyncHandler
    implements OnInit
{
    private readonly _hotkey = inject(HotkeysService);
    private readonly _loaded = signal(false);

    public readonly loadSchema = input.required<() => Promise<HashMap>>();
    public readonly schema = signal<HashMap | null>(null);
    public readonly show = signal(false);

    public ngOnInit(): void {
        this.subscription(
            'toggle',
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyS'], () => {
                void this.toggle();
            }),
        );
    }

    private async toggle(): Promise<void> {
        if (this.show()) {
            this.show.set(false);
            return;
        }
        if (!this._loaded()) {
            try {
                this.schema.set(await this.loadSchema()());
            } catch {
                this.schema.set(null);
            }
            this._loaded.set(true);
        }
        this.show.set(true);
    }
}
