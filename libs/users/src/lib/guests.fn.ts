import {
    CateringItem,
    GuestUser,
    placeFetchJson,
    toQueryString,
} from '@placeos/common';

/*
 * The staff API has `guests` operations, but its `Guest` schema types
 * `booking` and `extension_data` as JSON and `id` as a number, and the
 * catering operations give an untyped record. The app classes need the
 * 6.x data, so these functions read the JSON directly.
 */
const GUEST_ENDPOINT = '/api/staff/v1/guests';

const get = <T>(path: string) => placeFetchJson<T>(path);
const patch = <T>(path: string, body: unknown) =>
    placeFetchJson<T>(path, { method: 'PATCH', body: JSON.stringify(body) });

/**
 * Search guests
 * @param q Search string for filtering guests
 */
export async function searchGuests(q: string): Promise<GuestUser[]> {
    const query = toQueryString({ q });
    const list = await get<Partial<GuestUser>[]>(
        `${GUEST_ENDPOINT}${q ? '?' + query : ''}`,
    );
    return list.map((item) => new GuestUser(item));
}

/**
 * Get guest details
 * @param id ID of the guest
 */
export async function showGuest(id: string): Promise<GuestUser> {
    return new GuestUser(
        await get<Partial<GuestUser>>(
            `${GUEST_ENDPOINT}/${encodeURIComponent(id)}`,
        ),
    );
}

/**
 * Update guest metadata
 * @param id ID of the guest
 * @param data New metadata state
 */
export async function updateGuest(
    id: string,
    data: Partial<GuestUser>,
): Promise<GuestUser> {
    return new GuestUser(
        await patch<Partial<GuestUser>>(
            `${GUEST_ENDPOINT}/${encodeURIComponent(id)}`,
            data,
        ),
    );
}

/**
 * Get the catering item requested for the specified guest
 * @param email Email address of the guest
 * @param booking_id Optional ID of the related visitor booking to get from
 */
export async function getGuestCateringItem(
    email: string,
    booking_id = '',
): Promise<CateringItem | null> {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    const item = await get<Partial<CateringItem> | null>(`${path}${query}`);
    return item ? new CateringItem(item) : null;
}

/**
 * Set the catering item requested for the specified guest
 * @param email Email address of the guest
 * @param booking_id Optional ID of the related visitor booking to set on
 */
export async function setGuestCateringItem(
    email: string,
    catering_item: CateringItem,
    booking_id = '',
): Promise<CateringItem | null> {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    const item = await patch<Partial<CateringItem> | null>(
        `${path}${query}`,
        catering_item,
    );
    return item ? new CateringItem(item) : null;
}
