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
import { LanguageSelectComponent } from './language-tooltip.component';
import { RegionSelectComponent } from './region-select.component';
import { SupportTicketModalComponent } from './support-ticket-modal.component';

export interface AppLocale {
    id: string;
    name: string;
    flag: string;
}

@Component({
    selector: 'user-controls',
    template: `
        <div
            class="rounded bg-white dark:bg-neutral-700 dark:text-white shadow mt-1 flex flex-col relative divide-y divide-gray-300 dark:divide-neutral-500"
        >
            <div avatar class="flex flex-col items-center p-2 w-[18rem]">
                <a-user-avatar
                    class="text-2xl"
                    [user]="user"
                    [matTooltip]="groups"
                ></a-user-avatar>
                <div class="">{{ user?.name }}</div>
                <div class="text-xs opacity-60 truncate">{{ user?.email }}</div>
            </div>
            <div
                customTooltip
                *ngIf="(regions | async).length"
                [content]="region_select"
                class="relative"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div
                        class="w-full flex items-center space-x-2 dark:text-white"
                    >
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                        >
                            <app-icon>layers</app-icon>
                        </div>
                        <div class="flex-1 truncate w-px">
                            {{
                                (region | async)?.display_name ||
                                    (region | async)?.name
                            }}
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>
            <div customTooltip [content]="building_select" class="relative">
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div
                        class="w-full flex items-center space-x-2 dark:text-white"
                    >
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                        >
                            <app-icon>business</app-icon>
                        </div>
                        <div class="flex-1 truncate w-px">
                            {{
                                (building | async)?.display_name ||
                                    (building | async)?.name
                            }}
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="help_tooltip"
                *ngIf="features.includes('help')"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div
                        class="w-full flex items-center space-x-2 dark:text-white"
                    >
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
                    btn
                    matRipple
                    class="clear w-full text-left h-[3.5rem]"
                    (click)="openWfhModal()"
                >
                    <div
                        class="w-full flex items-center space-x-2 dark:text-white"
                    >
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
                [class.!border-b]="!locales?.length"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div
                        class="w-full flex items-center space-x-2 dark:text-white"
                    >
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
            <div
                customTooltip
                [content]="language_tooltip"
                *ngIf="locales?.length"
                class="!border-b"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div
                        class="w-full flex items-center space-x-2 dark:text-white"
                    >
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                        >
                            <app-icon>mode_night</app-icon>
                        </div>
                        <div class="flex-1" i18n>
                            {{ 'COMMON.LANGUAGE_LABEL' | translate }}:
                            {{ 'COMMON.LANGUAGE' | translate }}
                        </div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <button
                btn
                matRipple
                class="clear w-full text-left h-[3.5rem]"
                (click)="newSupportTicket()"
            >
                <div class="w-full flex items-center space-x-2 dark:text-white">
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                    >
                        <app-icon>support_agent</app-icon>
                    </div>
                    <div class="flex-1" i18n>Raise a support ticket</div>
                </div>
            </button>
            <div class="flex flex-col items-center p-4">
                <button
                    btn
                    matRipple
                    i18n
                    class="inverse mb-4"
                    (click)="logout()"
                >
                    Sign Out
                </button>
                <div class="text-xs opacity-60 w-full">
                    <ng-container i18n>Version: </ng-container>
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
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;

    public readonly region_select = RegionSelectComponent;
    public readonly building_select = BuildingSelectComponent;
    public readonly help_tooltip = HelpTooltipComponent;
    public readonly accessibility_tooltip = AccessibilityTooltipComponent;
    public readonly language_tooltip = LanguageSelectComponent;

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

    public get locales(): [] {
        return this._settings.get('app.locales') || [];
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public logout() {
        logout();
    }

    public newSupportTicket() {
        if (this._settings.get('app.external_support_url')) {
            window.open(
                this._settings.get('app.external_support_url'),
                '_blank'
            );
        } else {
            this._dialog.open(SupportTicketModalComponent);
        }
    }

    public openWfhModal() {
        this._dialog.open(WFHSettingsModalComponent);
    }

    public async viewChangelog() {
        const changelog = await (
            await fetch(
                'https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md'
            )
        ).text();
        this._dialog.open(ChangelogModalComponent, { data: { changelog } });
    }
}
