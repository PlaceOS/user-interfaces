import { SignageContextService } from '../signage-context.service';

type BrandAccessContext = Pick<
    SignageContextService,
    'is_sys_admin' | 'global_features'
>;

/**
 * Whether brand kit edits are on. The kit is for the whole organisation, so
 * only the global `app.features` setting turns them off, not a group.
 */
export function brandEditingOn(context: BrandAccessContext): boolean {
    return (context.global_features() || []).includes('branding-editing');
}

/**
 * Whether this user can change the brand kit, from the branding page or from
 * the image editor. Call it inside a `computed` so it follows the signals.
 */
export function canEditBrandKit(context: BrandAccessContext): boolean {
    return context.is_sys_admin() && brandEditingOn(context);
}
