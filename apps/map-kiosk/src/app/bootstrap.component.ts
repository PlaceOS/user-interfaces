import { DatePipe } from '@angular/common';
import {
    Component,
    OnInit,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AsyncHandler, OrganisationService, VERSION } from '@placeos/common';
import {
    clearKioskLocation,
    hasKioskLocation,
    KioskLocation,
    KioskLocationPickerComponent,
    saveKioskLocation,
    SettingsToggleComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';

/**
 * Setup screen that picks the level the map kiosk shows.
 * `?level=` saves that level at once, `?clear=true` removes the saved
 * setup and `?osk=` turns the on-screen keyboard on or off.
 */
@Component({
    selector: '[bootstrap]',
    template: `
        <div class="bg-base-200 absolute inset-0 z-0"></div>
        <div
            form
            class="border-base-200 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
        >
            <header
                class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
            >
                <div>
                    {{ 'COMMON.MAP_KIOSK' | translate }}
                </div>
                <div class="relative overflow-hidden rounded-sm px-2 py-1">
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-10"
                    ></div>
                    <div class="relative z-10 font-mono text-sm uppercase">
                        {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                    </div>
                </div>
            </header>
            <kiosk-location-picker
                #picker
                (submitted)="bootstrapKiosk($event)"
            >
                @if (picker.active_level()?.tags.includes('parking')) {
                    <settings-toggle
                        [ngModel]="parking()"
                        (ngModelChange)="parking.set($event)"
                        class="mt-2"
                        >Show as fixed parking display</settings-toggle
                    >
                }
            </kiosk-location-picker>
        </div>
        <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
            <div class="text-xs opacity-40">
                {{ 'COMMON.CONTROLS_VERSION' | translate }}: {{ version.hash }}
            </div>
            <div class="text-xs opacity-40">
                {{ version.time | date: 'longDate' }}
                ({{ version.time | date: 'shortTime' }})
            </div>
        </div>
    `,
    imports: [
        DatePipe,
        FormsModule,
        KioskLocationPickerComponent,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    /** Signal of the current route query parameters */
    private readonly _query_params = toSignal(this._route.queryParamMap);
    /** Whether the bootstrap is ready to react to route query parameters */
    private readonly _ready = signal(false);

    private readonly _handle_query_params = effect(() => {
        if (!this._ready()) return;
        const params = this._query_params();
        if (!params) return;
        untracked(() => this.handleQueryParams(params));
    });

    public readonly version = VERSION;

    /** Whether to show the map as a parking view */
    public readonly parking = signal(false);

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this._ready.set(true);
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    /** React to changes in the route query parameters */
    private handleQueryParams(params: ParamMap) {
        if (params.has('osk')) {
            const osk_enabled = params.get('osk') === 'true';
            localStorage.setItem('OSK.enabled', `${osk_enabled}`);
        }
        if (params.has('clear') && params.get('clear') === 'true') {
            clearKioskLocation();
            localStorage.removeItem('KIOSK.parking');
        }
        if (params.has('level')) {
            const level = this._org.levelWithID([params.get('level')]);
            if (level) {
                this.bootstrapKiosk({
                    building: null,
                    level,
                    orientation: null,
                    location: null,
                });
            }
        }
    }

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public bootstrapKiosk(kiosk: KioskLocation) {
        const parking = this.parking();
        saveKioskLocation(kiosk);
        if (parking) localStorage.setItem('KIOSK.parking', `true`);
        else localStorage.removeItem('KIOSK.parking');
        this._router.navigate([parking ? '/parking' : '/explore']);
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        if (hasKioskLocation()) {
            const parking = localStorage.getItem('KIOSK.parking');
            this._router.navigate([parking ? '/parking' : '/explore']);
        }
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
    }
}
