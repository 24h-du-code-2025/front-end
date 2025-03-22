
// Function to generate random token
export function generateRandomToken() {

    return Math.random().toString(36).substr(2);
}

// Function to get random gradient
export function getRandomColorScheme() {
    // Liste des options de couleurs Tailwind
    const colorOptions = [
      {
        mainColor: 'blue',
        gradient: 'from-blue-400 to-blue-600',
        hoverGradient: 'hover:from-blue-600 hover:to-blue-800'
      },
      {
        mainColor: 'purple',
        gradient: 'from-purple-400 to-purple-600',
        hoverGradient: 'hover:from-purple-600 hover:to-purple-800'
      },
      {
        mainColor: 'pink',
        gradient: 'from-pink-400 to-pink-600',
        hoverGradient: 'hover:from-pink-600 hover:to-pink-800'
      },
      {
        mainColor: 'indigo',
        gradient: 'from-indigo-400 to-indigo-600',
        hoverGradient: 'hover:from-indigo-600 hover:to-indigo-800'
      },
      {
        mainColor: 'green',
        gradient: 'from-green-400 to-green-600',
        hoverGradient: 'hover:from-green-600 hover:to-green-800'
      },
      {
        mainColor: 'yellow',
        gradient: 'from-yellow-400 to-yellow-600',
        hoverGradient: 'hover:from-yellow-600 hover:to-yellow-800'
      },
      {
        mainColor: 'red',
        gradient: 'from-red-400 to-red-600',
        hoverGradient: 'hover:from-red-600 hover:to-red-800'
      },
      {
        mainColor: 'teal',
        gradient: 'from-teal-400 to-teal-600',
        hoverGradient: 'hover:from-teal-600 hover:to-teal-800'
      }
    ];

    // Sélectionner une couleur aléatoire de la liste
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];
}