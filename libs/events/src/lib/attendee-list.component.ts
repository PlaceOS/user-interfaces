import { AsyncPipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User } from '@placeos/common';
import { UserPipe } from 'libs/users/src/lib/user.pipe';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';

@Component({
    selector: 'attendee-list',
    template: `
        <div class="bg-base-100 flex h-full w-full flex-col overflow-hidden">
            <div
                class="border-base-200 flex min-h-12 items-center border-b p-2"
            >
                @if (!hide_close()) {
                    <button close icon matRipple (click)="close.emit()">
                        <icon>arrow_back</icon>
                    </button>
                }
                <div class="flex-1 text-center font-medium">
                    {{
                        custom_title()
                            ? custom_title()
                            : ('CALENDAR_EVENT.ATTENDEES_COUNT'
                              | translate
                                  : { count: final_list().length }
                                  : final_list().length)
                    }}
                </div>
                @if (!hide_close()) {
                    <div class="w-12"></div>
                }
            </div>
            <div class="w-full flex-1 overflow-auto">
                @for (user of final_list(); track user) {
                    @if (
                        !user.resource && (host() !== user.email || show_host())
                    ) {
                        <div
                            attendee
                            class="even:bg-base-200/40 hover:bg-base-200 flex items-center space-x-2 p-2"
                        >
                            @let resolved_host =
                                host() === user.email
                                    ? (host() | user | async)
                                    : null;
                            @let usr =
                                resolved_host?.email ? resolved_host : user;
                            <a-user-avatar [user]="usr"></a-user-avatar>
                            <div class="w-1/2 flex-1">
                                <div class="truncate">{{ usr?.name }}</div>
                                <div class="text-xs opacity-60">
                                    {{ usr?.email }}
                                </div>
                            </div>

                            @if (host() === user.email) {
                                <div
                                    class="bg-info-light rounded px-2 py-1 font-mono text-xs shadow"
                                >
                                    {{ 'FORM.HOST' | translate }}
                                </div>
                            }
                            <div class="p-2">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-success]="user.checked_in"
                                    [class.bg-pending]="!user.checked_in"
                                    [matTooltip]="
                                        (user.checked_in
                                            ? 'COMMON.CHECKED_IN'
                                            : 'COMMON.CHECKED_IN_NOT'
                                        ) | translate
                                    "
                                ></div>
                            </div>
                        </div>
                    }
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        UserAvatarComponent,
        MatTooltipModule,
        AsyncPipe,
        UserPipe,
    ],
})
export class AttendeeListComponent {
    public readonly host = input('');
    public readonly show_host = input(true);
    public readonly list = input<User[]>([]);
    public readonly final_list = computed(() => {
        const attendee_list = this.list();
        const host = this.host();
        if (!this.show_host()) {
            return attendee_list.filter((user) => user.email !== host);
        }
        if (!host || attendee_list.some((user) => user.email === host)) {
            return attendee_list;
        }
        return [new User({ email: host }), ...attendee_list];
    });
    public readonly hide_close = input(false);
    public readonly custom_title = input('');
    public readonly close = output();
}
