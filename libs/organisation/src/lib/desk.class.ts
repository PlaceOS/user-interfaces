import { PlaceZone, cleanObject } from '@placeos/ts-client';

const IGNORE_KEYS = ['zone', 'qr_code', 'toJSON'];

export class Desk implements Record<string, any> {
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

    public staff_name?: string;

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
        for (const key in data) {
            if (!(key in this)) this[key] = data[key];
        }
    }

    public format() {
        const data = { ...this };
        for (const key of IGNORE_KEYS) {
            delete data[key];
        }
        cleanObject(data, [undefined, null, []]);
        return data;
    }

    public readonly toJSON = () => this.format();
}
