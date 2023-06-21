import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    ActionFieldComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EventFormComponent } from '../../app/day-view/event-form.component';
import { AssetListFieldComponent } from 'libs/assets/src/lib/asset-list-field.component';
import { CateringListFieldComponent } from 'libs/catering/src/lib/catering-list-field.component';
import { SettingsService } from '@placeos/common';
import { SpaceListFieldComponent } from 'libs/form-fields/src/lib/space-list-field.component';
import { generateEventForm } from '@placeos/events';

describe('EventFormComponent', () => {
    let spectator: Spectator<EventFormComponent>;
    const createComponent = createComponentFactory({
        component: EventFormComponent,
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(UserListFieldComponent),
            MockComponent(ActionFieldComponent),
            MockComponent(CateringListFieldComponent),
            MockComponent(AssetListFieldComponent),
            MockComponent(SpaceListFieldComponent),
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
