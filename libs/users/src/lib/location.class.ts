import { HashMap } from '@placeos/common';
import { getUnixTime } from 'date-fns';

export class MapLocation {
    /** Source that the location was generated */
    public type: 'desk' | 'wireless' | 'meeting' | 'other';
    /** Details of the location */
    public position: string | { x: number, y: number };
    /** Accuracy of the location data */
    public variance: number;
    /** Unix epoch in seconds that the data was last updated */
    public last_seen: number;
    /** ID of the level associated with the location */
    public level: string;
    /** ID of the building associated with the location */
    public building: string;
    /** Whether user is currently at the location if fixed */
    public at_location: boolean;
    /**  */
    public coordinates_from:
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right';

    constructor(_data: HashMap = {}) {
        this.type = _data.type || _data.location || 'other';
        this.position = _data.position ||
            _data.map_id || _data.asset_id || {
                x: _data.x / _data.map_width || 0,
                y: _data.y / _data.map_height || 0,
            };
        this.variance = _data.variance || 0;
        this.last_seen = _data.last_seen || getUnixTime(new Date());
        this.level = _data.level;
        this.building = _data.building;
        this.at_location = !!_data.at_location;
        this.coordinates_from = _data.coordinates_from || 'top-left';
    }
}
