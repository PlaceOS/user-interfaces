import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

describe('FindSpaceComponent', () => {
    let spectator: Spectator<FindSpaceComponent>;

    const createComponent = createComponentFactory({
        component: FindSpaceComponent,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
        ],
        providers: [],
        declarations: [],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
