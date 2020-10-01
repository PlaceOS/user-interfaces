import { isAndroidChrome, isMobileSafari, isMobileDevice, unique, humaniseDuration, filterList, matchToHighlight } from "./general.utilities";

describe('General Utilities', () => {

    // function setUserAgent(window, userAgent) {
    //     if (window.navigator.userAgent != userAgent) {
    //         var userAgentProp = { get: function () { return userAgent; } };
    //         try {
    //             Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    //         } catch (e) {
    //             window.navigator = Object.create(navigator, {
    //                 userAgent: userAgentProp
    //             });
    //         }
    //     }
    // }

    // it('isMobileDevice should return true if user agent contain correct text', () => {
    //     const devices = 'Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini'.split('|');
    //     for (const device of devices) {
    //         setUserAgent(window, device);
    //         expect(isMobileDevice()).toBeTruthy();
    //     }
    //     setUserAgent(window, 'Chrome');
    //     expect(isMobileDevice()).toBeFalsy();
    // });

    // it('isMobileSafari should return true if user agent contain correct text', () => {
    //     setUserAgent(window, 'iPhone AppleWebKit');
    //     expect(isMobileSafari()).toBeTruthy();
    //     setUserAgent(window, 'iPad AppleWebKit');
    //     expect(isMobileSafari()).toBeTruthy();
    //     setUserAgent(window, 'iPod AppleWebKit');
    //     expect(isMobileSafari()).toBeTruthy();
    //     setUserAgent(window, 'Androne Chrome');
    //     expect(isMobileSafari()).toBeFalsy();
    // });

    // it('isAndroidChrome should return true if user agent contain correct text', () => {
    //     setUserAgent(window, 'Android Chrome');
    //     expect(isAndroidChrome()).toBeTruthy();
    //     setUserAgent(window, 'Androme Chrone');
    //     expect(isAndroidChrome()).toBeFalsy();
    // });

    it('unique should remove duplicates', () => {
        const array = Array(10).fill(99);
        expect(unique(array).length).toBe(1);
        const even_array = Array(10).fill(0).map((v, i) => i % 2 === 0 ? 1 : 10);
        expect(unique(even_array).length).toBe(2);
        const odd_array = Array(10).fill(0).map((v, i) => ({ id: i % 2 === 1 ? 1 : 10 }));
        expect(unique(odd_array, 'id').length).toBe(2);
    });

    it('humaniseDuration should return the correct value', () => {
        expect(humaniseDuration(60)).toBe('1 hour');
        expect(humaniseDuration(120)).toBe('2 hours');
        expect(humaniseDuration(90)).toBe('1 hour, 30 minutes');
        expect(humaniseDuration(150)).toBe('2 hours, 30 minutes');
        expect(humaniseDuration(0)).toBeFalsy();
        expect(humaniseDuration(15)).toBe('15 minutes');
        expect(humaniseDuration(1)).toBe('1 minute');
    });

    it('filterList should return filtered list', () => {
        const list = ['a', 'b', 'c', 'd', 'e', 'ab', 'cd', 'ef']
            .map((v, i) => ({ name: v, other: `other-${i % 4}` }));
        expect(filterList('a', list, ['name']).length).toBe(2);
        expect(filterList('f', list, ['name']).length).toBe(1);
        expect(filterList('0', list, ['other']).length).toBe(2);
        expect(filterList('0', list, ['name', 'other']).length).toBe(2);
        expect(filterList('e', list, ['name', 'other']).length).toBe(8);
    })

    it('matchToHighlight should return HTML display string', () => {
        expect(matchToHighlight('`Test`')).toBe('<span class="highlight">Test</span>');
        const random = Math.floor(Math.random() * 99999).toString();
        expect(matchToHighlight(`\`${random}\``)).toBe(`<span class="highlight">${random}</span>`);
    });

});
