import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { settingSignal } from '@placeos/common';
import { LandingQuickActionsComponent } from '../../app/landing-new/landing-quick-actions.component';

describe('LandingQuickActionsComponent', () => {
    let spectator: SpectatorRouting<LandingQuickActionsComponent>;
    const features = settingSignal<string[]>('features', []);
    const show_quick_book = settingSignal<boolean>('show_quick_book');
    const show_quick_links = settingSignal<boolean>('show_quick_links');
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
    const linkList = () =>
        spectator
            .queryAll<HTMLAnchorElement>('a[btn]')
            .map((a) => a.getAttribute('href'));
    const autoAssignButton = () =>
        spectator.query('button[name="auto-assign-desk"]');

    beforeEach(() => {
        vi.clearAllMocks();
        features.set(['desks', 'spaces', 'parking', 'lockers']);
        show_quick_book.set(undefined);
        show_quick_links.set(undefined);
        spectator = createComponent();
    });

    it('should hide the actions when the settings are false', () => {
        show_quick_book.set(false);
        show_quick_links.set(false);
        spectator.detectChanges();
        expect(linkList()).toEqual([]);
        expect(autoAssignButton()).toBeFalsy();
    });

    it('should show a booking link for each enabled feature', () => {
        show_quick_book.set(false);
        spectator.detectChanges();
        expect(linkList()).toEqual([
            '/book/desk',
            '/book/meeting',
            '/book/parking',
            '/book/locker',
        ]);
        expect(autoAssignButton()).toBeFalsy();

        features.set(['spaces']);
        spectator.detectChanges();
        expect(linkList()).toEqual(['/book/meeting']);
    });

    it('should show the one-click desk booking only with the desks feature', () => {
        show_quick_links.set(false);
        spectator.detectChanges();
        expect(autoAssignButton()).toBeTruthy();
        expect(linkList()).toEqual([]);

        features.set(['spaces']);
        spectator.detectChanges();
        expect(autoAssignButton()).toBeFalsy();
    });

    it('should open the auto-assign desk modal and reveal its close button', () => {
        spectator.detectChanges();
        spectator.component.autoAssignDesk();
        expect(dialog.open).toHaveBeenCalled();
        expect(show_close.set).toHaveBeenCalledWith(true);
    });
});
