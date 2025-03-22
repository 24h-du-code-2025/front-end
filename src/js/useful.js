
// Function to generate random token
export function generateRandomToken() {

    return Math.random().toString(36).substr(2);
}

// Function to standardize message format
export function formatMessage(message) {

    return {
        id: message.id ?? null,
        message: message.message ?? null,
        timestamps: {
            created: Date.now(),
        },
        author: {
            type: message.from ?? null,
            imageUrl: 'https://i.luwe.fr/XKaRXJVYlv.png',
            names: {
                first: '',
                last: '',
                full: 'Luc Mergault',
            }
        }
    };
}