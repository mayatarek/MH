const products = [
    {
        'id':'1',
        'name': 'Elegant Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace.jpeg',
        'details': 'A stunning piece that complements any outfit.',
        'careTips': 'Keep away from water and perfume to maintain shine.',
        'price': '120 £',
        
    },
    {
        'id':'2',
        'name': 'Golden Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace2.jpeg',
        'details': 'A perfect addition for formal occasions.',
        'careTips': 'Wipe with a soft cloth after use.',
        'price': '150 £'
    },
    {
        'id':'3',
        'name': 'Pearl Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace3.jpeg',
        'details': 'A timeless piece featuring natural pearls.',
        'careTips': 'Store in a fabric-lined box to prevent scratches.',
        'price': '200 £'
    },
    {
        'id':'4',
        'name': 'Silver Charm Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace4.jpeg',
        'details': 'A delicate necklace with a charm centerpiece.',
        'careTips': 'Avoid contact with harsh chemicals.',
        'price': '95 £'
    },
    {
        'id':'5',
        'name': 'Vintage Gold Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace5.jpeg',
        'details': 'A vintage design with intricate details.',
        'careTips': 'Clean with mild soap and a soft brush.',
        'price': '220 £'
    },
    {
        'id':'6',
        'name': 'Crystal Pendant Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace6.jpeg',
        'details': 'A sparkling pendant necklace with crystals.',
        'careTips': 'Store in a dry place to maintain brilliance.',
        'price': '180 £'
    },
    {
        'id':'7',
        'name': 'Classic Earring',
        'type': 'earring',
        'image': '../src/assets/earring.jpeg',
        'details': 'Elegant and simple earrings for everyday wear.',
        'careTips': 'Clean with a soft microfiber cloth.',
        'price': '50 £'
    },
    {
        'id':'8',
        'name': 'Diamond Stud Earrings',
        'type': 'earring',
        'image': '../src/assets/earring2.jpeg',
        'details': 'Perfect studs with a classic diamond design.',
        'careTips': 'Keep in a separate compartment to avoid scratches.',
        'price': '300 £'
    },
    {
        'id':'9',
        'name': 'Hoop Earrings',
        'type': 'earring',
        'image': '../src/assets/earring3.jpeg',
        'details': 'Stylish hoop earrings for a bold look.',
        'careTips': 'Avoid wearing during physical activities.',
        'price': '75 £'
    },
    {
        'id':'10',
        'name': 'Rose Gold Earrings',
        'type': 'earring',
        'image': '../src/assets/earring4.jpeg',
        'details': 'Delicate rose gold earrings for a romantic touch.',
        'careTips': 'Polish with a jewelry cleaning solution.',
        'price': '130 £'
    },
    {
        'id':'11',
        'name': 'Silver Ring',
        'type': 'ring',
        'image': '../src/assets/ring.jpeg',
        'hoverImage': '../src/assets/ring2.jpeg',
        'details': 'A sleek silver ring for a modern look.',
        'careTips': 'Avoid prolonged exposure to moisture.',
        'price': '85 £'
    },
    {
        'id':'12',
        'name': 'Gold Band Ring',
        'type': 'ring',
        'image': '../src/assets/ring2.jpeg',
        'hoverImage': '../src/assets/ring.jpeg',
        'details': 'A classic gold band ring for everyday wear.',
        'careTips': 'Polish regularly with a soft cloth.',
        'price': '100 £'
    },
    {
        'id':'13',
        'name': 'Ruby Gem Ring',
        'type': 'ring',
        'image': '../src/assets/ring3.jpeg',
        'hoverImage': '../src/assets/ring.jpeg',
        'details': 'An elegant ring with a vibrant ruby centerpiece.',
        'careTips': 'Store separately to protect the gemstone.',
        'price': '400 £'
    },
    {
        'id':'14',
        'name': 'Diamond Ring',
        'type': 'ring',
        'image': '../src/assets/ring4.jpeg',
        'hoverImage': '../src/assets/ring.jpeg',
        'details': 'A timeless diamond ring with a solitaire design.',
        'careTips': 'Handle with care and keep in a padded box.',
        'price': '800 £'
    },
    {
        'id':'15',
        'name': 'Silver Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet.jpeg',
        'details': 'A sleek silver bracelet for an elegant touch.',
        'careTips': 'Avoid contact with water to prevent tarnishing.',
        'price': '60 £'
    },
    {
        'id':'16',
        'name': 'Gold Charm Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet2.jpeg',
        'details': 'A beautiful bracelet with gold charm pendants.',
        'careTips': 'Polish regularly to maintain shine.',
        'price': '150 £'
    },
    {
        'id':'17',
        'name': 'Beaded Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet3.jpeg',
        'details': 'A colorful beaded bracelet for casual outfits.',
        'careTips': 'Store in a fabric pouch to prevent scratches.',
        'price': '40 £'
    },
    {
        'id':'18',
        'name': 'Leather Wrap Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet4.jpeg',
        'details': 'A trendy leather bracelet with a wrap-around design.',
        'careTips': 'Avoid exposure to water and direct sunlight.',
        'price': '55 £'
    },
    {
        'id':'19',
        'name': 'Crystal Bangle Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet5.jpeg',
        'details': 'A shimmering bracelet adorned with crystals.',
        'careTips': 'Wipe gently with a soft cloth to maintain sparkle.',
        'price': '90 £'
    },
    {
        'id':'20',
        'name': 'Rose Gold Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet6.jpeg',
        'details': 'A delicate bracelet in rose gold with intricate details.',
        'careTips': 'Store in a padded box to prevent damage.',
        'price': '110 £'
    },
];

export default products;




//   const products = [
//         {
//             'id':'1',
//             'name': 'Elegant Necklace',
//             'type': 'necklace',
//             'image': '../src/assets/necklace.jpeg',
//             'details': 'A stunning piece that complements any outfit.',
//             'careTips': 'Keep away from water and perfume to maintain shine.',
//             'price': '7363 $'
//         },
//         {
//             'id':'2',
//             'name': 'Golden Necklace',
//             'type': 'necklace',
//             'image': '../src/assets/necklace2.jpeg',
//             'details': 'A perfect addition for formal occasions.',
//             'careTips': 'Wipe with a soft cloth after use.',
//             'price': '7363 $'
//         },
//         {
//             'id':'3',
//             'name': 'Pearl Necklace',
//             'type': 'necklace',
//             'image': '../src/assets/necklace3.jpeg',
//             'details': 'A timeless piece featuring natural pearls.',
//             'careTips': 'Store in a fabric-lined box to prevent scratches.',
//             'price': '7363 $'
//         },
//         {
//             'id':'4',
//             'name': 'Silver Charm Necklace',
//             'type': 'necklace',
//             'image': '../src/assets/necklace4.jpeg',
//             'details': 'A delicate necklace with a charm centerpiece.',
//             'careTips': 'Avoid contact with harsh chemicals.',
//             'price': '7363 $'
//         },
//         {
//             'id':'5',
//             'name': 'Vintage Gold Necklace',
//             'type': 'necklace',
//             'image': '../src/assets/necklace5.jpeg',
//             'details': 'A vintage design with intricate details.',
//             'careTips': 'Clean with mild soap and a soft brush.',
//             'price': '7363 $'
//         },
//         {
//             'id':'6',
//             'name': 'Crystal Pendant Necklace',
//             'type': 'necklace',
//             'image': '../src/assets/necklace6.jpeg',
//             'details': 'A sparkling pendant necklace with crystals.',
//             'careTips': 'Store in a dry place to maintain brilliance.',
//             'price': '7363 $'
//         },
//         {
//             'id':'7',
//             'name': 'Classic Earring',
//             'type': 'earring',
//             'image': '../src/assets/earring.jpeg',
//             'details': 'Elegant and simple earrings for everyday wear.',
//             'careTips': 'Clean with a soft microfiber cloth.',
//             'price': '7363 $'
//         },
//         {
//             'id':'8',
//             'name': 'Diamond Stud Earrings',
//             'type': 'earring',
//             'image': '../src/assets/earring2.jpeg',
//             'details': 'Perfect studs with a classic diamond design.',
//             'careTips': 'Keep in a separate compartment to avoid scratches.',
//             'price': '7363 $'
//         },
//         {
//             'id':'9',
//             'name': 'Hoop Earrings',
//             'type': 'earring',
//             'image': '../src/assets/earring3.jpeg',
//             'details': 'Stylish hoop earrings for a bold look.',
//             'careTips': 'Avoid wearing during physical activities.',
//             'price': '7363 $'
//         },
//         {
//             'id':'10',
//             'name': 'Rose Gold Earrings',
//             'type': 'earring',
//             'image': '../src/assets/earring4.jpeg',
//             'details': 'Delicate rose gold earrings for a romantic touch.',
//             'careTips': 'Polish with a jewelry cleaning solution.',
//             'price': '7363 $'
//         },
//         {
//             'id':'11',
//             'name': 'Silver Ring',
//             'type': 'ring',
//             'image': '../src/assets/ring.jpeg',
//             'details': 'A sleek silver ring for a modern look.',
//             'careTips': 'Avoid prolonged exposure to moisture.',
//             'price': '7363 $'
//         },
//         {
//             'id':'12',
//             'name': 'Gold Band Ring',
//             'type': 'ring',
//             'image': '../src/assets/ring2.jpeg',
//             'details': 'A classic gold band ring for everyday wear.',
//             'careTips': 'Polish regularly with a soft cloth.',
//             'price': '7363 $'
//         },
//         {
//             'id':'13',
//             'name': 'Ruby Gem Ring',
//             'type': 'ring',
//             'image': '../src/assets/ring3.jpeg',
//             'details': 'An elegant ring with a vibrant ruby centerpiece.',
//             'careTips': 'Store separately to protect the gemstone.',
//             'price': '7363 $'
//         },
//         {
//             'id':'14',
//             'name': 'Diamond Ring',
//             'type': 'ring',
//             'image': '../src/assets/ring4.jpeg',
//             'details': 'A timeless diamond ring with a solitaire design.',
//             'careTips': 'Handle with care and keep in a padded box.',
//             'price': '7363 $'
//         },

//         {
//             'id':'15',
//             'name': 'temp bracelet',
//             'type': 'bracelet',
//             'image': '../src/assets/ring4.jpeg',
//             'details': 'A timeless diamond ring with a solitaire design.',
//             'careTips': 'Handle with care and keep in a padded box.',
//             'price': '7363 $'
//         },
//         {
//             'id':'16',
//             'name': 'Cute Ring',
//             'type': 'ring',
//             'image': '../src/assets/ring5.jpeg',
//             'details': 'A timeless diamond ring with a solitaire design.',
//             'careTips': 'Handle with care and keep in a padded box.',
//             'price': '7363 $'
//         },
//     ];

// export default products;   
