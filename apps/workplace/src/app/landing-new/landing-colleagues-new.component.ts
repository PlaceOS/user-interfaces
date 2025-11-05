import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, TranslatePipe, UserAvatarComponent } from '@placeos/components';
import { LandingStateService } from '../landing/landing-state.service';

@Component({
    selector: 'landing-colleagues-new',
    template: `
        <div
            class="rounded-lg border border-base-300 bg-base-100 p-4"
        >
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
                            <button icon matRipple>
                                <icon>more_vert</icon>
                            </button>
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
            <button btn matRipple class="mt-4 w-full">
                <icon class="text-xl">person_add</icon>
                <div>Add Colleagues</div>
            </button>
        </div>
    `,
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        UserAvatarComponent,
    ],
})
export class LandingColleaguesNewComponent {
    private _state = inject(LandingStateService);

    public readonly contacts = this._state.contacts;
}
