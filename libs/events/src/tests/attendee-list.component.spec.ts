vi.mock('@placeos/ts-client/staff', { spy: true });

import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { User } from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import { PlaceCalendarUser, staff } from '@placeos/ts-client/staff';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { AttendeeListComponent } from '../lib/attendee-list.component';
import { httpFailure } from './staff-test-data';

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
        vi.mocked(staff.query).mockReset();
        vi.mocked(staff.show).mockReset();
        vi.mocked(staff.query).mockResolvedValue(mockReply([]));
        vi.mocked(staff.show).mockResolvedValue(httpFailure(404));
        spectator = createComponent();
    });

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

    it('should use external host details from the attendee list', async () => {
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
        await spectator.fixture.whenStable();

        expect('[attendee]').toHaveText('External Host');
        expect('[attendee]').toHaveText('external.host@vantageeng.au');
        expect(staff.query).not.toHaveBeenCalled();
        expect(staff.show).not.toHaveBeenCalled();
    });

    it('should resolve an aliased host name by email prefix', async () => {
        vi.mocked(staff.query).mockResolvedValue(
            mockReply([
                mockData(PlaceCalendarUser, {
                    name: 'Katherine Savage',
                    email: 'katherine.savage@hio.com.au',
                }),
            ]),
        );
        spectator.setInput({
            host: 'katherine.savage@royhill.com.au',
            list: [
                new User({
                    name: 'Katherine Savage',
                    email: 'katherine.savage@hio.com.au',
                }),
            ],
        });

        spectator.detectChanges();
        await vi.waitFor(() =>
            expect(staff.query).toHaveBeenCalledWith({
                filter: "startsWith(mail,'katherine.savage')",
            }),
        );
        await spectator.fixture.whenStable();
        await vi.waitFor(() => {
            spectator.detectChanges();
            const [host_row] = spectator.queryAll('[attendee]');
            expect(host_row).toHaveText('Katherine Savage');
            expect(host_row).toHaveText('katherine.savage@royhill.com.au');
        });
    });

    it('should keep the host email when no prefix match exists', async () => {
        vi.mocked(staff.query).mockResolvedValue(httpFailure(404));
        spectator.setInput({
            host: 'missing.host@royhill.com.au',
            list: [new User({ email: 'attendee@hio.com.au' })],
        });

        spectator.detectChanges();
        await vi.waitFor(() =>
            expect(staff.query).toHaveBeenCalledWith({
                filter: "startsWith(mail,'missing.host')",
            }),
        );
        await spectator.fixture.whenStable();
        spectator.detectChanges();

        const [host_row] = spectator.queryAll('[attendee]');
        expect(host_row).toHaveText('missing.host@royhill.com.au');
        expect(host_row).not.toHaveText('Not found');
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

    it('should label external attendees only when asked', () => {
        spectator.setInput({
            list: [
                new User({ email: 'staff@dev.place.tech' }),
                new User({ email: 'guest@example.com' }),
            ],
        });
        expect('[external]').not.toExist();

        spectator.setInput({ mark_external: true });

        expect('[external]').toHaveLength(1);
        const [, guest_row] = spectator.queryAll('[attendee]');
        expect(guest_row.querySelector('[external]')).toExist();
    });

    it('should allow closing the component', () =>
        new Promise<void>((done) => {
            expect('button[close]').toExist();
            spectator.component.close.subscribe(() => done());
            spectator.click('button[close]');
        }));
});
