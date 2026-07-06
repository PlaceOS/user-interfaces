import { signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { MockPipe } from 'ng-mocks';

import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { DeviceOutputListComponent } from '../../app/tabbed-view/output-list.component';

describe('DeviceOutputListComponent', () => {
    let spectator: Spectator<DeviceOutputListComponent>;
    const createComponent = createComponentFactory({
        component: DeviceOutputListComponent,
        // Render the real list-item child so the active binding is observable
        // in the DOM (via its border-primary highlight class).
        declarations: [
            mockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    output_list: signal([]),
                    active_output: signal(''),
                    preview_outputs: signal(false),
                    available_inputs: signal([]),
                    system: signal({}),
                    setVolume: vi.fn(),
                    setRoute: vi.fn(),
                    unroute: vi.fn(),
                    setOutput: vi.fn(),
                },
            },
        ],
        imports: [MatRippleModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should not render items when a single output and no preview', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: 'o1' }]);
        spectator.detectChanges();
        expect('device-output-list-item').not.toExist();
    });

    it('should render an item per output when more than one', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: 'o1' }, { id: 'o2' }]);
        spectator.detectChanges();
        expect(spectator.queryAll('device-output-list-item')).toHaveLength(2);
    });

    it('should render items when preview outputs are active', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: 'o1' }]);
        service.preview_outputs.set(true);
        spectator.detectChanges();
        expect(spectator.queryAll('device-output-list-item')).toHaveLength(1);
    });

    it('should mark only the active output as active', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: 'o1' }, { id: 'o2' }]);
        service.active_output.set('o2');
        spectator.detectChanges();
        // Each list-item renders a border-primary highlight only when active.
        expect(spectator.queryAll('.border-primary')).toHaveLength(1);
        service.active_output.set('o1');
        spectator.detectChanges();
        expect(spectator.queryAll('.border-primary')).toHaveLength(1);
    });
});
