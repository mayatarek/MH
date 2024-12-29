const products = [
    {
        'id':'1',
        'name': 'Ocean Grace Pearl Choker',
        'type': 'necklace',
        'image': '../src/assets/necklace.jpeg',
        'details': 'A stunning piece that complements any outfit.',
        'careTips': 'A delicate pearl choker adorned with a captivating blue gemstone centerpiece. This design evokes serene oceanic beauty and adds a graceful touch to your look.',
        'price': '150 £',
        
    },
    {
        'id':'2',
        'name': 'Golden Radiance Pendant',
        'type': 'necklace',
        'image': '../src/assets/necklace2.jpeg',
        'details': 'A sleek and timeless gold chain necklace with a radiant, starburst-inspired pendant encrusted with sparkling crystals, perfect for both formal and casual occasions.',
        'careTips': 'Wipe with a soft cloth after use.',
        'price': '150 £'
    },
    {
        'id':'3',
        'name': 'Regal Medallion Pearl Necklace',
        'type': 'necklace',
        'image': '../src/assets/necklace3.jpeg',
        'details': 'A sophisticated dual-layered necklace combining elegant white pearls with gold accents. The design features intricate medallion charms, adding a touch of regal charm to any outfit.',
        'careTips': 'Store in a fabric-lined box to prevent scratches.',
        'price': '200 £'
    },
    {
        'id':'4',
        'name': 'Midnight Elegance Pendant',
        'type': 'necklace',
        'image': '../src/assets/necklace4.jpeg',
        'details': 'A delicate gold chain necklace featuring a deep violet gemstone teardrop pendant. The understated design radiates elegance and charm, perfect for adding a touch of sophistication to any look.',
        'careTips': 'Avoid contact with harsh chemicals.',
        'price': '130 £'
    },
    {
        'id':'5',
        'name': 'Blue Murano Glass Butterfly Necklace Set',
        'type': 'necklace',
        'image': '../src/assets/necklace5.jpeg',
        'details': 'Transform into your best self with the Blue Murano Glass Butterfly Necklace Set. This set features the Blue Murano Glass Butterfly Dangle Charm paired with a sterling silver Curb Chain Necklace with a sliding clasp to adjust it to your ideal length. Add this set to your styling as a powerful symbol of hope, transformation and new beginnings.',
        'careTips': 'Clean with mild soap and a soft brush.',
        'price': '220 £'
    },
    {
        'id':'6',
        'name': 'Bold Classic Gold Chain',
        'type': 'necklace',
        'image': '../src/assets/necklace6.jpeg',
        'details': 'A timeless gold curb chain with a sleek and polished finish. This versatile piece exudes strength and confidence, making it a staple accessory for any wardrobe.',
        'careTips': 'Store in a dry place to maintain brilliance.',
        'price': '180 £'
    },
    {
        'id':'7',
        'name': 'Round Huggie Hoop Earrings',
        'type': 'earring',
        'image': '../src/assets/earring.jpeg',
        'details': 'Add a style staple to your collection with the Round Huggie Hoop Earrings. Crafted of our 14k gold-plated unique metal blend, these hoop earrings feature a rounded profile and a concave shape on the inside of the hoops. Inspired by nature organically beautiful forms, these curved, sculptural earrings bring a fresh take on modern minimalism. An effortless addition to any outfit, these huggie hoops complement any mood and offer layered elegance when stacked up the ear.',
        'careTips': 'Clean with a soft microfiber cloth.',
        'price': '50 £'
    },
    {
        'id':'8',
        'name': 'Sparkling Bow Row Hoop Earrings',
        'type': 'earring',
        'image': '../src/assets/earring2.jpeg',
        'details': 'Add a light-filled touch to your look with the Sparkling Bow Row Hoop Earrings. Featuring faceted stones that form bows on top of a hoop, this versatile style is crafted in sterling silver and shines with a cool glow. Perfect for wearing with casual outfits as well as on special occasions, the bow is a symbolic motif that always adds something extra to the everyday day. Style together with other bow pieces for a maximalist look or wear solo for a subtle take.',
        'careTips': 'Keep in a separate compartment to avoid scratches.',
        'price': '300 £'
    },
    {
        'id':'9',
        'name': 'Sparkling Heart Halo Stud Earrings',
        'type': 'earring',
        'image': '../src/assets/earring3.jpeg',
        'details': 'Express the depth of your love with the Sparkling Heart Halo Stud Earrings. These elegant sterling silver earrings each feature a heart-shaped cubic zirconia stone sparkling at the centre. A halo of smaller stones surrounds the heart, with outward-facing prongs on the stone settings creating a delicate cut-out effect. Pair them with the matching Sparkling Heart Halo Pendant Necklace to create an elevated and modern look.',
        'careTips': 'Avoid wearing during physical activities.',
        'price': '85 £'
    },
    {
        'id':'10',
        'name': 'Pavé Bow Drop Earrings',
        'type': 'earring',
        'image': '../src/assets/earring4.jpeg',
        'details': 'Add a light-filled touch to your look with the Pavé Bow Drop Earrings. Featuring faceted stones that form a bow at the top, this versatile style features a row of sparkling pavé right below for extra sparkle. This eye-catching pair is crafted in sterling silver. Perfect for wearing with minimal outfits as well as on special occasions, the bow is a symbolic motif that always adds something extra to every outfit.',
        'careTips': 'Polish with a jewelry cleaning solution.',
        'price': '150 £'
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
    {
        'id':'23',
        'name': 'Asymmetrical Heart Hoop Earrings',
        'type': 'earring',
        'image': '../src/assets/earring5.jpeg',
        'details': 'Show your ears some love with these Asymmetrical Heart Hoop Earrings. Hand-finished in sterling silver, these small heart-shaped hoops will add a cool, minimal edge to any outfit. Team them with your go-to Pandora Moments bracelet and a Pandora O Pendant in sterling silver for a bold tonal look. Alternatively, gift these unique earrings to someone special to let them know how much you love them',
        'careTips': 'Store in a padded box to prevent damage.',
        'price': '55 £'
    },
    {
        'id':'24',
        'name': 'Sparkling Infinity Heart Stud Earrings',
        'type': 'earring',
        'image': '../src/assets/earring6.jpeg',
        'details': 'Embodying timeless love, our Sparkling Infinity Heart Stud Earrings from the Pandora Moments collection fuse elegance with symbolism. Crafted from a unique 14k gold-plated blend, the openwork heart, adorned with 44 micro bead-set cubic zirconia, cradles an asymmetric infinity symbol. Not just earrings, but a poetic dance of eternal connection. Notice the intricate mirrored design; each pair tells a story of immeasurable love, binding souls together in a beautifully crafted reminder of deep, infinite bonds.',
        'careTips': 'Store in a padded box to prevent damage.',
        'price': '95 £'
    }
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
