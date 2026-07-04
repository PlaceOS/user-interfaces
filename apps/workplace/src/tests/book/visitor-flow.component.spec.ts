import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { InviteVisitorFormComponent } from '@placeos/bookings';
import { mockComponent } from '@placeos/common/tests';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';

import { VisitorFlowComponent } from '../../app/book/visitor-flow.component';

describe('VisitorFlowComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowComponent>;
    const createComponent = createRoutingFactory({
        component: VisitorFlowComponent,
        providers: [MockProvider(Router, { navigate: jest.fn() })],
        declarations: [mockComponent(InviteVisitorFormComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render the invite visitor form', () =>
        expect(spectator.query('invite-visitor-form')).toExist());

    it('should navigate home when the form completes', () => {
        spectator.component.onDone();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(['/']);
    });

    it('should navigate home when the form emits done', () => {
        const form = spectator.query(InviteVisitorFormComponent);
        form!.done.emit();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(['/']);
    });
});
