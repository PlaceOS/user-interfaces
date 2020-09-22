import { BuildingLevel } from './level.class';

export class Zone {
    public id: string;
    public name: string;
    public level: BuildingLevel;

    constructor(raw_data: Partial<Zone> = {}) {
        this.id = raw_data.id || '';
        this.name = raw_data.name || '';
        this.level = raw_data.level;
    }
}
