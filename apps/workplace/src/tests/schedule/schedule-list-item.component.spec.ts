import { FormsModule } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { MockComponent, MockPipe } from 'ng-mocks';

import { ScheduleListItemComponent } from '../../app/schedule/schedule-list-item.component';

describe('ScheduleListItemComponent', () => {
    let spectator: SpectatorRouting<ScheduleListItemComponent>;
    const createComponent = createRoutingFactory({
        component: ScheduleListItemComponent,
        declarations: [MockComponent(IconComponent), MockPipe(SpacePipe)],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show event details', () => {
        expect('[item]').not.toExist();
        spectator.setInput({ item: new CalendarEvent() as any });
        spectator.detectChanges();
        expect('[item]').toExist();
    });

    it('should show date', () => {
        expect('[date]').not.toExist();
        spectator.setInput({
            item: { id: 'date', date: 0, duration: 0 } as any,
        });
        spectator.detectChanges();
        expect('[date]').toExist();
    })
});
