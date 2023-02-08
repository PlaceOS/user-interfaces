import { Injectable } from '@angular/core';
import { getModule } from '@placeos/ts-client';

import { AsyncHandler } from './async-handler.class';
import { SettingsService } from './settings.service';

@Injectable({
    providedIn: 'root',
})
export class VorlonService extends AsyncHandler {
    /** DOM Element containing the Vorlon Script */
    private _script: HTMLScriptElement;

    constructor(private _settings: SettingsService) {
        super();
        this.load();
    }

    private async load() {
        const system = this._settings.get('app.vorlon.system');
        if (system) {
            const module = getModule(system, 'Vorlon');
            if (module) {
                const binding = module.binding('enabled');
                this.subscription('binding', binding.bind());
                this.subscription(
                    'binding_value',
                    binding.listen().subscribe((state) => {
                        state
                            ? this.injectVorlonScript()
                            : this.removeVorlonScript();
                    })
                );
            }
        }
    }

    private injectVorlonScript() {
        this.removeVorlonScript();
        this._script = document.createElement('script');
        const url = this._settings.get('app.vorlon.url');
        this._script.src = url || `./assets/vorlon.js`;
        document.head.appendChild(this._script);
    }

    private removeVorlonScript() {
        if (this._script) {
            this._script.parentNode.removeChild(this._script);
            delete this._script;
            this._script = null;
        }
    }
}
