import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { mockComponent } from '@placeos/common/tests';
import {
    ActionFieldComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { MockProvider } from 'ng-mocks';

import { AssetListFieldComponent } from '@placeos/assets';
import { CateringListFieldComponent } from '@placeos/catering';
import { SettingsService } from '@placeos/common';
import { generateEventForm } from '@placeos/events';
import { SpaceListFieldComponent } from '@placeos/form-fields';
import { EventFormComponent } from '../../app/day-view/event-form.component';

describe('EventFormComponent', () => {
    let spectator: Spectator<EventFormComponent>;
    const createComponent = createComponentFactory({
        component: EventFormComponent,
        declarations: [
            mockComponent(DateFieldComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(DurationFieldComponent),
            mockComponent(UserSearchFieldComponent),
            mockComponent(UserListFieldComponent),
            mockComponent(ActionFieldComponent),
            mockComponent(CateringListFieldComponent),
            mockComponent(AssetListFieldComponent),
            mockComponent(SpaceListFieldComponent),
        ],
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow selecting spaces', async () => {
        spectator.setInput({ form: generateEventForm() });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect('space-list-field').toExist();
    });
});
