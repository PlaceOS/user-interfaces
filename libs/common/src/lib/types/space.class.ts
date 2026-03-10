import { getUnixTime } from 'date-fns';
import { BuildingLevel } from './org.classes';

interface CalendarAvailability {
    duration: number;
    date: number;
    status: string;
}

export type ResourceResponseStatus =
    | 'needsAction'
    | 'declined'
    | 'tentative'
    | 'accepted';

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
    /** URL to a supporting site for space */
    public readonly camera_url: string;
    /** URL to a supporting site for space */
    public readonly camera_snapshot_url: string;
    /** URLs to camera snapshots for space */
    public readonly camera_snapshot_urls: string[];
    /** URL to an external booking service */
    public readonly room_booking_url: string;
    /** ID of the space on the associated map */
    public readonly map_id: string;
    /** Whether resource is bookable */
    public readonly bookable: boolean;
    /** List of zones the spaces is associated with */
    public readonly zones: string[];
    /** Image url */
    public readonly images: string[];
    /** Status of the resource */
    public readonly response_status: ResourceResponseStatus;
    /** Level Assoicated with the space */
    public readonly level: BuildingLevel;
    /** List of features associated with the space */
    public readonly features: string[];
    /** Whether the space bookings need approval */
    public readonly approval: boolean;
    /** Time that the room was created */
    public readonly created_at: number;

    public readonly availability: CalendarAvailability[];

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
        this.camera_url = data.camera_url || '';
        this.camera_snapshot_urls = Array.isArray(
            (data as any).camera_snapshot_urls,
        )
            ? ((data as any).camera_snapshot_urls as string[]).filter(Boolean)
            : data.camera_snapshot_url
              ? [data.camera_snapshot_url]
              : [];
        this.camera_snapshot_url =
            data.camera_snapshot_url || this.camera_snapshot_urls[0] || '';
        this.room_booking_url = data.room_booking_url || '';
        this.map_id = data.map_id || '';
        this.images = data.images || [];
        this.features = data.features || [];
        this.response_status = data.response_status || 'tentative';
        this.level = data.level || new BuildingLevel();
        this.availability = data.availability || [];
        this.approval = data.approval ?? false;
        this.created_at = data.created_at ?? getUnixTime(Date.now());
    }

    public inUseAt(start: number, duration: number): boolean {
        const end = start + duration * 60 * 1000;
        return (
            this.availability.filter(
                (i) =>
                    i.date == start &&
                    i.date + i.duration * 60 * 1000 == end &&
                    i.status !== 'free',
            ).length > 0
        );
    }
}
