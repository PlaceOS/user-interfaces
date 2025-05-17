import { NgModule } from '@angular/core';

import { FindAvailabilityModalComponent } from './find-availability-modal/find-availability-modal.component';
import { UserAvailabilityComponent } from './find-availability-modal/user-availability.component';
import { NewUserModalComponent } from './new-user-modal.component';
import { SelectUserModalComponent } from './select-user-modal.component';
import { UserFormComponent } from './user-form.component';
import { UserPipe } from './user.pipe';
import { WFHSettingsModalComponent } from './wfh-settings-modal.component';

const STANDALONE_COMPONENTS = [
    NewUserModalComponent,
    UserFormComponent,
    WFHSettingsModalComponent,
    UserPipe,
    FindAvailabilityModalComponent,
    UserAvailabilityComponent,
    SelectUserModalComponent,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedUsersModule {}
