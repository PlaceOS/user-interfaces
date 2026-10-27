import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import {
    OrganisationService,
    i18n,
    notifyError,
    notifyInfo,
    notifySuccess,
    settingSignal,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PageHeadingDirective } from '../components/page-heading.directive';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-induction]',
    template: `
        <div
            class="bg-base-100 relative flex w-lg flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
        >
            <h1 pageHeading class="my-4">
                {{ 'APP.VISITOR_KIOSK.INDUCTION_MSG' | translate }}
            </h1>
            <div
                class="border-base-300 max-h-[50vh] w-full overflow-x-hidden overflow-y-auto rounded-sm border p-4 text-sm whitespace-pre-wrap opacity-70"
            >
                {{ induction_details() }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                {{ 'APP.VISITOR_KIOSK.ACCEPT_TERMS' | translate }}
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    [disabled]="loading()"
                    (click)="decline()"
                >
                    {{ 'APP.VISITOR_KIOSK.DECLINE' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree() || loading()"
                    (click)="continue()"
                >
                    {{ 'COMMON.ACCEPT' | translate }}
                </button>
            </div>
            @if (!loading()) {
                <a
                    icon
                    matRipple
                    class="absolute top-0 right-0"
                    [routerLink]="['/welcome']"
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </a>
            }
        </div>
    `,
    styles: [],
    imports: [
        PageHeadingDirective,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        FormsModule,
        RouterModule,
    ],
})
export class CheckinInductionComponent implements OnInit {
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private readonly _allow_user_photo = settingSignal(
        'allow_user_photo',
        false,
    );
    private readonly _allow_printing_label = settingSignal(
        'allow_printing_label',
    );
    private readonly _induction_enabled = settingSignal(
        'induction_enabled',
        false,
    );

    public readonly event = this._checkin.event;
    public readonly agree = signal(false);
    public readonly loading = signal(false);
    public readonly induction_details = settingSignal('induction_details');
    public readonly induction_after_details = settingSignal(
        'induction_after_details',
        false,
    );
    public readonly allow_user_photo = computed(
        () =>
            this._allow_user_photo() && this._allow_printing_label() !== false,
    );
    public readonly is_enabled = computed(
        () => !!(this._induction_enabled() && this.induction_details()),
    );

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        const event = this.event();
        if (!event) this._router.navigate(['/checkin']);
        if (!this.is_enabled() || event.induction === 'accepted') {
            if (this.induction_after_details()) {
                this._router.navigate(['/checkin', 'results']);
            } else {
                this._router.navigate(['/checkin', 'details']);
            }
        }
    }

    public async decline() {
        if (this.loading()) return;
        this.loading.set(true);
        const declined = await this._checkin
            .declineInduction()
            .then(() => true)
            .catch((err) => {
                notifyError('Error declining induction', err);
                return false;
            });
        this.loading.set(false);
        if (!declined) return;
        this._checkin.setError(i18n('APP.VISITOR_KIOSK.INDUCTION_DECLINED'));
        notifyInfo('Induction declined successfully');
        this._router.navigate(['/checkin', 'error']);
    }

    public async continue() {
        if (this.loading()) return;
        this.loading.set(true);
        const completed = await this._checkin
            .completeInduction()
            .then(() => true)
            .catch((err) => {
                notifyError('Error completing induction', err);
                return false;
            });
        if (!completed) {
            this.loading.set(false);
            return;
        }
        notifySuccess('Induction completed successfully');
        if (this.induction_after_details()) {
            const checked_in = await this._checkin
                .checkinGuest()
                .then(() => true)
                .catch(() => false);
            this.loading.set(false);
            if (!checked_in) return;
            this._router.navigate([
                '/checkin',
                this.allow_user_photo() ? 'photo' : 'results',
            ]);
        } else {
            this.loading.set(false);
            this._router.navigate(['/checkin', 'details']);
        }
    }
}
