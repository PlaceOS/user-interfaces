import { HashMap, Identity } from '@placeos/common';

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
    /** Number or letter representing the level */
    public readonly number: string;
    /** URL of the map associated with the level */
    public readonly map_id: string;
    /** Settings overrides associated with the level */
    public readonly settings: HashMap = {};
    /** List of points of interest for the level */
    public readonly locations: readonly Identity[];

    constructor(_data: Partial<BuildingLevel> = {}) {
        this.id = _data.id || '';
        this.parent_id = _data.parent_id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.map_id = _data.map_id || '';
        this.capacity = _data.capacity || 0;
        this.locations = _data.locations || [];
        const parts = this.display_name.split(' ');
        this.number =
            (parts.length >= 2
                ? parts[parts.length - 1]
                : this.display_name[0]
            )?.toUpperCase() || '';
    }
}
