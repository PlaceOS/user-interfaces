import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { ExternalCateringService } from '../lib/external-catering.service';
import { OrganisationService } from '../lib/org/organisation.service';
import { SettingsService } from '../lib/settings.service';
import { CalendarEvent } from '../lib/types/event.class';
import { CateringItem, CateringOrder } from '../lib/types/catering.class';
import * as user_state from '../lib/user-state';

describe('ExternalCateringService', () => {
    let spectator: SpectatorService<ExternalCateringService>;
    let module: { execute: jest.Mock };
    let settings: Record<string, any>;

    const createService = createServiceFactory({
        service: ExternalCateringService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings[key]),
            }),
            MockProvider(OrganisationService, {
                module: jest.fn(() => module as any),
                building: { display_name: 'HQ' } as any,
            }),
        ],
    });

    beforeEach(() => {
        settings = { 'app.catering.backend': 'external' };
        module = { execute: jest.fn() };
        spectator = createService();
    });

    it('is enabled only when the backend setting is external', () => {
        expect(spectator.service.enabled).toBe(true);
        settings['app.catering.backend'] = 'native';
        expect(spectator.service.enabled).toBe(false);
    });

    it('maps external products to catering items in cents and drops inactive', async () => {
        module.execute.mockResolvedValueOnce({
            next_page: null,
            items: [
                {
                    uuid: 'p1',
                    name: 'Coffee',
                    price: 5,
                    status: 'active',
                    supplier: { name: 'Beans Co' },
                    product_categories: [{ name: 'Drinks' }],
                    dietaries: [{ code: 'v', name: 'Vegan' }],
                },
                { uuid: 'p2', name: 'Stale Cake', price: 3, status: 'archived' },
            ],
        });
        const items = await spectator.service.loadMenu();
        expect(module.execute).toHaveBeenCalledWith('products', [1]);
        expect(items).toHaveLength(1);
        expect(items[0].name).toBe('Coffee');
        expect(items[0].unit_price).toBe(500);
        expect(items[0].caterer).toBe('Beans Co');
        expect(items[0].category).toBe('Drinks');
        expect(items[0].tags).toEqual(['Vegan']);
    });

    it('walks every page of products', async () => {
        module.execute
            .mockResolvedValueOnce({
                next_page: 'http://external/p?page=2',
                items: [{ uuid: 'a', name: 'A', price: 1, status: 'active' }],
            })
            .mockResolvedValueOnce({
                next_page: null,
                items: [{ uuid: 'b', name: 'B', price: 1, status: 'active' }],
            });
        const items = await spectator.service.loadMenu();
        expect(module.execute).toHaveBeenCalledWith('products', [1]);
        expect(module.execute).toHaveBeenCalledWith('products', [2]);
        expect(items.map((_) => _.id)).toEqual(['a', 'b']);
    });

    it('places an order with a grand total in currency units', async () => {
        jest.spyOn(user_state, 'currentUser').mockReturnValue({
            email: 'jane@example.com',
            first_name: 'Jane',
            last_name: 'Doe',
            name: 'Jane Doe',
        } as any);
        module.execute
            .mockResolvedValueOnce({
                uuid: 'cust-uuid-1',
                email: 'jane@example.com',
                first_name: 'Jane',
                last_name: 'Doe',
            })
            .mockResolvedValueOnce({ id: 999, status: 'ok' });
        const event = new CalendarEvent({
            id: 'evt-1',
            date: new Date('2026-07-01T10:00:00').valueOf(),
            resources: [{ display_name: 'Boardroom' }] as any,
            attendees: [{ email: 'a@x.com' }, { email: 'b@x.com' }] as any,
        });
        const order = new CateringOrder({
            event,
            notes: 'No nuts',
            items: [
                new CateringItem({
                    id: 'p1',
                    name: 'Coffee',
                    caterer: '',
                    unit_price: 500,
                    quantity: 2,
                }),
            ],
        });
        const placed = await spectator.service.placeOrders(event, [order]);

        // returns a external reference per placed order for local booking records
        expect(placed).toHaveLength(1);
        expect(placed[0].reference).toEqual({
            customer_uuid: 'cust-uuid-1',
            customer_name: 'Jane Doe',
            purchase_order_number: 'evt-1',
            response: { id: 999, status: 'ok' },
        });
        expect(placed[0].order).toBe(order);

        const [match_method, [customer]] = module.execute.mock.calls[0];
        expect(match_method).toBe('match_or_create_customer');
        expect(customer.email).toBe('jane@example.com');

        // create_external_order takes POSITIONAL args, in driver-guide order
        const [order_method, args] = module.execute.mock.calls[1];
        expect(order_method).toBe('create_external_order');
        const [po, name, address, datetime, grand_total, items] = args;
        expect(po).toBe('evt-1');
        expect(name).toBe('Jane Doe');
        expect(address).toBe('Boardroom');
        expect(typeof datetime).toBe('string');
        expect(grand_total).toBe(10);
        expect(items).toEqual([
            { product_name: 'Coffee', price: 5, quantity: 2 },
        ]);
        expect(args[8]).toBe(2); // number_of_guests
        expect(args[11]).toBe('No nuts'); // delivery_instruction
    });

    it('skips empty orders', async () => {
        await spectator.service.placeOrders({} as any, []);
        expect(module.execute).not.toHaveBeenCalled();
    });
});
