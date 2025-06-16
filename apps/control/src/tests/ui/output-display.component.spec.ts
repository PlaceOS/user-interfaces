import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { BindingDirective } from 'libs/components/src/lib/binding.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ControlStateService } from '../../app/control-state.service';
import { OutputDisplayComponent } from '../../app/ui/output-display.component';

describe('OutputDisplayComponent', () => {
    let spectator: Spectator<OutputDisplayComponent>;
    const createComponent = createComponentFactory({
        component: OutputDisplayComponent,
        declarations: [
            MockDirective(BindingDirective),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    input_list: new BehaviorSubject([]),
                },
            },
        ],
        imports: [MatSliderModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
