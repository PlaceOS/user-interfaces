import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { getModule, showSystem } from '@placeos/ts-client';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { BindingDebugPanelComponent } from '../lib/binding-debug-panel.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BindingDebugPanelComponent', () => {
    let spectator: Spectator<BindingDebugPanelComponent>;
    let hotkey_callback: () => void;

    const createComponent = createComponentFactory({
        component: BindingDebugPanelComponent,
        providers: [
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
});
