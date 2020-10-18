import { RoomConfiguration } from '@user-interfaces/common';
import { BuildingLevel } from '@user-interfaces/organisation';

export type ResourceResponseStatus = 'needsAction' | 'declined' | 'tentative' | 'accepted';

export class Space {
    /** ID of the space resource */
    public readonly id: string;
    /** Display name of the space resource */
    public readonly name: string;
    /** Name to display */
    public readonly display_name: string;
    /** Email address of the resource associated with space */
    public readonly email: string;
    /** Capacity of the space resource */
    public readonly capacity: number;
    /** List of features available at the space resource  */
    public readonly feature_list: string[];
    /** URL to a supporting site for space */
    public readonly support_url: string;
    /** ID of the space on the associated map */
    public readonly map_id: string;
    /** Whether resource is bookable */
    public readonly bookable: boolean;
    /** List of zones the spaces is associated with */
    public readonly zones: string[];
    /** List of available room configurations for this room */
    public readonly configurations: readonly RoomConfiguration[];
    /** Image url */
    public readonly image: string;
    /** Status of the resource */
    public readonly response_status: ResourceResponseStatus;
    /** Level Assoicated with the space */
    public readonly level: BuildingLevel;
    /** List of features associated with the space */
    public readonly features: string;

    constructor(data: Partial<Space> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.display_name = data.display_name || '';
        this.email = (data.email || '').toLowerCase();
        this.capacity = data.capacity || -1;
        this.feature_list = data.feature_list || (data.features as any) || [];
        this.bookable = !!data.bookable;
        this.zones = data.zones || [];
        this.support_url = data.support_url || '';
        this.map_id = data.map_id || '';
        this.image = data.image || '';
        this.configurations = data.configurations || [];
        this.features = data.features || '';
        this.response_status = data.response_status;
        this.level = data.level || new BuildingLevel();
    }
}
