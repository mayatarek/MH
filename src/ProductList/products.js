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
        'name': 'Pink Daisy Flower Trio Ring',
        'type': 'ring',
        'image': '../src/assets/ring.jpeg',
        'details': 'Bring flower power to your style with this flower crown-inspired Pink Daisy Flower Trio Ring. The daisy ring features a 14k rose gold-plated and is decorated with three enamel flowers with cubic zirconia in the centre. A hand-painted finish brings the vibrant petals to life with delicate shading. Inspired by the daisy, a flower which blooms in adversity and represents freedom, the ring serves as a stylish reminder to stay true to who you are.',
        'careTips': 'Avoid prolonged exposure to moisture.',
        'price': '125 £'
    },
    {
        'id':'12',
        'name': 'Disney Cinderella Carriage Ring',
        'type': 'ring',
        'image': '../src/assets/ring2.jpeg',
        'details': 'A classic gold band ring for every Midnight is just the beginning. Get ready to have a ball with the Disney Cinderella Carriage Ring, showcasing a blue marquise-shaped stone at the centre. ',
        'careTips': 'Polish regularly with a soft cloth.',
        'price': '130 £'
    },
    {
        'id':'13',
        'name': 'April Clear Eternity Circle Ring',
        'type': 'ring',
        'image': '../src/assets/ring3.jpeg',
        'details': 'Wear a symbol of forever with the Clear Eternity Circle Ring. This sterling silver ring features one claw-set, cabochon-cut cubic zirconia stone. The polished band wraps around the centre stone in an openwork braided infinity pattern. Whether you want to carry a reminder of eternal love or a symbol of the timeless joy that infuses each and every moment, this colourful eternity ring will bring sparkling meaning to your look.',
        'careTips': 'Store separately to protect the gemstone.',
        'price': '55 £'
    },
    {
        'id':'14',
        'name': 'Pandora Timeless Wish Tiara Ring',
        'type': 'ring',
        'image': '../src/assets/ring4.jpeg',
        'details': 'Let even more radiance into your ring styling with this glittering tiara ring, fit for a modern-day princess. Inspired by royal headpieces from across history, this 14k gold-plated wishbone ring will add a regal feel to your everyday looks. Set with rows of glittering cubic zirconia in classic settings, the chevron-shaped piece is sure to be the crowning glory in any ring stack.',
        'careTips': 'Handle with care and keep in a padded box.',
        'price': '125 £'
    },
    {
        'id':'15',
        'name': 'Sparkling Infinity Heart Clasp Snake Chain Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet.jpeg',
        'details': 'A sleek silver bracelet for an elegant touch.',
        'careTips': 'Avoid contact with water to prevent tarnishing.',
        'price': '88 £'
    },
    {
        'id':'16',
        'name': 'Dream Big Believe In Yourself Charm Bracelet Set',
        'type': 'bracelet',
        'image': '../src/assets/bracelet2.jpeg',
        'details': 'Unbox holiday wishes with our Dream Big Believe In Yourself Charm Bracelet Set. Crafted in sterling silver, with a moon-shaped pink lab-created opal and a 14k gold-plated key, our celestial charm celebrates the magic of believing in oneself. ',
        'careTips': 'Polish regularly to maintain shine.',
        'price': '150 £'
    },
    {
        'id':'17',
        'name': 'Cherry Dangle Charm Bracelet Set',
        'type': 'bracelet',
        'image': '../src/assets/bracelet3.jpeg',
        'details': 'Fruity, fun, and fabulous. Crafted in sterling silver, this bracelet and charm set features a pair of ripe red cherries with detailed green leaves hand-finished in a translucent, rich red enamel. Wear this juicy charm on the best-selling Pandora Moments bracelet and add a vibrant pop of color to your everyday look.',
        'careTips': 'Store in a fabric pouch to prevent scratches.',
        'price': '130 £'
    },
    {
        'id':'18',
        'name': 'Family Tree Heart Clasp Snake Chain Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet4.jpeg',
        'details': 'Celebrate the roots that hold us together with a tribute to those you keep in your heart. The family tree symbol is one of the most important within Pandora jewelry, a celebration of the everlasting bonds we can wear every day. This openwork heart design in sterling silver featuring three micro bead-set round cubic zirconia and with “Family” engraved on the back, lets you wear your devotion as the focus of your bracelet.',
        'careTips': 'Avoid exposure to water and direct sunlight.',
        'price': '88 £'
    },
    {
        'id':'19',
        'name': 'Heart T-Bar Snake Chain Bracelet',
        'type': 'bracelet',
        'image': '../src/assets/bracelet5.jpeg',
        'details': 'Add a luxurious touch to your loved one’s collection with the Pandora Moments Heart T-Bar Snake Chain Bracelet. Hand-finished in 14k gold plating, this piece is inspired by our classic Pandora Moments T-bar snake chain bracelet. The style features a heart-shaped disc with an open circle on one side to loop the T-bar through to open and close, while the reverse side is polished. Designed to be styled with 10-13 charms, include your very own personal message for a heartfelt finish.',
        'careTips': 'Wipe gently with a soft cloth to maintain sparkle.',
        'price': '90 £'
    },
    {
        'id':'20',
        'name': 'Heart & Butterfly Bangle',
        'type': 'bracelet',
        'image': '../src/assets/bracelet6.jpeg',
        'details': 'For a mother like no other, give a Pandora bangle that will symbolize her uniqueness. Crafted from sterling silver, this meaningful bracelet features a heart-shaped clasp that puts love at the center, decorated with openwork detail that emulates the one-of-a-kind wings of a butterfly. Finished with a sparkling cubic zirconia at its center, the bangle can hold up to 16-18 charms and would make a perfect gift for the mother figure in your life this Mothers Day ',
        'careTips': 'Store in a padded box to prevent damage.',
        'price': '220 £'
    },
    {
        'id':'21',
        'name': 'Clear Sparkling Crown Solitaire Ring',
        'type': 'ring',
        'image': '../src/assets/ring6.jpeg',
        'details': 'This solitaire ring, hand-finished in 14k gold-plated metal, features a large clear cubic zirconia center stone set in a crown-shaped claw setting.',
        'careTips': 'Store in a padded box to prevent damage.',
        'price': '115 £'
    },
    {
        'id':'22',
        'name': 'Sparkling Bow Double-row Ring',
        'type': 'ring',
        'image': '../src/assets/ring7.jpeg',
        'details': 'The Sparkling Bow Double-row Ring, crafted from sterling silver, adds a festive touch to any outfit. This ring features a contemporary bow motif surrounded by clear cubic zirconia, as well as a double row of pavé stones on the band’s exterior. Ideal for special occasions or to brighten up your everyday look, this design symbolizes joy and celebration. Style it with your go-to pieces to elevate your outfit.',
        'careTips': 'Store in a padded box to prevent damage.',
        'price': '95 £'
    },
];


products.forEach(
    product => { const imagePath = product.image; 
        const hoverImagePath = imagePath.replace('.jpeg', '_1.jpeg'); 
        product.hoverImage = hoverImagePath; 
});

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
