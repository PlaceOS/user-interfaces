import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService, generateEventForm } from '@placeos/events';
import { UserListFieldComponent } from '@placeos/form-fields';
import { MeetingFlowFormComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-form.component';
import { MeetingFormDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-form-details.component';
import { CateringListFieldComponent } from 'libs/catering/src/lib/catering-list-field.component';
import { AssetListFieldComponent } from 'libs/form-fields/src/lib/asset-list-field.component';
import { RichTextInputComponent } from 'libs/form-fields/src/lib/rich-text-input.component';
import { SpaceListFieldComponent } from 'libs/form-fields/src/lib/space-list-field.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('MeetingFlowFormComponent', () => {
    let spectator: Spectator<MeetingFlowFormComponent>;
    const createComponent = createRoutingFactory({
        component: MeetingFlowFormComponent,
        providers: [
            MockProvider(EventFormService, {
                    form: generateEventForm({
                        host: 'test@test.com',
                        title: 'Yep',
                        creator: 'jim@j.com',
                        date: Date.now(),
                    } as any),
                    resetForm: jest.fn(),
                },
            ),
            MockProvider(MatBottomSheet, {
                    open: jest.fn(() => ({
                        instance: {},
                        afterDismissed: () => of('1'),
                    })),
                } as any
            ),
            MockProvider(SettingsService, { get: jest.fn(() => false) } as any),
            MockProvider(MatDialog, { open: jest.fn(() => ({ instance: {}, afterClosed: () => of('1') }))} as any)
        ],
        declarations: [
            MockComponent(MeetingFormDetailsComponent),
            MockComponent(UserListFieldComponent),
            MockComponent(SpaceListFieldComponent),
            MockComponent(CateringListFieldComponent),
            MockComponent(AssetListFieldComponent),
            MockComponent(IconComponent),
            MockComponent(RichTextInputComponent),
        ],
        imports: [ReactiveFormsModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show form details', () =>
        expect(spectator.query('meeting-form-details')).toExist());

    it('should show attendee list', () =>
        expect(spectator.query('a-user-list-field')).toExist());

    it('should show room list', () =>
        expect(spectator.query('space-list-field')).toExist());

    it('should show catering', () => {
        spectator.inject(SettingsService).get.mockImplementation(() => true);
        spectator.detectChanges();
        expect(spectator.query('catering-list-field')).toExist();
        spectator.inject(SettingsService).get.mockReset();
    });

    it('should show asset list', () =>
        expect(spectator.query('asset-list-field')).toExist());

    it('should show notes', () =>
        expect(spectator.query('rich-text-input')).toExist());

    it('should allow clearing of form', () => {
        expect(spectator.query('button[clear-form]')).toExist();
        spectator.click('button[clear-form]');
        expect(
            spectator.inject(EventFormService).resetForm
        ).toHaveBeenCalledTimes(1);
    });

    it('should allow navigating to confirm page', () => {
        expect(spectator.query('button[confirm]')).toExist();
        spectator.click('button[confirm]');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledTimes(1);
    });
});
