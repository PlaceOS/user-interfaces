import { Component, inject } from '@angular/core';
import { LocaleService, SettingsService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'language-select',
    template: `
        <div
            class="relative -right-1 -top-12 flex max-h-[65vh] w-[18.5rem] flex-col overflow-auto rounded bg-base-100 pb-3 shadow"
            (click)="close()"
        >
            <div
                matRipple
                class="flex items-center space-x-2 border-b border-base-300 px-2 py-3"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">{{ 'COMMON.LANGUAGE' | translate }}</div>
            </div>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ 'COMMON.LANGUAGE_SELECT' | translate }}
            </div>
            @for (lang of locales; track lang.id) {
                <button
                    matRipple
                    (click)="setLocale(lang.id)"
                    class="flex h-14 items-center justify-between space-x-8 px-2 text-left"
                >
                    <div
                        class="flex flex-1 items-center justify-between rounded p-2 leading-tight hover:bg-base-200"
                        [class.mt-2]="(lang.name | translate) !== lang.local"
                        [class.border]="active_locale === lang.id"
                        [class.border-info]="active_locale === lang.id"
                    >
                        <div>{{ lang.name | translate }}</div>
                        @if ((lang.name | translate) !== lang.local) {
                            <div
                                class="rounded bg-base-300 px-2 py-1 text-xs opacity-60"
                            >
                                {{ lang.local }}
                            </div>
                        }
                    </div>
                    <!-- <div class="text-3xl">{{ lang.flag }}</div> -->
                </button>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class LanguageSelectComponent {
    private _data = inject(CustomTooltipData);
    private _settings = inject(SettingsService);
    private _locale = inject(LocaleService);

    public readonly setLocale = (code: string) => {
        this._locale.setLocale(code);
        localStorage.setItem('PLACEOS.locale', code);
        setTimeout(() => location.reload(), 300);
    };

    public get active_locale() {
        return this._locale.locale;
    }

    public get locales(): { id: string; name: string }[] {
        return this._settings.get('app.locales') || [];
    }

    public readonly close = () => this._data?.close();
}
