import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { querySystems } from '@placeos/ts-client';
import { combineLatest, of } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap, tap } from 'rxjs/operators';

import {
    AsyncHandler,
    getNativeSystemId,
    OrganisationService,
    syncNativeManagedConfig,
    VERSION,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Space } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';

@Component({
    selector: '[app-bootstrap]',
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
                    <div>
                        {{ 'APP.BOOKING_PANEL.BOOTSTRAP_TITLE' | translate }}
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
                @if (!loading() || loading() === 'search') {
                    <p class="description py-4">
                        {{ 'COMMON.BOOTSTRAP_DESCRIPTION' | translate }}
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
                                            <div class="text-xs opacity-30">
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
                        @if (system_id()?.length < 2 && !space_list()?.length) {
                            <mat-option class="pointer-events-none opacity-60">
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
                        {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
                    </button>
                } @else {
                    <div load class="my-16 flex flex-col items-center">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <div class="m-4">
                            {{ 'COMMON.BOOTSTRAP_LOADING' | translate }}
                        </div>
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
            <div></div>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

    public readonly version = VERSION;

    /** Whether application data is loading */
    public loading = signal('');
    /** ID of the system to bootstrap */
    public system_id = signal('');

    private readonly _space_list$ = combineLatest([
        toObservable(this.system_id),
        toObservable(this._org.initialised),
    ]).pipe(
        debounceTime(300),
        switchMap(([search]) => {
            this.loading.set('search');
            return search.length < 2
                ? of({ data: [] as any[] })
                : querySystems({
                      q: search,
                      limit: 20,
                      fields: ['id', 'name', 'display_name', 'email'].join(','),
                      zone_id: this._org.organisation.id,
                  });
        }),
        map((_: any) => _.data.map((_: any) => new Space(_))),
        tap(() => this.loading.set('')),
        shareReplay(1),
    );

    public readonly space_list = toSignal(this._space_list$, {
        initialValue: [] as Space[],
    });

    private _event = false;

    public async ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && !!params.get('clear')) {
                    this.clearBootstrap();
                }
                if (params.has('event')) this._event = true;
                if (params.has('system_id') || params.has('sys_id')) {
                    this.system_id.set(
                        params.get('system_id') || params.get('sys_id'),
                    );
                    this.bootstrap();
                }
            }),
        );
        this.checkBootstrapped();
    }

    /**
     * Setup the default system for the application to bind to
     */
    public readonly bootstrap = () => this.configure(this.system_id());

    /**
     * Check if the application has previously been bootstrapped
     */
    private async checkBootstrapped(): Promise<void> {
        this.loading.set('Checking');
        // Wait for any MDM managed configuration to be stored locally, as it
        // takes precedence over previously stored bootstrap settings.
        await syncNativeManagedConfig();
        if (localStorage) {
            const system_id = localStorage.getItem('PLACEOS.BOOKINGS.system');
            this._event =
                this._event ||
                localStorage.getItem('PLACEOS.Bookings.event') === 'true';
            // A system pushed via MDM managed config overrides the stored one
            const mdm_system_id = getNativeSystemId();
            if (mdm_system_id && mdm_system_id !== system_id) {
                this.system_id.set(mdm_system_id);
                return this.configure(mdm_system_id);
            }
            if (system_id) {
                this._router.navigate(
                    [this._event ? 'events' : 'panel', system_id],
                    {
                        queryParamsHandling: 'preserve',
                    },
                );
                return;
            }
        }
        this.loading.set('');
    }

    /**
     * Save the bootstrapped ID and redirect to the panel for that ID
     * @param system_id System to bootstrap
     */
    private configure(system_id: string): void {
        this.loading.set('Setup');
        if (localStorage) {
            localStorage.setItem('PLACEOS.BOOKINGS.system', system_id);
            localStorage.setItem('trust', 'true');
            localStorage.setItem('fixed_device', 'true');
            if (this._event) {
                localStorage.setItem('PLACEOS.Bookings.event', 'true');
            }
        }
        this._router.navigate([this._event ? 'events' : 'panel', system_id], {
            queryParamsHandling: 'preserve',
        });
        this.loading.set('');
    }

    /**
     * Remove any previously set bootstrapping details
     */
    private readonly clearBootstrap = () =>
        localStorage.removeItem('PLACEOS.BOOKINGS.system');
}
