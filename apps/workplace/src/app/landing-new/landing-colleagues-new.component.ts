import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    i18n,
    notifySuccess,
    User,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { LandingStateService } from '../landing/landing-state.service';
import { AddColleaguesModalComponent } from './add-colleagues-modal.component';

@Component({
    selector: 'landing-colleagues-new',
    template: `
        <div class="rounded-lg border border-base-300 bg-base-100 p-4">
            @let contact_list = contacts | async;
            <div class="mb-2 flex items-center justify-between">
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.COLLEAGUES' | translate }}
                </h3>
                <div class="rounded bg-base-200 px-2 py-1 font-mono text-xs">
                    {{
                        'APP.WORKPLACE.COLLEAGUES_COUNT'
                            | translate
                                : {
                                      count: contact_list?.length,
                                  }
                                : contact_list?.length
                    }}
                </div>
            </div>
            @if (selected_users().length > 0) {
                <div
                    class="flex items-center justify-between rounded bg-base-200"
                >
                    <span class="px-2 text-sm">
                        {{
                            'APP.WORKPLACE.COLLEAGUES_SELECTED'
                                | translate
                                    : { count: selected_users().length }
                                    : selected_users().length
                        }}
                    </span>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-10 text-xs"
                        (click)="clearSelection()"
                    >
                        {{ 'COMMON.CLEAR' | translate }}
                    </button>
                </div>
                <div class="mt-2 flex space-x-2">
                    <button
                        btn
                        matRipple
                        class="flex-1 space-x-2 text-sm"
                        (click)="bookMeetingWithSelected()"
                    >
                        <icon class="text-lg">event</icon>
                        <span>{{
                            'APP.WORKPLACE.COLLEAGUES_BOOK_ROOM' | translate
                        }}</span>
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1 space-x-2 text-sm"
                        (click)="bookDeskWithSelected()"
                    >
                        <icon class="text-lg">desk</icon>
                        <span>{{
                            'APP.WORKPLACE.COLLEAGUES_BOOK_DESK' | translate
                        }}</span>
                    </button>
                </div>
            }
            @if (contact_list?.length) {
                <div class="mt-2 flex w-full flex-col space-y-2">
                    @for (user of contact_list; track user) {
                        <div
                            class="flex items-center space-x-2 rounded border border-base-300 p-2"
                            [class.bg-primary-50]="isSelected(user)"
                            [class.border-primary]="isSelected(user)"
                        >
                            <mat-checkbox
                                [checked]="isSelected(user)"
                                (change)="toggleSelection(user)"
                                (click)="$event.stopPropagation()"
                            ></mat-checkbox>
                            <a-user-avatar [user]="user" />
                            <div
                                class="flex w-16 flex-1 flex-col leading-tight"
                            >
                                <div class="truncate">{{ user.name }}</div>
                                <a
                                    [href]="'mailto:' + user.email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="truncate text-xs underline opacity-60"
                                    >{{ user.email }}</a
                                >
                            </div>
                            <button icon matRipple [matMenuTriggerFor]="menu">
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button
                                    mat-menu-item
                                    (click)="bookMeeting(user)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">event</icon>
                                        <div>
                                            {{
                                                'APP.WORKPLACE.COLLEAGUES_BOOK_MEETING'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeColleague(user)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl text-error"
                                            >person_remove</icon
                                        >
                                        <div>
                                            {{
                                                'APP.WORKPLACE.COLLEAGUES_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-2 rounded-xl bg-base-200 p-8"
                >
                    <img src="assets/icons/no-contacts.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.COLLEAGUES_EMPTY' | translate }}
                    </p>
                </div>
            }
            <button
                btn
                matRipple
                class="mt-4 w-full"
                (click)="openAddColleaguesModal()"
            >
                <icon class="text-xl">person_add</icon>
                <div>{{ 'APP.WORKPLACE.COLLEAGUES_ADD' | translate }}</div>
            </button>
        </div>
    `,
    imports: [
        CommonModule,
        MatRippleModule,
        MatMenuModule,
        MatCheckboxModule,
        IconComponent,
        TranslatePipe,
        UserAvatarComponent,
    ],
})
export class LandingColleaguesNewComponent {
    private _state = inject(LandingStateService);
    private _dialog = inject(MatDialog);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);

    public readonly contacts = this._state.contacts;
    public readonly selected_users = signal<User[]>([]);

    public openAddColleaguesModal() {
        const dialog_ref = this._dialog.open(AddColleaguesModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'panel',
            data: {},
        });

        dialog_ref.afterClosed().subscribe((result) => {
            if (result) {
                // Colleagues were added, the state service will update automatically
            }
        });
    }

    public isSelected(user: User): boolean {
        return this.selected_users().some((u) => u.email === user.email);
    }

    public toggleSelection(user: User) {
        const current = this.selected_users();
        if (this.isSelected(user)) {
            this.selected_users.set(
                current.filter((u) => u.email !== user.email),
            );
        } else {
            this.selected_users.set([...current, user]);
        }
    }

    public clearSelection() {
        this.selected_users.set([]);
    }

    public async bookMeeting(user: User) {
        this._router.navigate(['/book', 'meeting', 'form']);
        const event = new CalendarEvent({
            attendees: [user],
        });
        setTimeout(() => this._event_form.newForm(event), 300);
    }

    public async bookMeetingWithSelected() {
        const attendees = this.selected_users();
        if (attendees.length === 0) return;
        this._router.navigate(['/book', 'meeting', 'form']);
        const event = new CalendarEvent({
            attendees: attendees,
        });
        setTimeout(() => {
            this._event_form.newForm(event);
            this.clearSelection();
        }, 300);
    }

    public async bookDeskWithSelected() {
        const members = this.selected_users();
        if (members.length === 0) return;
        this._router.navigate(['/book', 'desk', 'form']);
        setTimeout(() => {
            this._booking_form.newForm('desk', new Booking({}));
            this._booking_form.setOptions({ group: true, members });
            this.clearSelection();
        }, 300);
    }

    public async removeColleague(user: User) {
        const resp = await openConfirmModal(
            {
                title: i18n('APP.WORKPLACE.COLLEAGUES_REMOVE_TITLE'),
                content: i18n('APP.WORKPLACE.COLLEAGUES_REMOVE_MSG', {
                    name: user.name,
                }),
                icon: { content: 'person_remove' },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.WORKPLACE.COLLEAGUES_REMOVE_LOADING'));
        await this._state.removeContact(user);
        // Remove from selection if selected
        if (this.isSelected(user)) {
            this.selected_users.set(
                this.selected_users().filter((u) => u.email !== user.email),
            );
        }
        notifySuccess(i18n('APP.WORKPLACE.COLLEAGUES_REMOVE_SUCCESS'));
        this._dialog.closeAll();
    }
}
