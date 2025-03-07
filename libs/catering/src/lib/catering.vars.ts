import { i18n } from 'libs/common/src/lib/locale.service';

export function statusList() {
    return [
        {
            id: 'pending',
            name: i18n('CATERING.STATUS_PENDING'),
            icon: { class: 'custom-pending' },
            colour: '#ccc',
        },
        {
            id: 'accepted',
            name: i18n('CATERING.STATUS_ACCEPTED'),
            icon: { class: 'custom-accepted' },
            colour: '#3996B6',
        },
        {
            id: 'preparing',
            name: i18n('CATERING.STATUS_PREPARING'),
            icon: { class: 'custom-preparing' },
            colour: '#E7536B',
        },
        {
            id: 'ready',
            name: i18n('CATERING.STATUS_READY'),
            icon: { class: 'custom-ready' },
            colour: '#FFD028',
        },
        {
            id: 'delivered',
            name: i18n('CATERING.STATUS_DELIVERED'),
            icon: { class: 'custom-delivered' },
            colour: '#75BB43',
        },
        {
            id: 'cancelled',
            name: i18n('CATERING.STATUS_CANCELLED'),
            icon: { class: 'custom-cancelled' },
            colour: '#747474',
        },
    ];
}

export const CATERING_STATUSES: any[] = statusList();
