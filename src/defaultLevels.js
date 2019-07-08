const defaultLevels = [
    {
        id: 1,
        name: "Colors",
        description: "Демо уровень с цветами",
        rounds: [
            {
                id: 1,
                text: 'black',
                answer: ['черный', 'чёрный'],
                mode: "Write"
            },
            {
                id: 2,
                text: 'white',
                answer: ['белый'],
                mode: "Write"
            },
            {
                id: 3,
                text: 'green',
                answer: ['зеленый'],
                mode: "Write"
            },
            {
                id: 4,
                text: 'pink',
                answer: ['розовый'],
                mode: "Write"
            },
            {
                id: 5,
                text: 'yellow',
                answer: ['желтый'],
                mode: "Write"
            },
            {
                id: 6,
                text: 'brown',
                answer: ['коричневый'],
                mode: "Write"
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
                answer: ['кот', 'кошка'],
                mode: "Write"
            },
            {
                id: 2,
                text: 'chicken',
                answer: ['курица'],
                mode: "Write"
            },
            {
                id: 3,
                text: 'crab',
                answer: ['краб'],
                mode: "Write"
            }
        ]
    }

];

export default defaultLevels;