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
    /** QR code image data */
    public readonly qr_code: string;
    /** List of features associated with the desk */
    public readonly features: string[];
    /** List of URLs to images */
    public readonly images: string[];

    constructor(data: Partial<Desk> = {}) {
        this.id = data.id || '';
        this.map_id = data.map_id || data.id || '';
        this.name = data.name || '';
        this.bookable = data.bookable ?? false;
        this.zone = data.zone || new PlaceZone();
        this.groups = data.groups || [];
        this.qr_code = data.qr_code || '';
        this.features = data.features || [];
        this.images = data.images || [];
    }

    public format() {
        const { id, name, bookable, groups, features } = this;
        return {
            id,
            name,
            bookable,
            groups,
            features
        };
    }

    public readonly toJSON = () => this.format();
}
