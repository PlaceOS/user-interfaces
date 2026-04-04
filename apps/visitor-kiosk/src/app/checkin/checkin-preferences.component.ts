import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    listChildMetadata,
    PlaceZoneMetadata,
    setToken,
} from '@placeos/ts-client';
import { lastValueFrom, of } from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    CateringItem,
    i18n,
    log,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
    parseJWT,
    settingSignal,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { getGuestCateringItem, setGuestCateringItem } from '@placeos/users';
import { CheckinStateService } from './checkin-state.service';
import { parseTokenFromUrl } from './token-from-url';

@Component({
    selector: 'checkin-preferences',
    template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.BEVERAGE_MSG' | translate }}
                </h3>
                <div class="w-full">
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [(ngModel)]="beverage"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.BEVERAGE_SELECT' | translate
                            "
                        >
                            @for (item of menu(); track item) {
                                <mat-option [value]="item">
                                    {{ item.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (has_beverage()) {
                    <div
                        class="bg-warning text-warning-content rounded-sm px-2 py-1"
                    >
                        You have already selected a beverage.
                    </div>
                }
                <div class="flex w-full items-center justify-end">
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="has_beverage()"
                        (click)="update()"
                    >
                        {{
                            (beverage()
                                ? 'APP.VISITOR_KIOSK.SAVE'
                                : 'APP.VISITOR_KIOSK.CONTINUE'
                            ) | translate
                        }}
                    </button>
                </div>
                <a
                    icon
                    matRipple
                    class="absolute top-2 right-2"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="bg-base-100 relative flex h-80 w-md flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm p-8 shadow-sm"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{
                        (type() === 'menu'
                            ? 'APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING'
                            : 'APP.VISITOR_KIOSK.BEVERAGE_LOADING'
                        ) | translate
                    }}
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
})
export class CheckinPreferencesComponent
    extends AsyncHandler
    implements OnInit
{
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _checkin = inject(CheckinStateService);
    private _org = inject(OrganisationService);
    private _last_jwt = '';

    public loading = signal(false);
    public type = signal<'save' | 'menu'>('menu');
    public existing_beverage = signal<CateringItem>(null);
    public beverage = signal<CateringItem>(null);
    public has_beverage = computed(() => !!this.existing_beverage());
    public readonly event = this._checkin.event;
    public readonly bld_id = signal('');
    public readonly allow_standalone = settingSignal(
        'standalone_visitor_location',
        '',
    );

    private readonly _menu = toObservable(this.bld_id).pipe(
        filter((_) => !!_),
        switchMap((bld) =>
            listChildMetadata(bld, {
                name: 'catering',
                include_parent: true,
            }).pipe(
                catchError(() => of([] as PlaceZoneMetadata[])),
                map((list) => {
                    const details = [];
                    for (const zone of list) {
                        if (zone.keys.includes('catering')) {
                            const catering = zone.metadata.catering;
                            if (catering.details instanceof Array) {
                                details.push(...catering.details);
                            }
                        }
                    }
                    return details;
                }),
                map((menu) => menu.map((i) => new CateringItem(i))),
            ),
        ),
        map((menu) =>
            menu.filter((_) =>
                (_.tags || []).find(
                    (_) =>
                        _.toLowerCase() === 'drink' ||
                        _.toLowerCase() === 'drinks' ||
                        _.toLowerCase() === 'beverage',
                ),
            ),
        ),
        startWith([]),
        shareReplay(1),
    );
    public readonly menu = toSignal(this._menu, { initialValue: [] });

    public ngOnInit(): void {
        this.loading.set(true);
        this.subscription(
            'bld',
            this._org.active_building.subscribe((v) =>
                this.bld_id.set(v?.id || ''),
            ),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                const jwt =
                    params.get('jwt') ||
                    params.get('token') ||
                    parseTokenFromUrl(window.location.href);
                if (!jwt || jwt === this._last_jwt) return;
                this._last_jwt = jwt;
                if (jwt) {
                    setToken(jwt);
                    const data = parseJWT(jwt);
                    const user = data.u;
                    if (user) {
                        const email = user.e;
                        const [event_id, , bld_zone] = user.r || [];
                        this.bld_id.set(bld_zone);

                        await this._checkin
                            .loadGuestAndEvent(email, event_id)
                            .catch((err) => {
                                this.handleError(
                                    'Unable to find visitor or a meeting associated with the given email address.',
                                );
                                throw err;
                            });
                    }
                }
            }),
        );
        this.type.set('menu');
        this.timeout(
            'event',
            () => {
                this.event.pipe(first()).subscribe(async (event) => {
                    if (!event) return this.next();
                    if (!event.linked_event && !this.allow_standalone()) {
                        log(
                            'CHECKIN',
                            'Visitor booking does not support catering.',
                            undefined,
                            'info',
                        );
                    }
                    const existing = await lastValueFrom(
                        getGuestCateringItem(event.asset_id, event.id).pipe(
                            catchError(() => of(null)),
                        ),
                    );
                    if (existing) {
                        this.existing_beverage.set(existing);
                        this.beverage.set(existing);
                    }
                });
            },
            1000,
        );
        this.subscription(
            'menu',
            this._menu.subscribe((l) => {
                if (l.length) {
                    this.loading.set(false);
                    this.clearTimeout('no_menu');
                } else {
                    this.timeout(
                        'no_menu',
                        () => {
                            notifyError('No menu available');
                            this.next();
                        },
                        1000,
                    );
                }
            }),
        );
    }

    public async update() {
        this.type.set('save');
        if (!this.beverage()) return this.next();
        this.loading.set(true);
        const booking = await nextValueFrom(this._checkin.event);
        if (!booking) return notifyError(i18n('APP.VISITOR_KIOSK.LOAD_ERROR'));
        const email = booking.asset_id;
        const catering_item = new CateringItem({
            ...this.beverage(),
            quantity: 1,
        });
        await lastValueFrom(
            setGuestCateringItem(email, catering_item, booking.id),
        );
        notifySuccess(i18n('APP.VISITOR_KIOSK.BEVERAGE_SUCCESS'));
        this.loading.set(false);
        this.next();
    }

    public next() {
        this._router.navigate(['/welcome']);
    }

    private handleError(message: any) {
        this._checkin.setError(message?.statusText || message);
        this._router.navigate(['/checkin', 'error']);
    }
}
