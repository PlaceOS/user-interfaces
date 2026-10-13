import { Clipboard } from '@angular/cdk/clipboard';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { getModule, showSystem } from '@placeos/ts-client';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import {
    BindingDebugPanelComponent,
    pairExecuteMessages,
} from '../lib/binding-debug-panel.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BindingDebugPanelComponent', () => {
    let spectator: Spectator<BindingDebugPanelComponent>;
    const copy = vi.fn<(text: string) => boolean>();
    let hotkey_callback: () => void;

    const createComponent = createComponentFactory({
        component: BindingDebugPanelComponent,
        providers: [
            { provide: Clipboard, useValue: { copy } },
            {
                provide: HotkeysService,
                useValue: {
                    listen: vi.fn((_combo, next: () => void) => {
                        hotkey_callback = next;
                        return { unsubscribe: vi.fn() };
                    }),
                },
            },
        ],
    });

    beforeEach(() => {
        copy.mockReset().mockReturnValue(true);
        vi.mocked(showSystem).mockImplementation(
            async (id) => ({ id, name: id }) as any,
        );
        spectator = createComponent();
    });

    it('toggles the panel with the binding debug hotkey', () => {
        expect(spectator.component.show()).toBe(false);
        hotkey_callback();
        expect(spectator.component.show()).toBe(true);
    });

    it('resizes the panel and restores app spacing when closed', async () => {
        const original_padding = document.body.style.paddingRight;
        document.body.style.paddingRight = '12px';
        try {
            spectator.component.show.set(true);
            await spectator.fixture.whenStable();

            vi.spyOn(
                document.documentElement,
                'clientWidth',
                'get',
            ).mockReturnValue(1200);
            const panel = spectator.query<HTMLElement>('aside');
            vi.spyOn(panel, 'getBoundingClientRect').mockReturnValue({
                width: 512,
            } as DOMRect);
            const handle = spectator.query<HTMLElement>('[role="separator"]');
            let captured = false;
            handle.setPointerCapture = () => {
                captured = true;
            };
            handle.hasPointerCapture = () => captured;
            handle.releasePointerCapture = () => {
                captured = false;
            };
            const pointer = (type: string, clientX: number) => {
                const event = new MouseEvent(type, {
                    clientX,
                    button: 0,
                    bubbles: true,
                });
                Object.defineProperties(event, {
                    pointerId: { value: 1 },
                    isPrimary: { value: true },
                });
                handle.dispatchEvent(event);
            };
            pointer('pointerdown', 688);
            pointer('pointermove', 432);
            await spectator.fixture.whenStable();

            expect(panel.style.width).toBe('min(768px, 100vw)');
            expect(document.body.style.paddingRight).toBe('min(768px, 100vw)');

            pointer('pointermove', -500);
            await spectator.fixture.whenStable();
            expect(panel.style.width).toBe('min(1200px, 100vw)');
            pointer('pointermove', 1500);
            await spectator.fixture.whenStable();
            expect(panel.style.width).toBe('min(320px, 100vw)');
            pointer('pointerup', 1500);
            pointer('pointermove', 432);
            await spectator.fixture.whenStable();
            expect(panel.style.width).toBe('min(320px, 100vw)');
            handle.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'ArrowLeft' }),
            );
            await spectator.fixture.whenStable();
            expect(panel.style.width).toBe('min(336px, 100vw)');

            spectator.component.show.set(false);
            await spectator.fixture.whenStable();
            expect(document.body.style.paddingRight).toBe('12px');
        } finally {
            document.body.style.paddingRight = original_padding;
            vi.restoreAllMocks();
        }
    });

    it('starts groups collapsed', () => {
        expect(spectator.component.isExpanded('system|sys-1')).toBe(false);
        spectator.component.toggleGroup('system|sys-1');
        expect(spectator.component.isExpanded('system|sys-1')).toBe(true);
    });

    it('groups observed bindings and reports their active count', () => {
        const system_id = `sys-${Date.now()}`;
        const binding = getModule(system_id, 'Display', 2).variable('power');
        (binding as any)._binding_count = 2;
        (binding.listen() as any).set(true);

        const system = spectator.component
            .systems()
            .find((item) => item.id === system_id);
        const row = system.modules[0].bindings[0];

        expect(system.modules[0].id).toBe('Display_2');
        expect(row.name).toBe('power');
        expect(row.current_value).toBe(true);
        expect(row.active).toBe(true);
        expect(row.count).toBe(2);
        expect(row.updated_at).toBeGreaterThan(0);
    });

    it('resolves system IDs to their display names', async () => {
        const system_id = `sys-${Date.now()}-name`;
        vi.mocked(showSystem).mockImplementation(
            async (id) =>
                (id === system_id
                    ? {
                          id,
                          name: 'Internal room name',
                          display_name: 'Boardroom 1',
                      }
                    : { id, name: id }) as any,
        );
        getModule(system_id, 'Display').variable('power');

        spectator.component.show.set(true);

        await vi.waitFor(() =>
            expect(
                spectator.component
                    .systems()
                    .find((item) => item.id === system_id)?.name,
            ).toBe('Boardroom 1'),
        );
    });

    it('restores the latest driver value after clearing an override', () => {
        const system_id = `sys-${Date.now()}-override`;
        const binding = getModule(system_id, 'Display').variable('input');
        const source = binding.listen() as any;
        source.set('HDMI 1');
        const row = spectator.component
            .systems()
            .find((item) => item.id === system_id).modules[0].bindings[0];

        spectator.component.startOverride(row);
        spectator.component.edit_value.set('HDMI 2');
        spectator.component.saveOverride(row);
        expect(binding.value).toBe('HDMI 2');

        source.set('USB-C');
        expect(binding.value).toBe('HDMI 2');

        spectator.component.clearOverride(row);
        expect(binding.value).toBe('USB-C');
    });
    it('allows search results to collapse without changing the unfiltered groups', () => {
        spectator.component.filter.set('power');
        expect(spectator.component.isExpanded('system|search')).toBe(true);
        spectator.component.toggleGroup('system|search');
        expect(spectator.component.isExpanded('system|search')).toBe(false);
        spectator.component.filter.set('');
        expect(spectator.component.isExpanded('system|search')).toBe(false);
    });

    it('preserves JSON-like strings when an override is applied unchanged', () => {
        const system_id = `sys-${Date.now()}-string`;
        const binding = getModule(system_id, 'Display').variable('label');
        const source = binding.listen() as unknown as {
            set(value: string): void;
        };
        source.set('true');
        const row = spectator.component
            .systems()
            .find((item) => item.id === system_id)!.modules[0].bindings[0];
        spectator.component.startOverride(row);
        spectator.component.saveOverride(row);
        expect(binding.value).toBe('true');
        spectator.component.clearOverride(row);
    });

    it('shows search feedback and clears the search from the panel', () => {
        spectator.component.show.set(true);
        spectator.component.filter.set('no-such-binding-unique-search');
        spectator.detectChanges();
        expect(spectator.element.textContent).toContain('No matching results');
        spectator.click(
            spectator
                .queryAll('button')
                .find(
                    (button) => button.textContent?.trim() === 'Clear search',
                )!,
        );
        expect(spectator.component.filter()).toBe('');
    });
    it('copies the full value from a collapsed binding preview', () => {
        const system_id = `sys-${Date.now()}-copy`;
        const value = {
            data: 'long value '.repeat(1000),
            nested: { enabled: true },
        };
        const binding = getModule(system_id, 'Display').variable('payload');
        const source = binding.listen() as unknown as {
            set(value: unknown): void;
        };
        source.set(value);
        spectator.component.show.set(true);
        spectator.component.filter.set(system_id);
        spectator.detectChanges();
        expect(spectator.query<HTMLDetailsElement>('details')?.open).toBe(
            false,
        );
        spectator.click('[aria-label="Copy payload value"]');
        expect(copy).toHaveBeenCalledWith(JSON.stringify(value, null, 2));
        spectator.detectChanges();
        expect(spectator.element.textContent).toContain('Value copied.');
        expect(
            spectator
                .query('[aria-label="Copy payload value"]')
                ?.textContent?.trim(),
        ).toBe('Copied');
        expect(spectator.component.copyLabel('another-row')).toBe('Copy value');
    });

    it('copies strings without adding quotes or changing whitespace', () => {
        spectator.component.copyValue('  line one\nline two  ');
        expect(copy).toHaveBeenLastCalledWith('  line one\nline two  ');
        spectator.component.copyValue('');
        expect(copy).toHaveBeenLastCalledWith('');
    });

    it('reports clipboard failures without claiming that the value was copied', () => {
        copy.mockReturnValue(false);
        spectator.component.copyValue({ value: 42 }, 'failed-row');
        expect(spectator.component.copyLabel('failed-row')).toBe('Retry copy');
        expect(spectator.component.copy_status()).toBe(
            'Could not copy. Expand the value and copy it manually.',
        );
    });
});

describe('command message pairing', () => {
    const message = (
        id: number,
        direction: 'send' | 'receive',
        value: unknown,
        time: number,
        error = false,
    ): Parameters<typeof pairExecuteMessages>[0][number] => ({
        id,
        direction,
        value,
        time,
        error,
        system_id: 'sys-pairing',
        module_id: 'Display_1',
        module_name: 'Display',
        module_index: 1,
        method: 'power',
    });

    it('pairs concurrent calls to the same method when responses arrive out of order', () => {
        const first = message(1, 'send', [true], 100);
        const second = message(2, 'send', [false], 110);
        const second_response = message(2, 'receive', false, 120);
        const first_response = message(
            1,
            'receive',
            { error: 'offline' },
            130,
            true,
        );
        const pairs = pairExecuteMessages([
            first,
            second,
            second_response,
            first_response,
        ]);
        expect(pairs).toHaveLength(2);
        expect(pairs[0]).toMatchObject({
            id: 1,
            time: 100,
            send: first,
            receive: first_response,
        });
        expect(pairs[1]).toMatchObject({
            id: 2,
            time: 110,
            send: second,
            receive: second_response,
        });
    });

    it('keeps pending calls and responses whose requests have left the history', () => {
        const pairs = pairExecuteMessages([
            message(1, 'send', [], 100),
            message(2, 'receive', null, 120),
        ]);
        expect(pairs[0].receive).toBeUndefined();
        expect(pairs[1].send).toBeUndefined();
        expect(pairs[1].receive?.value).toBeNull();
    });
});
