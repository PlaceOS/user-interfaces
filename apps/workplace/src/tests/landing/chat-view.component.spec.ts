import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { ChatViewComponent } from '../../app/landing-new/chat-view.component';

describe('ChatViewComponent', () => {
    let spectator: SpectatorRouting<ChatViewComponent>;
    const bottom_ref = { dismiss: jest.fn() };
    const createComponent = createRoutingFactory({
        component: ChatViewComponent,
        stubsEnabled: false,
        providers: [{ provide: MatBottomSheetRef, useValue: bottom_ref }],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should dismiss the bottom sheet when closed', () => {
        spectator.component.close();
        expect(bottom_ref.dismiss).toHaveBeenCalled();
    });

    it('should greet the current user', () => {
        (spectator.component.user as any).set({ name: 'Jane Doe' });
        spectator.detectChanges();
        expect(spectator.query('h2')?.textContent).toContain('Jane Doe');
    });

    it('should close the sheet when a quick action link is clicked', () => {
        spectator.detectChanges();
        const links = spectator.queryAll<HTMLAnchorElement>('a[btn]');
        expect(links.length).toBe(4);
        spectator.click(links[0]);
        expect(bottom_ref.dismiss).toHaveBeenCalled();
    });

    it('should route quick actions to the booking flows', () => {
        spectator.detectChanges();
        const links = spectator.queryAll<HTMLAnchorElement>('a[btn]');
        const hrefs = links.map((a) => a.getAttribute('href'));
        expect(hrefs).toEqual([
            '/book/meeting',
            '/book/desk',
            '/your-bookings',
            '/book/parking',
        ]);
    });
});
