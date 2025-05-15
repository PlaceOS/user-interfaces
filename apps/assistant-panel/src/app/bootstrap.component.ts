import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { querySystems } from '@placeos/ts-client';
import { Space } from 'libs/spaces/src/lib/space.class';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';

const SYS_ID_KEY = 'PLACEOS.ASSISTANT.system';

@Component({
    selector: 'app-bootstrap',
    template: `
        <div class="absolute inset-0 z-0 bg-base-200"></div>
        <div
            class="relative z-10 mx-auto my-8 w-[28rem] overflow-hidden rounded-lg border border-base-300 bg-base-100"
        >
            <header
                class="flex w-full items-center justify-between bg-secondary px-4 py-3 text-xl font-medium text-secondary-content"
            >
                <div>{{ 'COMMON.BOOTSTRAP_ASSISTANT' | translate }}</div>
                <div class="rounded px-2 py-1 font-mono text-sm uppercase">
                    {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                </div>
            </header>
            <main
                class="flex w-full flex-col space-y-2 p-4"
                *ngIf="!loading; else load_state"
            >
                <label for="system-id">
                    {{ 'COMMON.BOOTSTRAP_LABEL' | translate }}
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [ngModel]="system_id$ | async"
                        [matAutocomplete]="auto"
                        [placeholder]="'COMMON.BOOTSTRAP_LABEL' | translate"
                        (ngModelChange)="system_id$.next($event)"
                    />
                    <mat-spinner
                        [diameter]="32"
                        matSuffix
                        *ngIf="loading === 'search'"
                    ></mat-spinner>
                    <mat-hint class="-mx-4">
                        {{ 'COMMON.BOOTSTRAP_ASSISTANT_INFO' | translate }}
                    </mat-hint>
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    <mat-option
                        *ngFor="let option of space_list | async"
                        [value]="option.id"
                    >
                        <div
                            class="flex w-full items-center space-x-4 leading-tight"
                        >
                            <div class="flex flex-1 flex-col">
                                <div>
                                    {{ option.display_name || option.name }}
                                </div>
                                <div
                                    class="text-xs opacity-30"
                                    *ngIf="
                                        option.display_name &&
                                        option.display_name !== option.name
                                    "
                                >
                                    {{ option.name }}
                                </div>
                            </div>
                            <div
                                class="rounded bg-base-200 px-2 py-1 font-mono text-[0.625rem]"
                            >
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
                        {{ 'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER' | translate }}
                    </mat-option>
                </mat-autocomplete>
            </main>
            <footer
                class="flex w-full items-center justify-end border-t border-base-300 px-4 py-2"
                *ngIf="!loading"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!system_id$.getValue()"
                    (click)="bootstrap()"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main class="flex w-full flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="48" />
                <p>{{ 'COMMON.BOOTSTRAP_LOADING' | translate }}</p>
            </main>
        </ng-template>
    `,
    styles: [],
    standalone: false,
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
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
                      fields: ['id', 'name', 'display_name', 'email'].join(','),
                      zone_id: this._org.organisation.id,
                  });
        }),
        map((_) => _.data.map((_) => new Space(_ as any))),
        shareReplay(1),
    );

    constructor(
        private _org: OrganisationService,
        private _router: Router,
        private _route: ActivatedRoute,
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
                        params.get('system_id') || params.get('sys_id'),
                    );
                    this.bootstrap();
                }
            }),
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
