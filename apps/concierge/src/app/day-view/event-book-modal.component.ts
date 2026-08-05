import {
    Component,
    OnInit,
    computed,
    inject,
    output,
    signal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    CalendarEvent,
    DialogEvent,
    SettingsService,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';

import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    RichTextInputComponent,
    SpaceListFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';

import { MeetingFormDetailsComponent } from 'libs/events/src/lib/meeting-form-details.component';

@Component({
    selector: 'event-book-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ROOMS_BOOK_EDIT'
                    : 'APP.CONCIERGE.ROOMS_BOOK_NEW'
                ) | translate
            "
            [loading]="loading() ? ('CALENDAR_EVENT.LOADING' | translate) : ''"
            (confirm)="save()"
        >
            <form>
                <section class="p-2">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'COMMON.DETAILS' | translate }}
                        </div>
                        <div class="w-px flex-1"></div>
                        <button
                            type="button"
                            icon
                            name="toggle-details-meeting"
                            matRipple
                            (click)="
                                hide_block.update((b) => ({
                                    ...b,
                                    details: !b.details,
                                }))
                            "
                        >
                            <icon>{{
                                hide_block().details
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="overflow-hidden"
                        [@show]="hide_block().details ? 'hide' : 'show'"
                    >
                        <meeting-form-details
                            class="mt-4"
                            [form]="form"
                        ></meeting-form-details>
                    </div>
                </section>
                @if (!hide_attendees) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                type="button"
                                icon
                                name="toggle-attendees-meeting"
                                matRipple
                                (click)="
                                    hide_block.update((b) => ({
                                        ...b,
                                        attendees: !b.attendees,
                                    }))
                                "
                            >
                                <icon>{{
                                    hide_block().attendees
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block().attendees ? 'hide' : 'show'"
                        >
                            <a-user-list-field
                                class="mt-4"
                                [formField]="form.attendees"
                                [guests]="allow_externals"
                            ></a-user-list-field>
                            @if (can_notify_new_attendees_only()) {
                                <mat-checkbox
                                    name="notify-new-attendees-only"
                                    [(ngModel)]="notify_new_attendees_only"
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    {{
                                        'CALENDAR_EVENT.NOTIFY_NEW_ATTENDEES_ONLY'
                                            | translate
                                    }}
                                </mat-checkbox>
                            }
                        </div>
                    </section>
                }
                <section class="p-2">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            3
                        </div>
                        <div class="text-xl">
                            {{ 'RESOURCE.ROOM' | translate }}
                        </div>
                        <div class="w-px flex-1"></div>
                        <button
                            type="button"
                            icon
                            name="toggle-spaces-meeting"
                            matRipple
                            (click)="
                                hide_block.update((b) => ({
                                    ...b,
                                    resources: !b.resources,
                                }))
                            "
                        >
                            <icon>{{
                                hide_block().resources
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="flex flex-col items-center overflow-hidden"
                        [@show]="hide_block().resources ? 'hide' : 'show'"
                    >
                        @if (
                            !strict_capacity_check &&
                            total_capacity &&
                            total_capacity <= model().attendees?.length
                        ) {
                            <div
                                class="bg-warning text-warning-content mx-auto my-2 inline-flex rounded-sm p-2 text-xs shadow-sm"
                            >
                                {{
                                    'CALENDAR_EVENT.CAPACITY_WARNING'
                                        | translate
                                }}
                            </div>
                        }
                        <space-list-field
                            class="w-full"
                            [formField]="form.resources"
                            [multiday]="allow_multiday"
                        ></space-list-field>
                    </div>
                </section>
                @if (has_catering()) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                4
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.CATERING' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                type="button"
                                icon
                                name="toggle-catering-meeting"
                                matRipple
                                (click)="
                                    hide_block.update((b) => ({
                                        ...b,
                                        catering: !b.catering,
                                    }))
                                "
                            >
                                <icon>{{
                                    hide_block().catering
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block().catering ? 'hide' : 'show'"
                        >
                            <catering-list-field
                                [formField]="form.catering"
                                [options]="{
                                    date: model().date,
                                    duration: model().duration,
                                    all_day: model().all_day,
                                    zone_id: model()?.resources?.length
                                        ? model()?.resources[0]?.level
                                              ?.parent_id
                                        : '',
                                }"
                            ></catering-list-field>
                            @if (model().catering?.length && has_codes()) {
                                <mat-form-field
                                    appearance="outline"
                                    class="mt-2 w-full"
                                >
                                    <mat-select
                                        [formField]="form.catering_charge_code"
                                        [placeholder]="
                                            'CATERING.CHARGE_CODE' | translate
                                        "
                                    >
                                        <input
                                            #input
                                            class="border-base-200 bg-base-100 sticky top-0 z-50 w-full rounded-none border-x-0 border-t-0 border-b px-4 py-3 text-base focus:border-b"
                                            [(ngModel)]="code_filter"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [placeholder]="
                                                'CALENDAR_EVENT.CATERING_CHARGE_CODE_SEARCH'
                                                    | translate
                                            "
                                        />
                                        <mat-option class="hidden"></mat-option>
                                        @for (
                                            code of filtered_codes();
                                            track code
                                        ) {
                                            <mat-option [value]="code">
                                                {{ code }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                    <mat-error>
                                        {{
                                            'CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            }
                            @if (model().catering?.length) {
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                    [class.mt-2]="
                                        !(
                                            model().catering?.length &&
                                            has_codes()
                                        )
                                    "
                                >
                                    <textarea
                                        matInput
                                        [formField]="form.catering_notes"
                                        [placeholder]="
                                            'CALENDAR_EVENT.CATERING_NOTES'
                                                | translate
                                        "
                                    ></textarea>
                                    <mat-error>
                                        {{
                                            'CALENDAR_EVENT.CATERING_NOTES_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            }
                        </div>
                    </section>
                }
                @if (has_assets) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ !has_catering() ? '4' : '5' }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                type="button"
                                icon
                                name="toggle-assets-meeting"
                                matRipple
                                (click)="
                                    hide_block.update((b) => ({
                                        ...b,
                                        assets: !b.assets,
                                    }))
                                "
                            >
                                <icon>{{
                                    hide_block().assets
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block().assets ? 'hide' : 'show'"
                        >
                            <asset-list-field
                                [options]="{
                                    date: model().date,
                                    duration: model().duration,
                                    all_day: model().all_day,
                                    zone_id: model()?.resources?.length
                                        ? model()?.resources[0]?.level
                                              ?.parent_id
                                        : '',
                                }"
                                [formField]="form.assets"
                            ></asset-list-field>
                        </div>
                    </section>
                }
                @if (!hide_notes) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{
                                    !has_catering() || !has_assets
                                        ? !has_catering() && !has_assets
                                            ? '4'
                                            : '5'
                                        : '6'
                                }}
                            </div>
                            <div class="text-xl">
                                {{ 'FORM.NOTES' | translate }}
                            </div>
                        </h3>
                        <div class="flex w-full flex-col">
                            <label for="notes">
                                {{ 'CALENDAR_EVENT.NOTES_INFO' | translate }}
                            </label>
                            <rich-text-input
                                [formField]="form.body"
                                [placeholder]="
                                    'CALENDAR_EVENT.NOTES_INFO' | translate
                                "
                            ></rich-text-input>
                        </div>
                    </section>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        FullscreenModalShellComponent,
        RichTextInputComponent,
        SpaceListFieldComponent,
        AssetListFieldComponent,
        CateringListFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        IconComponent,
        FormField,
        MeetingFormDetailsComponent,
        UserListFieldComponent,
        MatAutocompleteModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
    ],
})
export class EventBookModalComponent implements OnInit {
    private _data = inject<{
        event: CalendarEvent;
    }>(MAT_DIALOG_DATA);
    private _event_form = inject(EventFormService);
    private _settings = inject(SettingsService);
    private _catering = inject(CateringOrderStateService);
    private _dialog_ref =
        inject<MatDialogRef<EventBookModalComponent>>(MatDialogRef);

    public readonly event = output<DialogEvent>();
    public readonly loading = signal(false);
    public readonly hide_block = signal<Record<string, boolean>>({});
    public readonly code_filter = signal('');
    public readonly can_notify_new_attendees_only =
        this._event_form.can_notify_new_attendees_only;
    public readonly notify_new_attendees_only =
        this._event_form.notify_new_attendees_only;

    private readonly _charge_codes = this._catering.charge_codes;

    public readonly has_catering = computed(
        () => this._catering.available_menu().length > 0,
    );

    public readonly has_codes = computed(
        () => this._catering.charge_codes().length > 0,
    );

    public readonly filtered_codes = computed(() =>
        this._charge_codes().filter((_) =>
            _.toLowerCase().includes(this.code_filter().toLowerCase()),
        ),
    );

    public get form() {
        return this._event_form.form;
    }

    public get model() {
        return this._event_form.model;
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get hide_notes() {
        return !!this._settings.get('app.events.hide_notes');
    }

    public get hide_attendees() {
        return !!this._settings.get('app.events.hide_attendees');
    }

    public get allow_externals() {
        return this._settings.get('app.events.allow_externals');
    }

    public get strict_capacity_check() {
        return this._settings.get('app.events.strict_capacity_check');
    }

    public get total_capacity() {
        return this.model().resources?.reduce((c, i) => c + i.capacity, 0) || 0;
    }

    public get allow_multiday() {
        return (
            this._settings.get('app.events.allow_multiday') ||
            this._event_form.is_multiday
        );
    }

    public get attendee_count() {
        const user = currentUser();
        let count = this.model().attendees?.length || 0;
        if (
            !this.model().attendees.find(
                (_) => _.email.toLowerCase() === user.email.toLowerCase(),
            )
        ) {
            count += 1;
        }
        return count;
    }

    public ngOnInit() {
        this._event_form.newForm(this._data.event);
    }

    public async save() {
        this.loading.set(true);
        if (!this.model().host) {
            this.model.update((m) => ({
                ...m,
                host: currentUser().email,
            }));
        }
        const event = await this._event_form.postForm().catch((_) => {
            notifyError(_);
            this.loading.set(false);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess(i18n('CALENDAR_EVENT.SUCCESS'));
        this._dialog_ref.close();
        this.loading.set(false);
    }
}
