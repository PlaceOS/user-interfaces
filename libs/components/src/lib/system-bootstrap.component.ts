import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    debounced,
    effect,
    inject,
    input,
    OnInit,
    output,
    resource,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { querySystems } from '@placeos/ts-client';

import {
    getNativeSystemId,
    OrganisationService,
    Space,
    syncNativeManagedConfig,
    VERSION,
} from '@placeos/common';

import { AnnounceDirective } from './announce.directive';
import { TranslatePipe } from './translate.pipe';

/**
 * Setup screen that binds a fixed device to a PlaceOS system.
 *
 * Search for a system, or pass `?system_id=` (or `?sys_id=`), to save the
 * system ID under `store_key` and go to the route from `system_route`.
 * Searches wait until the organisation is loaded.
 * `?clear=true` removes the saved system. On load, a system ID from MDM
 * managed config overrides the saved system. Otherwise a saved system
 * goes to its route at once.
 *
 * ```html
 * <system-bootstrap
 *     store_key="PLACEOS.CONTROL.system"
 *     heading="APP.CONTROL.BOOTSTRAP_TITLE"
 *     [system_route]="systemRoute"
 * />
 * ```
 */
@Component({
    selector: 'system-bootstrap',
    template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center p-3"
        >
            <div
                form
                class="bg-base-100 border-base-300 flex w-120 max-w-[calc(100vw-2rem)] flex-col items-center overflow-hidden rounded-sm border shadow-md"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <h1>{{ heading() | translate }}</h1>
                    <div class="relative overflow-hidden rounded-sm px-2 py-1">
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-10"
                        ></div>
                        <div class="relative z-10 font-mono text-sm uppercase">
                            {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                        </div>
                    </div>
                </header>
                @if (!loading() || loading() === 'search') {
                    <p class="description py-4">
                        {{ description() | translate }}
                    </p>
                    <mat-form-field appearance="outline">
                        <mat-label>{{
                            'COMMON.BOOTSTRAP_LABEL' | translate
                        }}</mat-label>
                        <input
                            matInput
                            [(ngModel)]="system_id"
                            [matAutocomplete]="auto"
                            [placeholder]="'COMMON.BOOTSTRAP_LABEL' | translate"
                        />
                        @if (loading() === 'search') {
                            <mat-spinner
                                [diameter]="32"
                                matSuffix
                                aria-hidden="true"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of space_list(); track option.id) {
                            <mat-option [value]="option.id">
                                <div
                                    class="flex w-full items-center space-x-4 leading-tight"
                                >
                                    <div class="flex flex-1 flex-col">
                                        <div>
                                            {{
                                                option.display_name ||
                                                    option.name
                                            }}
                                        </div>
                                        @if (
                                            option.display_name &&
                                            option.display_name !== option.name
                                        ) {
                                            <div class="text-xs opacity-70">
                                                {{ option.name }}
                                            </div>
                                        }
                                    </div>
                                    <div
                                        class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                    >
                                        {{ option.id }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                        @if (search_state(); as state) {
                            <mat-option
                                disabled
                                class="pointer-events-none opacity-60"
                            >
                                {{
                                    (state === 'error'
                                        ? 'COMMON.LOAD_ERROR'
                                        : 'COMMON.SEARCH_EMPTY'
                                    ) | translate
                                }}
                            </mat-option>
                        }
                        @if (system_id().length < 2 && !space_list().length) {
                            <mat-option
                                disabled
                                class="pointer-events-none opacity-60"
                            >
                                {{
                                    'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                        | translate
                                }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                    <button
                        btn
                        matRipple
                        [disabled]="!system_id()"
                        (click)="bootstrap()"
                    >
                        {{ submit_label() | translate }}
                    </button>
                } @else {
                    <div load class="my-16 flex flex-col items-center">
                        <mat-spinner
                            [diameter]="32"
                            aria-hidden="true"
                        ></mat-spinner>
                        <div class="m-4" announce>
                            {{ 'COMMON.BOOTSTRAP_LOADING' | translate }}
                        </div>
                    </div>
                }
            </div>
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-70">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-70">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                width: calc(100% - 2rem);
            }

            button {
                width: 8rem;
                margin: 0.5rem;
                margin-top: 0;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        AnnounceDirective,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
    ],
})
export class SystemBootstrapComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    /** Local storage key that holds the bootstrapped system ID */
    public readonly store_key = input.required<string>();
    /** Translation key of the application title in the header */
    public readonly heading = input.required<string>();
    /** Translation key of the text above the search box */
    public readonly description = input('COMMON.BOOTSTRAP_DESCRIPTION');
    /** Translation key of the submit button label */
    public readonly submit_label = input('COMMON.BOOTSTRAP_SUBMIT');
    /** Router commands to open the application for a system ID */
    public readonly system_route =
        input.required<(system_id: string) => unknown[]>();
    /** Emits the system ID after it is saved, before navigation */
    public readonly configured = output<string>();

    public readonly version = VERSION;

    /** Whether application data is loading */
    public readonly loading = signal('');
    /** ID of the system to bootstrap */
    public readonly system_id = signal('');

    private readonly _debounced_search = debounced(this.system_id, 300);
    private readonly _space_list = resource({
        // Wait for the organisation so the search is scoped to its zone
        params: () =>
            this._org.initialised() ? this._debounced_search.value() : '',
        loader: async ({ params: search }) => {
            if (search.length < 2) return [] as Space[];
            this.loading.set('search');
            try {
                const { data } = await querySystems({
                    q: search,
                    limit: 20,
                    fields: ['id', 'name', 'display_name', 'email'].join(','),
                    zone_id: this._org.organisation?.id,
                });
                return data.map(
                    ({ id, name, display_name, email }) =>
                        new Space({ id, name, display_name, email }),
                );
            } finally {
                this.loading.set('');
            }
        },
    });
    /** Systems that match the search text */
    public readonly space_list = computed(() =>
        this._space_list.hasValue() ? this._space_list.value() : [],
    );

    /** Why a search of two or more characters shows no systems */
    public readonly search_state = computed(() => {
        if (!this._org.initialised()) return '';
        if (this._debounced_search.value().length < 2) return '';
        if (this._space_list.error()) return 'error';
        if (this._space_list.isLoading() || this.space_list().length) return '';
        return 'empty';
    });

    constructor() {
        effect(() => {
            const params = this._query_params();
            if (params.has('clear') && !!params.get('clear')) {
                localStorage.removeItem(this.store_key());
            }
            const system_id = params.get('system_id') || params.get('sys_id');
            if (system_id) {
                this.system_id.set(system_id);
                this.configure(system_id);
            }
        });
    }

    public ngOnInit() {
        this.checkBootstrapped();
    }

    /** Bind the application to the system in the search box */
    public readonly bootstrap = () => this.configure(this.system_id());

    /**
     * Go to the saved system, or to the MDM managed system if it differs
     */
    private async checkBootstrapped(): Promise<void> {
        if (this.system_id()) return;
        this.loading.set('Checks');
        // Wait for any MDM managed configuration to be stored locally, as it
        // takes precedence over previously stored bootstrap settings.
        await syncNativeManagedConfig();
        if (this.system_id()) return;
        const system_id = localStorage.getItem(this.store_key());
        // A system pushed via MDM managed config overrides the stored one
        const mdm_system_id = getNativeSystemId();
        if (mdm_system_id && mdm_system_id !== system_id) {
            this.system_id.set(mdm_system_id);
            return this.configure(mdm_system_id);
        }
        if (system_id) {
            this._router.navigate(this.system_route()(system_id), {
                queryParamsHandling: 'preserve',
            });
            return;
        }
        this.loading.set('');
    }

    /** Save the system ID as a trusted fixed device and open its route */
    private configure(system_id: string): void {
        localStorage.setItem(this.store_key(), system_id);
        localStorage.setItem('trust', 'true');
        localStorage.setItem('fixed_device', 'true');
        this.configured.emit(system_id);
        this._router.navigate(this.system_route()(system_id), {
            queryParamsHandling: 'preserve',
        });
    }
}
