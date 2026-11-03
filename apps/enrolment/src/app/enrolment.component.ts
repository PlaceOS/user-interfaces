import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, settingSignal, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { EnrolmentErrorComponent } from './enrolment-error.component';
import { EnrolmentEventDetailsComponent } from './enrolment-event-details.component';
import { EnrolmentGuestConfirmComponent } from './enrolment-guest-confirm.component';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'app-enrolment',
    template: `
        <div class="bg-base-300 absolute inset-0 flex flex-col">
            <div
                class="bg-secondary text-secondary-content z-20 h-16 w-full p-2 shadow-sm"
            >
                @let logo_path = logo();
                <img
                    auth
                    class="h-12"
                    alt="Logo"
                    [src]="logo_path"
                    [source]="logo_path"
                />
            </div>
            <div
                class="relative z-10 flex h-1/2 w-full flex-1 flex-col items-center overflow-auto"
            >
                @if (!loading()) {
                    @switch (view()) {
                        @case ('event') {
                            <enrolment-event-details></enrolment-event-details>
                        }
                        @case ('guest') {
                            <!-- Form, Material inputs and upload fields load on demand -->
                            @defer (on immediate) {
                                <enrolment-guest-confirm></enrolment-guest-confirm>
                            } @placeholder {
                                <mat-spinner
                                    class="m-16"
                                    [diameter]="32"
                                ></mat-spinner>
                            }
                        }
                        @case ('complete') {
                            <div
                                class="border-base-200 bg-base-100 m-4 rounded-sm border p-4 shadow-sm"
                            >
                                <icon class="text-success text-7xl">done</icon>
                                <p>
                                    You are now checked in. See you
                                    {{
                                        event()?.date
                                            ? 'at ' +
                                              (event()?.date
                                                  | date: 'shortTime')
                                            : 'soon'
                                    }}
                                </p>
                            </div>
                        }
                        @default {
                            <enrolment-error></enrolment-error>
                        }
                    }
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2 p-16"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ loading() }}</p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        EnrolmentErrorComponent,
        EnrolmentGuestConfirmComponent,
        EnrolmentEventDetailsComponent,
        AuthenticatedImageDirective,
        IconComponent,
    ],
})
export class EnrolmentComponent extends AsyncHandler implements OnInit {
    private _state = inject(EnrolmentStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);

    public readonly loading = this._state.loading;
    public readonly view = this._state.view;
    public readonly event = this._state.event;

    /**
     * Image URL of the header logo. The header uses the opposite logo to the
     * theme: `logo_dark` with the light theme and `logo_light` with the dark theme.
     */
    public readonly logo = computed(() => {
        const logo = settingSignal<string | { src?: string }>(
            this._settings.theme_signal() === 'dark'
                ? 'logo_light'
                : 'logo_dark',
        )();
        return typeof logo === 'string' ? logo : logo?.src || '';
    });

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('view')) {
                    this._state.setView(params.get('view') as any);
                }
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('uid')) {
                    const token = params.get('uid')!;
                    this._state.handleUserToken(token);
                    this.clearTimeout('check');
                }
            }),
        );
        this.timeout('check', () => this._state.setError('guest'), 5000);
    }
}
