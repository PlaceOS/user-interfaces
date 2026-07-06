import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

jest.mock('@placeos/ts-client', () => ({ getModule: jest.fn() }));

import { CustomTooltipData, IconComponent } from '@placeos/components';
import * as client from '@placeos/ts-client';
import { ControlStateService } from '../../app/control-state.service';
import { LightingSceneTooltipComponent } from '../../app/ui/lighting-scene-tooltip.component';

describe('LightingSceneTooltipComponent', () => {
    let spectator: Spectator<LightingSceneTooltipComponent>;
    const lighting_scene = signal<number | undefined>(undefined);
    const lighting_scenes = signal<any[]>([]);
    const close_fn = jest.fn();
    const execute_fn = jest.fn(async () => null);
    const createComponent = createComponentFactory({
        component: LightingSceneTooltipComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    id: 'sys-1',
                    lighting_scene,
                    lighting_scenes,
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: close_fn },
            },
        ],
    });

    beforeEach(() => {
        lighting_scene.set(undefined);
        lighting_scenes.set([]);
        close_fn.mockClear();
        execute_fn.mockClear();
        (client.getModule as jest.Mock).mockReturnValue({ execute: execute_fn });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty state when no scenes', () => {
        spectator.detectChanges();
        expect('p').toExist();
        expect('button[state]').not.toExist();
    });

    it('should render a button per scene', () => {
        lighting_scenes.set([
            { id: 1, name: 'Bright', icon: 'light' },
            { id: 2, name: 'Dim', icon: 'dark' },
        ]);
        spectator.detectChanges();
        expect('p').not.toExist();
        const buttons = spectator.queryAll('button[state]');
        expect(buttons).toHaveLength(2);
        expect(buttons[0]).toContainText('Bright');
        expect(buttons[1]).toContainText('Dim');
    });

    it('should mark unselected scenes with inverse class', () => {
        lighting_scenes.set([
            { id: 1, name: 'Bright', icon: 'light' },
            { id: 2, name: 'Dim', icon: 'dark' },
        ]);
        lighting_scene.set(1);
        spectator.detectChanges();
        const buttons = spectator.queryAll('button[state]');
        expect(buttons[0]).not.toHaveClass('inverse');
        expect(buttons[1]).toHaveClass('inverse');
    });

    it('should execute select_lighting_scene with scene name on click', () => {
        lighting_scenes.set([{ id: 1, name: 'Bright', icon: 'light' }]);
        spectator.detectChanges();
        spectator.click('button[state]');
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'System');
        expect(execute_fn).toHaveBeenCalledWith('select_lighting_scene', [
            'Bright',
        ]);
    });

    it('should not execute when module is missing', () => {
        (client.getModule as jest.Mock).mockReturnValue(null);
        spectator.component.setScene('Bright');
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should close via the tooltip data', () => {
        spectator.component.close();
        expect(close_fn).toHaveBeenCalled();
    });
});
