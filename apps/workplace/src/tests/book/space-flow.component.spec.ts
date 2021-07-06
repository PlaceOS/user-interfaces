import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { EventFormService } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { FlowSuccessComponent } from '../../app/book/flow-success.component';
import { BookSpaceFlowComponent } from '../../app/book/space-flow.component';
import { SpaceFlowConfirmComponent } from '../../app/book/space-flow/confirm.component';
import { SpaceFlowFindComponent } from '../../app/book/space-flow/find.component';
import { SpaceFlowFormComponent } from '../../app/book/space-flow/form.component';

describe('BookSpaceFlowComponent', () => {
    let spectator: SpectatorRouting<BookSpaceFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookSpaceFlowComponent,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    loadForm: jest.fn(),
                    newForm: jest.fn(),
                    setView: jest.fn(),
                    view: '',
                    last_success: null,
                },
            },
        ],
        declarations: [
            MockComponent(SpaceFlowFindComponent),
            MockComponent(SpaceFlowFormComponent),
            MockComponent(SpaceFlowConfirmComponent),
            MockComponent(FlowSuccessComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form page', () => {
        expect('space-flow-form').toExist();
        const service = spectator.inject(EventFormService);
        (service as any).view = 'confirm';
        spectator.detectChanges();
        expect('space-flow-form').not.toExist();
    });

    it('should show find space page', () => {
        expect('space-flow-find').not.toExist();
        const service = spectator.inject(EventFormService);
        (service as any).view = 'find';
        spectator.detectChanges();
        expect('space-flow-find').toExist();
    });

    it('should show confirm page', () => {
        expect('space-flow-confirm').not.toExist();
        const service = spectator.inject(EventFormService);
        (service as any).view = 'confirm';
        spectator.detectChanges();
        expect('space-flow-confirm').toExist();
    });

    it('should show success page', () => {
        expect('flow-success').not.toExist();
        const service = spectator.inject(EventFormService);
        (service as any).view = 'success';
        spectator.detectChanges();
        expect('flow-success').toExist();
    });
});
