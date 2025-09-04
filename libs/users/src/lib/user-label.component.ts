import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';

export interface UserDetails {
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
            class="user-label relative m-[0.5em] rounded-[0.75em] border border-neutral bg-base-100 p-[1em]"
            [style.width]="width() + 'em'"
            [style.height]="height() + 'em'"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="mb-[0.25em] flex h-[5em] w-[5em] items-center justify-center overflow-hidden rounded-full border border-base-400 bg-base-200"
                >
                    <a-user-avatar
                        class="text-[2.25em]"
                        [user]="user()"
                    ></a-user-avatar>
                </div>
                <div class="mb-[0.25em] text-[1.5em]">{{ user().name }}</div>
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
                                      host_name: user()?.host,
                                  }
                    }}
                </div>
            </div>
            <div
                class="absolute bottom-[1em] left-[1em] mt-[0.5em] w-[8em] rounded-[0.5em] border border-black px-[0.5em] py-[0.25em] text-center font-medium uppercase text-black"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute right-[1em] top-[1em] flex flex-col items-end space-y-[0.5em]"
            >
                <img
                    auth
                    class="h-[3em] object-contain"
                    [style.max-width]="landscape ? '8em' : ''"
                    alt="Logo"
                    [src]="logo?.src || logo"
                />
                @let level = user().zones | level;
                @if (level) {
                    <div class="text-right text-[0.75em]">
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
                    <pre class="text-right text-[0.75em]">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute bottom-[1em] right-[1em] flex items-end"
                [class.space-x-[0.5em]]="!landscape"
                [class.space-y-[0.5em]]="landscape"
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
                    class="relative flex h-[4em] w-[4em] items-center justify-center rounded-[0.5em] border border-base-200"
                >
                    @if (user().qr_code) {
                        <img
                            class="h-[3.5em] w-[3.5em] object-contain object-center"
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
                font-size: 1rem;
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
    public readonly width = input<number>(25);
    public readonly height = input<number>(15);
    public readonly landscape = computed(() => this.width() > this.height());

    public get logo() {
        return this._settings.theme === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

    print() {
        console.log('Printing user label...');
    }
}
