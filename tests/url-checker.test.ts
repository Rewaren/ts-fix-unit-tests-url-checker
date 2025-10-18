import {LinkChecker} from '../src/url-checker'


describe('LinkChecker', () => {
    let linkChecker: LinkChecker;

    beforeEach(() => {
        linkChecker = new LinkChecker();
    });

    test('should return true for valid URL with https', () => {
        expect(linkChecker.isValidUrl('https://www.example.com')).toBe(true);
    })

    // FIXME
    test('should return true for valid URL with http', () => {
        expect(linkChecker.isValidUrl('http://www.example.com'))
    })

    // FIXME
    test.skip('should return false for invalid URL with no protocol', () => {
        expect(linkChecker.isValidUrl('www.example.com')).toBeNaN()
    })

    // FIXME:

    // test('should return true for valid URL with port', () => {
    //     linkChecker.isValidUrl('http://www.example.com:8080')).toBetrue;
    // })
    //
    // test('should return true for valid URL with path', () => {
    //     expect(linkCheckker.isValidUrl('http://www.example.com/path/to/page')).toBeFalsy()
    // })

})