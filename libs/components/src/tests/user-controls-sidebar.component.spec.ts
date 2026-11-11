import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { UserControlsSidebarComponent } from '../lib/user-controls-sidebar.component';
import { UserControlsComponent } from '../lib/user-controls.component';

describe('UserControlsSidebarComponent', () => {
    let spectator: Spectator<UserControlsSidebarComponent>;
    const createComponent = createComponentFactory({
        component: UserControlsSidebarComponent,
        overrideComponents: [
            [
                UserControlsSidebarComponent,
                {
                    remove: { imports: [UserControlsComponent, IconComponent] },
                    add: {
                        imports: [
                            MockComponent(UserControlsComponent),
                            MockComponent(IconComponent),
                        ],
                    },
                },
            ],
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should not render the controls until opened', () => {
        expect('user-controls').not.toExist();
    });

    it('should open the sidebar on button press', () => {
        spectator.click('button[name="user-controls"]');
        spectator.detectChanges();
        expect(spectator.component.is_rendered()).toBe(true);
        expect('user-controls').toExist();
        vi.advanceTimersByTime(32);
        spectator.detectChanges();
        expect(spectator.component.is_open()).toBe(true);
    });

    it('should close the sidebar when the backdrop is pressed', () => {
        spectator.component.open();
        vi.advanceTimersByTime(32);
        spectator.detectChanges();
        spectator.click('button[aria-label="Close user controls"]');
        spectator.detectChanges();
        expect(spectator.component.is_open()).toBe(false);
        expect('user-controls').toExist();
        vi.advanceTimersByTime(200);
        spectator.detectChanges();
        expect(spectator.component.is_rendered()).toBe(false);
        expect('user-controls').not.toExist();
    });

    it('should close the sidebar on escape', () => {
        spectator.component.open();
        vi.advanceTimersByTime(32);
        spectator.detectChanges();
        document.documentElement.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
        );
        spectator.detectChanges();
        expect(spectator.component.is_open()).toBe(false);
        vi.advanceTimersByTime(200);
        expect(spectator.component.is_rendered()).toBe(false);
    });

    it('should move focus into the panel and back to the trigger', () => {
        const trigger = spectator.query<HTMLElement>(
            'button[name="user-controls"]',
        );
        trigger.focus();
        spectator.click(trigger);
        spectator.detectChanges();
        vi.advanceTimersByTime(32);
        spectator.detectChanges();
        expect(document.activeElement).toBe(spectator.query('[role="dialog"]'));
        expect(trigger.getAttribute('aria-expanded')).toBe('true');

        spectator.component.close();
        expect(document.activeElement).toBe(trigger);
    });

    it('should leave the sidebar open when Escape closes a layer over it', () => {
        spectator.component.open();
        vi.advanceTimersByTime(32);
        spectator.detectChanges();
        // Menus and dialogs mark the key as used, as CDK overlays do
        const handled = (event: Event) => event.preventDefault();
        document.body.addEventListener('keydown', handled);
        document.body.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                bubbles: true,
                cancelable: true,
            }),
        );
        document.body.removeEventListener('keydown', handled);
        expect(spectator.component.is_open()).toBe(true);
    });

    it('should cancel pending removal when re-opened during close', () => {
        spectator.component.open();
        vi.advanceTimersByTime(32);
        spectator.component.close();
        vi.advanceTimersByTime(100);
        spectator.component.open();
        vi.advanceTimersByTime(300);
        spectator.detectChanges();
        expect(spectator.component.is_rendered()).toBe(true);
        expect('user-controls').toExist();
    });
});
