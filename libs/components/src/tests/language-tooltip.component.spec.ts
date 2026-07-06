import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { LocaleService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { LanguageSelectComponent } from '../lib/language-tooltip.component';

describe('LanguageSelectComponent', () => {
    let spectator: Spectator<LanguageSelectComponent>;

    const LOCALES = [
        { id: 'en', name: 'COMMON.LANG_EN', local: 'English' },
        { id: 'fr', name: 'COMMON.LANG_FR', local: 'Français' },
    ];
    const settings_mock = createSettingsServiceMock();
    settings_mock.get.mockImplementation((key: string) =>
        key === 'app.locales' ? LOCALES : undefined,
    );
    const tooltip_data = { close: vi.fn() };
    const locale_mock = { locale: 'en', setLocale: vi.fn() };

    const createComponent = createComponentFactory({
        component: LanguageSelectComponent,
        providers: [
            { provide: CustomTooltipData, useValue: tooltip_data },
            { provide: SettingsService, useValue: settings_mock },
            { provide: LocaleService, useValue: locale_mock },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a button for each available locale', () => {
        // NOTE: TranslatePipe is globally mocked so translated names render
        // empty and only the local name badges are visible.
        const buttons = spectator.queryAll('button');
        expect(buttons.length).toBe(2);
        expect(buttons[0]).toContainText('English');
        expect(buttons[1]).toContainText('Français');
    });

    it('should highlight the active locale', () => {
        const buttons = spectator.queryAll('button > div');
        expect(buttons[0]).toHaveClass('border-info');
        expect(buttons[1]).not.toHaveClass('border-info');
    });

    it('should set and persist the locale on selection', () => {
        const timeout_spy = vi
            .spyOn(window, 'setTimeout')
            .mockReturnValue(0 as any);
        spectator.click(spectator.queryAll('button')[1]);
        expect(locale_mock.setLocale).toHaveBeenCalledWith('fr');
        expect(localStorage.getItem('PLACEOS.locale')).toBe('fr');
        timeout_spy.mockRestore();
    });

    it('should close the tooltip when clicked', () => {
        spectator.click(spectator.query('div'));
        expect(tooltip_data.close).toHaveBeenCalled();
    });
});
