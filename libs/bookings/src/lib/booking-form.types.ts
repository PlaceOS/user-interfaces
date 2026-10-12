import { BookingType, User } from '@placeos/common';
import { PlaceZone } from '@placeos/ts-client';

export type BookingFlowView = 'form' | 'map' | 'confirm' | 'success';

export interface BookingFlowOptions {
    /** Type of booking being made */
    type: BookingType;
    /** Zone to check available */
    zone_id?: string;
    /** List of features that the asset should associate */
    features?: string[];
    /** Whether booking is for a group */
    group?: boolean;
    /** Recurrence Pattern */
    pattern?: 'none' | 'daily' | 'weekly' | 'monthly';
    /** Recurrence ending */
    recurr_end?: number;
    /** List of group members to book for */
    members?: User[];
    /** Whether to only show favourite rooms */
    show_fav?: boolean;
    /** Whether to group bookings */
    disable_date?: boolean;
    /** Whether resource has accessibility options */
    show_accessible?: boolean;
}

export interface BookingAsset {
    id: string;
    map_id?: string;
    display_name?: string;
    name: string;
    bookable: boolean;
    zone?: PlaceZone;
    level?: PlaceZone;
    location?: string;
    images?: string[];
    groups?: string[];
    assigned_to?: string;
    features: string[];
}

export interface GroupBookingFailure {
    email: string;
    name: string;
    asset_id?: string;
    asset_name?: string;
    error: string;
}
