import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { settingSignal, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { startOfMinute } from 'date-fns';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

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

    public readonly time = toSignal(
        timer(0, 60 * 1000).pipe(map(() => startOfMinute(Date.now()))),
        { initialValue: startOfMinute(Date.now()) },
    );
}
