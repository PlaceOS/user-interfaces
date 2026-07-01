import { CommonModule } from '@angular/common';
import {
    Component,
    OnInit,
    computed,
    debounced,
    inject,
    resource,
    signal,
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
            @if (!loading()) {
                <main class="flex w-full flex-col space-y-2 p-4">
                    <label for="system-id">
                        {{ 'COMMON.BOOTSTRAP_LABEL' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [(ngModel)]="system_id"
                            [matAutocomplete]="auto"
                            [placeholder]="'COMMON.BOOTSTRAP_LABEL' | translate"
                        />
                        @if (searching()) {
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
                        @for (option of space_list(); track option) {
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
                        @if (system_id().length < 2 && !space_list().length) {
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
            @if (!loading()) {
                <footer
                    class="border-base-300 flex w-full items-center justify-end border-t px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="!system_id()"
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

    /** Current loading state of the bootstrap process */
    public readonly loading = signal('');
    /** ID of the system to bootstrap */
    public readonly system_id = signal('');

    private readonly _search = debounced(this.system_id, 300);
    private readonly _spaces = resource({
        params: () => ({
            q: this._search.value(),
            ready: this._org.initialised(),
        }),
        loader: async ({ params }) => {
            if (!params.ready || params.q.length < 2) return [];
            const { data } = await querySystems({
                q: params.q,
                limit: 20,
                fields: ['id', 'name', 'display_name', 'email'].join(','),
                zone_id: this._org.organisation.id,
            });
            return data.map((_) => new Space(_ as any));
        },
    });
    /** Spaces matching the current search */
    public readonly space_list = computed(() => this._spaces.value() ?? []);
    /** Whether a space search is currently in flight */
    public readonly searching = this._spaces.isLoading;

    public async ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && !!params.get('clear')) {
                    this.clearBootstrap();
                }
                if (params.has('system_id') || params.has('sys_id')) {
                    this.system_id.set(
                        params.get('system_id') || params.get('sys_id') || '',
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
        this.loading.set('Setup');
        if (localStorage) {
            localStorage.setItem(SYS_ID_KEY, system_id);
            localStorage.setItem('trust', 'true');
            localStorage.setItem('fixed_device', 'true');
        }
        this._router.navigate(['/panel', system_id], {
            queryParamsHandling: 'preserve',
        });
        this.loading.set('');
    }
    /* Setup the default system for the application to bind to */
    public readonly bootstrap = () => this.configure(this.system_id());

    /* Check if the application has previously been bootstrapped */
    private checkBootstrapped(): void {
        this.loading.set('Checks');
        if (localStorage) {
            const system_id = localStorage.getItem(SYS_ID_KEY);
            if (system_id) {
                this._router.navigate(['/panel', system_id], {
                    queryParamsHandling: 'preserve',
                });
                return;
            }
        }
        this.loading.set('');
    }

    /* Remove any previously set bootstrapping details */
    private readonly clearBootstrap = () => localStorage.removeItem(SYS_ID_KEY);
}
