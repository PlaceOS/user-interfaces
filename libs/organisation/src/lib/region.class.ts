export class Region {
    /** PlaceOS zone id of the building */
    public readonly id: string;
    /** Name of the building zone */
    public readonly name: string;
    /** Name to display */
    public readonly display_name: string;
    /** IANA timezone string for building */
    public readonly timezone: string;
    /** List of image URLs for the building */
    public readonly images: string[];
    /** PlaceOS bindings for applications */
    public readonly bindings: Record<string, string>;

    constructor(_data: Partial<Region>) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.timezone = _data.timezone || '';
        this.images = _data.images || [];
        this.bindings = _data.bindings || {};
    }
}
