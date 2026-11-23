import { type Zone } from '@placeos/ts-client';

export interface LockerBank {
    id: string;
    map_id: string;
    level_id: string;
    name: string;
    height: number;
    /** Notes of the locker bank asset */
    notes?: string;
    lockers?: Locker[];
    zone?: Zone;
    zones: string[];
    tags: string[];
    images?: string[];
}

export interface Locker {
    id: string;
    bank_id: string;
    map_id?: string;
    assigned_to?: string;
    /** Name of the user that the locker is assigned to */
    assigned_name?: string;
    name: string;
    available?: boolean;
    accessible: boolean;
    bookable: boolean;
    position: [number, number];
    size: [number, number];
    bank?: LockerBank;
    zone?: Zone;
    features: string[];
}
