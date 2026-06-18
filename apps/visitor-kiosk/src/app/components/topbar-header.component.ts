import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    DestroyRef,
    inject,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { settingSignal, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { startOfMinute } from 'date-fns';

@Component({
    selector: 'a-topbar-header',
    template: `
        <div
            class="flex items-center justify-between bg-[hsl(237,37%,10%)] shadow-sm"
        >
            <a
                matRipple
                [routerLink]="['/']"
                class="flex h-full flex-col justify-center px-4"
            >
                <img
                    auth
                    class="my-2 h-10"
                    alt="Logo"
                    [source]="logo_source()"
                />
            </a>
            <div
                class="ml-auto flex h-full flex-col justify-center px-4 text-white"
            >
                {{ time() | date: 'fullDate' }}
            </div>
        </div>
    `,
    styles: [
        `
            :host > div {
                height: 3.5rem;
            }

            a {
                border-radius: 0;
            }

            img {
                max-height: 2.5rem;
                max-width: 50vw;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        RouterModule,
        AuthenticatedImageDirective,
    ],
})
export class TopbarHeaderComponent {
    private _settings = inject(SettingsService);
    private _destroy_ref = inject(DestroyRef);

    public readonly logo_dark = settingSignal('logo_dark');
    public readonly logo_light = settingSignal('logo_light');
    public readonly logo = computed(() =>
        this._settings.theme_signal() === 'dark'
            ? this.logo_dark()
            : this.logo_light(),
    );

    public readonly logo_source = computed(
        () => this.logo()?.src || this.logo(),
    );

    public readonly time = signal(startOfMinute(Date.now()));

    public constructor() {
        const interval_id = setInterval(
            () => this.time.set(startOfMinute(Date.now())),
            60 * 1000,
        );
        this._destroy_ref.onDestroy(() => clearInterval(interval_id));
    }
}
