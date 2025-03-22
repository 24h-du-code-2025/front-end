
// Function to generate random token
export function generateRandomToken() {

    return Math.random().toString(36).substr(2);
}

// Function to get random color name
export function getRandomColorName() {

    const colors = ['amber', 'teal', 'pink', 'purple', 'yellow', 'blue', 'rose', 'emerald', 'red', 'indigo', 'orange', 'cyan'];

    return colors[Math.floor(Math.random() * colors.length)];
}