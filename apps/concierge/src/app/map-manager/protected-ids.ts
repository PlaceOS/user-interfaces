import {
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
    queryParkingSpacesForZones,
} from '@placeos/assets';
import { BuildingLevel } from '@placeos/common';
import { requestSpacesForZone } from '@placeos/events';
import { ProtectedId, ProtectedIdSource } from '@placeos/map-editor';
import { PlaceAsset, showMetadata } from '@placeos/ts-client';
import { firstValueFrom } from 'rxjs';

interface DeskRecord {
    id?: string;
    map_id?: string;
    name?: string;
}

interface PointRecord {
    id?: string;
    name?: string;
    location?: string | [number, number];
}

function assetMapId(asset: PlaceAsset): string {
    const data = (asset.other_data || {}) as { map_id?: string };
    return asset.map_id || data.map_id || '';
}

/**
 * Every Concierge record that binds to a map element id on the level: desks,
 * rooms, parking bays, locker banks and lockers, and points of interest. Map
 * regions and asset locations have no per-level source in Concierge.
 */
export function conciergeProtectedIdSources(
    level: BuildingLevel,
    organisation_id: string,
): Record<string, ProtectedIdSource> {
    return {
        desks: async () => {
            const metadata = await showMetadata(level.id, 'desks');
            const list = Array.isArray(metadata.details)
                ? (metadata.details as DeskRecord[])
                : [];
            return list
                .map(
                    (desk): ProtectedId => ({
                        id: desk.map_id || desk.id || '',
                        kind: 'desk',
                        label: desk.name || desk.id || '',
                    }),
                )
                .filter((entry) => !!entry.id);
        },
        rooms: async () => {
            const spaces = await firstValueFrom(requestSpacesForZone(level.id));
            return spaces
                .filter((space) => !!space.map_id)
                .map(
                    (space): ProtectedId => ({
                        id: space.map_id,
                        kind: 'room',
                        label: space.display_name || space.name || '',
                    }),
                );
        },
        parking: async () => {
            const spaces = await queryParkingSpacesForZones([level.id]);
            return spaces
                .map(
                    (space): ProtectedId => ({
                        id: assetMapId(space),
                        kind: 'parking',
                        label: space.identifier || space.name || '',
                    }),
                )
                .filter((entry) => !!entry.id);
        },
        lockers: async () => {
            const [banks, lockers] = await Promise.all([
                queryLockerBankAssetsForZones([level.id]),
                queryLockerAssetsForZones([level.id]),
            ]);
            return [...banks, ...lockers]
                .map(
                    (asset): ProtectedId => ({
                        id: assetMapId(asset),
                        kind: 'locker',
                        label: asset.identifier || asset.name || '',
                    }),
                )
                .filter((entry) => !!entry.id);
        },
        points_of_interest: async () => {
            const metadata = await showMetadata(
                organisation_id,
                'points-of-interest',
            );
            const mapping = (metadata.details || {}) as Record<
                string,
                PointRecord[]
            >;
            const list = Array.isArray(mapping[level.id])
                ? mapping[level.id]
                : [];
            return list
                .filter((point) => typeof point.location === 'string')
                .map(
                    (point): ProtectedId => ({
                        id: point.location as string,
                        kind: 'poi',
                        label: point.name || point.id || '',
                    }),
                );
        },
    };
}
