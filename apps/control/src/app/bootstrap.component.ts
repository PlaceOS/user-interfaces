import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass } from '@user-interfaces/common';
import { Space, SpacesService } from '@user-interfaces/spaces';

@Component({
    selector: '[app-bootstrap]',
    template: `
        <div
            class="rounded shadow w-80 m-4 bg-white overflow-hidden mx-auto text-center flex flex-col items-center"
        >
            <h2 class="bg-red-700 text-white py-2 px-4 m-0 w-full text-2xl">Control Interface Setup</h2>
            <ng-container *ngIf="!loading; else load_state">
                <p class="description my-3">Input the PlaceOS <em>System ID</em> to bootstrap</p>
                <mat-form-field appearance="outline">
                    <mat-label>System ID</mat-label>
                    <input
                        matInput
                        [(ngModel)]="system_id"
                        [matAutocomplete]="auto"
                        placeholder="System ID"
                        (ngModelChange)="filter($event)"
                    />
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    <mat-option *ngFor="let option of filtered_list" [value]="option.id">
                        <div class="leading-tight">
                            <div class="name">{{ option.name }}</div>
                            <div class="text-xs text-dark-fade">{{ option.id }}</div>
                        </div>
                    </mat-option>
                </mat-autocomplete>
                <button mat-button [disabled]="!system_id" (click)="bootstrap()">Submit</button>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div class="my-16 flex flex-col items-center">
                <mat-spinner diameter="32"></mat-spinner>
                <div class="m-4">Loading system data...</div>
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
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ddd' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
export class BootstrapComponent extends BaseClass implements OnInit {
    /** List of available systems */
    public system_list: Space[] = [];
    /** List of available systems */
    public filtered_list: Space[] = [];
    /** Whether application data is loading */
    public loading: boolean;
    /** ID of the system to bootstrap */
    public system_id: string;
    /** Selected system to bootstrap */
    public selected_system: Space = null;
    /** Whether input field is focused */
    public input_focus: boolean;

    constructor(
        private _spaces: SpacesService,
        private route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        this.loading = true;
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.system_list = this._spaces.space_list || [];
        this.filter('');
        this.loading = false;
        this.subscription(
            'route.query',
            this.route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear')) {
                    this.clearBootstrap();
                }
                if (params.has('system_id') || params.has('sys_id')) {
                    this.system_id = params.get('system_id') || params.get('sys_id');
                    this.bootstrap();
                }
            })
        );
        this.checkBootstrapped();
    }

    /**
     * Setup the default system for the application to bind to
     */
    public readonly bootstrap = () => this.configure(this.system_id);

    /**
     * Check if the application has previously been bootstrapped
     */
    private checkBootstrapped(): void {
        this.loading = true;
        if (localStorage) {
            const system_id = localStorage.getItem('PLACEOS.CONTROL.system');
            if (system_id) {
                this._router.navigate(['panel', system_id]);
                return;
            }
        }
        this.loading = false;
    }

    /**
     * Save the bootstrapped ID and redirect to the panel for that ID
     * @param system_id System to bootstrap
     */
    private configure(system_id: string): void {
        this.loading = true;
        if (localStorage) {
            localStorage.setItem('PLACEOS.CONTROL.system', system_id);
            localStorage.setItem('trusted', 'true');
            localStorage.setItem('fixed_device', 'true');
        }
        this._router.navigate(['panel', system_id]);
        this.loading = false;
    }

    /**
     * Remove any previously set bootstrapping details
     */
    private readonly clearBootstrap = () => localStorage.removeItem('PLACEOS.CONTROL.system');

    public filter(search: string) {
        const s = search.toLowerCase();
        this.filtered_list = this.system_list
            .filter((i) => i.name.toLowerCase().includes(s) || i.id.includes(search))
            .slice(0, 100);
    }
}
