import { CommonModule } from '@angular/common';
import { Component, inject, input, ViewEncapsulation } from '@angular/core';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';

interface UserDetails {
    name: string;
    email: string;
    photo: string;
    description: string;
    host: string;
    extra_details: string;
    qr_code?: string;
    date: number;
    pass_number?: string;
    zones: string[];
}

@Component({
    selector: `user-label`,
    template: `
        <div
            class="user-label portrait relative m-2 rounded-xl border border-neutral bg-base-100 p-4"
            [class.landscape]="landscape"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="mb-1 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-base-400 bg-base-200 text-4xl"
                >
                    <a-user-avatar [user]="user()"></a-user-avatar>
                </div>
                <div class="mb-1 text-2xl">{{ user().name }}</div>
                <div>
                    {{
                        'APP.VISITOR_KIOSK.LABEL_FOR'
                            | translate: { title: user()?.title }
                    }}
                </div>
                <div class="opacity-60">
                    {{
                        'APP.VISITOR_KIOSK.LABEL_HOST'
                            | translate
                                : {
                                      host_name: user()?.user_name,
                                  }
                    }}
                </div>
            </div>
            <div
                class="absolute bottom-4 left-4 mt-2 w-32 rounded-lg border border-black px-2 py-1 text-center font-medium uppercase text-black"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute right-4 top-4 flex flex-col items-end space-y-2"
            >
                <img
                    auth
                    class="h-12 object-contain"
                    [style.max-width]="landscape ? '8rem' : ''"
                    alt="Logo"
                    [src]="logo?.src || logo"
                />
                @let level = user().zones | level;
                @if (level) {
                    <div class="text-right text-xs">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                | translate
                                    : {
                                          location:
                                              level.display_name || level.name,
                                      }
                        }}
                    </div>
                }
                <pre class="text-right">{{ user()?.extra_details }}</pre>
                @if (user()?.pass_number) {
                    <pre class="text-right text-xs">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute bottom-4 right-4 flex items-end"
                [class.space-x-2]="!landscape"
                [class.space-y-2]="landscape"
                [class.flex-col]="landscape"
            >
                <div class="text-right font-medium leading-tight">
                    <div>
                        {{ user().date | date: 'shortTime' }}
                    </div>
                    <div>
                        {{ user().date | date: 'mediumDate' }}
                    </div>
                </div>
                <div
                    class="relative flex h-16 w-16 items-center justify-center rounded-lg border border-base-200"
                >
                    @if (user().qr_code) {
                        <img
                            class="h-14 w-14 object-contain object-center"
                            [src]="user().qr_code"
                        />
                    }
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                font-size: 1cm;
            }

            .user-label.portrait {
                width: 25rem;
                height: 15rem;
            }

            .user-label.landscape {
                width: 15rem;
                height: 25rem;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule,
        UserAvatarComponent,
        TranslatePipe,
        LevelPipe,
        AuthenticatedImageDirective,
    ],
})
export class UserLabelComponent {
    private _settings = inject(SettingsService);

    public readonly user = input<UserDetails>({} as any);

    public get landscape() {
        return this._settings.get('app.label_landscape');
    }

    public get logo() {
        return this._settings.theme === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }
}
