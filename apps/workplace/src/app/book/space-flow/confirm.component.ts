import { Component } from '@angular/core';
import { CateringItem } from '@placeos/catering';
import { notifyError, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'space-flow-confirm',
    template: `
        <div topbar class="">
            <a
                button
                class="clear h-[2.75rem] text-white"
                btn
                matRipple
                [routerLink]="['/book', 'spaces', 'find']"
            >
                <div class="flex items-center justify-center h-full">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="ml-2 mx-4">Back</span>
                </div>
            </a>
        </div>
        <div
            class="flex flex-col items-center space-y-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
        >
            <h2 class="text-xl uppercase font-medium w-full my-4">
                Your meeting details
            </h2>
            <div
                class="flex items-center py-2 space-x-2 border-b border-base-200 w-full"
            >
                <div class="p-2 rounded-full bg-base-200 mr-2">
                    <app-icon>event</app-icon>
                </div>
                <div class="flex-1 truncate">
                    {{ form.value.date | date: 'longDate' }}
                    <span *ngIf="!form.value.all_day">
                        at {{ form.value.date | date: 'shortTime' }} ~
                        {{
                            form.value.date + form.value.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </span>
                </div>
                <a
                    btn
                    matRipple
                    class="clear underline"
                    [routerLink]="['/book', 'spaces', 'form']"
                    >Edit</a
                >
            </div>
            <div
                class="flex items-center py-2 space-x-2 border-b border-base-200 w-full"
            >
                <div class="p-2 rounded-full bg-base-200 mr-2">
                    <app-icon>schedule</app-icon>
                </div>
                <div class="flex-1 truncate">
                    {{
                        form.value.all_day
                            ? 'All Day'
                            : (form.value.duration | duration)
                    }}
                </div>
                <a
                    btn
                    matRipple
                    class="clear underline"
                    [routerLink]="['/book', 'spaces', 'form']"
                >
                    Edit
                </a>
            </div>
            <div class="border-b border-base-200 w-full">
                <div class="flex items-center py-2 space-x-2 ">
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>place</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ form.get('resources')?.value?.length }} Space(s)
                    </div>
                    <button
                        matRipple
                        [disabled]="!form.get('resources')?.value?.length"
                        class="clear bg-transparent border-none underline"
                        (click)="show_spaces = !show_spaces"
                    >
                        {{ show_spaces ? 'Hide' : 'Show' }}
                    </button>
                    <a
                        btn
                        matRipple
                        class="clear underline"
                        [routerLink]="['/book', 'spaces', 'find']"
                        >Edit</a
                    >
                </div>
                <div
                    list
                    [style.height]="
                        !show_spaces
                            ? '0'
                            : form.get('resources')?.value?.length * 2.5 + 'rem'
                    "
                    class="overflow-hidden"
                >
                    <div
                        class="flex items-center h-10 pl-12"
                        *ngFor="let space of form.get('resources')?.value"
                    >
                        <span
                            >{{ space.display_name || space.name }} [{{
                                space.level?.display_name || space.level?.name
                            }}]</span
                        >

                        <button
                            matRipple
                            class="bg-transparent border-none underline"
                            *ngIf="can_view_location"
                        >
                            Map
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-b border-base-200 w-full">
                <div class="flex items-center py-2 space-x-2 ">
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>group</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ form.get('attendees')?.value?.length || 0 }}
                        Attendee(s)
                    </div>
                    <button
                        matRipple
                        [disabled]="!form.get('attendees')?.value?.length"
                        class="clear bg-transparent border-none underline"
                        (click)="show_people = !show_people"
                    >
                        {{ show_people ? 'Hide' : 'Show' }}
                    </button>
                    <a
                        btn
                        matRipple
                        class="clear underline"
                        [routerLink]="['/book', 'spaces', 'form']"
                        >Edit</a
                    >
                </div>
                <div
                    list
                    [style.height]="
                        !show_people
                            ? '0'
                            : form.get('attendees')?.value?.length * 3 + 'rem'
                    "
                    class="overflow-hidden"
                >
                    <div
                        class="flex items-center h-12 pl-12 space-x-2"
                        *ngFor="let user of form.get('attendees')?.value"
                    >
                        <a-user-avatar
                            class="text-sm"
                            [user]="user"
                        ></a-user-avatar>
                        <span>{{ user.name || user.email }}</span>
                    </div>
                </div>
            </div>
            <div
                class="border-b border-base-200 w-full"
                *ngIf="form.value.catering?.length"
            >
                <div class="flex items-center py-2 space-x-2 ">
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>group</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ form.value.catering[0]?.item_count || 0 }}
                        Catering Item(s)
                    </div>
                    <button
                        matRipple
                        class="clear bg-transparent border-none underline"
                        (click)="show_catering = !show_catering"
                    >
                        {{ show_people ? 'Hide' : 'Show' }}
                    </button>
                    <a
                        btn
                        matRipple
                        class="clear underline"
                        [routerLink]="['/book', 'spaces', 'form']"
                        >Edit</a
                    >
                </div>
                <div
                    list
                    [style.height]="
                        !show_catering
                            ? '0'
                            : form.value.catering[0]?.items.length * 3 + 'rem'
                    "
                    class="overflow-hidden"
                >
                    <div
                        class="flex items-center h-12 pl-12 space-x-2"
                        *ngFor="let item of form.value.catering[0]?.items"
                    >
                        <div class="flex-1 w-1/2">
                            <div class="flex-1 w-1/2">{{ item.name }}</div>
                            <div
                                class="text-xs underline"
                                *ngIf="item.options.length"
                                [matTooltip]="optionsFor(item)"
                            >
                                {{ item.options.length }} option{{
                                    item.options.length === 1 ? '' : 's'
                                }}
                                selected
                            </div>
                        </div>
                        <div
                            class="bg-primary text-xs rounded px-4 py-2 mx-2 text-white font-medium"
                        >
                            {{ item.total_cost / 100 | currency: code }}
                        </div>
                        <a-counter [(ngModel)]="item.quantity"></a-counter>
                    </div>
                </div>
            </div>
            <button
                matRipple
                class="w-32"
                confirm
                [disabled]="loading"
                (click)="postForm()"
            >
                <span *ngIf="!loading">Confirm</span>
                <mat-spinner
                    class="mx-auto"
                    [diameter]="24"
                    *ngIf="loading"
                ></mat-spinner>
            </button>
        </div>
        <
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            [topbar] {
                background-color: #00539f;
            }

            [list] {
                transition: height 200ms;
            }
        `,
    ],
})
export class SpaceFlowConfirmComponent {
    public show_spaces = false;
    public show_people = false;
    public show_catering = false;
    public loading = false;

    public readonly postForm = async () => {
        this.loading = true;
        await this._state
            .postForm()
            .catch((_) =>
                notifyError(
                    _ instanceof Object ? _.message || 'Bad Request' : _
                )
            );
        this.loading = false;
    };

    public optionsFor(item: CateringItem) {
        return item.options.map((i) => i.name).join('\n');
    }

    public get can_view_location() {
        return !this._settings.get('app.no_maps');
    }

    public get form() {
        return this._state.form;
    }

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _org: OrganisationService,
        private _state: EventFormService,
        private _settings: SettingsService
    ) {}
}
