import { Validators } from '@angular/forms';

export let mockForm = {
    id: 1,
    host: ['host@test.com', Validators.required],
    organiser: ['organiser@test.com', Validators.required],
    creator: ['creator@test.com', Validators.required],
    title: ['', Validators.required],
    date: [0, Validators.required],
    duration: 0,
    attendees: '' as any,
    markAllAsTouched: jest.fn(() => {}),
};

export class mockRouterStub {
    navigate = jest.fn(() => {});
}
