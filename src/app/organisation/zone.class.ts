import { BuildingLevel } from './level.class';
import { HashMap } from '../common/types';

export class Zone {

    public id : string;

    public name : string;

    public level : BuildingLevel;

    constructor(raw_data: HashMap) {
        this.level = raw_data.level;
        this.name = raw_data.name;
        this.id = raw_data.id;
    }
}
