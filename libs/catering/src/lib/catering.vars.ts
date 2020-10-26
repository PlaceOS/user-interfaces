import { Identity } from '@user-interfaces/common';

export const CATERING_STATUSES: Identity[] = [
    { id: 'pending', name: 'Pending', icon: { class: 'custom-pending' }, colour: '#ccc' },
    { id: 'accepted', name: 'Accepted', icon: { class: 'custom-accepted' }, colour: '#3996B6' },
    {
        id: 'preparing',
        name: 'Preparing',
        icon: { class: 'custom-preparing' },
        colour: '#E7536B',
    },
    { id: 'ready', name: 'Ready', icon: { class: 'custom-ready' }, colour: '#FFD028' },
    {
        id: 'delivered',
        name: 'Delivered',
        icon: { class: 'custom-delivered' },
        colour: '#75BB43',
    },
    {
        id: 'cancelled',
        name: 'Cancelled',
        icon: { class: 'custom-cancelled' },
        colour: '#747474',
    },
];
