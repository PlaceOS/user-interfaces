import { PlaceZone } from '@placeos/ts-client';

export interface LockerBank {
    id: string;
    map_id: string;
    level_id: string;
    name: string;
    height: number;
    lockers?: Locker[];
    zone?: PlaceZone;
    zones: string[];
    tags: string[];
}

export interface Locker {
    id: string;
    bank_id: string;
    map_id?: string;
    assigned_to?: string;
    name: string;
    available?: boolean;
    accessible: boolean;
    bookable: boolean;
    position: [number, number];
    size: [number, number];
    bank?: LockerBank;
    zone?: PlaceZone;
    features: string[];
}
