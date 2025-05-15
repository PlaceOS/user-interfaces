import { Component, Inject } from '@angular/core';
import { LocaleService, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'language-select',
    template: `
        <div
            class="relative -right-1 -top-12 flex w-[18.5rem] flex-col rounded bg-base-100 shadow"
            (click)="close()"
        >
            <div class="flex items-center space-x-2 p-2">
                <icon class="text-2xl">arrow_back</icon>
                <div class="">{{ 'COMMON.LANGUAGE' | translate }}</div>
            </div>
            <div class="mb-2 px-8 text-xs opacity-60">
                {{ 'COMMON.LANGUAGE_SELECT' | translate }}
            </div>
            <button
                *ngFor="let lang of locales"
                class="flex h-14 w-full items-center justify-between border-t border-base-200 px-4 text-left"
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
