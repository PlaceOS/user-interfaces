///////////////////////////////////////////////////////////////
////////////////////////   Repo-wide   ////////////////////////
///////////////////////////////////////////////////////////////

/**
 * Color scheme for different booking types
 * Format: [backgroundColor, textColor]
 */
export const BOOKING_TYPE_COLORS: Record<string, [string, string]> = {
    event: ['#C7D2FE', '#4338CA'],
    desk: ['#BFDBFE', '#1E40AF'],
    parking: ['#FED7AA', '#EA580C'],
    visitor: ['#FBCFE8', '#DB2777'],
    locker: ['#A7f3D0', '#059669'],
    'group-event': ['#FCD34D', '#D97706'],
};

export const SETTING_KEYS = {
    FAVORITE_ROOMS: 'favourite_rooms',
    FAVORITE_DESKS: 'favourite_desks',
    FAVORITE_PARKING_SPACES: 'favourite_parking',
    FAVORITE_LOCKERS: 'favourite_lockers',
    FAVORITE_CATERING: 'favourite_menu_items',
    FAVORITE_TEAM_MEMBERS: 'favourite_team_members',
    TEAM_MEMBERS: 'team_members',
};

///////////////////////////////////////////////////////////////
//////////////////////   Workplace App   //////////////////////
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
///////////////////////   Time Units   ////////////////////////
///////////////////////////////////////////////////////////////

export const SECONDS = 1000;
export const MINUTES = 60 * SECONDS;
export const HOURS = 60 * MINUTES;
export const DAYS = 24 * HOURS;

export const SECOND = 1000;
export const MINUTE = 60 * SECONDS;
export const HOUR = 60 * MINUTES;
export const DAY = 24 * HOURS;
