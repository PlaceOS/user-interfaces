import { SpaceSelectItemComponent } from '../lib/space-select-item.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '@placeos/components';
import { generateMockSpace, Space } from '../lib/spaces';

describe('SpaceSelectItemComponent', () => {
    let spectator: Spectator<SpaceSelectItemComponent>;
    const createComponent = createComponentFactory({
        component: SpaceSelectItemComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should only show when space is set', () => {
        expect('[space]').not.toExist();
        spectator.setInput({ space: new Space(generateMockSpace()) });
        spectator.detectChanges();
        expect('[space]').toExist();
    });

    it('should show icon button for multi-select', () => {
        spectator.setInput({ space: new Space(generateMockSpace()) });
        expect('[icon]').not.toExist();
        spectator.setInput({ multiple: true });
        spectator.detectChanges();
        expect('[icon]').toExist();
    });

    it('should emit changes to selected state', (done) => {
        spectator.setInput({
            space: new Space(generateMockSpace()),
            multiple: true,
        });
        spectator.detectChanges();
        spectator.component.action.subscribe(() => done());
        spectator.click('button');
    });

    it('should update state icon', () => {
        spectator.setInput({
            space: new Space(generateMockSpace()),
            multiple: true,
        });
        spectator.detectChanges();
        expect('button app-icon').toContainText('close');
        spectator.setInput({ type: 'available' });
        spectator.detectChanges();
        expect('button app-icon').toContainText('add');
    });

    it('should button for single-select', () => {
        spectator.setInput({ space: new Space(generateMockSpace()) });
        expect('[btn]').toExist();
        spectator.setInput({ multiple: true });
        spectator.detectChanges();
        expect('[btn]').not.toExist();
    });
});
