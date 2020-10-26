import { PeopleService } from "./people.service";
import { of } from "rxjs";
import { generateMockUser } from "../users/user.utilities";
import { User } from "../users/user.class";

describe('PeopleService', () => {
    let service: PeopleService;
    let comms: any;
    let http: any;
    let location: any;
    let app: any;
    let user_data: any;

    beforeEach(() => {
        comms = {
            'tryLogin': jest.fn(),
            'logout': jest.fn(),
            'hash': jest.fn(),
            'get': jest.fn()
        };
        http = {
            'get': jest.fn(),
            'post': jest.fn(),
            'put': jest.fn(),
            'delete': jest.fn()
        };
        location = {
            'go': jest.fn(),
            'path': jest.fn()
        };
        service = new PeopleService(comms, http, location);
        user_data = generateMockUser();
        http.get.and.returnValue(of(user_data));
        app.People = {
            'item': jest.fn()
        };
        app.People.item.and.returnValue({});
    });

    it('should be the service', () => {
        expect(service).toBeTruthy();
    });

    it('should return the current user', () => {

        jest.useFakeTimers();
        service.init();
        jest.runOnlyPendingTimers();
        expect(service.current).toBeTruthy();
        expect(service.current instanceof User).toBeTruthy();
        jest.useRealTimers();
    });

    it('should return User objects', () => {

        jest.useFakeTimers();
        const list = Array(10).fill(0).map(i => generateMockUser());
        comms.get.and.returnValue(of(list));
        service.query({ q: 'Test' });
        jest.runOnlyPendingTimers();
        expect(service.list()).toBeTruthy();
        jest.useRealTimers();
    });

});
