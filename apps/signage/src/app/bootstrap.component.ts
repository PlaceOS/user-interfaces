import {
    Component,
    computed,
    inject,
    OnInit,
    resource,
    signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    i18n,
    log,
    OrganisationService,
    SettingsService,
    VERSION,
} from '@placeos/common';
import {
    PlaceSystem,
    querySignageTemplates,
    querySystems,
    SignageTemplate,
} from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    LoadErrorComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';

import { hasBootstrappedDisplay, STORE_DISPLAY_KEY } from './bootstrap-state';

const STORE_PREFIX = 'PlaceOS.SIGNAGE';
const STORE_BUILDING_KEY = `${STORE_PREFIX}.building`;
const STORE_TEMPLATE_KEY = `${STORE_PREFIX}.template`;

@Component({
    selector: '[bootstrap]',
    template: `
        <div class="bg-base-200 absolute inset-0">
            <div
                form
                class="bg-base-100 absolute top-2 left-1/2 flex w-120 max-w-[calc(100vw-2rem)] -translate-x-1/2 transform flex-col items-center overflow-hidden rounded-sm shadow-sm"
            >
                <header
                    class="bg-secondary text-secondary-content mb-2 w-full px-4 py-3 text-lg font-medium"
                >
                    {{ 'APP.SIGNAGE.BOOTSTRAP_TITLE' | translate }}
                </header>
                @if (loading()) {
                    <div class="m-auto flex flex-col items-center p-8">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ loading() }}</p>
                    </div>
                } @else if (displays_failed()) {
                    <load-error (retry)="reloadDisplays()" />
                } @else {
                    <main class="px-4 py-2">
                        <label for="display">
                            {{ 'APP.SIGNAGE.BOOTSTRAP_DISPLAY' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                #select
                                name="display"
                                [(ngModel)]="active_display"
                                [placeholder]="
                                    'APP.SIGNAGE.BOOTSTRAP_DISPLAY_SELECT'
                                        | translate
                                "
                                [disabled]="!displays().length"
                            >
                                @for (option of displays(); track option.id) {
                                    <mat-option [value]="option.id">
                                        <div
                                            class="flex flex-col leading-tight"
                                        >
                                            <div>{{ option.name }}</div>
                                            <div class="text-xs opacity-30">
                                                {{
                                                    building(option)
                                                        ?.display_name ||
                                                        building(option)
                                                            ?.name ||
                                                        'Unknown Building'
                                                }}
                                                -
                                                {{
                                                    level(option)
                                                        ?.display_name ||
                                                        level(option)?.name ||
                                                        'Unknown Level'
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        @if (templates_enabled()) {
                            <label for="template">
                                {{
                                    'APP.SIGNAGE.BOOTSTRAP_TEMPLATE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="template"
                                    [(ngModel)]="active_template"
                                >
                                    <mat-option value="">
                                        {{
                                            'APP.SIGNAGE.BOOTSTRAP_TEMPLATE_NONE'
                                                | translate
                                        }}
                                    </mat-option>
                                    @for (
                                        option of templates();
                                        track option.id
                                    ) {
                                        <mat-option [value]="option.id">
                                            {{ option.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <button
                            btn
                            matRipple
                            class="mb-2 w-full"
                            [disabled]="!active_display()"
                            (click)="bootstrapPanel()"
                        >
                            {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
                        </button>
                    </main>
                }
            </div>
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-40">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-40">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }

            [form] > div {
                padding: 0 1em;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        LoadErrorComponent,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _settings = inject(SettingsService);

    public get version() {
        return VERSION;
    }

    /**
     * Loading state of the bootstrap. Starts on the setup check when a display
     * is stored, so a bootstrapped player never shows the picker on its way
     * back to its content.
     */
    public readonly loading = signal(
        hasBootstrappedDisplay()
            ? i18n('APP.SIGNAGE.BOOTSTRAP_LOADING_CHECK')
            : '',
    );
    /** Actively selected display */
    public readonly active_display = signal('');
    /** Template selected for the bootstrapped display. */
    public readonly active_template = signal('');
    /** Whether template selection is available during bootstrap. */
    public readonly templates_enabled = this._settings.signal(
        'templates_enabled',
        false,
    );

    /** Set once a navigation to the player has started */
    private _opening = false;

    private readonly _displays = resource({
        params: () => this._org.initialised(),
        loader: async ({ params: initialised }) => {
            if (!initialised) return [] as PlaceSystem[];
            const result = await querySystems({
                zone_id: this._org.organisation?.id,
                limit: 500,
                fields: ['id', 'name', 'display_name', 'email', 'zones'].join(
                    ',',
                ),
                signage: true,
            });
            return result.data.sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
            );
        },
    });

    private readonly _templates = resource({
        params: () => this.templates_enabled() && this._org.initialised(),
        loader: async ({ params: enabled }) => {
            if (!enabled) return [] as SignageTemplate[];
            const result = await querySignageTemplates({ limit: 500 }).catch(
                () => ({ data: [] }),
            );
            return result.data.sort((a, b) => a.name.localeCompare(b.name));
        },
    });

    /** List of signage displays available for the active organisation */
    public readonly displays = computed(() =>
        this._displays.hasValue() ? this._displays.value() : [],
    );
    /** Whether the display list failed to load */
    public readonly displays_failed = computed(() => !!this._displays.error());
    /** Templates available when template bootstrapping is enabled. */
    public readonly templates = computed(() => this._templates.value() ?? []);

    public level(system: PlaceSystem) {
        return this._org.levelWithID([...(system.zones || [])]);
    }

    public building(system: PlaceSystem) {
        const zones = system.zones || [];
        return this._org.buildings.find(({ id }) => zones.includes(id));
    }

    /** Fetch the display list again after it failed to load */
    public reloadDisplays() {
        this._displays.reload();
    }

    public ngOnInit() {
        this._org.limit_init = true;
        log('BOOTSTRAP', 'Initialising...');
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear') === 'true') {
                    log('BOOTSTRAP', 'Bootstrapped data clear');
                    localStorage.removeItem(STORE_DISPLAY_KEY);
                    localStorage.removeItem(STORE_BUILDING_KEY);
                    localStorage.removeItem(STORE_TEMPLATE_KEY);
                }
                this.active_template.set(params.get('template') || '');
                if (params.has('display')) {
                    this.active_display.set(params.get('display'));
                    log('BOOTSTRAP', 'Bootstrapped data for display set');
                    this.bootstrapPanel();
                }
            }),
        );
        // The bootstrapped display is held in local storage, so the redirect
        // back to it must not wait on organisation data that needs the
        // backend. Otherwise an offline player never reaches the content it
        // already has cached.
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public async bootstrapPanel() {
        this.loading.set(i18n('APP.SIGNAGE.BOOTSTRAP_LOADING'));
        const active_display = this.active_display();
        if (!active_display || !localStorage) {
            log(
                'BOOTSTRAP',
                `Unable to bootstrap panel. Reason: ${!active_display ? 'No display ID set' : 'Local Storage unavailable'}`,
            );
            this.loading.set('');
            return;
        }
        localStorage.setItem(STORE_DISPLAY_KEY, active_display);
        const template_id = this.templates_enabled()
            ? this.active_template()
            : '';
        if (template_id) {
            localStorage.setItem(STORE_TEMPLATE_KEY, template_id);
        } else {
            localStorage.removeItem(STORE_TEMPLATE_KEY);
        }
        log('BOOTSTRAP', `Bootstrapped panel to display ${active_display}`);
        await this.openPlayer(active_display, template_id);
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        // A display picked from the URL is already on its way to the player.
        if (this._opening) return;
        const display_id = localStorage.getItem(STORE_DISPLAY_KEY);
        if (!display_id) {
            log('BOOTSTRAP', `No bootstrap details found for system`);
            this.loading.set('');
            return;
        }
        this.loading.set(i18n('APP.SIGNAGE.BOOTSTRAP_LOADING_CHECK'));
        const template_id =
            (this.templates_enabled() &&
                (this.active_template() ||
                    localStorage.getItem(STORE_TEMPLATE_KEY))) ||
            '';
        if (this.active_template() && this.templates_enabled()) {
            localStorage.setItem(STORE_TEMPLATE_KEY, template_id);
        }
        log(
            'BOOTSTRAP',
            `Application already bootstrapped to display ${display_id}`,
        );
        this.openPlayer(display_id, template_id);
    }

    /**
     * Navigate to the player. The loading state stays up while the route
     * guard runs, which can take a while offline, and the picker only comes
     * back if the navigation does not go through.
     */
    private async openPlayer(display_id: string, template_id: string) {
        this._opening = true;
        let opened = false;
        try {
            opened = await this._router.navigate(
                template_id
                    ? ['/template', template_id, display_id]
                    : ['/signage', display_id],
            );
        } catch (error) {
            log('BOOTSTRAP', 'Failed to open the player', error, 'warn');
        }
        if (opened) return;
        this._opening = false;
        this.loading.set('');
    }
}
