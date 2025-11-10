import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { i18n, notifyError, settingSignal } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';

@Component({
    selector: 'meeting-flow-details',
    template: `
        <div class="h-full w-full">
            <div
                class="flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
            >
                <div
                    class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                >
                    <icon>info</icon>
                    <div>
                        {{
                            'CALENDAR_EVENT.MEETING_DETAILS_HEADER' | translate
                        }}
                    </div>
                </div>
                <div class="flex flex-col p-4" [formGroup]="form()">
                    <label class="uppercase"
                        >{{ 'CALENDAR_EVENT.MEETING_TITLE_LABEL' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="title"
                            [placeholder]="
                                'CALENDAR_EVENT.TITLE_PLACEHOLDER' | translate
                            "
                        />
                    </mat-form-field>
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                    >
                        <div class="relative flex-1">
                            <label for="date" class="uppercase">{{
                                'FORM.DATE' | translate
                            }}</label>
                            <date-field name="date" formControlName="date" />
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                        <div class="flex-1">
                            <label for="time" class="uppercase">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <time-field
                                name="time"
                                [ngModel]="form().getRawValue().date"
                                (ngModelChange)="
                                    form().patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </div>
                        <div class="flex-1">
                            <label for="duration" class="uppercase">{{
                                'FORM.DURATION' | translate
                            }}</label>
                            <duration-field
                                name="duration"
                                formControlName="duration"
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                >
                    <icon>info</icon>
                    <div>
                        {{ 'CALENDAR_EVENT.ROOM_SIZE_LABEL' | translate }}
                    </div>
                </div>
                <div class="-mx-1 flex flex-wrap p-4">
                    @let capacity = (options | async)?.capacity || -1;
                    <button
                        btn
                        matRipple
                        class="m-1 min-w-40 flex-1"
                        [class.inverse]="capacity !== 1 && capacity !== -1"
                        (click)="setCapacity(1)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon>person</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ROOM_SIZE_1_2' | translate }}
                            </div>
                        </div>
                        @if (!(capacity !== 1 && capacity !== -1)) {
                            <icon class="absolute right-0 top-0">task_alt</icon>
                        }
                    </button>
                    <button
                        btn
                        matRipple
                        class="m-1 min-w-40 flex-1"
                        [class.inverse]="capacity !== 3"
                        (click)="setCapacity(3)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon>group</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ROOM_SIZE_3_4' | translate }}
                            </div>
                        </div>
                        @if (capacity === 3) {
                            <icon class="absolute right-0 top-0">task_alt</icon>
                        }
                    </button>
                    <button
                        btn
                        matRipple
                        class="m-1 min-w-40 flex-1"
                        [class.inverse]="capacity !== 5"
                        (click)="setCapacity(5)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon>groups</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ROOM_SIZE_5_8' | translate }}
                            </div>
                        </div>
                        @if (capacity === 5) {
                            <icon class="absolute right-0 top-0">task_alt</icon>
                        }
                    </button>
                    <button
                        btn
                        matRipple
                        class="m-1 min-w-40 flex-1"
                        [class.inverse]="capacity !== 9"
                        (click)="setCapacity(9)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon>groups</icon>
                            <div>
                                {{
                                    'CALENDAR_EVENT.ROOM_SIZE_9_PLUS'
                                        | translate
                                }}
                            </div>
                        </div>
                        @if (capacity === 9) {
                            <icon class="absolute right-0 top-0">task_alt</icon>
                        }
                    </button>
                </div>
            </div>
            <div class="min-h-4 sm:min-h-[calc(100vh-44.25rem)]"></div>
            <div
                class="sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
            >
                <div></div>
                <button btn matRipple (click)="searchRooms()">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">search</icon>
                        <div class="flex-1 pr-4">
                            {{
                                'CALENDAR_EVENT.SEARCH_ROOMS_BUTTON' | translate
                            }}
                        </div>
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
    imports: [
        AsyncPipe,
        MatRippleModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslatePipe,
    ],
})
export class MeetingFlowDetailsComponent {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _event_form = inject(EventFormService);

    public readonly form = signal(this._event_form.form);
    public readonly options = this._event_form.filters$;
    private readonly form_value = toSignal(this._event_form.form.valueChanges, {
        initialValue: this._event_form.form.value,
    });
    public readonly allow_all_day = settingSignal(
        'events.allow_all_day',
        false,
    );
    public readonly has_title = computed(
        () => !!this.form_value()?.title?.trim(),
    );
    public readonly setCapacity = (capacity: number) => {
        this._event_form.setFilters({ capacity });
    };

    public searchRooms() {
        if (!this.has_title()) {
            notifyError(i18n('CALENDAR_EVENT.ERROR_TITLE_REQUIRED_SEARCH'));
            return;
        }

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: 1 },
            queryParamsHandling: 'merge',
        });
    }
}
