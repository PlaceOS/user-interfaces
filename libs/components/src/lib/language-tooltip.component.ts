import { Component, Inject } from '@angular/core';
import { LocaleService, SettingsService } from '@placeos/common';
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
            <div class="text-xs opacity-60 px-8 mb-2">
                {{ 'COMMON.LANGUAGE_SELECT' | translate }}
            </div>
            <button
                *ngFor="let lang of locales"
                class="w-full px-4 h-14 border-t border-base-200 text-left flex items-center justify-between"
                (click)="setLocale(lang.id)"
            >
                <div>
                    <div>{{ lang.name | translate }}</div>
                    <div
                        *ngIf="(lang.name | translate) !== lang.local"
                        class="text-xs opacity-30"
                    >
                        {{ lang.local }}
                    </div>
                </div>
                <!-- <div class="text-3xl">{{ lang.flag }}</div> -->
            </button>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class LanguageSelectComponent {
    public readonly setLocale = (code: string) => {
        this._locale.setLocale(code);
        localStorage.setItem('PLACEOS.locale', code);
        setTimeout(() => location.reload(), 300);
    };

    public get locales() {
        return this._settings.get('app.locales') || [];
    }

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService,
        private _locale: LocaleService,
    ) {}
}
