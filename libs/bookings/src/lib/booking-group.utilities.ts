import {
    Booking,
    BookingType,
    currentUser,
    randomString,
    unique,
    User,
} from '@placeos/common';
import { removeBooking } from './bookings.fn';

/** Give each new group its own asset ID and preserve it during edits. */
export function groupName(existing?: string) {
    return existing || `grp-${randomString(24)}`;
}

/** Form patch for a single visitor in a group flow. Zones fall back from the
 * form, to the visitor's existing booking, to `fallback_zones`. */
export function visitorMemberPatch(
    member: User,
    base_form: any,
    opts: {
        id: string;
        parent_id: string;
        group_name: string;
        existing_zones?: string[];
        fallback_zones?: string[];
    },
) {
    const member_name = member.name || member.email;
    return {
        ...base_form,
        id: opts.id,
        parent_id: opts.parent_id,
        group: opts.group_name,
        asset_id: member.email,
        asset_name: member_name,
        international:
            (member as any).international ||
            !!member.extension_data?.international,
        company: (member as any).company || member.organisation,
        phone: member.phone,
        zones: base_form.zones?.length
            ? [...base_form.zones]
            : opts.existing_zones?.length
              ? [...opts.existing_zones]
              : [...(opts.fallback_zones || [])],
        assets: [],
        attendees: [
            new User({
                name: member_name,
                email: member.email,
                organisation: (member as any).company || member.organisation,
                phone: member.phone,
            }),
        ],
    };
}

/** Group member details stored in `extension_data.group_members`. Non-visitor
 * groups always include the current user. */
export function mapGroupMembers(type: BookingType, members: User[] = []) {
    // Dedupe visitors too — a duplicated email produces two group members
    // that the visitor list can't tell apart. (PPT-2634)
    const user_list = unique(
        type === 'visitor'
            ? members || []
            : [currentUser(), ...(members || [])],
        'email',
    );
    return user_list
        .filter((member) => !!member?.email)
        .map((member) => ({
            id: member.id || '',
            name: member.name || member.email,
            email: member.email,
            company: (member as any).company || member.organisation || '',
            phone: member.phone || '',
            international:
                !!(member as any).international ||
                !!member.extension_data?.international,
        }));
}

/** Group members rebuilt from the sibling bookings of a group. Visitor
 * bookings hold the visitor in `asset_id`, other bookings in `user_*`. */
export function mapGroupMembersFromBookings(
    bookings: Booking[] = [],
    is_visitor = false,
) {
    return unique(
        bookings
            .map((booking) => {
                const group_member = (
                    booking.extension_data?.group_members || []
                ).find((member) => member?.email === booking.asset_id);
                return is_visitor
                    ? new User({
                          name:
                              group_member?.name ||
                              booking.extension_data?.visitor_name ||
                              booking.asset_name ||
                              booking.asset_id,
                          email: booking.asset_id,
                          organisation:
                              group_member?.company ||
                              booking.extension_data?.company,
                          phone:
                              group_member?.phone ||
                              booking.extension_data?.phone,
                          extension_data: {
                              international: !!(
                                  group_member?.international ||
                                  booking.extension_data?.international
                              ),
                          },
                      })
                    : new User({
                          id: booking.user_id,
                          name: booking.user_name || booking.user_email,
                          email: booking.user_email,
                          organisation: booking.extension_data?.company,
                          phone: booking.extension_data?.phone,
                      });
            })
            .filter((member) => !!member?.email),
        'email',
    );
}

/** Group members rebuilt from a booking's `extension_data.group_members`. */
export function mapGroupMembersFromExtension(
    members: any[] = [],
    is_visitor = false,
) {
    return unique(
        (members || [])
            .filter((member) => !!member?.email)
            .map(
                (member) =>
                    new User({
                        id: member.id || '',
                        name: member.name || member.email,
                        email: member.email,
                        organisation:
                            member.company || member.organisation || '',
                        phone: member.phone || '',
                        extension_data: {
                            ...(member.extension_data || {}),
                            international: !!member.international,
                        },
                        international: is_visitor
                            ? !!member.international
                            : false,
                    } as any),
            ),
        'email',
    );
}

/**
 * Match the existing bookings of a group to its members by email. Visitor
 * bookings hold the email in `asset_id`, other bookings in `user_email`.
 * Bookings with no matching member are returned in `to_delete`.
 */
export function matchGroupSiblings(
    existing_siblings: Booking[],
    members: User[],
    is_visitor: boolean,
) {
    const keyOf = (booking: Booking) =>
        is_visitor ? booking.asset_id : booking.user_email;
    const sibling_map: Record<string, Booking> = {};
    for (const booking of existing_siblings) {
        const key = keyOf(booking);
        if (key) sibling_map[key] = booking;
    }
    const member_keys = new Set(members.map((m) => m.email));
    const to_delete = existing_siblings.filter((booking) => {
        const key = keyOf(booking);
        return key && !member_keys.has(key);
    });
    return { sibling_map, to_delete };
}

/** Remove the bookings of a failed group flow. Failures are only logged. */
export async function rollbackGroupBookings(booking_ids: string[]) {
    const rollback_errors = (
        await Promise.allSettled(booking_ids.map((id) => removeBooking(id)))
    ).filter((_) => _.status === 'rejected');
    if (rollback_errors.length) {
        console.error('Failed to rollback group bookings', rollback_errors);
    }
}
