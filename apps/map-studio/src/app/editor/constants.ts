import { MapObjectType } from '../data/types';

/**
 * Editor constants and artwork, ported from the reference application.
 *
 * The icon and furniture tables are verbatim — they are data, not logic.
 */

export type Tool = 'select' | 'rect' | 'polygon' | 'pen' | 'wall';
export type EditorMode = 'design' | 'label' | 'preview';
export type Handle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';

export const HANDLES: Handle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

export const HANDLE_CURSORS: Record<Handle, string> = {
    nw: 'nwse-resize',
    n: 'ns-resize',
    ne: 'nesw-resize',
    e: 'ew-resize',
    se: 'nwse-resize',
    s: 'ns-resize',
    sw: 'nesw-resize',
    w: 'ew-resize',
};

export const TYPE_COLORS: Record<string, string> = {
    room: '#7c3aed',
    desk: '#2563eb',
    zone: '#059669',
    area: '#0891b2',
    amenity: '#dc2626',
    decorative: '#6b7280',
    parking: '#d97706',
    locker: '#9333ea',
};

export const OBJECT_TYPES: MapObjectType[] = [
    'room',
    'desk',
    'zone',
    'area',
    'amenity',
    'decorative',
    'parking',
    'locker',
];

/** Editor layer an object of a given layer id should be created as */
export function layerToObjectType(layer_id: string): MapObjectType {
    switch (layer_id) {
        case 'rooms':
            return 'room';
        case 'desks':
            return 'desk';
        case 'lockers':
            return 'locker';
        case 'zones':
            return 'zone';
        case 'areas':
            return 'area';
        case 'amenities':
            return 'amenity';
        case 'walls':
            return 'decorative';
        default:
            return 'room';
    }
}

export interface AmenityIconAsset {
    id: string;
    label: string;
    emoji: string;
    svg: string;
}

export interface FurnitureAsset {
    id: string;
    label: string;
    icon: string;
    svg: string;
    w: number;
    h: number;
    color: string;
}

export interface DeskLayout {
    id: string;
    label: string;
    cols: number;
    rows: number;
    deskW: number;
    deskH: number;
    gap: number;
}

export const AMENITY_ICONS: AmenityIconAsset[] = [
    {
        id: 'male-restroom',
        label: 'Male Restroom',
        emoji: '🚹',
        svg: '<path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm1 2h-2a2 2 0 0 0-2 2v5h2v7h2v-7h2V8a2 2 0 0 0-2-2z"/>',
    },
    {
        id: 'female-restroom',
        label: 'Female Restroom',
        emoji: '🚺',
        svg: '<path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2 2h-4l-1 7h2v7h2v-7h2l-1-7z"/>',
    },
    {
        id: 'accessible-restroom',
        label: 'Accessible',
        emoji: '♿',
        svg: '<circle cx="12" cy="4" r="2"/><path d="M14 20h-2l-2-6H8l-1-4h5l1 4h3l1 6z"/>',
    },
    {
        id: 'staircase',
        label: 'Staircase',
        emoji: '🪜',
        svg: '<path d="M4 20h4v-4h4v-4h4v-4h4V4" stroke-width="2" fill="none" stroke="currentColor"/>',
    },
    {
        id: 'elevator',
        label: 'Elevator',
        emoji: '🛗',
        svg: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 8l3 4h-6l3-4zm0 8l-3-4h6l-3 4z"/>',
    },
    {
        id: 'fire-exit',
        label: 'Fire Exit',
        emoji: '🚪',
        svg: '<path d="M10 3H4v18h6m4-9h6m-3-3l3 3-3 3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M14 6l-2 3 2 3" fill="none" stroke="#dc2626" stroke-width="2"/>',
    },
    {
        id: 'cafe',
        label: 'Cafe',
        emoji: '☕',
        svg: '<path d="M5 12h10v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-4zm10 2h2a2 2 0 0 0 0-4h-2M7 8c0-2 1-3 3-4m2 0c2 1 3 2 3 4" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    },
    {
        id: 'reception',
        label: 'Reception',
        emoji: '🛎️',
        svg: '<path d="M5 18h14M6 14h12a6 6 0 0 0-12 0zm5-6V6m-3 2h6" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    },
    {
        id: 'aed',
        label: 'AED',
        emoji: '💚',
        svg: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 9v6m-3-3h6" stroke="#16a34a" stroke-width="2.5"/>',
    },
    {
        id: 'first-aid',
        label: 'First Aid',
        emoji: '🏥',
        svg: '<rect x="3" y="5" width="18" height="14" rx="2" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="1.5"/><path d="M12 9v6m-3-3h6" stroke="#dc2626" stroke-width="2.5"/>',
    },
    {
        id: 'lockers',
        label: 'Lockers',
        emoji: '🔐',
        svg: '<rect x="3" y="4" width="7" height="16" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="4" width="7" height="16" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6.5" cy="12" r="1"/><circle cx="17.5" cy="12" r="1"/>',
    },
    {
        id: 'presentation',
        label: 'Presentation',
        emoji: '📽️',
        svg: '<rect x="2" y="4" width="20" height="13" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 17v3m-4 0h8" stroke="currentColor" stroke-width="1.5"/>',
    },
    {
        id: 'door',
        label: 'Door',
        emoji: '🚪',
        svg: '<rect x="7" y="2" width="10" height="20" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="13" r="1" fill="currentColor"/>',
    },
    {
        id: 'window',
        label: 'Window',
        emoji: '🪟',
        svg: '<rect x="3" y="6" width="18" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 6v12M3 12h18" stroke="currentColor" stroke-width="1"/><path d="M3 6h18" stroke="#60a5fa" stroke-width="2"/>',
    },
    {
        id: 'water-fountain',
        label: 'Water Fountain',
        emoji: '🚰',
        svg: '<path d="M8 18h8M12 18v-4" stroke="currentColor" stroke-width="1.5"/><path d="M8 14c0-3 2-5 4-7 2 2 4 4 4 7" fill="none" stroke="#0ea5e9" stroke-width="1.5"/><path d="M10 11c0-1 1-2 2-3 1 1 2 2 2 3" fill="#0ea5e9" opacity="0.2"/>',
    },
    {
        id: 'kitchen',
        label: 'Kitchen',
        emoji: '🍳',
        svg: '<rect x="3" y="6" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="13" r="2" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="16" cy="13" r="2" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="10" r="1.5" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M3 8h18" stroke="currentColor" stroke-width="1"/>',
    },
    {
        id: 'vending',
        label: 'Vending Machine',
        emoji: '🥤',
        svg: '<rect x="5" y="2" width="14" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="7" y="4" width="10" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1"/><rect x="8" y="14" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.2"/><circle cx="16" cy="15.5" r="1" fill="none" stroke="currentColor" stroke-width="1"/>',
    },
    {
        id: 'wifi',
        label: 'WiFi Access Point',
        emoji: '📶',
        svg: '<circle cx="12" cy="18" r="1.5" fill="currentColor"/><path d="M8 14c2.2-2.2 5.8-2.2 8 0" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 11c3.9-3.9 10.1-3.9 14 0" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2 8c5.5-5.5 14.5-5.5 20 0" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    },
    {
        id: 'security-camera',
        label: 'Security Camera',
        emoji: '📹',
        svg: '<circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 11v3M8 14h8M12 14v4" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="18" width="6" height="3" rx="1" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="8" r="1" fill="currentColor"/>',
    },
    {
        id: 'parking-spot',
        label: 'Parking Spot',
        emoji: '🅿️',
        svg: '<rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9" fill="none" stroke="currentColor" stroke-width="2"/>',
    },
    {
        id: 'bike-rack',
        label: 'Bike Rack',
        emoji: '🚲',
        svg: '<circle cx="7" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="17" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M7 15l5-8 5 8M9 7h4" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    },
    {
        id: 'charging',
        label: 'Charging Station',
        emoji: '🔌',
        svg: '<rect x="6" y="4" width="12" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 9l-2 3h4l-2 3" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><path d="M9 4V2M15 4V2" stroke="currentColor" stroke-width="1.5"/>',
    },
    {
        id: 'mail',
        label: 'Mailroom',
        emoji: '📬',
        svg: '<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 8l9 5 9-5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    },
    {
        id: 'shower',
        label: 'Shower',
        emoji: '🚿',
        svg: '<circle cx="12" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 8l-1 4M16 8l1 4M9 12l3 9M15 12l-3 9" fill="none" stroke="#0ea5e9" stroke-width="1.2"/><path d="M10 16h4" stroke="#0ea5e9" stroke-width="1"/>',
    },
    {
        id: 'smoking',
        label: 'Smoking Area',
        emoji: '🚬',
        svg: '<rect x="3" y="12" width="14" height="4" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M17 12v-3c0-2 2-3 2-5M20 12v-3c0-2 2-3 2-5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="3" y="13.5" width="6" height="1" fill="#f97316" opacity="0.5"/>',
    },
];

export const FURNITURE_ASSETS: FurnitureAsset[] = [
    // Furniture
    {
        id: 'desk-single',
        label: 'Single Desk',
        icon: 'D',
        svg: '<rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="6" y="6" width="12" height="4" rx="1" fill="currentColor" opacity="0.12"/><rect x="9" y="11" width="6" height="2" rx="0.5" fill="currentColor" opacity="0.12"/><circle cx="12" cy="20" r="2" fill="none" stroke="currentColor" stroke-width="1.2"/>',
        w: 30,
        h: 20,
        color: '#2563eb',
    },
    {
        id: 'desk-pair',
        label: 'Desk Pair',
        icon: 'DD',
        svg: '<rect x="1" y="3" width="10" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="13" y="3" width="10" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="3" y="6" width="6" height="3" rx="0.8" fill="currentColor" opacity="0.12"/><rect x="15" y="6" width="6" height="3" rx="0.8" fill="currentColor" opacity="0.12"/><circle cx="6" cy="20" r="2" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="20" r="2" fill="none" stroke="currentColor" stroke-width="1.2"/>',
        w: 50,
        h: 20,
        color: '#2563eb',
    },
    {
        id: 'desk-pod',
        label: 'Desk Pod (4)',
        icon: '4D',
        svg: '<rect x="2" y="2" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="13" y="2" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="2" y="13" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="13" y="13" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="4" y="4" width="5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12"/><rect x="15" y="4" width="5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12"/><rect x="4" y="15" width="5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12"/><rect x="15" y="15" width="5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12"/>',
        w: 50,
        h: 40,
        color: '#2563eb',
    },
    {
        id: 'table-small',
        label: 'Small Table',
        icon: 'T',
        svg: '<rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3"/>',
        w: 30,
        h: 30,
        color: '#92400e',
    },
    {
        id: 'table-medium',
        label: 'Medium Table',
        icon: 'T',
        svg: '<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 10h8M8 14h8" stroke="currentColor" stroke-width="1" opacity="0.3"/>',
        w: 50,
        h: 30,
        color: '#92400e',
    },
    {
        id: 'table-large',
        label: 'Large Table',
        icon: 'T',
        svg: '<rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h10M7 12h10M7 15h10" stroke="currentColor" stroke-width="1" opacity="0.3"/>',
        w: 80,
        h: 40,
        color: '#92400e',
    },
    {
        id: 'table-round',
        label: 'Round Table',
        icon: 'O',
        svg: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2"/>',
        w: 30,
        h: 30,
        color: '#92400e',
    },
    {
        id: 'standing-desk',
        label: 'Standing Desk',
        icon: 'SD',
        svg: '<rect x="3" y="3" width="18" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="6" y="5" width="12" height="4" rx="1" fill="currentColor" opacity="0.12"/><path d="M8 14v6M16 14v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6 20h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
        w: 30,
        h: 15,
        color: '#4f46e5',
    },
    // Seating
    {
        id: 'bench',
        label: 'Bench',
        icon: 'B',
        svg: '<rect x="2" y="10" width="20" height="4" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 14v4M19 14v4" fill="none" stroke="currentColor" stroke-width="1.5"/>',
        w: 50,
        h: 12,
        color: '#059669',
    },
    {
        id: 'lounge-chair',
        label: 'Lounge Chair',
        icon: 'LC',
        svg: '<path d="M6 8a6 6 0 0 1 12 0v6H6V8z" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="14" width="16" height="4" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 12v4M20 12v4" stroke="currentColor" stroke-width="1.5"/>',
        w: 25,
        h: 25,
        color: '#059669',
    },
    {
        id: 'sofa',
        label: 'Sofa',
        icon: 'So',
        svg: '<rect x="2" y="8" width="20" height="8" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 8V6a2 2 0 0 1 4 0v2M15 8V6a2 2 0 0 1 4 0v2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M2 12h2M20 12h2" stroke="currentColor" stroke-width="1.5"/>',
        w: 55,
        h: 22,
        color: '#059669',
    },
    {
        id: 'phone-booth',
        label: 'Phone Booth',
        icon: 'PB',
        svg: '<rect x="5" y="2" width="14" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 6h6M9 2v2M15 2v2" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="14" r="2" fill="none" stroke="currentColor" stroke-width="1.3"/>',
        w: 25,
        h: 25,
        color: '#7c3aed',
    },
    // Storage & utilities
    {
        id: 'lockers',
        label: 'Lockers',
        icon: 'Lk',
        svg: '<rect x="2" y="4" width="6" height="16" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="9" y="4" width="6" height="16" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="16" y="4" width="6" height="16" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="5" cy="12" r="0.8" fill="currentColor"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/><circle cx="19" cy="12" r="0.8" fill="currentColor"/>',
        w: 40,
        h: 15,
        color: '#4b5563',
    },
    {
        id: 'filing-cabinet',
        label: 'Filing Cabinet',
        icon: 'FC',
        svg: '<rect x="5" y="2" width="14" height="20" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 8h14M5 14h14" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="5" r="0.8" fill="currentColor"/><circle cx="12" cy="11" r="0.8" fill="currentColor"/><circle cx="12" cy="17" r="0.8" fill="currentColor"/>',
        w: 15,
        h: 20,
        color: '#4b5563',
    },
    {
        id: 'bookshelf',
        label: 'Bookshelf',
        icon: 'BS',
        svg: '<rect x="3" y="3" width="18" height="18" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 9h18M3 15h18" stroke="currentColor" stroke-width="1.3"/><path d="M7 3v6M11 3v6M16 9v6M9 9v6M7 15v6M13 15v6" stroke="currentColor" stroke-width="1" opacity="0.5"/>',
        w: 40,
        h: 12,
        color: '#92400e',
    },
    {
        id: 'printer',
        label: 'Printer',
        icon: 'Pr',
        svg: '<rect x="4" y="10" width="16" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="6" y="4" width="12" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 18v3h8v-3" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 14h8" stroke="currentColor" stroke-width="1" opacity="0.4"/>',
        w: 20,
        h: 20,
        color: '#374151',
    },
    // Decorative
    {
        id: 'plant',
        label: 'Plant',
        icon: 'Pl',
        svg: '<path d="M12 20v-8" stroke="currentColor" stroke-width="1.5"/><path d="M8 12c0-4 4-8 4-8s4 4 4 8" fill="none" stroke="#16a34a" stroke-width="1.5"/><path d="M6 14c0-3 3-6 6-6M18 14c0-3-3-6-6-6" fill="none" stroke="#16a34a" stroke-width="1.3" opacity="0.6"/><ellipse cx="12" cy="20" rx="3" ry="2" fill="none" stroke="currentColor" stroke-width="1.3"/>',
        w: 12,
        h: 12,
        color: '#16a34a',
    },
    {
        id: 'plant-large',
        label: 'Large Plant',
        icon: 'PL',
        svg: '<path d="M12 22v-10" stroke="currentColor" stroke-width="1.5"/><path d="M6 12c0-5 6-10 6-10s6 5 6 10" fill="none" stroke="#16a34a" stroke-width="1.5"/><path d="M4 14c0-4 4-8 8-8M20 14c0-4-4-8-8-8" fill="none" stroke="#16a34a" stroke-width="1.3" opacity="0.5"/><path d="M9 22h6" stroke="currentColor" stroke-width="1.5"/>',
        w: 18,
        h: 18,
        color: '#16a34a',
    },
    {
        id: 'partition',
        label: 'Partition Wall',
        icon: '||',
        svg: '<rect x="2" y="6" width="20" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20" stroke="currentColor" stroke-width="1" opacity="0.3"/>',
        w: 60,
        h: 4,
        color: '#6b7280',
    },
    {
        id: 'whiteboard',
        label: 'Whiteboard',
        icon: 'WB',
        svg: '<rect x="2" y="4" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 8h12M6 11h8" stroke="currentColor" stroke-width="1" opacity="0.4"/><path d="M12 18v3M8 21h8" stroke="currentColor" stroke-width="1.3"/>',
        w: 40,
        h: 5,
        color: '#e5e7eb',
    },
    {
        id: 'tv-screen',
        label: 'TV/Screen',
        icon: 'TV',
        svg: '<rect x="2" y="4" width="20" height="13" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 17v2M16 17v2M6 19h12" stroke="currentColor" stroke-width="1.3"/><path d="M7 8l4 3-4 3" fill="currentColor" opacity="0.3"/>',
        w: 35,
        h: 5,
        color: '#1f2937',
    },
    {
        id: 'bin',
        label: 'Waste Bin',
        icon: 'Bn',
        svg: '<path d="M6 6h12l-1 14H7L6 6z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 6h16" stroke="currentColor" stroke-width="1.5"/><path d="M9 3h6v3H9z" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M10 9v8M14 9v8" stroke="currentColor" stroke-width="1" opacity="0.4"/>',
        w: 8,
        h: 8,
        color: '#6b7280',
    },
    // Meeting & collaboration
    {
        id: 'conference-table',
        label: 'Conference Table',
        icon: 'CT',
        svg: '<ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 9h12M6 15h12" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>',
        w: 80,
        h: 50,
        color: '#78350f',
    },
    {
        id: 'monitor-arm',
        label: 'Monitor Arm',
        icon: 'MA',
        svg: '<rect x="6" y="4" width="12" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 12v4M8 16h8" stroke="currentColor" stroke-width="1.5"/><rect x="7" y="5" width="10" height="6" rx="0.5" fill="#3b82f6" opacity="0.15"/>',
        w: 15,
        h: 10,
        color: '#1e293b',
    },
    {
        id: 'chair-office',
        label: 'Office Chair',
        icon: 'Ch',
        svg: '<circle cx="12" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M12 15v-3" stroke="currentColor" stroke-width="1.5"/><path d="M7 8c0-2.8 2.2-5 5-5s5 2.2 5 5v4H7V8z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
        w: 12,
        h: 12,
        color: '#1e293b',
    },
    {
        id: 'recycling',
        label: 'Recycling Bin',
        icon: 'Rc',
        svg: '<path d="M6 6h12l-1 14H7L6 6z" fill="none" stroke="#16a34a" stroke-width="1.5"/><path d="M4 6h16" stroke="#16a34a" stroke-width="1.5"/><path d="M9 10l3 2-3 2M15 10l-3 2 3 2" stroke="#16a34a" stroke-width="1" opacity="0.5"/>',
        w: 8,
        h: 8,
        color: '#16a34a',
    },
    {
        id: 'coat-rack',
        label: 'Coat Rack',
        icon: 'CR',
        svg: '<circle cx="12" cy="4" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 6v14M8 20h8" stroke="currentColor" stroke-width="1.5"/><path d="M7 9l5 2 5-2" fill="none" stroke="currentColor" stroke-width="1.5"/>',
        w: 8,
        h: 8,
        color: '#78716c',
    },
    {
        id: 'umbrella-stand',
        label: 'Umbrella Stand',
        icon: 'US',
        svg: '<path d="M12 4c-5 0-8 4-8 8h16c0-4-3-8-8-8z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 4v12M12 16c0 2-2 3-3 2" fill="none" stroke="currentColor" stroke-width="1.5"/>',
        w: 8,
        h: 8,
        color: '#6b7280',
    },
    {
        id: 'water-cooler',
        label: 'Water Cooler',
        icon: 'WC',
        svg: '<rect x="7" y="8" width="10" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 8V5c0-1 1-2 3-2s3 1 3 2v3" fill="none" stroke="#0ea5e9" stroke-width="1.3"/><circle cx="12" cy="15" r="1.5" fill="#0ea5e9" opacity="0.3"/><rect x="9" y="10" width="6" height="3" rx="0.5" fill="#0ea5e9" opacity="0.15"/>',
        w: 10,
        h: 10,
        color: '#0ea5e9',
    },
    {
        id: 'fire-extinguisher',
        label: 'Fire Extinguisher',
        icon: 'FE',
        svg: '<rect x="8" y="6" width="8" height="14" rx="3" fill="none" stroke="#dc2626" stroke-width="1.5"/><path d="M10 6V4h4v2" fill="none" stroke="#dc2626" stroke-width="1.3"/><path d="M12 4l3-2" fill="none" stroke="#dc2626" stroke-width="1.3"/><rect x="10" y="9" width="4" height="2" rx="0.5" fill="#dc2626" opacity="0.2"/>',
        w: 6,
        h: 6,
        color: '#dc2626',
    },
    {
        id: 'locker-unit',
        label: 'Locker Unit',
        icon: 'LU',
        svg: '<rect x="2" y="3" width="5" height="9" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="2" y="12" width="5" height="9" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="9.5" y="3" width="5" height="9" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="9.5" y="12" width="5" height="9" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="17" y="3" width="5" height="9" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="17" y="12" width="5" height="9" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="5.5" cy="7.5" r="0.6" fill="currentColor"/><circle cx="5.5" cy="16.5" r="0.6" fill="currentColor"/><circle cx="13" cy="7.5" r="0.6" fill="currentColor"/><circle cx="13" cy="16.5" r="0.6" fill="currentColor"/><circle cx="20.5" cy="7.5" r="0.6" fill="currentColor"/><circle cx="20.5" cy="16.5" r="0.6" fill="currentColor"/>',
        w: 45,
        h: 20,
        color: '#64748b',
    },
];

export const DESK_LAYOUTS: DeskLayout[] = [
    {
        id: 'row-2',
        label: 'Row of 2',
        cols: 2,
        rows: 1,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
    {
        id: 'row-4',
        label: 'Row of 4',
        cols: 4,
        rows: 1,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
    {
        id: 'row-6',
        label: 'Row of 6',
        cols: 6,
        rows: 1,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
    {
        id: 'face-4',
        label: 'Face to Face (4)',
        cols: 2,
        rows: 2,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
    {
        id: 'face-6',
        label: 'Face to Face (6)',
        cols: 3,
        rows: 2,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
    {
        id: 'face-8',
        label: 'Face to Face (8)',
        cols: 4,
        rows: 2,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
    {
        id: 'pod-6',
        label: 'Pod of 6',
        cols: 3,
        rows: 2,
        deskW: 28,
        deskH: 22,
        gap: 1,
    },
    {
        id: 'bench-8',
        label: 'Bench (8)',
        cols: 8,
        rows: 1,
        deskW: 24,
        deskH: 18,
        gap: 0,
    },
    {
        id: 'vface-6',
        label: 'Vertical Face to Face (6)',
        cols: 2,
        rows: 3,
        deskW: 30,
        deskH: 20,
        gap: 1,
    },
];

// ── Sidebar sizing ──────────────────────────────────────────────────────────

export const SIDEBAR_MIN = 180;
export const SIDEBAR_MAX = 520;
export const SIDEBAR_DEFAULTS = { left: 256, right: 320 };

export const clampSidebar = (width: number) =>
    Math.min(Math.max(Math.round(width) || 0, SIDEBAR_MIN), SIDEBAR_MAX);

/**
 * Width a sidebar should take after dragging its handle `delta` pixels right.
 * The right sidebar grows as the pointer moves left, so its delta inverts.
 */
export const nextSidebarWidth = (
    start: number,
    delta: number,
    side: 'left' | 'right',
) => clampSidebar(start + (side === 'left' ? delta : -delta));
