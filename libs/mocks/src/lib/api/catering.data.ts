import { HashMap, predictableRandomInt } from '@placeos/common';
import { addMinutes, differenceInMinutes } from 'date-fns';

export const MOCK_MENU = [
    {
        id: 'item-1',
        name: 'Coffee',
        unit_price: 200,
        category: 'Drinks',
        tags: ['drink', 'Contains Nuts', 'Contains Dairy'],
        options: [
            { id: 'opt-1', name: 'Cappacino', group: 'type' },
            { id: 'opt-2', name: 'Latte', group: 'type' },
            { id: 'opt-3', name: '1 Sugar', group: 'sugars', unit_price: 20 },
            { id: 'opt-4', name: '2 Sugar', group: 'sugars', unit_price: 20 },
            { id: 'opt-5', name: '3 Sugar', group: 'sugars', unit_price: 20 },
            { id: 'opt-6', name: '4 Sugar', group: 'sugars', unit_price: 20 },
        ],
    },
    {
        id: 'item-2',
        name: 'Soda',
        unit_price: 160,
        category: 'Drinks',
        tags: ['drink'],
        options: [
            { id: 'opt-1', name: 'Pepsi', group: 'type' },
            { id: 'opt-2', name: 'Sunkist', group: 'type' },
            { id: 'opt-3', name: 'Solo', group: 'type' },
            { id: 'opt-4', name: 'Dr Pepper', group: 'type' },
        ],
    },
    { id: 'item-3', name: 'Water', unit_price: 100, category: 'Drinks' },
    {
        id: 'item-4',
        name: 'Muffin',
        unit_price: 160,
        category: 'Snacks',
        options: [
            { id: 'opt-1', name: 'Choc Chip', group: 'type' },
            { id: 'opt-2', name: 'Banana', group: 'type' },
            { id: 'opt-3', name: 'Blueberry', group: 'type' },
        ],
    },
    {
        id: 'item-5',
        name: 'Cookies',
        unit_price: 400,
        category: 'Snacks',
        options: [
            { id: 'opt-1', name: 'Choc Chip', group: 'type' },
            { id: 'opt-2', name: 'Macadamia', group: 'type' },
            { id: 'opt-3', name: 'Dark Choc', group: 'type' },
        ],
    },
    {
        id: 'item-6',
        name: 'Fish & Chips',
        unit_price: 250,
        category: 'Simple Meals',
        options: [
            {
                id: 'opt-1',
                name: 'Tomato Sauce',
                group: 'sauce',
                unit_price: 30,
            },
            { id: 'opt-2', name: 'BBQ Sauce', group: 'sauce', unit_price: 35 },
            {
                id: 'opt-3',
                name: 'Tartare Sause',
                group: 'sauce',
                unit_price: 40,
            },
            {
                id: 'opt-4',
                name: 'Garlic Aoili Sauce',
                group: 'sauce',
                unit_price: 50,
            },
        ],
    },
    {
        id: 'item-7',
        name: 'Sandwich',
        unit_price: 300,
        category: 'Simple Meals',
        options: [
            { id: 'opt-1', name: 'Ham & Cheese', group: 'type' },
            { id: 'opt-2', name: 'Chicken', group: 'type' },
            { id: 'opt-3', name: 'Fairy Bread', group: 'type' },
        ],
    },
];

export function generateCateringOrder(event: HashMap) {
    const duration = differenceInMinutes(event.event_start, event.event_end);
    const mx = predictableRandomInt(MOCK_MENU.length);
    return {
        id: `order-${predictableRandomInt(999_999)}`,
        event_id: event.id,
        invoice_number: `I${predictableRandomInt(999_999)}`,
        charge_code: `C${predictableRandomInt(9_999)}`,
        deliver_at: addMinutes(
            event.event_start * 1000,
            predictableRandomInt(Math.floor(duration / 5)) * 5
        ),
        notes: predictableRandomInt(9999_9999) % 2 === 0 ? 'Test notes' : '',
        items: new Array(3).fill(0).map((_, idx) => ({
            ...MOCK_MENU[(mx * idx) % MOCK_MENU.length],
            options: [],
            quantity: predictableRandomInt(10, 1),
        })),
    };
}
