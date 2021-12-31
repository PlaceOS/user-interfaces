import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { sub } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { SourceSelectComponent } from '../../app/ui/source-select.component';

describe('SourceSelectComponent', () => {
    let spectator: Spectator<SourceSelectComponent>;
    const createComponent = createComponentFactory({
        component: SourceSelectComponent,
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    output_list: new BehaviorSubject([]),
                    input_list: new BehaviorSubject([]),
                    setRoute: jest.fn()
                },
            },
        ],
        imports: [MatProgressSpinnerModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty state', async () => {
        expect('p').toContainText('No input sources available');
        const service = spectator.inject(ControlStateService);
        (service as any).input_list.next([{ id: 'i1', name: 'i1', type: 'F' }]);
        (service as any).output_list.next([{ id: 'o1', name: 'o1' }]);
        spectator.setInput({ output: 'o1' });        spectator.detectChanges();
        expect('p').not.toExist();
    });

    it('should list available inputs', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).input_list.next([{ id: 'i1', name: 'i1', type: 'F' }]);
        (service as any).output_list.next([{ id: 'o1', name: 'o1' }]);
        spectator.setInput({ output: 'o1' });        spectator.detectChanges();
        expect('h4').toContainText('F');
        expect('button[source]').toContainText('i1');
        (service as any).input_list.next([{ id: 'i1', name: 'i1', type: 'F' }, { id: 'i2', name: 'i2', type: 'F' }]);        spectator.detectChanges();
        expect(spectator.queryAll('button[source]')).toHaveLength(2);
        expect(spectator.queryAll('[group]')).toHaveLength(1);
        (service as any).input_list.next([{ id: 'i1', name: 'i1', type: 'F' }, { id: 'i2', name: 'i2', type: 'A' }]);        spectator.detectChanges();
        expect(spectator.queryAll('button[source]')).toHaveLength(2);
        expect(spectator.queryAll('[group]')).toHaveLength(2);
    });

    it('should indicate the currently selected input', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).input_list.next([{ id: 'i1', name: 'i1', type: 'F' }]);
        (service as any).output_list.next([{ id: 'o1', name: 'o1' }]);
        spectator.setInput({ output: 'o1' });        spectator.detectChanges();
        expect('button[source]').not.toHaveClass('inverse');
        (service as any).output_list.next([{ id: 'o1', name: 'o1', source: 'i1' }]);        spectator.detectChanges();
        expect('button[source]').toHaveClass('inverse');
    });

    it('should emit selected inputs', (done) => {
        const input = { id: 'i1', name: 'i1', type: 'F' };
        const service = spectator.inject(ControlStateService);
        (service as any).input_list.next([input]);
        (service as any).output_list.next([{ id: 'o1', name: 'o1' }]);
        spectator.setInput({ output: 'o1' });        spectator.detectChanges();
        spectator.component.source.subscribe(id => {
            expect(id).toBe(input);
            expect(service.setRoute).toHaveBeenCalledWith(input.id, 'o1');
            done();
        });
        spectator.click('button[source]');
    });
});
