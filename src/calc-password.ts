export function calculatePasswordStrength(password: string):
    string {
    let strength = 0;
// Check for basic length requirement
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;

// Check for digits
    if (/\d/.test(password)) strength += 1;
// Check for lowercase letters
    if (/[a-z]/.test(password)) strength += 1;
// Check for uppercase letters

    if (/[A-Z]/.test(password)) strength += 1;
// Check for special characters
    if (/[\W_]/.test(password)) strength += 1;

// Determine password strength level based on strength score
    if (strength <= 2) {
        return "Very Weak";
    } else if (strength === 3) {
        return "Weak";
    } else if (strength === 4) {
        return "Moderate";
    } else if (strength >= 5) {
        return "Strong";
    }
}