import { FormControl, FormGroup } from '@angular/forms';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { MeetingFormDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-form-details.component';
import { MockComponent } from 'ng-mocks';

describe('MeetingFormDetailsComponent', () => {
    let spectator: Spectator<MeetingFormDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: MeetingFormDetailsComponent,
        providers: [{ provide: SettingsService, useValue: { get: jest.fn() } }],
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput({
            form: new FormGroup({
                title: new FormControl(),
                date: new FormControl(),
                duration: new FormControl(),
            }),
        });
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow for input of title', () =>
        expect(spectator.query('input[name="title"]')).toExist());

    it('should allow for setting the date', () =>
        expect(spectator.query('[name="date"]')).toExist());

    it('should allow for setting the start time', () =>
        expect(spectator.query('[name="start-time"]')).toExist());

    it('should allow for setting the duration', () =>
        expect(spectator.query('[name="end-time"]')).toExist());

    it('should allow customising the max duration', () => {
        expect(spectator.component.max_duration).toBe(480);
        spectator.inject(SettingsService).get.mockImplementation(() => 240);
        expect(spectator.component.max_duration).toBe(240);
    });
});
