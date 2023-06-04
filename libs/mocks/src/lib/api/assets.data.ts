import { getUnixTime } from 'date-fns';
import { Asset } from 'libs/assets/src/lib/asset.class';

export const MOCK_CATEGORIES = [
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Furniture' },
    { id: '3', name: 'Stationary' },
    { id: '4', name: 'Other' },
];

export const MOCK_PRODUCTS = [
    { id: '1', name: 'iPad', category_id: '1', brand: 'Apple', barcode: '123' },
    {
        id: '2',
        name: 'iPhone',
        category_id: '1',
        brand: 'Apple',
        barcode: '456',
        images: [],
    },
    {
        id: '3',
        name: 'iWatch',
        category_id: '1',
        brand: 'Apple',
        barcode: '789',
    },
    {
        id: '4',
        name: 'Chair',
        category_id: '2',
        brand: 'Herman Miller',
        barcode: '101',
    },
    {
        id: '5',
        name: 'Lounge',
        category_id: '2',
        brand: 'Ikea',
        barcode: '102',
    },
    { id: '6', name: 'Table', category_id: '2', brand: 'Ikea', barcode: '103' },
    { id: '7', name: 'Couch', category_id: '2', brand: 'Ikea', barcode: '104' },
    {
        id: '8',
        name: 'Test Item',
        category_id: '4',
        brand: 'Test Brand',
        barcode: '105',
    },
    {
        id: '9',
        name: 'Notepad',
        category_id: '3',
        brand: 'J.Burrows',
        barcode: '106',
    },
    {
        id: '10',
        name: 'Whiteboard Markers',
        category_id: '3',
        brand: 'Artline',
        barcode: '107',
    },
    {
        id: '11',
        name: 'Whiteboard',
        category_id: '2',
        brand: 'Ikea',
        barcode: '108',
    },
];

export const MOCK_ASSETS: Partial<Asset>[] = Array(100)
    .fill(null)
    .map((_, i) => ({
        id: `asset-${i}`,
        name: `Asset ${i}`,
        type_id: MOCK_PRODUCTS[i % MOCK_PRODUCTS.length].id,
        description: `This is asset ${i}`,
        model_number: `Model ${i}`,
        serial_number: `Serial ${i}`,
        identifier: `Identifier ${i}`,
        other_data: {},
        purchase_order_id: `purchase-order-${i}`,
    }));

export const MOCK_PURCHASE_ORDERS = Array(100)
    .fill(null)
    .map((_, i) => ({
        id: `purchase-order-${i}`,
        order_number: `Order ${i}`,
        invoice_number: `Invoice ${i}`,
        purchase_date: getUnixTime(Date.now()),
        expected_service_start_date: getUnixTime(Date.now()),
        expected_service_end_date: getUnixTime(Date.now() + 1000000000),
    }));
