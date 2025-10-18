import {calculatePasswordStrength} from '../src/calc-password'

describe('calculatePasswordStrength', () => {

    // Very Weak passwords (score <= 2)
    test('should return "Very Weak" for very short passwords', () => {
        expect(calculatePasswordStrength('a')).toBe('Very Weak');
        expect(calculatePasswordStrength('abc')).toBe('Very Weak');
        expect(calculatePasswordStrength('12345')).toBe('Very Weak');
    });

    test('should return "Very Weak" for 8+ character passwords with only lowercase', () => {
        expect(calculatePasswordStrength('abcdefgh')).toBe('Very Weak');
    });

    test('should return "Very Weak" for 8+ character passwords with only uppercase', () => {
        expect(calculatePasswordStrength('ABCDEFGH')).toBe('Very Weak');
    });

    test('should return "Very Weak" for 8+ character passwords with only digits', () => {
        expect(calculatePasswordStrength('12345678')).toBe('Very Weak');
    });

    // Weak passwords (score = 3)
    test('should return "Weak" for passwords with length + digits + lowercase', () => {
        expect(calculatePasswordStrength('abc12345')).toBe('Weak');
    });

    test('should return "Weak" for passwords with length + digits + uppercase', () => {
        expect(calculatePasswordStrength('ABC12345')).toBe('Weak');
    });

    test('should return "Weak" for passwords with length + lowercase + uppercase', () => {
        expect(calculatePasswordStrength('Abcdefgh')).toBe('Weak');
    });

    test('should return "Weak" for 12+ character passwords with only lowercase', () => {
        expect(calculatePasswordStrength('abcdefghijkl')).toBe('Weak');
    });

    // Moderate passwords (score = 4)
    test('should return "Moderate" for passwords with length + digits + lowercase + uppercase', () => {
        expect(calculatePasswordStrength('Abc12345')).toBe('Moderate');
    });

    test('should return "Moderate" for passwords with length + digits + lowercase + special', () => {
        expect(calculatePasswordStrength('abc123!@')).toBe('Moderate');
    });

    test('should return "Moderate" for passwords with length + lowercase + uppercase + special', () => {
        expect(calculatePasswordStrength('Abcdefg!')).toBe('Moderate');
    });

    test('should return "Moderate" for 12+ character passwords with digits + lowercase', () => {
        expect(calculatePasswordStrength('abcdef123456')).toBe('Moderate');
    });

    // Strong passwords (score >= 5)
    test('should return "Strong" for passwords with all character types (8 chars)', () => {
        expect(calculatePasswordStrength('Abc123!@')).toBe('Strong');
    });

    test('should return "Strong" for passwords with all character types (12+ chars)', () => {
        expect(calculatePasswordStrength('Abcdef123!@#')).toBe('Strong');
    });

    test('should return "Strong" for complex passwords with multiple special chars', () => {
        expect(calculatePasswordStrength('MyP@ssw0rd!2024')).toBe('Strong');
    });

    test('should return "Strong" for very long passwords with multiple character types', () => {
        expect(calculatePasswordStrength('VeryL0ngP@sswordW1thSp3ci@lCh@rs!')).toBe('Strong');
    });

    // Edge cases
    test('should handle empty string', () => {
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    });

    test('should handle passwords with only special characters', () => {
        expect(calculatePasswordStrength('!@#$%^&*')).toBe('Very Weak');
    });

    test('should handle passwords with spaces', () => {
        expect(calculatePasswordStrength('Pass word123')).toBe('Strong');
    });

    test('should handle international characters', () => {
        expect(calculatePasswordStrength('Pässwörd123!')).toBe('Strong');
    });

    // Verify scoring logic with specific examples
    describe('scoring verification', () => {
        test('7 char lowercase = 0 points = Very Weak', () => {
            expect(calculatePasswordStrength('abcdefg')).toBe('Very Weak');
        });

        test('8 char lowercase = 1 point = Very Weak', () => {
            expect(calculatePasswordStrength('abcdefgh')).toBe('Very Weak');
        });

        test('12 char lowercase = 2 points = Very Weak', () => {
            expect(calculatePasswordStrength('abcdefghijkl')).toBe('Weak');
        });

        test('8 char + lowercase + digit = 3 points = Weak', () => {
            expect(calculatePasswordStrength('abc12345')).toBe('Weak');
        });

        test('8 char + lowercase + uppercase + digit = 4 points = Moderate', () => {
            expect(calculatePasswordStrength('Abc12345')).toBe('Moderate');
        });

        test('8 char + all types = 5 points = Strong', () => {
            expect(calculatePasswordStrength('Abc123!@')).toBe('Strong');
        });

        test('12 char + all types = 6 points = Strong', () => {
            expect(calculatePasswordStrength('Abcdef123!@#')).toBe('Strong');
        });
    });
});