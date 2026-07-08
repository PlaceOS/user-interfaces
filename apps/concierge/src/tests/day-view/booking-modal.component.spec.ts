import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';

import { inject, Injector, signal } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { generateEventForm } from '@placeos/events';
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
            MockProvider(MAT_DIALOG_DATA, {}),
            MockProvider(MatDialogRef, {
                close: vi.fn(),
            }),
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        model,
                        form,
                        newForm: vi.fn(),
                        postForm: vi.fn(async () => null),
                        loading: signal(''),
                    } as any;
                },
            },
            MockProvider(SettingsService, { get: vi.fn() }),
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
        (service.loading as any).set('Testing');
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should allow submitting form', () => {
        const service = spectator.inject(EventFormService);
        (service.loading as any).set('');
        spectator.detectChanges();
        expect(service.postForm).not.toHaveBeenCalled();
        spectator.click('footer button');
        expect(service.postForm).toHaveBeenCalled();
    });
});
