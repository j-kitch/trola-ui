const Boards = [
    {
        id: '1',
        name: 'Foo Board',
        activeCards: 10,
        lists: [
            {
                id: '1',
                name: 'First List',
                limit: 20,
                cards: [
                    {
                        id: '1',
                        title: "I am the first card",
                    },
                    {
                        id: '2',
                        title: "I am the second card",
                    }
                ]
            },
            {
                id: '2',
                name: 'Second List',
                limit: 20,
                cards: [
                    {
                        id: '1',
                        title: "I am the first card",
                    },
                    {
                        id: '2',
                        title: "I am the second card",
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: "Bar Board",
        activeCards: 0,
        lists: [
            {
                id: '1',
                name: 'First List',
                limit: 20,
                cards: [
                    {
                        id: '1',
                        title: "I am the first card",
                    },
                    {
                        id: '2',
                        title: "I am the second card",
                    }
                ]
            }
        ]
    }
];

export default Boards;