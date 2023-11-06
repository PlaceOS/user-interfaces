import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { BookingModalComponent } from '../../app/day-view/booking-modal.component';
import { EventFormComponent } from '../../app/day-view/event-form.component';
import { SettingsService } from '@placeos/common';

describe('BookingModalComponent', () => {
    let spectator: Spectator<BookingModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        declarations: [
            MockComponent(EventFormComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, {}),
            MockProvider(MatDialogRef, {
                close: jest.fn(),
            }),
            MockProvider(EventFormService, {
                form: null,
                newForm: jest.fn(),
                postForm: jest.fn(async () => null),
                loading: new BehaviorSubject(''),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
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
