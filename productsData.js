const products = [
    {
        id: 1,
        name: 'High-Back Bench',
        company: 'Ikea',
        price: '9.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-1.jfif',
    },
    {
        id: 2,
        name: 'Albany Table',
        company: 'Marcos',
        price: '79.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-2.jfif',
    },
    {
        id: 3,
        name: 'Accent Chair',
        company: 'Caressa',
        price: '25.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-3.jfif',
    },
    {
        id: 4,
        name: 'Wooden Table',
        company: 'Caressa',
        price: '45.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-4.jfif',
    },
    {
        id: 5,
        name: 'Dining Table',
        company: 'Caressa',
        price: '6.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-5.jfif',
    },
    {
        id: 6,
        name: 'Sofa Set',
        company: 'Liddy',
        price: '69.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-6.jfif',
    },
    {
        id: 7,
        name: 'Modern Bookshelf',
        company: 'Marcos',
        price: '8.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-7.jfif',
    },
    {
        id: 8,
        name: 'Emperor Bed',
        company: 'Liddy',
        price: '21.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-8.jfif',
    },
    {
        id: 9,
        name: 'Utopia Sofa',
        company: 'Marcos',
        price: '9.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-9.jfif',
    },
    {
        id: 10,
        name: 'Entertainment Center',
        company: 'Liddy',
        price: '29.98',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-10.jfif',
    },
    {
        id: 11,
        name: 'Albany Sectional',
        company: 'Ikea',
        price: '10.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-11.jfif',
    },
    {
        id: 12,
        name: 'Leather Sofa',
        company: 'Liddy',
        price: '9.99',
        desc: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: './assets/images/prod-12.jfif',
    },
    
]

export default products;

// {
//     "products": [
//         {
//             "id": 1,
//             "name": "High-Back Bench",
//             "company": "Ikea",
//             "price": "9.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "./assets/images/prod-1.jfif"
//         },
//         {
//             "id": 2,
//             "name": "Albany Table",
//             "company": "Marcos",
//             "price": "79.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-2.jfif"
//         },
//         {
//             "id": 3,
//             "name": "Accent Chair",
//             "company": "Caressa",
//             "price": "25.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-3.jfif"
//         },
//         {
//             "id": 4,
//             "name": "Wooden Table",
//             "company": "Caressa",
//             "price": "45.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-4.jfif"
//         },
//         {
//             "id": 5,
//             "name": "Dining Table",
//             "company": "Caressa",
//             "price": "6.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "./assets/images/prod-5.jfif"
//         },
//         {
//             "id": 6,
//             "name": "Sofa Set",
//             "company": "Liddy",
//             "price": "69.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-6.jfif"
//         },
//         {
//             "id": 7,
//             "name": "Modern Bookshelf",
//             "company": "Marcos",
//             "price": "8.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "./assets/images/prod-7.jfif"
//         },
//         {
//             "id": 8,
//             "name": "Emperor Bed",
//             "company": "Liddy",
//             "price": "21.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-8.jfif"
//         },
//         {
//             "id": 9,
//             "name": "Utopia Sofa",
//             "company": "Marcos",
//             "price": "9.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "./assets/images/prod-9.jfif"
//         },
//         {
//             "id": 10,
//             "name": "Entertainment Center",
//             "company": "Liddy",
//             "price": "29.98",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-10.jfif"
//         },
//         {
//             "id": 11,
//             "name": "Albany Sectional",
//             "company": "Ikea",
//             "price": "10.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "/assets/images/prod-11.jfif"
//         },
//         {
//             "id": 12,
//             "name": "Leather Sofa",
//             "company": "Liddy",
//             "price": "9.99",
//             "desc": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//             "img": "./assets/images/prod-12.jfif"
//         }
//     ]

// }