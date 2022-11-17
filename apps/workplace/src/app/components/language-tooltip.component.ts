import { Component, Inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'language-select',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-white shadow relative -top-12 -right-1 dark:bg-neutral-700 dark:text-white"
            (click)="close()"
        >
            <div class="flex items-center space-x-2  p-2">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="" i18n>English</div>
            </div>
            <div class="text-xs opacity-60 mb-4 px-2 p-4" i18n>
                Select a language
            </div>
            <a
                [href]="'/workplace/' + lang.id + '/'"
                *ngFor="let lang of locales"
                class="w-full p-4 border-t border-gray-200"
            >
                {{ lang.name }} - {{ lang.flag }}
            </a>
        </div>
    `,
    styles: [``],
})
export class LanguageSelectComponent {
    public get locales() {
        return this._settings.get('app.locales') || [];
    }

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService
    ) {}
}
