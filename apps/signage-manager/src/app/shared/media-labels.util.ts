import { MediaAnimation, type MediaType } from '@placeos/ts-client';
import { type MediaTypeFilter } from '../media/media-view.util';

/** Label keys of the media types the library shows */
export const MEDIA_TYPE_LABELS: Record<MediaTypeFilter, string> = {
    image: 'COMMON.IMAGE',
    video: 'COMMON.VIDEO',
    webpage: 'COMMON.WEBPAGE',
    plugin: 'SIGNAGE_MANAGER.TYPE_PLUGIN',
};

/** Label key of a media type. Undefined for types the library does not show. */
export function mediaTypeLabel(type: MediaType): string | undefined {
    return MEDIA_TYPE_LABELS[type as MediaTypeFilter];
}

/** Animations the user can pick, with their label keys */
export const ANIMATION_OPTIONS: { value: MediaAnimation; label: string }[] = [
    { value: MediaAnimation.Default, label: 'COMMON.DEFAULT' },
    { value: MediaAnimation.Cut, label: 'SIGNAGE_MANAGER.ANIM_CUT' },
    {
        value: MediaAnimation.CrossFade,
        label: 'SIGNAGE_MANAGER.ANIM_CROSS_FADE',
    },
    { value: MediaAnimation.SlideTop, label: 'SIGNAGE_MANAGER.ANIM_SLIDE_TOP' },
    {
        value: MediaAnimation.SlideLeft,
        label: 'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT',
    },
    {
        value: MediaAnimation.SlideRight,
        label: 'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT',
    },
    {
        value: MediaAnimation.SlideBottom,
        label: 'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM',
    },
];

/** Label key of an animation. Unknown values show as the default. */
export function animationLabel(animation: MediaAnimation) {
    return (
        ANIMATION_OPTIONS.find(({ value }) => value === animation)?.label ||
        'COMMON.DEFAULT'
    );
}
