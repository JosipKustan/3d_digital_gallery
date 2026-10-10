// ─── Gallery works (3D art pieces) ────────────────────────────────────────────

export const GALLERY_CATEGORIES = [
  {
    slug: "love-stories",
    label: "Love Stories",
    accent: "#27F7F0",
    group: "individual",
    description: "Proposals, weddings, anniversaries.",
  },
  {
    slug: "life-moments",
    label: "Life Moments",
    accent: "#27F7F0",
    group: "individual",
    description: "Births, milestones, defining days.",
  },
  {
    slug: "places",
    label: "Places",
    accent: "#27F7F0",
    group: "individual",
    description: "Homes, corners, views that stay.",
  },
  {
    slug: "achievements",
    label: "Achievements",
    accent: "#27F7F0",
    group: "individual",
    description: "Graduations, promotions, completions.",
  },
  {
    slug: "employee-gifts",
    label: "Employee & Team Gifts",
    accent: "#FFB422",
    group: "business",
    description: "Individual gifts that mean something.",
  },
  {
    slug: "anniversary-projects",
    label: "Anniversary Projects",
    accent: "#FFB422",
    group: "business",
    description: "Ten years. Twenty. A real milestone.",
  },
  {
    slug: "gaming-art",
    label: "Gaming Art",
    accent: "#C15EFD",
    group: "fan",
    description: "Scenes from games that stayed.",
  },
  {
    slug: "movie-art",
    label: "Movie & TV Art",
    accent: "#C15EFD",
    group: "fan",
    description: "A frame frozen in three dimensions.",
  },
];

export const galleryWorks = [
  {
    id: 1,
    category: "places",
    slug: "rastovac",
    name: "Rastovac, a childhood memory",
    src: "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-7-2259x1696.webp",
    link: "/gallery/3d/rastovac",
    description:
      "A 3D scan of an object using LiDAR technology. First parts of this house were built around 1910 by the wealthiest family in the village. Over the next 30 years it was built upon and finished, and the chicken coop was rebuilt in the 1940s. The last 15 solitary years of old lady Milka's life were spent here. She took care of her chickens, the house and the property. Every rain leak, fox break-in and fence repair was done by her. After her passing the old chicken coop was planned for demolition. Because this person and place were a big part of my childhood, I decided to take photos and exact measurements to replicate it as closely as possible.",
    shortDescription:
      "This project holds a special place in our hearts. When the original chicken coop had to be demolished, measurements and photos were taken to recreate it in miniature form.",
    making:
      "Every detail is crafted by hand using wood, clay, paper, plastic, and paint. It even has working lights inside! ",
    artistName: "Personal project",
    artistRealName: "2021",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-3-1672x1255.webp",
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-4-1337x1004.webp",
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-5-2296x1724.webp",
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-7-2259x1696.webp",
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-8-1724x2296.webp",
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-1-2000x1500.webp",
      "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-2-2000x1500.webp",
    ],
  },
  /* {
    id: 2,
    name: "Photogrammetry Rastovac",
    src: "/assets/images/works/PolyFotogrametrija.png",
    link: "/photogrammetry",
    description:
      "3D reconstruction of an object using photogrammetry. First parts of this house were built around 1910 by the wealthiest family in the village. In next 30 years it was built apon and finished and the chicken coop was rebuilt in 1940s. Last 15 solitary years of old lady Milka's life were spent here. She took care of her chickens, the house and the property. Every rain leak, fox brake in, fance repair was done by her. After her passing the old chicken coop was planned for demolition. Because this person and place was a big part of my childhood, I decided to take photos and exact messurments to replicate it as close as possible",
    shortDescription:
      "This project holds a special place in our hearts. When the original chicken coop had to be demolished, measurements and photos were taken to recreate it in miniature form.",
    making:
      "3D model was taken from the game and edited so it can be printed with a precise 3D printer. ",
    artistName: "Personal project",
    artistRealName: "2021",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/attackonbaldursgate/attack_1.jpg",
      "/assets/images/works/attackonbaldursgate/attack_2.jpg",
      "/assets/images/works/attackonbaldursgate/attack_3.jpg",
      "/assets/images/works/attackonbaldursgate/attack_4.jpg",
    ],
  }, */
  {
    id: 5,
    category: "gaming-art",
    slug: "attack-on-baldurs-gate",
    name: "Attack on Baldur's Gate city-state",
    src: "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-6-2016x1512.webp",
    link: "/gallery/3d/attack-on-baldurs-gate",
    description:
      "Miniature sculpture of the intro cinematic scene from Baldur's Gate 3, where the Nautiloid grabs the tower and destroys it.",
    shortDescription:
      "A miniature sculpture of the Baldur's Gate 3 intro cinematic, where the Nautiloid grabs the tower and destroys it. See it in photos and interactive 3D.",
    making:
      "3D model was taken from the game and edited so it can be printed with a precise 3D printer. ",
    artistName: "Baldur's Gate 3",
    artistRealName: "Larian Studios",
    artistsImage: "/assets/images/HeaderImages/webp/big/Bg3_Simple-256x256.webp",
    galleryImages: [
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-1-2016x1512.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-2-2016x1512.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-3-2560x1920.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-4-2560x2367.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-5-2016x1512.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-6-2016x1512.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-7-2016x1512.webp",
      "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-8-2016x1512.webp",
    ],
  },
  {
    id: 4,
    category: "gaming-art",
    slug: "nautiloid-crash",
    name: "Nautiloid Crash, starting area",
    src: "/assets/images/works/Crash/Webp/big/BG_Crash-1-1836x1033.webp",
    link: "/gallery/3d/nautiloid-crash",
    description:
      "Miniature sculpture of the Nautiloid crash from Baldur's Gate 3, the Game of the Year winner.",
    shortDescription:
      "A miniature sculpture of the Nautiloid crash site, the starting area of Baldur's Gate 3, 3D printed from the game's model. See it in photos and interactive 3D.",
    making:
      "3D model was taken from the game and edited so it can be printed with a precise 3D printer. ",
    artistName: "Baldur's Gate 3",
    artistRealName: "Larian Studios",
    artistsImage: "/assets/images/HeaderImages/webp/big/Bg3_Simple-256x256.webp",
    galleryImages: [
      "/assets/images/works/Crash/Webp/big/BG_Crash-1-1836x1033.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-2-1643x791.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-3-2560x2379.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-4-1787x926.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-5-1975x1073.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-6-1850x1092.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-7-2016x1215.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-8-1951x1202.webp",
      "/assets/images/works/Crash/Webp/big/BG_Crash-9-1512x2016.webp",
    ],
  },
  /* {
    id: 3,
    name: "Deimos's Axe",
    src: "/assets/images/works/Deimos's Axe.png",
    link: "/deimos-axe",
    description:
      "A 3D model of Deimos's axe from the homebrew D&D game. The model is made in blender and the materials are in substance painter",
    shortDescription:
      "This project holds a special place in our hearts. When the original chicken coop had to be demolished, measurements and photos were taken to recreate it in miniature form.",
    making:
      "3D model was taken from the game and edited so it can be printed with a precise 3D printer. ",
    artistName: "Filip Valjavec",
    artistRealName: "Filip Valjavec",
    artistsImage: "/assets/images/filipvaljavec.png",
    galleryImages: [
      "/assets/images/works/attackonbaldursgate/attack_1.jpg",
      "/assets/images/works/attackonbaldursgate/attack_2.jpg",
      "/assets/images/works/attackonbaldursgate/attack_3.jpg",
      "/assets/images/works/attackonbaldursgate/attack_4.jpg",
    ],
  }, */
  {
    id: 6,
    category: "places",
    slug: "kocusa-waterfall-family",
    name: "Family at Kočuša waterfall",
    src: "/assets/images/works/KocusaWaterfall/webp/big/KocusaWaterfall-1-1920x2560.webp",
    description:
      "A family of five at the Kočuša waterfall, their hometown waterfall, with a family of ducks swimming nearby.",
    shortDescription:
      "A family of five at the Kočuša waterfall in miniature, with 3 cm resin-printed figures, epoxy water and soft light glowing behind the falls.",
    making:
      "The figures are 3 cm tall, 3D printed on a resin printer and modelled from the family's photo. The water is crafted from epoxy and plaster, with delicate lighting behind the waterfall to warm up the scene.",
    artistName: "Family miniature",
    artistRealName: "2024",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/KocusaWaterfall/webp/big/KocusaWaterfall-1-1920x2560.webp",
      "/assets/images/works/KocusaWaterfall/webp/big/KocusaWaterfall-2-1440x2560.webp",
      "/assets/images/works/KocusaWaterfall/webp/big/KocusaWaterfall-3-1920x2560.webp",
      "/assets/images/works/KocusaWaterfall/webp/big/KocusaWaterfall-4-1920x2560.webp",
      "/assets/images/works/KocusaWaterfall/webp/big/KocusaWaterfall-5-1440x2560.webp",
    ],
  },
  {
    id: 7,
    category: "love-stories",
    slug: "monopoli-beach-wedding-anniversary",
    name: "Monopoli beach, a 25th wedding anniversary",
    src: "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-1-2560x1920.webp",
    description:
      "A commission for a 25th wedding anniversary. The wedding was held on a beach in Monopoli, Italy, so that is where the couple stand: on that exact beach, dressed as they were on their wedding day. There's a heart drawn in the sand, petals, beautiful waves, and small waves frothing on the shore.",
    shortDescription:
      "A 25th wedding anniversary miniature: the couple on the Monopoli beach where they married, with a heart in the sand, petals and frothing waves.",
    making:
      "The sea fills most of the round base, with the foam of each wave picked out in white where it breaks on the sand. Two blossoming trees frame the couple, and a name plaque sits on the base. The last photos show the piece in progress on my desk.",
    artistName: "Wedding anniversary commission",
    artistRealName: "2024",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-1-2560x1920.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-2-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-3-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-4-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-5-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-6-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-7-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-8-1440x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-9-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-10-1920x2560.webp",
      "/assets/images/works/MonopoliBeach/webp/big/MonopoliBeach-11-1920x2560.webp",
    ],
  },
  {
    id: 8,
    category: "love-stories",
    slug: "vir-pier-i-love-you",
    name: "I love you, the Vir pier where they met",
    src: "/assets/images/works/VirPier/webp/big/VirPier-1-2560x1920.webp",
    description:
      "An anniversary gift from a boyfriend to his girlfriend. It shows the place where they actually met: the main pier on the island of Vir, Croatia. The pier has a huge sign that says \"I ♥ VIR\", and we changed it to \"I ♥ YOU\".",
    shortDescription:
      "An anniversary miniature of the Vir pier in Croatia where a couple first met, with the island's famous I ♥ VIR sign changed to I ♥ YOU.",
    making:
      "The couple sit on the pier under the sign while the sea breaks on the rocks below. A string of fairy lights inside the glass dome makes it glow in the dark. The last photo shows the build before painting.",
    artistName: "Anniversary commission",
    artistRealName: "2024",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/VirPier/webp/big/VirPier-1-2560x1920.webp",
      "/assets/images/works/VirPier/webp/big/VirPier-2-1920x2560.webp",
      "/assets/images/works/VirPier/webp/big/VirPier-3-2560x1920.webp",
      "/assets/images/works/VirPier/webp/big/VirPier-4-1920x2560.webp",
      "/assets/images/works/VirPier/webp/big/VirPier-5-1920x2560.webp",
      "/assets/images/works/VirPier/webp/big/VirPier-6-1676x2560.webp",
    ],
  },
  {
    id: 9,
    category: "love-stories",
    slug: "couple-and-dog-in-their-garden",
    name: "A couple and their dog in their own garden",
    src: "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-1-1920x2560.webp",
    description:
      "A commission given as a gift on Valentine's Day. It shows the couple and their dog playing in a garden they made themselves. The garden was the first bigger project at their new home, so it meant a lot to them. It's the place where they first truly felt at home: calm, with no worries. That's the place I depicted.",
    shortDescription:
      "A Valentine's Day miniature of a couple playing with their dog in the garden they built at their new home, the place where they first felt at home.",
    making:
      "Grass, a tiled terrace with a dining table, potted plants and a fence covered in red climbing flowers, all on a small brass base under a glass dome. The couple and their dog are painted by hand.",
    artistName: "Valentine's Day commission",
    artistRealName: "2026",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-1-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-2-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-3-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-4-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-5-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-6-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-7-1920x2560.webp",
      "/assets/images/works/CoupleGarden/webp/big/CoupleGarden-8-1920x2560.webp",
    ],
  },
  {
    id: 10,
    category: "love-stories",
    slug: "artemis-of-ephesus-photo-shoot",
    name: "Artemis of Ephesus photo shoot",
    src: "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-cover-1920x1440.webp",
    description:
      "An anniversary gift for a very adventurous couple who love to travel and do crazy things. They are doing a photo shoot on the statue of Artemis of Ephesus: she climbs onto the statue while he kneels below with the camera. The statue is splashed with paint, as if they've almost vandalized it. It's a photo shoot, though, so the scene is clearly set in a studio, with studio lights, light stands, paint cans and props around the base. A wacky anniversary gift, but they liked it.",
    shortDescription:
      "An anniversary miniature of an adventurous couple's photo shoot on a paint-splashed Artemis of Ephesus statue, lit by working studio LEDs under a glass dome.",
    making:
      "The lighting is what makes this one special. I wanted a real studio setting, so the miniature is built to be seen in the dark. It has two strong LEDs: one hidden behind a diffusion box, like real photo gear, and a pink one for contrast. Everything sits under a glass dome.",
    artistName: "Anniversary commission",
    artistRealName: "2025",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-1-1920x2560.webp",
      "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-2-1920x2560.webp",
      "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-3-1920x2560.webp",
      "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-4-1920x2560.webp",
      "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-5-1536x2048.webp",
      "/assets/images/works/ArtemisOfEphesus/webp/big/Artemis-6-1920x2560.webp",
    ],
  },
  {
    id: 11,
    category: "love-stories",
    slug: "cafe-ferrari",
    name: "Cafe Ferrari, where her parents met",
    src: "/assets/images/works/CafeFerrari/webp/big/CafeFerrari-1-1920x2560.webp",
    description:
      "A daughter's gift to her parents for their big wedding anniversary. Cafe Ferrari is where her parents met. It was a big, well-known café in their hometown. It has since closed, the whole town was sad to see it go, and the parents still bring it up in conversation. Now they have it back in miniature.",
    shortDescription:
      "A wedding anniversary gift: Cafe Ferrari, the closed hometown café where her parents met, rebuilt in miniature from old photos and Facebook posts.",
    making:
      "This one took a lot of detective work. When a piece is a surprise gift, there often isn't enough visual information to go on. For this one there were only a few really old photos, so I dug through old Facebook posts and internet rabbit holes to find enough references to get it right. They told me I did. The first sketch was drawn to scale to work out the topography, so I'd know how big to make everything in Blender before 3D printing.",
    artistName: "Wedding anniversary commission",
    artistRealName: "2026",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/CafeFerrari/webp/big/CafeFerrari-1-1920x2560.webp",
      "/assets/images/works/CafeFerrari/webp/big/CafeFerrari-2-1920x2560.webp",
      "/assets/images/works/CafeFerrari/webp/big/CafeFerrari-3-1920x2560.webp",
      "/assets/images/works/CafeFerrari/webp/big/CafeFerrari-4-1920x2560.webp",
    ],
  },
  {
    id: 12,
    category: "life-moments",
    slug: "camper-van-dream-documentary",
    name: "Camper van dream, miniature sets for a documentary",
    src: "/assets/images/works/CamperVan/webp/big/CamperVan-1-2560x1920.webp",
    description:
      "A friend's project: a documentary about our dream of traveling around in a camper van we built ourselves. Some of the shots were made in miniature. Some dreams get delayed because you have to be an adult.",
    shortDescription:
      "Miniature sets built for a friend's documentary about our dream of a self-built camper van, shown behind the scenes while filming.",
    making:
      "These photos are from behind the scenes, building and shooting the miniature sets: a small camper van on a rocky coast and a night scene on red, rocky ground, lit and filmed with a cinema camera. The last photo is my friend filming the documentary.",
    artistName: "Documentary sets",
    artistRealName: "2026",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/CamperVan/webp/big/CamperVan-1-2560x1920.webp",
      "/assets/images/works/CamperVan/webp/big/CamperVan-2-2560x1928.webp",
      "/assets/images/works/CamperVan/webp/big/CamperVan-3-1920x2560.webp",
      "/assets/images/works/CamperVan/webp/big/CamperVan-4-1920x2560.webp",
      "/assets/images/works/CamperVan/webp/big/CamperVan-5-2560x1928.webp",
      "/assets/images/works/CamperVan/webp/big/CamperVan-6-1920x2560.webp",
    ],
  },
  {
    id: 13,
    category: "achievements",
    slug: "dentist-graduation-pag-folk-costume",
    name: "A dentist's graduation in Pag folk costume",
    src: "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-cover-1920x1440.webp",
    description:
      "A commission from a group of friends for their friend's graduation. She's now a dentist. She comes from the island of Pag in Croatia and dances folklore, so we made her in Pag's traditional folk costume, standing next to a dentist's chair and tools.",
    shortDescription:
      "A graduation gift from friends: a new dentist from the island of Pag, made in her traditional folk costume and standing beside a dentist's chair.",
    making:
      "The figure, the chair with its lamp and hoses, and the tiled floor are all painted by hand on a round base. The last photo shows the piece unpainted, before any colour went on.",
    artistName: "Graduation commission",
    artistRealName: "2025",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-1-1920x2560.webp",
      "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-2-1920x2560.webp",
      "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-3-1920x2560.webp",
      "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-4-1920x2560.webp",
      "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-5-1070x1560.webp",
      "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-6-1920x2560.webp",
    ],
  },
  {
    id: 14,
    category: "employee-gifts",
    slug: "partisan-grill-aarhus",
    name: "Partisan Grill, a restaurant in Aarhus",
    src: "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-1-1920x2560.webp",
    description:
      "A miniature of Partisan Grill, a restaurant in Aarhus, Denmark. It was commissioned as a gift from one of the workers to the restaurant owner. The goal was to capture this small, fun place and its walls full of memorabilia from old Yugoslavia: books, old banknotes, albums, shirts, and gifts left by people who visited.",
    shortDescription:
      "A worker's gift to the owner: Partisan Grill in Aarhus as a miniature, its walls full of old Yugoslav memorabilia, on a burned wooden base.",
    making:
      "The base is handmade from wood, then burned for effect, since it's a grill. The restaurant was mostly 3D modelled digitally by Elanor, someone I'm mentoring. These photos aren't polished or Photoshopped. They show what the piece looks like while I'm working on it.",
    artistName: "Gift for the owner",
    artistRealName: "2026",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-1-1920x2560.webp",
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-2-1920x2560.webp",
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-3-1920x2560.webp",
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-4-1920x2560.webp",
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-5-2560x1440.webp",
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-6-1440x2560.webp",
      "/assets/images/works/PartisanGrill/webp/big/PartisanGrill-7-1920x2560.webp",
    ],
  },
  {
    id: 15,
    category: "gaming-art",
    slug: "pyramid-head-silent-hill-2",
    name: "Pyramid Head from Silent Hill 2",
    src: "/assets/images/works/PyramidHead/webp/big/PyramidHead-cover-1920x1440.webp",
    description:
      "A gift for a friend who worked on the game Silent Hill 2. Pyramid Head is one of the game's iconic villains.",
    shortDescription:
      "A hand-painted Pyramid Head, the iconic Silent Hill 2 villain, made as a gift for a friend who worked on the game and shot under dramatic red light.",
    making:
      "I bought the 3D model, printed it, then painted it with careful attention to detail. Probably one of my best paint jobs on a character or creature. Some of the photos are under dramatic lighting, especially the monochrome red or orange light, which makes him look beautiful.",
    artistName: "Silent Hill 2",
    artistRealName: "2025",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-1-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-2-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-3-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-4-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-5-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-6-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-7-1920x2560.webp",
      "/assets/images/works/PyramidHead/webp/big/PyramidHead-8-1920x2560.webp",
    ],
  },
  {
    id: 16,
    category: "gaming-art",
    slug: "mollymauk-tealeaf-critical-role",
    name: "Mollymauk Tealeaf, painted by Elanor",
    src: "/assets/images/works/Mollymauk/webp/big/Mollymauk-cover-1920x1440.webp",
    description:
      "Mollymauk Tealeaf from Critical Role, Campaign 2. Painted by Elanor, someone I'm mentoring. It's only her second fully painted miniature, and it won a junior gold prize.",
    shortDescription:
      "Mollymauk Tealeaf from Critical Role, painted by my mentee Elanor in a bold, flat Campaign 2 style. Her second painted miniature won a junior gold prize.",
    making:
      "She nailed the look of the Campaign 2 artwork: bold, flat colors, hard transitions, and graphic outlines. That style is made for a 2D medium, and she carried it over to a 3D figure really well.",
    artistName: "Critical Role",
    artistRealName: "Painted by Elanor, 2026",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/Mollymauk/webp/big/Mollymauk-1-1920x2560.webp",
      "/assets/images/works/Mollymauk/webp/big/Mollymauk-2-1920x2560.webp",
      "/assets/images/works/Mollymauk/webp/big/Mollymauk-3-1920x2560.webp",
      "/assets/images/works/Mollymauk/webp/big/Mollymauk-4-1920x2560.webp",
      "/assets/images/works/Mollymauk/webp/big/Mollymauk-5-1920x2560.webp",
      "/assets/images/works/Mollymauk/webp/big/Mollymauk-6-1920x2560.webp",
    ],
  },
  {
    id: 17,
    category: "movie-art",
    slug: "dune-attack-of-the-maker",
    name: "Dune: Attack of the Maker",
    src: "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-1-1440x1920.webp",
    description:
      "A gift from one brother to another, a devoted fan of the Dune books and movies. Two ornithopters, the dragonfly-like aircraft with four wings, attempt to escape the colossal Maker, a sandworm native to the desert planet Arrakis. One thopter is being pulled down while the other ascends. The base reads \"DUNE 2025\".",
    shortDescription:
      "A sandworm bursts from the sands of Arrakis as two ornithopters try to escape. A hand-sculpted Dune miniature, made as a gift from brother to brother.",
    making:
      "Almost everything is handmade, apart from the ornithopters. The desert landscape is sculpted from clay and airbrushed for a smooth, realistic finish. The Maker is hand-sculpted from polyclay, while the ornithopters are 3D printed. Colored pillow fluff is added to simulate dust clouds. The challenge was capturing movement: the beating wings, the worm, the sand and dust clouds.",
    artistName: "Dune",
    artistRealName: "2025",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-1-1440x1920.webp",
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-2-1440x1920.webp",
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-3-1440x1920.webp",
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-4-1440x1918.webp",
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-5-1440x1920.webp",
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-6-1440x1918.webp",
      "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-7-1920x2560.webp",
    ],
  },
  {
    id: 18,
    category: "movie-art",
    slug: "interstellar-tesseract-infinity-box",
    name: "Interstellar tesseract infinity box",
    src: "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-1-2560x2560.webp",
    description:
      "A prototype of the Interstellar scene where the main character, inside the tesseract, watches himself from the fourth dimension and tries to make contact by pushing books off the shelf.",
    shortDescription:
      "The Interstellar bedroom repeated endlessly in an infinity box: a one-way mirror and LEDs turn one small room into a room inside the tesseract.",
    making:
      "I built it as an infinity box. A one-way mirror and LEDs repeat the room endlessly, giving the effect of a room inside a tesseract. This was the prototype, and the final version is in a different box. The process photos show the room being built inside its clear case.",
    artistName: "Interstellar",
    artistRealName: "2025",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-1-2560x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-2-2560x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-3-2560x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-4-2560x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-5-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-6-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-7-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-8-2560x1920.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-9-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-10-1440x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-11-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-12-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-13-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-14-1920x2560.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-15-2560x1920.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-16-2560x1920.webp",
      "/assets/images/works/InterstellarTesseract/webp/big/Interstellar-17-1920x2560.webp",
    ],
  },
  {
    id: 19,
    category: "movie-art",
    slug: "vi-arcane-bust",
    name: "Vi from Arcane, a painted bust",
    src: "/assets/images/works/ViArcane/webp/big/ViArcane-1-1920x2560.webp",
    description:
      "Vi from Arcane and League of Legends, painted by me. This one is a bust, not a full figure. A really fun paint, done while I was teaching Elanor.",
    shortDescription:
      "A painted bust of Vi from Arcane and League of Legends, her tattoos painted freehand across her back and arms, photographed under low, moody light.",
    making:
      "The challenge was painting her tattoos freehand. Most of the photos are under low, coloured light to show the skin tones and the tattoo work across her back and arms.",
    artistName: "Arcane",
    artistRealName: "2026",
    artistsImage: "/assets/images/avatarImage.webp",
    galleryImages: [
      "/assets/images/works/ViArcane/webp/big/ViArcane-1-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-2-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-3-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-4-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-5-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-6-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-7-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-8-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-9-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-10-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-11-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-12-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-13-1920x2560.webp",
      "/assets/images/works/ViArcane/webp/big/ViArcane-14-1440x2560.webp",
    ],
  },
];

// ─── Services card data ────────────────────────────────────────────────────────

export const INDIVIDUAL_CARDS = [
  {
    title: "Love Stories",
    href: "/gallery/love-stories",
    image: "/assets/images/works/weddinggifts/Webp/big/Wedding_MainShot-1512x1716.webp",
    copy: "Proposals, weddings, anniversaries, first meetings. The moments that started something, and the ones that kept it going.",
  },
  {
    title: "Life Moments",
    href: "/gallery/life-moments",
    image: "/assets/images/works/weddinggifts/Webp/big/Wedding_Scale-1425x1415.webp",
    copy: "The day a family grows. The day someone becomes something new. The kind of thing that does not need an occasion to be worth marking.",
  },
  {
    title: "Places",
    href: "/gallery/places",
    image: "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-3-1672x1255.webp",
    copy: "A childhood home. A view from a window that no longer exists. A corner of a city that was yours for a while. Places carry memories.",
  },
  {
    title: "Achievements",
    href: "/gallery/achievements",
    image: "/assets/images/works/DentistGraduation/webp/big/DentistGraduation-cover-1920x1440.webp",
    copy: "Graduations, promotions, completions. Something that took years. Something worth handing someone in three dimensions.",
  },
];

export const BUSINESS_CARDS = [
  {
    title: "Employee & Team Gifts",
    href: "/gallery/employee-gifts",
    image: "/assets/images/works/MiniMees/webp/big/GiftforEmployees-2560x818.webp",
    copy: "Individual miniatures for individual people. Gifts that do not look like they came from a catalogue, because they did not.",
  },
  {
    title: "Anniversary Projects",
    href: "/gallery/anniversary-projects",
    image: "/assets/images/works/Rastovac/webp/big/Rastovac_KuminaKuca-5-2296x1724.webp",
    copy: "Ten years. Twenty years. A milestone that deserves more than a dinner. A commemorative piece with a proper brief.",
  },
];

export const FAN_CARDS = [
  {
    title: "Gaming Art",
    href: "/gallery/gaming-art",
    image: "/assets/images/works/attackonbaldursgate/webp/big/BG_Attack-7-2016x1512.webp",
    copy: "A scene from a game. A character at the moment that mattered. Dioramas built from games that left something behind.",
  },
  {
    title: "Movie & TV Art",
    href: "/gallery/movie-art",
    image: "/assets/images/works/DuneSandworm/webp/big/DuneSandworm-1-1440x1920.webp",
    copy: "A frame frozen. A ship. A moment from a film that still sits somewhere in the back of your head.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    q: "How long does a piece take?",
    a: "Depends on complexity and scale. A 1:72 scene with two figures and a simple base typically takes 10 to 12 hours of build time, not counting 3D printing time. A larger piece at 1:18 scale can be 20 hours or more. Realistic timelines are discussed at the brief stage.",
  },
  {
    q: "What do you need from me to start?",
    a: "The more you can tell me, the better. Photos help. A description of the place or the person. The occasion and when it needs to arrive. Nothing has to be perfect at the start. The brief develops as we talk.",
  },
  {
    q: "Do the people in the piece need to know about it?",
    a: "No. Most commissions are surprises. I work from photos and reference you provide, and the piece goes to you. Everything stays between us until you decide otherwise.",
  },
  {
    q: "What if I am not sure of the details yet?",
    a: "That is normal. Tell me what you do know and we work from there. Half a brief is enough to start a conversation. You would be surprised how much can be established from a single photo.",
  },
  {
    q: "Can I commission something not on this list?",
    a: "Yes. The categories are a guide, not a limit. If you have something that does not fit, get in touch and describe it. The worst outcome is that we discover together that it does not work.",
  },
  {
    q: "How is pricing determined?",
    a: null,
  },
];

// ─── Hourly rates ─────────────────────────────────────────────────────────────
// The only prices we publish. Every quote is estimated hours × one of these rates.
// One entry per registered activity group (NKD 2025). /price-factors shows the
// custom design rate, /legal shows all of them.
// Not in the VAT system, so these are final prices.

export const HOURLY_RATES = [
  {
    id: "custom-design",
    service: "Custom design work",
    nkd: ["90.12.0"],
    rate: 40,
    note: "Handmade miniatures and personalised gifts, created across media such as video, painting and 3D modelling.",
  },
  {
    id: "digital",
    service: "Digital design and programming",
    nkd: ["74.12.0", "62.10.9"],
    rate: 30,
    note: "Graphic design and visual communication, 3D modelling and visual design, software design and development.",
  },
  {
    id: "trade-fairs",
    service: "Trade fair organisation and creative direction",
    nkd: ["82.30.0"],
    rate: 35,
    note: "Organisation and moderation of national and international trade fairs, creative direction of fairs.",
  },
];

export const CUSTOM_DESIGN_RATE =
  HOURLY_RATES.find((r) => r.id === "custom-design") ?? HOURLY_RATES[0];

export const rateFor = (id) => HOURLY_RATES.find((r) => r.id === id)?.rate;

export const formatRate = (rate) => `€${rate} / hour`;

export const VAT_NOTE = "Creative Studio Kuki is not in the VAT system, so there is no VAT on top.";

// What a quote is made of: hours × rate, plus delivery. Standard materials are
// part of the rate; only special, high-cost materials are added separately.
export const QUOTE_NOTE = "Standard materials are included in the rate. Delivery is charged separately, and special materials with a high cost, such as epoxy resin or specialty paints, may be added to the quote.";

// ─── Services sticky nav config ────────────────────────────────────────────────

export const SERVICES_NAV = [
  { id: "individual", label: "For People", accent: "#27F7F0" },
  { id: "business", label: "For Companies", accent: "#FFB422" },
  { id: "fan-art", label: "For Fans", accent: "#C15EFD" },
  { id: "faq", label: "FAQ", accent: "#ffffff" },
];
