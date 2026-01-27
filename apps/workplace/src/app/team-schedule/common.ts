import { User } from '@placeos/common';

export type LocationStatus =
    | 'unspecified'
    | 'wfh'
    | 'office'
    | 'onsite'
    | 'on_leave'
    | 'off_sick';

export interface DeskBooking {
    building_name: string;
    desk_code: string;
}

export interface DayStatus {
    date: number;
    status: LocationStatus;
    booking?: DeskBooking;
}

export interface TeamMember {
    user: User;
    is_favorite: boolean;
    is_my_team: boolean;
    department?: string;
    current_building?: string;
    current_desk?: string;
    statuses: DayStatus[];
}

export const USER_LOCATIONS: Record<
    LocationStatus,
    { name: string; icon: string; fg_color: string; bg_color: string }
> = {
    unspecified: {
        name: 'COMMON.LOCATION_UNSPECIFIED',
        icon: 'help_outline',
        fg_color: 'rgb(107, 114, 128)',
        bg_color: 'rgb(229, 231, 235)',
    },
    wfh: {
        name: 'COMMON.LOCATION_WFH',
        icon: 'home',
        fg_color: 'rgb(37, 99, 235)',
        bg_color: 'rgb(219, 234, 254)',
    },
    office: {
        name: 'COMMON.LOCATION_OFFICE',
        icon: 'business',
        fg_color: 'rgb(5, 150, 105)',
        bg_color: 'rgb(209, 250, 229)',
    },
    onsite: {
        name: 'COMMON.LOCATION_ONSITE',
        icon: 'location_on',
        fg_color: 'rgb(217, 119, 6)',
        bg_color: 'rgb(254, 243, 199)',
    },
    on_leave: {
        name: 'COMMON.LOCATION_LEAVE',
        icon: 'event_busy',
        fg_color: 'rgb(124, 58, 237)',
        bg_color: 'rgb(237, 233, 254)',
    },
    off_sick: {
        name: 'COMMON.LOCATION_SICK',
        icon: 'local_hospital',
        fg_color: 'rgb(220, 38, 38)',
        bg_color: 'rgb(254, 226, 226)',
    },
};
