import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

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
                    output_list: signal([]),
                    outputs: signal([]),
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should show outputs', async () => {
        const service: any = spectator.inject(ControlStateService);
        expect('output-display').toHaveLength(0);
        expect('p').toExist();
        service.output_list.set([{ id: '1' }, { id: '2' }]);
        spectator.detectChanges();
        expect('output-display').toHaveLength(2);
    });

    it('should paginate outputs', async () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: '1' }, { id: '2' }]);
        spectator.detectChanges();
        expect('output-display').toHaveLength(2);
        expect('button').toHaveLength(0);
        service.output_list.set([
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
            { id: '6' },
            { id: '7' },
            { id: '8' },
        ]);
        spectator.detectChanges();
        expect('output-display').toHaveLength(6);
        expect('button').toHaveLength(2);
    });

    /** Output list with the given number of items */
    const outputList = (count: number) =>
        Array.from({ length: count }, (_, i) => ({ id: `${i + 1}` }));

    it('should not add an empty page when outputs fill the last page', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set(outputList(12));
        spectator.detectChanges();
        expect('button').toHaveLength(2);
    });

    it('should move to the last page when the output list shrinks', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set(outputList(8));
        spectator.detectChanges();
        spectator.component.page.set(1);
        service.output_list.set(outputList(4));
        spectator.detectChanges();
        expect(spectator.component.page()).toBe(0);
        expect('output-display').toHaveLength(4);
    });
});
