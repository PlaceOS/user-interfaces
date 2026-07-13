import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockDirective, MockModule } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { BindingDirective, CustomTooltipData } from '@placeos/components';
import * as client from '@placeos/ts-client';
import { ControlStateService } from '../../app/control-state.service';
import { LightingLevelsTooltipComponent } from '../../app/ui/lighting-levels-tooltip.component';

describe('LightingLevelsTooltipComponent', () => {
    let spectator: Spectator<LightingLevelsTooltipComponent>;
    const system_id = signal<string>('sys-1');
    const lighting_levels = signal<any[]>([]);
    const close_fn = vi.fn();
    const execute_fn = vi.fn(async () => null);
    const createComponent = createComponentFactory({
        component: LightingLevelsTooltipComponent,
        declarations: [MockDirective(BindingDirective)],
        imports: [MockModule(MatSliderModule), FormsModule],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    id: 'sys-1',
                    system_id,
                    lighting_levels,
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: close_fn },
            },
        ],
    });

    beforeEach(() => {
        system_id.set('sys-1');
        lighting_levels.set([]);
        close_fn.mockClear();
        execute_fn.mockClear();
        (client.getModule as any).mockReturnValue({ execute: execute_fn });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty state when no lights', () => {
        spectator.detectChanges();
        expect('p').toExist();
        expect('mat-slider').not.toExist();
    });

    it('should render a slider per light with its name', () => {
        lighting_levels.set([
            { name: 'Overheads', binding: 'b1', value: 50, area: 'a1' },
            { name: 'Wall', binding: 'b2', value: 20, area: 'a2' },
        ]);
        spectator.detectChanges();
        expect('p').not.toExist();
        expect(spectator.queryAll('mat-slider')).toHaveLength(2);
        expect(spectator.element).toContainText('Overheads');
        expect(spectator.element).toContainText('Wall');
    });

    it('should debounce and execute set_lighting_level with value and area', async () => {
        const light = { name: 'Overheads', binding: 'b1', value: 50, area: 'a1' };
        spectator.component.setLevel(light, 75);
        expect(execute_fn).not.toHaveBeenCalled();
        await new Promise((r) => setTimeout(r, 70));
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'Lighting');
        expect(execute_fn).toHaveBeenCalledWith('set_lighting_level', [
            75,
            'a1',
        ]);
    });

    it('should only execute once for rapid changes (debounce)', async () => {
        const light = { name: 'Overheads', binding: 'b1', value: 50, area: 'a1' };
        spectator.component.setLevel(light, 10);
        spectator.component.setLevel(light, 20);
        spectator.component.setLevel(light, 30);
        await new Promise((r) => setTimeout(r, 70));
        expect(execute_fn).toHaveBeenCalledTimes(1);
        expect(execute_fn).toHaveBeenCalledWith('set_lighting_level', [
            30,
            'a1',
        ]);
    });

    it('should not execute when system id is empty', async () => {
        system_id.set('');
        spectator.component.setLevel({ area: 'a1' }, 40);
        await new Promise((r) => setTimeout(r, 70));
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should not execute when module is missing', async () => {
        (client.getModule as any).mockReturnValue(null);
        spectator.component.setLevel({ area: 'a1' }, 40);
        await new Promise((r) => setTimeout(r, 70));
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should close via the tooltip data', () => {
        spectator.component.close();
        expect(close_fn).toHaveBeenCalled();
    });
});
