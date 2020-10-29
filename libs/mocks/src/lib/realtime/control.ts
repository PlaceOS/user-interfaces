import { HashMap } from '@user-interfaces/common';

export class MockSystemModule {
    name = 'Test System';
    connected = true;
    power = false;

    $power_on() {
        this.power = true;
    }

    $power_off() {
        this.power = false;
    }
}

export function createSystemModule(space: HashMap, overrides: HashMap = {}) {
    const mod = new MockSystemModule();
    mod.name = space.name;
    return mod;
}
