import { HashMap } from '@user-interfaces/common';
import { Building, BuildingLevel } from '@user-interfaces/organisation';

export class MapLocation {
    /** ID of the element on the associated map */
    public readonly id?: string;
    /** Name of the location */
    public readonly name?: string;
    /** X coordinate of the location */
    public readonly x?: number;
    /** Y coordinate of the location */
    public readonly y?: number;
    /** Level details for the location */
    public readonly level: BuildingLevel;
    /** Whether the position is fixed */
    public readonly fixed: boolean;
    /** Accuracy of the location when not fixed */
    public readonly confidence?: number;
    /** Whether location is at a desk */
    public readonly at_desk?: boolean;
    /** Building associated with the location */
    public readonly building: Building;

    /** Display string for the building and level of the location */
    public get display(): string {
        const bld = this.building
        return bld ? `${bld.name}, ${this.level.name}` : this.level.name;
    }

    constructor(raw_data: HashMap) {
        this.id = raw_data.id || raw_data.map_id || raw_data.desk_id;
        this.name = raw_data.name || '';
        this.x = raw_data.x
            ? Math.floor(this.normalise(raw_data.x, raw_data.x_max || 10000) * 10000)
            : null;
        this.y = raw_data.y
            ? Math.floor(this.normalise(raw_data.y, raw_data.x_max || 10000) * 10000)
            : null;
        this.level = this.level || new BuildingLevel();
        this.fixed = this.x === null && this.y === null;
        this.confidence = Math.max(5, Math.min(15, raw_data.confidence || 0));
        this.at_desk = this.id && this.id.indexOf('area-') === 0;
    }

    /** Normalise the given value within the max */
    private normalise(value: number, max: number): number {
        return value / (max * 1.0);
    }
}
