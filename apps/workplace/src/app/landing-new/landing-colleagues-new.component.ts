import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CalendarEvent, i18n, notifySuccess, User } from '@placeos/common';
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
            <div class="mb-2">
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.COLLEAGUES' | translate }}
                </h3>
                <div class="text-sm">
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
            @if (contact_list?.length) {
                <div class="flex w-full flex-col space-y-2">
                    @for (user of contact_list; track user) {
                        <div
                            class="flex items-center space-x-2 rounded border border-base-300 p-2"
                        >
                            <a-user-avatar [user]="user" />
                            <div
                                class="flex w-16 flex-1 flex-col leading-tight"
                            >
                                <div class="truncate">{{ user.name }}</div>
                                <a
                                    [href]="'mailto:' + user.email"
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
        IconComponent,
        TranslatePipe,
        UserAvatarComponent,
    ],
})
export class LandingColleaguesNewComponent {
    private _state = inject(LandingStateService);
    private _dialog = inject(MatDialog);
    private _event_form = inject(EventFormService);
    private _router = inject(Router);

    public readonly contacts = this._state.contacts;

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

    public async bookMeeting(user: User) {
        this._router.navigate(['/book', 'meeting', 'form']);
        const event = new CalendarEvent({
            attendees: [user],
        });
        setTimeout(() => this._event_form.newForm(event), 300);
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
        notifySuccess(i18n('APP.WORKPLACE.COLLEAGUES_REMOVE_SUCCESS'));
        this._dialog.closeAll();
    }
}
