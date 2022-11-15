import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { currentUser, SettingsService, VERSION } from '@placeos/common';
import { ChangelogModalComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { logout } from '@placeos/ts-client';
import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { BuildingSelectComponent } from './building-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { SupportTicketModalComponent } from './support-ticket-modal.component';

@Component({
    selector: 'user-controls',
    template: `
        <div
            class="rounded bg-white dark:bg-neutral-700 dark:text-white shadow mt-1 flex flex-col relative divide-y divide-gray-300 dark:divide-neutral-500"
        >
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
                    <div class="flex items-center space-x-2 dark:text-white">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
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
                    <div class="flex items-center space-x-2 dark:text-white">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                        >
                            <app-icon>help</app-icon>
                        </div>
                        <div class="flex-1" i18n>Help & Support</div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <div *ngIf="features.includes('wfh')">
                <button
                    mat-button
                    class="clear w-full text-left h-[3.5rem]"
                    (click)="openWfhModal()"
                >
                    <div class="flex items-center space-x-2 dark:text-white">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                        >
                            <app-icon>share_location</app-icon>
                        </div>
                        <div class="flex-1" i18n>Work Location Settings</div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="accessibility_tooltip"
                class="!border-b"
            >
                <button mat-button class="clear w-full text-left h-[3.5rem]">
                    <div class="flex items-center space-x-2 dark:text-white">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                        >
                            <app-icon>mode_night</app-icon>
                        </div>
                        <div class="flex-1" i18n>Display & Accessibility</div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <button
                mat-button
                class="clear w-full text-left h-[3.5rem]"
                (click)="openSupportTicketModal()"
            >
                <div class="flex items-center space-x-2 dark:text-white">
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                    >
                        <app-icon>support_agent</app-icon>
                    </div>
                    <div class="flex-1" i18n>Raise a support ticket</div>
                </div>
            </button>
            <div class="flex flex-col items-center p-4">
                <button mat-button i18n class="inverse mb-4" (click)="logout()">
                    Sign Out
                </button>
                <div class="text-xs opacity-60 w-full">
                    <ng-container i18n>Version:</ng-container>
                    <button
                        class="underline p-0 m-0 bg-none border-none text-xs"
                        (click)="viewChangelog()"
                    >
                        {{ version.hash }}
                    </button>
                </div>
                <div class="text-xs opacity-60 w-full">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class UserControlsComponent {
    public readonly building = this._org.active_building;

    public readonly building_select = BuildingSelectComponent;
    public readonly help_tooltip = HelpTooltipComponent;
    public readonly accessibility_tooltip = AccessibilityTooltipComponent;

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
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public logout() {
        logout();
        location.href = '/logout';
    }

    public openSupportTicketModal() {
        this._dialog.open(SupportTicketModalComponent);
    }

    public openWfhModal() {
        this._dialog.open(WFHSettingsModalComponent);
    }

    public async viewChangelog() {
        const changelog = await (await fetch('https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md')).text();
        this._dialog.open(ChangelogModalComponent, { data: { changelog } });
    }
}
