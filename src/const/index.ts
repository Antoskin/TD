import {IBook} from "../types/book";
import {ReducerActionTypes} from "../types/actions";
import {OptionType} from "../components/Dropdown/Dropdown";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";

export const bookList: IBook[] = [
    {
        _id: 1,
        thumbnail: `${img1}`,
        title: 'Y Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowlin',
        rating: 5,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 9000,
        viewed: false,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            },
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Ayran',
                age: 33
            }
        ]
    },
    {
        _id: 2,
        thumbnail: `${img2}`,
        title: 'Ron Granger and the Philosopher\'s Stone',
        author: 'Dumbldore',
        rating: 3,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 9,
        viewed: false,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            }
        ]
    },
    {
        _id: 7,
        thumbnail: `${img3}`,
        title: 'G Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowlin',
        rating: 5,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 9100,
        viewed: false,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            },
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Ayran',
                age: 33
            }
        ]
    },
    {
        _id: 4,
        thumbnail: `${img4}`,
        title: 'X Granger and the Philosopher\'s Stone',
        author: 'Dumbldore',
        rating: 4,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 1990,
        viewed: false,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            }
        ]
    },
    {
        _id: 5,
        thumbnail: `${img5}`,
        title: 'V Granger and the Philosopher\'s Stone',
        author: 'Dumbldore',
        rating: 1,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 19,
        viewed: false,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            }
        ]
    },
    {
        _id: 6,
        thumbnail: `${img7}`,
        title: 'K Granger and the Philosopher\'s Stone',
        author: 'Dumbldore',
        rating: 2,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 19,
        viewed: false,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            }
        ]
    },
    {
        _id: 3,
        thumbnail: `${img6}`,
        title: 'M Granger and the Philosopher\'s Stone',
        author: 'Dumbldore',
        rating: 3,
        description: 'For the first time in his life, Harry Potter learns that he is not an ordinary boy. He is a wizard, and his parents were wizards. At the age of eleven, Harry goes to Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns a lot about the wizarding world, and begins to fight evil.',
        downloads: 1990,
        viewed: true,
        reviews: [
            {
                testimonial: "This is my all-time favorite book. It is magical, exciting, and inspiring.",
                reader: 'Maria',
                age: 25
            }
        ]
    },
]

export const optionList: OptionType[] = [
    {
        id: 1,
        type: ReducerActionTypes.POPULARITY
    },
    {
        id: 2,
        type: ReducerActionTypes.NAME
    },
    {
        id: 3,
        type: ReducerActionTypes.NEWEST
    },
];
