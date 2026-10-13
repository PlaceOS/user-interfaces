import { Clipboard } from '@angular/cdk/clipboard';
import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { SettingsService } from '@placeos/common';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { OrganisationService } from 'libs/common/src/lib/org/organisation.service';
import { SettingsDebugPanelComponent } from '../lib/settings-debug-panel.component';

describe('SettingsDebugPanelComponent', () => {
    it('should add a new setting override from JSON input', () => {
        const prompt = vi
            .fn()
            .mockReturnValueOnce('custom.feature')
            .mockReturnValueOnce('{"enabled":true}');
        const setDebugOverride = vi.fn();
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DOCUMENT,
                    useValue: { defaultView: { prompt } },
                },
                {
                    provide: SettingsService,
                    useValue: { setDebugOverride },
                },
                { provide: Clipboard, useValue: {} },
                { provide: HotkeysService, useValue: {} },
                { provide: OrganisationService, useValue: {} },
            ],
        });
        const component = TestBed.runInInjectionContext(
            () => new SettingsDebugPanelComponent(),
        );

        component.addSetting();

        expect(setDebugOverride).toHaveBeenCalledWith('app.custom.feature', {
            enabled: true,
        });
    });
});
