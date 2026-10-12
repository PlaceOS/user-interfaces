import { dayBoundsOn, slotOn } from '../bookings/bookings.env';

export { lockerForWorker } from './locker.seed';
export type { LockerFixture, LockerIdentity } from './locker.seed';

export const LOCKER_BOOKING_DAY = 1;

export function lockerSlot(workerIndex: number) {
    return slotOn(LOCKER_BOOKING_DAY, 9 + workerIndex, 60);
}

export function lockerWindow() {
    return dayBoundsOn(LOCKER_BOOKING_DAY);
}
