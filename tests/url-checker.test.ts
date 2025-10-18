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
    test('should return false for invalid URL with no protocol', () => {
        expect(linkChecker.isValidUrl('www.example.com')).toBe(false);
    })

    // FIXME:

    test('should return true for valid URL with port', () => {
        expect(linkChecker.isValidUrl('http://www.example.com:8080')).toBe(true);
    })

    test('should return true for valid URL with path', () => {
        expect(linkChecker.isValidUrl('http://www.example.com/path/to/page')).toBeTruthy()
    })

})