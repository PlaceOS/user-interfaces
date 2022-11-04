import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { BookCodeFlowComponent } from '../../app/book/code-flow.component';

describe('BookCodeFlowComponent', () => {
    let spectator: SpectatorRouting<BookCodeFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookCodeFlowComponent,
        providers: [
            MockProvider(Router, { navigate: jest.fn() } ),
            MockProvider(EventFormService),
            MockProvider(BookingFormService),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
