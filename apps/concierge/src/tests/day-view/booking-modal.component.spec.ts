import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { BookingModalComponent } from '../../app/day-view/booking-modal.component';
import { EventFormComponent } from '../../app/day-view/event-form.component';

describe('BookingModalComponent', () => {
    let spectator: Spectator<BookingModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        declarations: [
            MockComponent(EventFormComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} },
            {
                provide: MatDialogRef,
                useValue: {
                    close: jest.fn(),
                },
            },
            {
                provide: EventFormService,
                useValue: {
                    form: null,
                    newForm: jest.fn(),
                    postForm: jest.fn(),
                    loading: new BehaviorSubject(''),
                },
            },
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form', () => {
        expect('event-form').toExist();
    });

    it('should handle loading state', () => {
        expect('[loading]').not.toExist();
        const service = spectator.inject(EventFormService);
        (service.loading as any).next('Testing');
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should allow submitting form', () => {
        const service = spectator.inject(EventFormService);
        (service.loading as any).next('');
        spectator.detectChanges();
        expect(service.postForm).not.toHaveBeenCalled();
        spectator.click('footer button');
        expect(service.postForm).toHaveBeenCalled();
    });
});
