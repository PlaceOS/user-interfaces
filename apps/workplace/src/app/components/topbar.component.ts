import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    OrganisationService,
    settingSignal,
    SettingsService,
    userSignal,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    UserControlsSidebarComponent,
} from '@placeos/components';
import { UserAvatarComponent } from '../../../../../libs/components/src/lib/user-avatar.component';
import { GlobalSearchComponent } from './global-search.component';
import { TopMenuComponent } from './top-menu.component';

const EMPTY = [];

@Component({
    selector: 'topbar',
    template: `
        <div
            topbar
            class="border-base-200 bg-base-100 relative z-50 flex h-14 items-center justify-between border-b shadow-sm"
        >
            <a
                name="nav-logo"
                class="flex h-full w-48 items-center p-2"
                [routerLink]="['/-']"
            >
                <img
                    auth
                    class="h-10 sm:block"
                    [class.hidden]="title"
                    alt="Logo"
                    [source]="$any(logo())?.src || logo()"
                />
                @if (title) {
                    <span>{{ title }}</span>
                }
            </a>
            <div
                class="relative hidden h-full w-1/2 flex-1 items-center justify-center sm:flex"
            >
                <top-menu />
            </div>
            <div class="flex w-48 items-center justify-end">
                @if (search) {
                    <global-search />
                }
                <user-controls-sidebar class="mr-2">
                    <a-user-avatar [user]="user()" />
                </user-controls-sidebar>
            </div>
        </div>
    `,
    styles: [
        `
            .flex-3 {
                flex: 3 3 0%;
            }
        `,
    ],
    imports: [
        GlobalSearchComponent,
        TopMenuComponent,
        AuthenticatedImageDirective,
        RouterModule,
        UserAvatarComponent,
        UserControlsSidebarComponent,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class TopbarComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public show_menu: boolean;
    public readonly user = userSignal();
    public readonly user_controls = viewChild(UserControlsSidebarComponent);

    public readonly logo = computed(() => {
        return this._settings.theme_signal() === 'dark'
            ? settingSignal('logo_dark', '')()
            : settingSignal('logo_light', '')();
    });

    /** Text to display for page title */
    public get title(): string {
        return this._settings.value('page_title');
    }

    /** Text to display for page title */
    public get search(): boolean {
        return this._settings.get('app.global_search') !== false;
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
    }

    public get features(): string[] {
        return this._settings.get('app.features') || EMPTY;
    }
}
