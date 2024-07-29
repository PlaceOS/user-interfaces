import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { querySystems } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap, tap } from 'rxjs/operators';

const SYS_ID_KEY = 'PLACEOS.ASSISTANT.system';

@Component({
    selector: 'app-bootstrap',
    template: `
        <div class="absolute inset-0 bg-base-200 z-0"></div>
        <div
            class="relative bg-base-100 mx-auto my-8 border border-base-300 rounded-lg w-[28rem] z-10 overflow-hidden"
        >     
            <header
                class="px-4 py-3 bg-secondary text-secondary-content text-xl font-medium flex items-center justify-between w-full"
            >
                <div>Assistant Panel</div>
                <div class="px-2 py-1 rounded text-sm font-mono">SETUP</div>
            </header>
            <main class="p-4 w-full flex flex-col space-y-2" *ngIf="!loading; else load_state">
                <label for="system-id" i18n="@@systemLabel">
                    {{ 'PANEL.BOOTSTRAP_LABEL' | translate }}
                </label>
                <mat-form-field
                    appearance="outline"
                    class="w-full"
                >
                    <input
                        matInput
                        [ngModel]="system_id$ | async"
                        [matAutocomplete]="auto"
                        placeholder="System ID"
                        (ngModelChange)="system_id$.next($event)"
                    />
                    <mat-spinner
                        [diameter]="32"
                        matSuffix
                        *ngIf="loading === 'search'"
                    ></mat-spinner>
                    <mat-hint class="-mx-4">
                        Select the system to connect to for Assistant
                        functionality
                    </mat-hint>
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    <mat-option
                        *ngFor="let option of space_list | async"
                        [value]="option.id"
                    >
                        <div class="leading-tight">
                            <div class="name">{{ option.name }}</div>
                            <div class="text-xs text-dark-fade">
                                {{ option.id }}
                            </div>
                        </div>
                    </mat-option>
                    <mat-option
                        class="pointer-events-none opacity-60"
                        *ngIf="
                            system_id$.getValue()?.length < 2 &&
                            !(space_list | async)?.length
                        "
                    >
                        {{
                            'PANEL.BOOTSTRAP_INPUT_PLACEHOLDER' | translate
                        }}
                    </mat-option>
                </mat-autocomplete>
            </main>
            <footer class="w-full px-4 py-2 flex items-center justify-end border-t border-base-300" *ngIf="!loading">
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!system_id$.getValue()"
                    (click)="bootstrap()"
                    i18n
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main class="flex flex-col items-center justify-center p-8 w-full">
                <mat-spinner [diameter]="48" />
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [],
})
export class BootstrapComponent extends AsyncHandler {
    public loading = '';
    /** ID of the system to bootstrap */
    public system_id$ = new BehaviorSubject('');

    public readonly space_list = combineLatest([
        this.system_id$,
        this._org.initialised,
    ]).pipe(
        debounceTime(300),
        switchMap(([search]) => {
            return search.length < 2
                ? of({ data: [] })
                : querySystems({
                      q: search,
                      limit: 20,
                      zone_id: this._org.organisation.id,
                  });
        }),
        map((_) => _.data.map((_) => new Space(_ as any))),
        shareReplay(1)
    );

    constructor(
        private _org: OrganisationService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && !!params.get('clear')) {
                    this.clearBootstrap();
                }
                if (params.has('system_id') || params.has('sys_id')) {
                    this.system_id$.next(
                        params.get('system_id') || params.get('sys_id')
                    );
                    this.bootstrap();
                }
            })
        );
        this.checkBootstrapped();
    }

    /**
     * Save the bootstrapped ID and redirect to the panel for that ID
     * @param system_id System to bootstrap
     */
    private configure(system_id: string): void {
        this.loading = 'Setup';
        if (localStorage) {
            localStorage.setItem(SYS_ID_KEY, system_id);
            localStorage.setItem('trust', 'true');
            localStorage.setItem('fixed_device', 'true');
        }
        this._router.navigate(['/panel', system_id], {
            queryParamsHandling: 'preserve',
        });
        this.loading = '';
    }
    /* Setup the default system for the application to bind to */
    public readonly bootstrap = () =>
        this.configure(this.system_id$.getValue());

    /* Check if the application has previously been bootstrapped */
    private checkBootstrapped(): void {
        this.loading = 'Checks';
        if (localStorage) {
            const system_id = localStorage.getItem(SYS_ID_KEY);
            if (system_id) {
                this._router.navigate(['/panel', system_id], {
                    queryParamsHandling: 'preserve',
                });
                return;
            }
        }
        this.loading = '';
    }

    /* Remove any previously set bootstrapping details */
    private readonly clearBootstrap = () => localStorage.removeItem(SYS_ID_KEY);
}
