import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { CustomTooltipData, IconComponent } from '@placeos/components';
import {
    startTestPlaceClient,
    type TestPlaceClient,
} from 'libs/components/src/tests/test-place-client';
import { ControlStateService } from '../../app/control-state.service';
import { LightingSceneTooltipComponent } from '../../app/ui/lighting-scene-tooltip.component';

describe('LightingSceneTooltipComponent', () => {
    let place: TestPlaceClient;
    let spectator: Spectator<LightingSceneTooltipComponent>;
    const lighting_scene = signal<number | undefined>(undefined);
    const lighting_scenes = signal<unknown[]>([]);
    const execute_fn = vi.fn(async () => null);
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
                useValue: { close: vi.fn() },
            },
        ],
    });

    beforeEach(() => {
        place = startTestPlaceClient();
        lighting_scene.set(undefined);
        lighting_scenes.set([]);
        execute_fn.mockClear();
        place.useExecute(execute_fn);
        spectator = createComponent();
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
        expect(place.modules()).toContain('sys-1|System_1');
        expect(execute_fn).toHaveBeenCalledWith('select_lighting_scene', [
            'Bright',
        ]);
    });
});
