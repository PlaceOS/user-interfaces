import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    i18n,
    Identity,
    log,
    OrganisationService,
    VERSION,
} from '@placeos/common';
import { PlaceSystem, querySystems } from '@placeos/ts-client';
import { first, map, shareReplay, switchMap } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe, VirtualKeyboardComponent } from '@placeos/components';

const STORE_PREFIX = 'PlaceOS.SIGNAGE';
const STORE_DISPLAY_KEY = `${STORE_PREFIX}.display`;
const STORE_BUILDING_KEY = `${STORE_PREFIX}.building`;

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
                @if (!loading()) {
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
                                [disabled]="!(displays | async)?.length"
                            >
                                @for (
                                    option of displays | async;
                                    track option
                                ) {
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
                        <button
                            btn
                            matRipple
                            class="mb-2 w-full"
                            [disabled]="!active_display"
                            (click)="bootstrapPanel()"
                        >
                            {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
                        </button>
                    </main>
                } @else {
                    <div class="m-auto flex flex-col items-center p-8">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ loading() }}</p>
                    </div>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public get version() {
        return VERSION;
    }

    /** Loading state of the bootstrap */
    public readonly loading = signal('');
    /** Actively selected display */
    public active_display: any;

    public rotations: Identity[] = [];

    public readonly buildings = this._org.building_list;

    public readonly displays = toObservable(this._org.initialised).pipe(
        first((_) => !!_),
        switchMap(() =>
            querySystems({
                zone_id: this._org.organisation?.id,
                limit: 500,
                fields: ['id', 'name', 'display_name', 'email', 'zones'].join(
                    ',',
                ),
                signage: true,
            }).catch(() => ({ data: [] })),
        ),
        map((r) =>
            r.data.sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
            ),
        ),
        shareReplay(1),
    );

    public level(system: PlaceSystem) {
        return this._org.levelWithID((system.zones || []) as any);
    }

    public building(system: PlaceSystem) {
        const zones = system.zones || [];
        return this._org.buildings.find(({ id }) => zones.includes(id));
    }

    public async ngOnInit() {
        this._org.limit_init = true;
        log('BOOTSTRAP', 'Initialising...');
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear') === 'true') {
                    log('BOOTSTRAP', 'Bootstrapped data clear');
                    localStorage.removeItem(STORE_DISPLAY_KEY);
                    localStorage.removeItem(STORE_BUILDING_KEY);
                }
                if (params.has('display')) {
                    this.active_display = params.get('display');
                    log('BOOTSTRAP', 'Bootstrapped data for display set');
                    this.bootstrapPanel();
                }
            }),
        );
        await this._org.waitUntilInitialised();
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public async bootstrapPanel() {
        this.loading.set(i18n('APP.SIGNAGE.BOOTSTRAP_LOADING'));
        if (!this.active_display || !localStorage) {
            log(
                'BOOTSTRAP',
                `Unable to bootstrap panel. Reason: ${!this.active_display ? 'No display ID set' : 'Local Storage unavailable'}`,
            );
            this.loading.set('');
            return;
        }
        localStorage.setItem(STORE_DISPLAY_KEY, this.active_display);
        log(
            'BOOTSTRAP',
            `Bootstrapped panel to display ${this.active_display}`,
        );
        this._router.navigate(['/signage', this.active_display]);
        this.loading.set('');
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        this.loading.set(i18n('APP.SIGNAGE.BOOTSTRAP_LOADING_CHECK'));
        const display_id = localStorage?.getItem(STORE_DISPLAY_KEY);
        if (display_id) {
            log(
                'BOOTSTRAP',
                `Application already bootstrapped to display ${display_id}`,
            );
            this._router.navigate(['/signage', display_id]);
        }
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        log('BOOTSTRAP', `No bootstrap details found for system`);
        this.loading.set('');
    }
}
