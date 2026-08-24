vi.mock('@placeos/ts-client');

import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { User } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { AttendeeListComponent } from '../lib/attendee-list.component';

describe('AttendeeListComponent', () => {
    let spectator: Spectator<AttendeeListComponent>;
    const createComponent = createComponentFactory({
        component: AttendeeListComponent,
        providers: [],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
        ],
        imports: [MockModule(MatTooltipModule)],
    });

    beforeEach(() => {
        vi.mocked(ts_client.get).mockReset();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show attendees', () => {
        expect('[attendee]').not.toExist();
        spectator.setInput({ list: [new User()] });
        spectator.detectChanges();
        expect('[attendee]').toExist();
        spectator.setInput({ list: [new User(), new User()] });
        spectator.detectChanges();
        expect('[attendee]').toHaveLength(2);
    });

    it('should show the host when the attendee list omits them', () => {
        spectator.setInput({
            host: 'host@example.com',
            list: [new User({ email: 'attendee@example.com' })],
        });

        expect(
            spectator.component.final_list().map((user) => user.email),
        ).toEqual(['host@example.com', 'attendee@example.com']);
    });

    it('should keep external host details when directory lookup fails', async () => {
        vi.mocked(ts_client.get).mockRejectedValue(new Error('Not found'));
        spectator.setInput({
            host: 'external.host@vantageeng.au',
            list: [
                new User({
                    name: 'External Host',
                    email: 'external.host@vantageeng.au',
                }),
            ],
        });

        spectator.detectChanges();
        await vi.waitFor(() => expect(ts_client.get).toHaveBeenCalledTimes(2));
        await spectator.fixture.whenStable();
        spectator.detectChanges();

        expect('[attendee]').toHaveText('External Host');
        expect('[attendee]').toHaveText('external.host@vantageeng.au');
    });

    it('should not duplicate or show a hidden host', () => {
        const host = new User({ email: 'host@example.com' });
        const attendee = new User({ email: 'attendee@example.com' });
        spectator.setInput({
            host: host.email,
            list: [host, attendee],
        });

        expect(spectator.component.final_list()).toEqual([host, attendee]);

        spectator.setInput({ show_host: false });

        expect(spectator.component.final_list()).toEqual([attendee]);
    });

    it('should allow closing the component', () =>
        new Promise<void>((done) => {
            expect('button[close]').toExist();
            spectator.component.close.subscribe(() => done());
            spectator.click('button[close]');
        }));
});
