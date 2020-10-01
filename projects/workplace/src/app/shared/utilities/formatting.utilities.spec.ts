import {
    formatAttendeesWithHost,
    formatAttendees,
    formatDate,
    formatTime,
    formatPeriodWithDuration,
    formatPeriod,
    formatRecurrence,
    formatSpaces,
    formatDuration,
} from './formatting.utilities';
import { User } from 'src/app/users/user.class';
import { generateMockUser } from 'src/app/users/user.utilities';

import { humaniseDuration } from './general.utilities';
import { Space } from 'src/app/spaces/space.class';
import { generateMockSpace } from 'src/app/spaces/space.utilities';

import * as dayjs from 'dayjs';

describe('Formatting Utilites', () => {
    it('formatAttendeesWithHost should return function', () => {
        const fn = formatAttendeesWithHost(new User(generateMockUser()));
        expect(fn instanceof Function).toBeTruthy();
        expect(typeof fn([])).toBe('string');
    });

    it('formatAttendees should return human readable attendee list string', () => {
        const user_list: User[] = Array(10)
            .fill(0)
            .map((i) => new User(generateMockUser()));
        // Test without host
        const list_string = formatAttendees(user_list);
        expect(typeof list_string).toBe('string');
        for (const user of user_list) {
            expect(list_string).toContain(user.name);
        }
        expect(list_string).toContain('10 Attendees');
        const host = new User(generateMockUser());
        // Test with host
        const list_string_with_host = formatAttendees(user_list, host);
        expect(typeof list_string_with_host).toBe('string');
        for (const user of user_list) {
            expect(list_string_with_host).toContain(user.name);
        }
        expect(list_string_with_host).toContain(host.name);
        expect(list_string_with_host).toContain('11 Attendees');
        expect(formatAttendees([host, ...user_list], host)).toContain('11 Attendees');
        expect(formatAttendees([host])).toContain('1 Attendee;');
    });

    it('formatDate should return human readable date', () => {
        let date = dayjs().startOf('m');
        expect(formatDate(date.valueOf())).toBe(date.format('DD MMMM YYYY'));
        date = date.add(Math.floor(Math.random() * 480) * 5, 'm');
        expect(formatDate(date.valueOf())).toBe(date.format('DD MMMM YYYY'));
    });

    it('formatTime should return human readable time', () => {
        let date = dayjs().startOf('m');
        expect(formatTime(date.valueOf())).toBe(date.format('h:mm A'));
        date = date.add(Math.floor(Math.random() * 240) * 5, 'm');
        expect(formatTime(date.valueOf())).toBe(date.format('h:mm A'));
    });

    it('formatPeriodWithDuration should return a function', () => {
        const fn = formatPeriodWithDuration(60);
        expect(fn instanceof Function).toBeTruthy();
        expect(typeof fn(dayjs().format('HH:mm'))).toBe('string');
    });

    it('formatPeriod should return human readable period', () => {
        let date = dayjs().startOf('m');
        let end = date.add(60, 'm');
        const period_string = formatPeriod(date.format('HH:mm'), 60);
        expect(period_string).toContain(date.format('h:mm A'));
        expect(period_string).toContain(end.format('h:mm A'));
        expect(period_string).toContain(humaniseDuration(60));
        const duration = Math.floor(Math.random() * 24 + 6) * 5;
        date = date.add(duration, 'm');
        end = date.add(duration, 'm');
        const another_period_string = formatPeriod(date.format('HH:mm'), duration);
        expect(another_period_string).toContain(date.format('h:mm A'));
        expect(another_period_string).toContain(end.format('h:mm A'));
        expect(another_period_string).toContain(humaniseDuration(duration));
    });

    it('formatDuration should return human readable duration', () => {
        expect(formatDuration(60)).toBe('1 hour');
        const duration = Math.floor(Math.random() * 24) * 5;
        expect(formatDuration(duration)).toBe(humaniseDuration(duration));
    });

    it('formatRecurrence should return human readable recurrence string', () => {
        expect(formatRecurrence({ period: 0, end: 0 })).toBe('No recurrence');
        expect(formatRecurrence({ period: 1, end: 0 })).toBe('Daily forever');
        expect(formatRecurrence({ period: 6, end: 0 })).toBe('No recurrence');
        expect(formatRecurrence({ period: 'Test', end: 0 })).toContain('Test');
        const date = dayjs().add(Math.floor(Math.random() * 60), 'd');
        expect(formatRecurrence({ period: 1, end: date.valueOf() })).toBe(
            `Daily until ${date.format('DD MMM YYYY')}`
        );
    });

    it('formatSpaces should return human readable string for a space or list of spaces', () => {
        const spaces = Array(10)
            .fill(0)
            .map((i) => generateMockSpace({}));
        expect(formatSpaces(null)).toBe('No selected space');
        expect(formatSpaces(spaces[0] as Space)).toContain(spaces[0].name);
        expect(formatSpaces([spaces[0] as Space])).toContain(spaces[0].name);
        expect(formatSpaces(spaces[0] as Space)).toContain(`(${spaces[0].capacity}`);
        // spaces[0].capacity = 1;
        // expect(formatSpaces(spaces[0] as Space)).toContain(`(1 person)`);
        spaces[0].capacity = 0;
        expect(formatSpaces(spaces[0] as Space).indexOf('(')).toBe(-1);
        const space_string = formatSpaces(spaces as Space[]);
        expect(space_string).toBe('10 Spaces');
    });
});
