import { HashMap } from '@user-interfaces/common';

export function createSystemModule(space: HashMap, overrides: HashMap = {}) {
    const mod = {
        name: 'Test System',
        connected: true,
        power: false,

        $power_on: function () {
            this.power = true;
        },
        $power_off: function () {
            this.power = false;
        }
    };
    mod.name = space.name;
    return mod;
}
