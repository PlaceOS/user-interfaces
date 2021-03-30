import { waitForAsync } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { ControlAdvancedViewComponent } from '../app/advanced-view.component';
import { ControlStateService } from '../app/control-state.service';
import { OutputDisplayComponent } from '../app/ui/output-display.component';

describe('ControlAdvancedViewComponent', () => {
    let spectator: Spectator<ControlAdvancedViewComponent>;
    const createComponent = createComponentFactory({
        component: ControlAdvancedViewComponent,
        declarations: [MockComponent(OutputDisplayComponent)],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    output_list: new BehaviorSubject([]),
                    outputs: new BehaviorSubject([]),
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();

    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show outputs', waitForAsync(async () => {
        const service: any = spectator.inject(ControlStateService);
        expect('output-display').toHaveLength(0);
        expect('p').toExist();
        service.output_list.next([{ id: '1' }, { id: '2' }]);        spectator.detectChanges();
        expect('output-display').toHaveLength(2);
    }));

    it('should paginate outputs', waitForAsync(async () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.next([{ id: '1' }, { id: '2' }]);        spectator.detectChanges();
        expect('output-display').toHaveLength(2);
        expect('button').toHaveLength(0);
        service.output_list.next([
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
            { id: '6' },
            { id: '7' },
            { id: '8' },
        ]);        spectator.detectChanges();
        expect('output-display').toHaveLength(6);
        expect('button').toHaveLength(2);
    }));
});
