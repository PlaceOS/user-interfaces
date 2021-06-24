import { PlaceZone } from '@placeos/ts-client';

export class Desk {
    /** ID of the desk also map_id */
    public readonly id: string;
    /** ID of the desk on the associated map */
    public readonly map_id: string;
    /** Name of the desk */
    public readonly name: string;
    /** Whether desk is available / bookable */
    public readonly bookable: boolean;
    /** Zone/Level of the desk */
    public readonly zone: PlaceZone;
    /** Group/Department allocated to the desk */
    public readonly groups: string[];

    constructor(data: Partial<Desk> = {}) {
        this.id = data.id || '';
        this.map_id = data.map_id || data.id || '';
        this.name = data.name || '';
        this.bookable = data.bookable ?? false;
        this.zone = data.zone || new PlaceZone();
        this.groups = data.groups || [];
    }

    public format() {
        const { id, name, bookable, groups } = this;
        return {
            id,
            name,
            bookable,
            groups,
        };
    }

    public readonly toJSON = () => this.format();
}
