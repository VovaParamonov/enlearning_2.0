const defaultLevels = [
    {
        id: 1,
        name: "Colors",
        description: "Демо уровень с цветами",
        rounds: [
            {
                id: 1,
                text: 'black',
                answer: ['черный', 'чёрный']
            },
            {
                id: 2,
                text: 'white',
                answer: ['белый']
            },
            {
                id: 3,
                text: 'green',
                answer: ['зеленый']
            },
            {
                id: 4,
                text: 'pink',
                answer: ['розовый']
            },
            {
                id: 5,
                text: 'yellow',
                answer: ['желтый']
            },
            {
                id: 6,
                text: 'brown',
                answer: ['коричневый']
            }
        ]
    },
    {
        id: 2,
        name: "Animals",
        description: "Демо уровень с животными",
        rounds: [
            {
                id: 1,
                text: 'Cat',
                answer: ['кот', 'кошка']
            },
            {
                id: 2,
                text: 'chicken',
                answer: ['курица']
            },
            {
                id: 3,
                text: 'crab',
                answer: ['краб']
            }
        ]
    }

];

export default defaultLevels;