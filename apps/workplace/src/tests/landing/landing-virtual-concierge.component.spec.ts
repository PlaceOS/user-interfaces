import { signal } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { LandingVirtualConciergeComponent } from '../../app/landing-new/landing-virtual-concierge.component';

describe('LandingVirtualConciergeComponent', () => {
    let spectator: SpectatorRouting<LandingVirtualConciergeComponent>;
    const prompt_config = signal<any>(null);
    const settings_service = {
        signal: vi.fn((key: string) =>
            key === 'virtual_concierge.prompts' ? prompt_config : signal(null),
        ),
    };
    const createComponent = createRoutingFactory({
        component: LandingVirtualConciergeComponent,
        stubsEnabled: false,
        detectChanges: false,
        providers: [{ provide: SettingsService, useValue: settings_service }],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        prompt_config.set(null);
        spectator = createComponent();
        spectator.component.features.set([]);
    });

    it('should fall back to default prompts when none are configured', () => {
        expect(spectator.component.prompts()).toEqual([
            'Book a meeting room tomorrow at 2pm for 4 people',
            'Find me an available desk near a window',
            'Reserve parking for Friday morning',
        ]);
    });

    it('should use configured prompts when they are an array', () => {
        prompt_config.set(['Ask me one thing', 'Ask me another']);
        expect(spectator.component.prompts()).toEqual([
            'Ask me one thing',
            'Ask me another',
        ]);
    });

    it('should toggle fullscreen state', () => {
        expect(spectator.component.is_fullscreen()).toBe(false);
        spectator.component.openFullscreen();
        expect(spectator.component.is_fullscreen()).toBe(true);
        spectator.component.closeFullscreen();
        expect(spectator.component.is_fullscreen()).toBe(false);
    });

    it('should render the compact card and hide the overlay by default', () => {
        spectator.detectChanges();
        expect(spectator.query('.fixed.inset-0')).toBeFalsy();
        expect(spectator.query('img[src="assets/icons/roybot.png"]')).toBeTruthy();
    });

    it('should render the fullscreen overlay when opened', () => {
        spectator.component.openFullscreen();
        spectator.detectChanges();
        expect(spectator.query('.fixed.inset-0')).toBeTruthy();
    });

    it('should gate quick action links by enabled features', () => {
        spectator.component.features.set(['spaces', 'lockers']);
        spectator.detectChanges();
        const hrefs = spectator
            .queryAll<HTMLAnchorElement>('a[btn]')
            .map((a) => a.getAttribute('href'));
        expect(hrefs).toContain('/book/meeting');
        expect(hrefs).toContain('/book/locker');
        expect(hrefs).not.toContain('/book/desk');
        expect(hrefs).not.toContain('/book/parking');
    });

    it('should close the overlay when the backdrop is clicked', () => {
        spectator.component.openFullscreen();
        spectator.detectChanges();
        spectator.click('.fixed.inset-0');
        expect(spectator.component.is_fullscreen()).toBe(false);
    });
});
