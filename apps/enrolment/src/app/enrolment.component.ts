import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { debounceTime, map } from 'rxjs/operators';
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
                @let logo_path = (logo | async)?.src || (logo | async);
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
                @if (!(loading | async)) {
                    @switch (view | async) {
                        @case ('event') {
                            <enrolment-event-details></enrolment-event-details>
                        }
                        @case ('guest') {
                            <enrolment-guest-confirm></enrolment-guest-confirm>
                        }
                        @case ('complete') {
                            <div
                                class="border-base-200 bg-base-100 m-4 rounded-sm border p-4 shadow-sm"
                            >
                                <icon class="text-success text-7xl">done</icon>
                                <p>
                                    You are now checked in. See you
                                    {{
                                        (event | async)?.date
                                            ? 'at ' +
                                              ((event | async)?.date
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
                        <p>{{ loading | async }}</p>
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
export class EnrolmentComponent extends AsyncHandler {
    private _state = inject(EnrolmentStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public loading = this._state.loading;
    public view = this._state.view;
    public event = this._state.event;

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_light')
                    : this._settings.get('app.logo_dark')) || {},
        ),
    );

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
