import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    Space,
    VERSION,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { querySystems } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';

const SYS_ID_KEY = 'PLACEOS.ASSISTANT.system';

@Component({
    selector: 'app-bootstrap',
    template: `
        <div class="bg-base-200 absolute inset-0 z-0"></div>
        <div
            class="border-base-300 bg-base-100 relative z-10 mx-auto my-8 w-md overflow-hidden rounded-lg border"
        >
            <header
                class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
            >
                <div>{{ 'COMMON.BOOTSTRAP_ASSISTANT' | translate }}</div>
                <div class="rounded-sm px-2 py-1 font-mono text-sm uppercase">
                    {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                </div>
            </header>
            @if (!loading) {
                <main class="flex w-full flex-col space-y-2 p-4">
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
                        @if (loading === 'search') {
                            <mat-spinner
                                [diameter]="32"
                                matSuffix
                            ></mat-spinner>
                        }
                        <mat-hint class="-mx-4">
                            {{ 'COMMON.BOOTSTRAP_ASSISTANT_INFO' | translate }}
                        </mat-hint>
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of space_list | async; track option) {
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
                        @if (
                            system_id$.getValue()?.length < 2 &&
                            !(space_list | async)?.length
                        ) {
                            <mat-option class="pointer-events-none opacity-60">
                                {{
                                    'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                        | translate
                                }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </main>
            } @else {
                <main
                    class="flex w-full flex-col items-center justify-center p-8"
                >
                    <mat-spinner [diameter]="48" />
                    <p>{{ 'COMMON.BOOTSTRAP_LOADING' | translate }}</p>
                </main>
            }
            @if (!loading) {
                <footer
                    class="border-base-300 flex w-full items-center justify-end border-t px-4 py-2"
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
            }
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
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        CommonModule,
        FormsModule,
        TranslatePipe,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public get version() {
        return VERSION;
    }

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
