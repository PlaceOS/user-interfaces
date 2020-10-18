import { HashMap, Identity } from '@user-interfaces/common';


/** Building Level data */
export class BuildingLevel {
    /** ID of the building level zone */
    public readonly id: string;
    /** ID of the building zone associated with the level */
    public readonly parent_id: string;
    /** Name of the level */
    public readonly name: string;
    /** Display name */
    public readonly display_name: string;
    /** Capacity for the level */
    public readonly capacity: number;
    /** URL of the map associated with the level */
    public readonly map_id: string;
    public readonly settings: HashMap = {};
    public readonly locations: readonly Identity[];

    constructor(_data: Partial<BuildingLevel> = {}) {
        this.id = _data.id || '';
        this.parent_id = _data.parent_id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.map_id = _data.map_id || '';
        this.capacity = _data.capacity || 0;
        this.locations = _data.locations || [];
    }
}
