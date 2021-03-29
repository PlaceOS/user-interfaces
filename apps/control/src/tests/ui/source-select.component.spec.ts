import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
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
                },
            },
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
