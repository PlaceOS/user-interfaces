import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'language-select',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-base-100 shadow relative -top-12 -right-1"
            (click)="close()"
        >
            <div class="flex items-center space-x-2  p-2">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="">{{ 'COMMON.LANGUAGE' | translate }}</div>
            </div>
            <div class="text-xs opacity-60 mb-4 px-2 p-4">
                {{ 'COMMON.LANGUAGE_SELECT' | translate }}
            </div>
            <button
                *ngFor="let lang of locales"
                class="w-full p-4 border-t border-base-200 text-left"
                (click)="setLocale(lang.id)"
            >
                {{ lang.name }} - {{ lang.flag }}
            </button>
        </div>
    `,
    styles: [``],
})
export class LanguageSelectComponent {
    public readonly setLocale = (code: string) => {
        this._translation.use(code);
        localStorage.setItem('PLACEOS.locale', code);
    };

    public get locales() {
        return this._settings.get('app.locales') || [];
    }

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService,
        private _translation: TranslateService
    ) {}
}
