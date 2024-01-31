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
    /** URL of the map associated with the level */
    public readonly tags: string[];
    /** Settings overrides associated with the level */
    public readonly settings: Record<string, any> = {};
    /** List of image URLs for the level */
    public readonly images: string[];
    public readonly location: string;
    /** List of points of interest for the level */
    public readonly locations: readonly { id: string; name: string }[];

    constructor(_data: Partial<BuildingLevel> = {}) {
        this.id = _data.id || '';
        this.parent_id = _data.parent_id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.map_id = _data.map_id || '';
        this.capacity = _data.capacity || 0;
        this.location = _data.location || '';
        this.locations = _data.locations || [];
        this.tags = _data.tags || [];
        this.images = _data.images || [];
        const parts = this.display_name.split(' ');
        this.number = (
            (parts.length >= 2
                ? parts[parts.length - 1]
                : this.display_name[0]
            )?.toUpperCase() || ''
        ).substring(0, 2);
    }
}
