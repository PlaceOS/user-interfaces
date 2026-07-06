import { signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { mockComponent } from '@placeos/common/tests';
import { MockPipe } from 'ng-mocks';

import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { DeviceOutputListItemComponent } from '../../app/tabbed-view/output-list-item.component';

describe('DeviceOutputListItemComponent', () => {
    let spectator: Spectator<DeviceOutputListItemComponent>;
    const createComponent = createComponentFactory({
        component: DeviceOutputListItemComponent,
        declarations: [
            mockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    available_inputs: signal([]),
                    system: signal({}),
                    setVolume: jest.fn(),
                    setRoute: jest.fn(),
                    unroute: jest.fn(),
                    setOutput: jest.fn(),
                },
            },
        ],
        imports: [MatRippleModule],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render nothing when no item is provided', () => {
        expect('button').not.toExist();
    });

    it('should show the output name when an item is provided', () => {
        spectator.setInput('item', { id: 'o1', name: 'Main Display' } as any);
        spectator.detectChanges();
        expect('button').toExist();
        expect(spectator.query('button')).toContainText('Main Display');
    });

    it('should highlight the border when active', () => {
        spectator.setInput('item', { id: 'o1', name: 'o1' } as any);
        spectator.setInput('active', false);
        spectator.detectChanges();
        expect('.border-primary').not.toExist();
        spectator.setInput('active', true);
        spectator.detectChanges();
        expect('.border-primary').toExist();
    });

    it('should resolve the source input from available inputs', () => {
        const service: any = spectator.inject(ControlStateService);
        service.available_inputs.set([
            { id: 'i1', name: 'Laptop', type: 'Laptop' },
        ]);
        spectator.setInput('item', {
            id: 'o1',
            name: 'o1',
            source: 'i1',
        } as any);
        spectator.detectChanges();
        expect(spectator.component.input()).toEqual({
            id: 'i1',
            name: 'Laptop',
            type: 'Laptop',
        });
        expect(spectator.query('span')).toContainText('Laptop');
    });

    it('should set the output when its source is not the selected input', () => {
        const service: any = spectator.inject(ControlStateService);
        service.system.set({ selected_input: 'i9' });
        spectator.setInput('item', {
            id: 'o1',
            name: 'o1',
            source: 'i1',
        } as any);
        spectator.detectChanges();
        spectator.click('button');
        expect(service.setOutput).toHaveBeenCalledWith('o1');
        expect(service.unroute).not.toHaveBeenCalled();
    });

    it('should unroute when its source is the selected input', () => {
        const service: any = spectator.inject(ControlStateService);
        service.available_inputs.set([{ id: 'i1', name: 'i1', type: 'F' }]);
        service.system.set({ selected_input: 'i1' });
        spectator.setInput('item', {
            id: 'o1',
            name: 'o1',
            source: 'i1',
        } as any);
        spectator.detectChanges();
        spectator.click('button');
        expect(service.unroute).toHaveBeenCalledWith('o1');
        expect(service.setOutput).not.toHaveBeenCalled();
    });

    it('should route to input when setting mute state off', () => {
        const service: any = spectator.inject(ControlStateService);
        spectator.setInput('item', { id: 'o1', name: 'o1' } as any);
        spectator.detectChanges();
        spectator.component.last_input = 'i5';
        spectator.component.setMute('i7', false);
        expect(service.setRoute).toHaveBeenCalledWith('i5', 'o1');
        expect(spectator.component.last_input).toBe('i7');
    });
});
