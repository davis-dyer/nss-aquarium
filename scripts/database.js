


//Creating fish 
const database = {
    fish: [
        {
            species: "Carassius",
            length: 3.25,
            name: 'devo',
            location: "11-15-22",
            food: ['green', 'worms'],
            image: 'carassius.jpg'
        },
        {
            species: "Carp",
            length: 8.20,
            name: 'carro',
            location: "05-22-22",
            food: ['tadpole', 'craw', 'minnow']
        },
        {
            species: "Discuss",
            length: 1.65,
            name: 'renny',
            location: "10-12-22",
            food: ['hom', 'digs']
        },
        {
            species: "Koi",
            length: 6.15,
            name: 'kobra',
            location: "11-01-22",
            food: ['blicks', 'worms']
        },
        {
            species: "Nabor",
            length: 2.15,
            name: 'nagle',
            location: "11-20-22",
            food: ['blicks', 'digs']
        },
        {
            species: "Yellow Fish",
            length: 10.3,
            name: 'yam',
            location: "11-15-22",
            food: ['green']
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}