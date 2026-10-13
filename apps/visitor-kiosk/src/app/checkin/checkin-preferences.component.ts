import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { queryCateringItems } from '@placeos/assets';
import { setToken } from '@placeos/ts-client';

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
                                ? 'COMMON.SAVE'
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
    public readonly menu = signal<CateringItem[]>([]);
    public readonly allow_standalone = settingSignal(
        'standalone_visitor_location',
        '',
    );
    private _menu_load_id = 0;

    private readonly _update_bld_id = effect(() => {
        this.bld_id.set(this._org.active_building()?.id || '');
    });

    private readonly _load_menu = effect(async () => {
        const bld = this.bld_id();
        const load_id = ++this._menu_load_id;
        if (!bld) {
            this.menu.set([]);
            return;
        }
        const menu = await queryCateringItems(bld).catch(
            () => [] as CateringItem[],
        );
        if (load_id !== this._menu_load_id) return;
        this.menu.set(
            menu.filter((_) =>
                (_.tags || []).find(
                    (_) =>
                        _.toLowerCase() === 'drink' ||
                        _.toLowerCase() === 'drinks' ||
                        _.toLowerCase() === 'beverage',
                ),
            ),
        );
    });

    private readonly _handle_menu = effect(() => {
        const menu = this.menu();
        if (menu.length) {
            this.loading.set(false);
            this.clearTimeout('no_menu');
        } else if (this.bld_id()) {
            this.timeout(
                'no_menu',
                () => {
                    notifyError('No menu available');
                    this.next();
                },
                1000,
            );
        }
    });

    public ngOnInit(): void {
        this.loading.set(true);
        this.loadJwtFromRoute();
        this.type.set('menu');
        this.timeout('event', () => this.loadExistingBeverage(), 1000);
    }

    public async update() {
        this.type.set('save');
        if (!this.beverage()) return this.next();
        this.loading.set(true);
        const booking = this._checkin.event();
        if (!booking) return notifyError(i18n('APP.VISITOR_KIOSK.LOAD_ERROR'));
        const email = booking.asset_id;
        const catering_item = new CateringItem({
            ...this.beverage(),
            quantity: 1,
        });
        await setGuestCateringItem(email, catering_item, booking.id);
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

    private async loadJwtFromRoute() {
        const params = this._route.snapshot.queryParamMap;
        const jwt =
            params.get('jwt') ||
            params.get('token') ||
            parseTokenFromUrl(window.location.href);
        if (!jwt || jwt === this._last_jwt) return;
        this._last_jwt = jwt;
        setToken(jwt);
        const data = parseJWT(jwt);
        const user = data.u;
        if (!user) return;
        const email = user.e;
        const [event_id, , bld_zone] = user.r || [];
        this.bld_id.set(bld_zone);

        await this._checkin.loadGuestAndEvent(email, event_id).catch((err) => {
            this.handleError(
                'Unable to find visitor or a meeting associated with the given email address.',
            );
            throw err;
        });
    }

    private async loadExistingBeverage() {
        const event = this.event();
        if (!event) return this.next();
        if (!event.linked_event && !this.allow_standalone()) {
            log(
                'CHECKIN',
                'Visitor booking does not support catering.',
                undefined,
                'info',
            );
        }
        const existing = await getGuestCateringItem(
            event.asset_id,
            event.id,
        ).catch(() => null);
        if (existing) {
            this.existing_beverage.set(existing);
            this.beverage.set(existing);
        }
    }
}
