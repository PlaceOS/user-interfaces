import { Injectable } from '@angular/core';
import { getModule } from '@placeos/ts-client';

import { BaseClass } from './base.class';

@Injectable({
    providedIn: 'root',
})
export class VorlonService extends BaseClass {
    /** Parent service */
    public parent: any;
    /** DOM Element containing the Vorlon Script */
    private _script: HTMLScriptElement;

    constructor() {
        super();
    }

    /**
     * Initailise service
     */
    public init() {
        if (!this.parent || !this.parent.has_settings || !this.parent.Organisation.details) {
            return this.timeout('init', () => this.init());
        }
        this.load();
    }

    private async load() {
        const org = this.parent.Organisation.details;
        const system = org.setting('vorlon_system');
        if (system) {
            const module = getModule(system, 'Vorlon');
            if (module) {
                const binding = module.binding('enabled');
                this.subscription('binding', binding.bind());
                this.subscription(
                    'binding_value',
                    binding.listen().subscribe((state) => {
                        state ? this.injectVorlonScript() : this.removeVorlonScript();
                    })
                );
            }
        }
    }

    private injectVorlonScript() {
        this.removeVorlonScript();
        this._script = document.createElement('script');
        const org = this.parent.Organisation.details;
        const url = org.setting('vorlon_url');
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
