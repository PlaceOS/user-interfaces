import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { LandingQuickActionsComponent } from '../../app/landing-new/landing-quick-actions.component';

describe('LandingQuickActionsComponent', () => {
    let spectator: SpectatorRouting<LandingQuickActionsComponent>;
    const show_close = { set: vi.fn() };
    const dialog = {
        open: vi.fn(() => ({ componentInstance: { show_close } })),
    };
    const createComponent = createRoutingFactory({
        component: LandingQuickActionsComponent,
        stubsEnabled: false,
        detectChanges: false,
        providers: [{ provide: MatDialog, useValue: dialog }],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
        spectator.component.features.set([]);
    });

    it('should hide every action when no features are enabled', () => {
        spectator.detectChanges();
        expect(spectator.query('a[btn]')).toBeFalsy();
        expect(
            spectator
                .queryAll('button[btn]')
                .some((b) => b.textContent?.includes('Auto-assign')),
        ).toBe(false);
    });

    it('should show the desk actions when desks are enabled', () => {
        spectator.component.features.set(['desks']);
        spectator.detectChanges();
        const hrefs = spectator
            .queryAll<HTMLAnchorElement>('a[btn]')
            .map((a) => a.getAttribute('href'));
        expect(hrefs).toContain('/book/desk');
        expect(
            spectator
                .queryAll('button[btn]')
                .some((b) => b.textContent?.includes('Auto-assign')),
        ).toBe(true);
    });

    it('should render a reserve link per enabled feature', () => {
        spectator.component.features.set([
            'desks',
            'spaces',
            'parking',
            'lockers',
        ]);
        spectator.detectChanges();
        const hrefs = spectator
            .queryAll<HTMLAnchorElement>('a[btn]')
            .map((a) => a.getAttribute('href'));
        expect(hrefs).toEqual([
            '/book/desk',
            '/book/meeting',
            '/book/parking',
            '/book/locker',
        ]);
    });

    it('should open the auto-assign desk modal and reveal its close button', () => {
        spectator.detectChanges();
        spectator.component.autoAssignDesk();
        expect(dialog.open).toHaveBeenCalled();
        expect(show_close.set).toHaveBeenCalledWith(true);
    });
});
