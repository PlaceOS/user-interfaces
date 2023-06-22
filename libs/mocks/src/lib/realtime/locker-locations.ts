import { HashMap } from '@placeos/common';

class LockerLocationsModule {
    constructor(data: any) {}

    $lockers_allocated_to_me(...args: any[]) {
        return [
            {
                location: 'locker',
                bank_id: '977cb758-4e42-4292-848a-4821f2fb4d74',
                locker_id: 'adda7802-dfd7-467c-b369-d73394ad7084',
                locker_name: '0.105',
                allocated: true,
                group_id: '6c246e35-4a73-475a-8725-0676d78167f4',
            },
        ];
    }
}

export const createLockerLocationsModule = (
    details?: HashMap,
    overrides: HashMap = {}
) =>
    new LockerLocationsModule({
        ...details,
        ...overrides,
    });
