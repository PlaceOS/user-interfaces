import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    debounceTime,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { Space } from '@placeos/spaces';
import { BehaviorSubject, of } from 'rxjs';
import { querySystems } from '@placeos/ts-client';
import { OrganisationService } from '@placeos/organisation';

const STORE_KEY = 'PLACEOS.CONTROL.system';

@Component({
    selector: '[app-bootstrap]',
    template: `
        <div
            class="rounded shadow m-4 bg-base-100 border border-base-200 overflow-hidden mx-auto text-center flex flex-col items-center"
        >
            <h2 class="bg-error text-white py-2 px-4 m-0 w-full text-2xl">
                Control Panel Setup
            </h2>
            <ng-container
                *ngIf="!loading || loading === 'search'; else load_state"
            >
                <p class="description py-4">
                    Input the PlaceOS <em>System ID</em> to bootstrap
                </p>
                <mat-form-field appearance="outline">
                    <mat-label>System ID</mat-label>
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
                        Start typing to search for a room
                    </mat-option>
                </mat-autocomplete>
                <button
                    btn
                    matRipple
                    [disabled]="!system_id$.getValue()"
                    (click)="bootstrap()"
                >
                    Submit
                </button>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div load class="my-16 flex flex-col items-center">
                <mat-spinner [diameter]="32"></mat-spinner>
                <div class="m-4">Loading system data... {{ loading }}</div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #f0f0f0;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230002' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }

            :host > div {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }

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
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    /** List of available systems */
    public system_list: Space[] = [];
    /** List of available systems */
    public filtered_list: Space[] = [];
    /** Whether application data is loading */
    public loading: string;
    /** ID of the system to bootstrap */
    public system_id$ = new BehaviorSubject('');
    /** Selected system to bootstrap */
    public selected_system: Space = null;
    /** Whether input field is focused */
    public input_focus: boolean;

    public readonly space_list = this.system_id$.pipe(
        debounceTime(300),
        switchMap((search) => {
            this.loading = 'search';
            return search.length < 2
                ? of({ data: [] })
                : querySystems({
                      q: search,
                      limit: 20,
                      zone_id: this._org.organisation.id,
                  });
        }),
        map((_) => _.data.map((_) => new Space(_ as any))),
        tap((_) => (this.loading = '')),
        shareReplay(1)
    );

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'route.query',
            this.route.queryParamMap.subscribe((params) => {
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
     * Setup the default system for the application to bind to
     */
    public readonly bootstrap = () =>
        this.configure(this.system_id$.getValue());

    /**
     * Check if the application has previously been bootstrapped
     */
    private checkBootstrapped(): void {
        this.loading = 'Checks';
        if (localStorage) {
            const system_id = localStorage.getItem(STORE_KEY);
            if (system_id) {
                this._router.navigate(['/tabbed', system_id], {
                    queryParamsHandling: 'preserve',
                });
                return;
            }
        }
        this.loading = '';
    }

    /**
     * Save the bootstrapped ID and redirect to the panel for that ID
     * @param system_id System to bootstrap
     */
    private configure(system_id: string): void {
        this.loading = 'Setup';
        if (localStorage) {
            localStorage.setItem(STORE_KEY, system_id);
            localStorage.setItem('trust', 'true');
            localStorage.setItem('fixed_device', 'true');
        }
        this._router.navigate(['/tabbed', system_id], {
            queryParamsHandling: 'preserve',
        });
        this.loading = '';
    }

    /**
     * Remove any previously set bootstrapping details
     */
    private readonly clearBootstrap = () => localStorage.removeItem(STORE_KEY);
}
