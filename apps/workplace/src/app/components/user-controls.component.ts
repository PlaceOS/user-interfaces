import { Component } from '@angular/core';
import { currentUser, SettingsService, VERSION } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { logout } from '@placeos/ts-client';
import { BuildingSelectComponent } from './building-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';

@Component({
    selector: 'user-controls',
    template: `
        <div class="rounded bg-white shadow mt-1 flex flex-col relative">
            <div
                avatar
                class="flex flex-col items-center p-2 w-[18rem]"
                [matTooltip]="groups"
            >
                <a-user-avatar class="text-2xl" [user]="user"></a-user-avatar>
                <div class="">{{ user?.name }}</div>
                <div class="text-xs opacity-60 truncate">{{ user?.email }}</div>
            </div>
            <div customTooltip [content]="building_select" class="relative">
                <button mat-button class="clear w-full text-left h-[3.5rem]">
                    <div class="flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200"
                        >
                            <app-icon>business</app-icon>
                        </div>
                        <div class="flex-1">
                            {{
                                (building | async)?.display_name ||
                                    (building | async)?.name
                            }}
                        </div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="help_tooltip"
                *ngIf="features.includes('help')"
            >
                <button mat-button class="clear w-full text-left h-[3.5rem]">
                    <div class="flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200"
                        >
                            <app-icon>help</app-icon>
                        </div>
                        <div class="flex-1">Help & Support</div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <button mat-button class="clear w-full text-left h-[3.5rem]">
                <div class="flex items-center space-x-2">
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200"
                    >
                        <app-icon>mode_night</app-icon>
                    </div>
                    <div class="flex-1">Display & Accessibility</div>
                    <app-icon class="opacity-60 text-2xl"
                        >chevron_right</app-icon
                    >
                </div>
            </button>
            <div class="flex flex-col items-center p-4">
                <button mat-button class="inverse mb-4">Sign Out</button>
                <div class="text-xs opacity-60 w-full">
                    Version: {{ version.hash }}
                </div>
                <div class="text-xs opacity-60 w-full">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host > div > *:nth-child(n + 1) {
                border-top: 1px solid #ccc;
                border-radius: 0;
            }
        `,
    ],
})
export class UserControlsComponent {
    public readonly building = this._org.active_building;

    public readonly building_select = BuildingSelectComponent;
    public readonly help_tooltip = HelpTooltipComponent;

    public get user() {
        return currentUser();
    }

    public get groups() {
        return this.user.groups.join('\n');
    }

    public get version() {
        return VERSION;
    }

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public logout() {
        logout();
        location.href = '/logout';
    }
}
