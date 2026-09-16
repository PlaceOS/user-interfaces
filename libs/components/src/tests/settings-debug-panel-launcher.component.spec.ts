import { DeferBlockBehavior, TestBed } from '@angular/core/testing';
import { HotkeysService } from '@placeos/common';
import { SettingsDebugPanelLauncherComponent } from '../lib/settings-debug-panel-launcher.component';

describe('SettingsDebugPanelLauncherComponent', () => {
    const callbacks = new Map<string, () => void>();

    beforeEach(() => {
        callbacks.clear();
        TestBed.configureTestingModule({
            imports: [SettingsDebugPanelLauncherComponent],
            deferBlockBehavior: DeferBlockBehavior.Manual,
            providers: [
                {
                    provide: HotkeysService,
                    useValue: {
                        listen: (keys: string[], callback: () => void) => {
                            callbacks.set(keys.join('+'), callback);
                            return { unsubscribe: vi.fn() };
                        },
                    },
                },
            ],
        });
    });

    it('opens the corner menu on right-click and selects the driver panel', async () => {
        const fixture = TestBed.createComponent(
            SettingsDebugPanelLauncherComponent,
        );
        fixture.detectChanges();
        vi.spyOn(
            document.documentElement,
            'clientHeight',
            'get',
        ).mockReturnValue(800);
        const event = new MouseEvent('contextmenu', {
            bubbles: true,
            cancelable: true,
            clientX: 10,
            clientY: 790,
        });
        document.dispatchEvent(event);
        fixture.detectChanges();
        await fixture.whenStable();
        expect(event.defaultPrevented).toBe(true);
        const items = Array.from(
            document.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'),
        );
        expect(items).toHaveLength(3);
        ['Settings', 'Driver bindings', 'Console'].forEach((label, index) => {
            expect(items[index].textContent).toContain(label);
        });
        items[1].click();
        expect(fixture.componentInstance.panel()).toBe('bindings');
        fixture.destroy();
    });

    it('leaves normal clicks and context menus outside the corner unchanged', () => {
        const fixture = TestBed.createComponent(
            SettingsDebugPanelLauncherComponent,
        );
        fixture.detectChanges();
        vi.spyOn(
            document.documentElement,
            'clientHeight',
            'get',
        ).mockReturnValue(800);
        for (const [type, x, y] of [
            ['click', 10, 790],
            ['contextmenu', 100, 790],
            ['contextmenu', 10, 100],
        ] as const) {
            const event = new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                clientX: x,
                clientY: y,
            });
            document.dispatchEvent(event);
            expect(event.defaultPrevented).toBe(false);
        }
        expect(document.querySelector('[role="menu"]')).toBeNull();
    });

    it('toggles panels through shortcuts without loading settings for other panels', async () => {
        const fixture = TestBed.createComponent(
            SettingsDebugPanelLauncherComponent,
        );
        const load_schema = vi
            .fn()
            .mockResolvedValue({ title: 'Test settings' });
        fixture.componentRef.setInput('loadSchema', load_schema);
        fixture.detectChanges();
        callbacks.get('Control+Alt+Shift+KeyB')!();
        expect(fixture.componentInstance.panel()).toBe('bindings');
        callbacks.get('Control+Backquote')!();
        expect(fixture.componentInstance.panel()).toBe('console');
        callbacks.get('Control+Backquote')!();
        expect(fixture.componentInstance.panel()).toBeNull();
        expect(load_schema).not.toHaveBeenCalled();
        callbacks.get('Control+Alt+Shift+KeyS')!();
        await fixture.whenStable();
        expect(fixture.componentInstance.schema()).toEqual({
            title: 'Test settings',
        });
        fixture.componentInstance.openPanel('settings');
        expect(load_schema).toHaveBeenCalledTimes(1);
    });

    it('opens settings when an app has no schema or its schema fails to load', async () => {
        const fixture = TestBed.createComponent(
            SettingsDebugPanelLauncherComponent,
        );
        fixture.componentRef.setInput('loadSchema', () =>
            Promise.reject(new Error('Unavailable')),
        );
        fixture.detectChanges();
        fixture.componentInstance.openPanel('settings');
        await fixture.whenStable();
        expect(fixture.componentInstance.panel()).toBe('settings');
        expect(fixture.componentInstance.schema()).toBeNull();
    });
});
