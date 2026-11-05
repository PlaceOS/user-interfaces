import { signal } from '@angular/core';
import { DeferBlockBehavior, TestBed } from '@angular/core/testing';
import {
    EMPTY_USER,
    HotkeysService,
    RemoteLoggingService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { binding_records } from '../lib/binding-debug-hooks';
import { SettingsDebugPanelLauncherComponent } from '../lib/settings-debug-panel-launcher.component';

describe('SettingsDebugPanelLauncherComponent', () => {
    const callbacks = new Map<string, () => void>();
    const debug_overrides = signal<Record<string, unknown>>({});
    let logging_starts = 0;

    beforeEach(() => {
        callbacks.clear();
        debug_overrides.set({});
        logging_starts = 0;
        setCurrentUser(
            new StaffUser({ id: 'support', groups: ['placeos_support'] }),
        );
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
                {
                    provide: RemoteLoggingService,
                    useFactory: () => ({ started: ++logging_starts }),
                },
                {
                    provide: SettingsService,
                    useValue: { debug_overrides },
                },
            ],
        });
    });

    afterEach(() => setCurrentUser(EMPTY_USER));

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

    it('ignores the corner menu and shortcuts for users without admin or support', () => {
        setCurrentUser(new StaffUser({ id: 'staff', groups: ['staff'] }));
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
        expect(event.defaultPrevented).toBe(false);
        expect(fixture.nativeElement.querySelector('[aria-label]')).toBeNull();
        callbacks.get('Control+Alt+Shift+KeyS')!();
        fixture.componentInstance.openPanel('console');
        expect(fixture.componentInstance.panel()).toBeNull();
    });

    it('starts console and driver capture before a panel opens, only for admin and support users', () => {
        setCurrentUser(new StaffUser({ id: 'staff', groups: ['staff'] }));
        const fixture = TestBed.createComponent(
            SettingsDebugPanelLauncherComponent,
        );
        fixture.detectChanges();
        expect(logging_starts).toBe(0);
        setCurrentUser(new StaffUser({ id: 'admin', groups: ['placeos_admin'] }));
        fixture.detectChanges();
        expect(logging_starts).toBe(1);
        const system_id = `sys-${Date.now()}-launcher`;
        getModule(system_id, 'Display').variable('power');
        expect(
            binding_records().some((record) => record.system_id === system_id),
        ).toBe(true);
        expect(fixture.componentInstance.panel()).toBeNull();
    });

    it('shows active setting overrides only to admin and support users', () => {
        debug_overrides.set({ 'app.theme': 'dark', 'app.debug': true });
        setCurrentUser(new StaffUser({ id: 'staff', groups: ['staff'] }));
        const fixture = TestBed.createComponent(
            SettingsDebugPanelLauncherComponent,
        );
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).not.toContain('overrides');
        setCurrentUser(
            new StaffUser({ id: 'support', groups: ['placeos_support'] }),
        );
        fixture.detectChanges();
        const indicator = fixture.nativeElement.querySelector(
            'button.bg-warning',
        ) as HTMLButtonElement;
        expect(indicator.textContent).toMatch(/2 setting\s+overrides\s+active/);
        indicator.click();
        expect(fixture.componentInstance.panel()).toBe('settings');
    });
});
