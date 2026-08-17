/* =========================================
   MINEPLANNER — 100 BUILD DATABASE
========================================= */

const MinePlannerBuilds = (() => {

  const builds = [

    /* =========================
       HOUSES 1–20
    ========================= */

    {
      id: "house-01",
      name: "Starter Survival House",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "11 × 9 × 7",
      thumbnail: "assets/builds/house-01.jpg",
      blueprint: "assets/blueprints/house-01.pdf",
      description: "A compact wooden starter house for the first days of survival.",
      materials: [
        { item: "Oak Planks", amount: 120 },
        { item: "Oak Logs", amount: 35 },
        { item: "Glass", amount: 24 },
        { item: "Cobblestone", amount: 80 },
        { item: "Oak Stairs", amount: 40 }
      ],
      steps: [
        "Create an 11 × 9 foundation.",
        "Build the walls seven blocks high.",
        "Add oak logs to the corners.",
        "Build the roof using oak stairs.",
        "Add windows and a front door.",
        "Decorate the interior with a bed, chest and crafting table."
      ]
    },

    {
      id: "house-02",
      name: "Spruce Survival Cabin",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "13 × 11 × 8",
      thumbnail: "assets/builds/house-02.jpg",
      blueprint: "assets/blueprints/house-02.pdf",
      description: "A cozy spruce cabin designed for forest survival worlds.",
      materials: [
        { item: "Spruce Planks", amount: 180 },
        { item: "Spruce Logs", amount: 45 },
        { item: "Cobblestone", amount: 70 },
        { item: "Glass Panes", amount: 30 },
        { item: "Spruce Stairs", amount: 65 }
      ],
      steps: [
        "Mark a 13 × 11 rectangle.",
        "Build the spruce frame.",
        "Fill the walls with spruce planks.",
        "Create the sloped roof.",
        "Add windows and lanterns.",
        "Decorate the cabin interior."
      ]
    },

    {
      id: "house-03",
      name: "Modern Starter House",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "15 × 11 × 8",
      thumbnail: "assets/builds/house-03.jpg",
      blueprint: "assets/blueprints/house-03.pdf",
      description: "A clean modern starter home with large windows.",
      materials: [
        { item: "White Concrete", amount: 180 },
        { item: "Gray Concrete", amount: 80 },
        { item: "Glass", amount: 70 },
        { item: "Quartz", amount: 60 },
        { item: "Oak Planks", amount: 50 }
      ],
      steps: [
        "Build the rectangular foundation.",
        "Create the white concrete walls.",
        "Add the large glass windows.",
        "Build the flat modern roof.",
        "Create the entrance.",
        "Add interior furniture."
      ]
    },

    {
      id: "house-04",
      name: "Riverside Cottage",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "12 × 10 × 7",
      thumbnail: "assets/builds/house-04.jpg",
      blueprint: "assets/blueprints/house-04.pdf",
      description: "A peaceful cottage perfect for building beside a river.",
      materials: [
        { item: "Oak Planks", amount: 140 },
        { item: "Oak Logs", amount: 40 },
        { item: "Stone Bricks", amount: 60 },
        { item: "Glass Panes", amount: 25 },
        { item: "Oak Stairs", amount: 55 }
      ],
      steps: [
        "Build the stone foundation.",
        "Add the oak frame.",
        "Build the walls.",
        "Create the roof.",
        "Add windows.",
        "Build a small dock beside the river."
      ]
    },

    {
      id: "house-05",
      name: "Mountain Cabin",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "14 × 12 × 9",
      thumbnail: "assets/builds/house-05.jpg",
      blueprint: "assets/blueprints/house-05.pdf",
      description: "A mountain cabin designed to blend into snowy terrain.",
      materials: [
        { item: "Spruce Planks", amount: 170 },
        { item: "Spruce Logs", amount: 55 },
        { item: "Stone", amount: 90 },
        { item: "Glass", amount: 30 },
        { item: "Spruce Stairs", amount: 70 }
      ],
      steps: [
        "Flatten a small mountain area.",
        "Build the stone foundation.",
        "Create the spruce frame.",
        "Build the cabin roof.",
        "Add windows.",
        "Decorate with fireplaces and storage."
      ]
    },

    {
      id: "house-06",
      name: "Large Family House",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "18 × 14 × 10",
      thumbnail: "assets/builds/house-06.jpg",
      blueprint: "assets/blueprints/house-06.pdf",
      description: "A spacious two-floor survival family home.",
      materials: [
        { item: "Oak Planks", amount: 300 },
        { item: "Oak Logs", amount: 70 },
        { item: "Stone Bricks", amount: 100 },
        { item: "Glass", amount: 80 },
        { item: "Oak Stairs", amount: 90 }
      ],
      steps: [
        "Build the foundation.",
        "Construct the first floor.",
        "Add the second floor.",
        "Build the roof.",
        "Install windows.",
        "Create bedrooms and storage rooms."
      ]
    },

    {
      id: "house-07",
      name: "Desert House",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "13 × 10 × 7",
      thumbnail: "assets/builds/house-07.jpg",
      blueprint: "assets/blueprints/house-07.pdf",
      description: "A sandstone survival home designed for desert biomes.",
      materials: [
        { item: "Sandstone", amount: 220 },
        { item: "Smooth Sandstone", amount: 90 },
        { item: "Glass", amount: 35 },
        { item: "Spruce Planks", amount: 40 },
        { item: "Sandstone Stairs", amount: 60 }
      ],
      steps: [
        "Create the sandstone foundation.",
        "Build the walls.",
        "Add decorative pillars.",
        "Create the roof.",
        "Add windows.",
        "Build a small desert garden."
      ]
    },

    {
      id: "house-08",
      name: "Japanese House",
      category: "House",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "17 × 15 × 11",
      thumbnail: "assets/builds/house-08.jpg",
      blueprint: "assets/blueprints/house-08.pdf",
      description: "A Japanese-inspired home with layered roofs.",
      materials: [
        { item: "Dark Oak Planks", amount: 230 },
        { item: "Spruce Logs", amount: 70 },
        { item: "White Concrete", amount: 150 },
        { item: "Dark Oak Stairs", amount: 120 },
        { item: "Lantern", amount: 20 }
      ],
      steps: [
        "Build the foundation.",
        "Create the wooden support frame.",
        "Build the first roof layer.",
        "Add the second roof layer.",
        "Add white walls.",
        "Finish with lanterns and landscaping."
      ]
    },

    {
      id: "house-09",
      name: "Forest Lodge",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "16 × 13 × 9",
      thumbnail: "assets/builds/house-09.jpg",
      blueprint: "assets/blueprints/house-09.pdf",
      description: "A large woodland lodge for forest survival bases.",
      materials: [
        { item: "Spruce Logs", amount: 100 },
        { item: "Spruce Planks", amount: 250 },
        { item: "Stone Bricks", amount: 100 },
        { item: "Glass", amount: 50 },
        { item: "Spruce Stairs", amount: 100 }
      ],
      steps: [
        "Build the stone base.",
        "Create the wooden frame.",
        "Fill the walls.",
        "Build the large roof.",
        "Add windows.",
        "Decorate the surrounding forest."
      ]
    },

    {
      id: "house-10",
      name: "Cliff House",
      category: "House",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "20 × 12 × 12",
      thumbnail: "assets/builds/house-10.jpg",
      blueprint: "assets/blueprints/house-10.pdf",
      description: "A dramatic house built directly into a cliff.",
      materials: [
        { item: "Stone", amount: 250 },
        { item: "Glass", amount: 100 },
        { item: "Oak Planks", amount: 180 },
        { item: "Stone Bricks", amount: 140 },
        { item: "Oak Stairs", amount: 60 }
      ],
      steps: [
        "Choose a large cliff face.",
        "Carve the rooms into the mountain.",
        "Build the outer frame.",
        "Add large windows.",
        "Create balconies.",
        "Connect the house with stairs."
      ]
    },

    {
      id: "house-11",
      name: "Starter Brick House",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "12 × 10 × 7",
      thumbnail: "assets/builds/house-11.jpg",
      blueprint: "assets/blueprints/house-11.pdf",
      description: "A simple brick survival house.",
      materials: [
        { item: "Bricks", amount: 180 },
        { item: "Oak Planks", amount: 100 },
        { item: "Glass", amount: 30 },
        { item: "Brick Stairs", amount: 50 }
      ],
      steps: [
        "Build the foundation.",
        "Construct brick walls.",
        "Add wooden details.",
        "Build the roof.",
        "Add windows.",
        "Decorate the interior."
      ]
    },

    {
      id: "house-12",
      name: "Lake House",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "16 × 13 × 8",
      thumbnail: "assets/builds/house-12.jpg",
      blueprint: "assets/blueprints/house-12.pdf",
      description: "A peaceful home overlooking a Minecraft lake.",
      materials: [
        { item: "Oak Planks", amount: 220 },
        { item: "Oak Logs", amount: 55 },
        { item: "Glass", amount: 70 },
        { item: "Stone Bricks", amount: 80 }
      ],
      steps: [
        "Create a foundation beside the lake.",
        "Build the support pillars.",
        "Construct the house.",
        "Add the roof.",
        "Build a lakeside balcony.",
        "Add landscaping."
      ]
    },

    {
      id: "house-13",
      name: "Tiny Starter Home",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "7 × 7 × 6",
      thumbnail: "assets/builds/house-13.jpg",
      blueprint: "assets/blueprints/house-13.pdf",
      description: "A tiny home perfect for a quick survival start.",
      materials: [
        { item: "Oak Planks", amount: 70 },
        { item: "Oak Logs", amount: 20 },
        { item: "Glass", amount: 12 },
        { item: "Cobblestone", amount: 35 }
      ],
      steps: [
        "Build a 7 × 7 foundation.",
        "Raise the walls.",
        "Add the roof.",
        "Install windows.",
        "Place essential survival furniture."
      ]
    },

    {
      id: "house-14",
      name: "Snowy Cabin",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "13 × 11 × 8",
      thumbnail: "assets/builds/house-14.jpg",
      blueprint: "assets/blueprints/house-14.pdf",
      description: "A warm cabin for snowy mountain survival worlds.",
      materials: [
        { item: "Spruce Planks", amount: 170 },
        { item: "Spruce Logs", amount: 50 },
        { item: "Stone Bricks", amount: 80 },
        { item: "Glass", amount: 35 }
      ],
      steps: [
        "Build the stone base.",
        "Construct the spruce frame.",
        "Build the walls.",
        "Add a steep roof.",
        "Add windows and lanterns.",
        "Finish with a chimney."
      ]
    },

    {
      id: "house-15",
      name: "Treehouse",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "13 × 13 × 14",
      thumbnail: "assets/builds/house-15.jpg",
      blueprint: "assets/blueprints/house-15.pdf",
      description: "A survival treehouse hidden above the forest.",
      materials: [
        { item: "Oak Logs", amount: 90 },
        { item: "Oak Planks", amount: 180 },
        { item: "Oak Stairs", amount: 70 },
        { item: "Glass", amount: 35 }
      ],
      steps: [
        "Choose a large tree.",
        "Build the supporting platform.",
        "Create the walls.",
        "Build the roof.",
        "Add a ladder or staircase.",
        "Connect nearby trees with bridges."
      ]
    },

    {
      id: "house-16",
      name: "Swamp Cottage",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "14 × 12 × 8",
      thumbnail: "assets/builds/house-16.jpg",
      blueprint: "assets/blueprints/house-16.pdf",
      description: "A rustic cottage designed for swamp biomes.",
      materials: [
        { item: "Mangrove Planks", amount: 180 },
        { item: "Mangrove Logs", amount: 60 },
        { item: "Mud Bricks", amount: 100 },
        { item: "Glass", amount: 30 }
      ],
      steps: [
        "Build raised foundations.",
        "Create the wooden frame.",
        "Add mud-brick walls.",
        "Build the roof.",
        "Add a small dock.",
        "Decorate with swamp vegetation."
      ]
    },

    {
      id: "house-17",
      name: "Savanna House",
      category: "House",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "12 × 10 × 7",
      thumbnail: "assets/builds/house-17.jpg",
      blueprint: "assets/blueprints/house-17.pdf",
      description: "A warm acacia house suited to savanna biomes.",
      materials: [
        { item: "Acacia Planks", amount: 150 },
        { item: "Acacia Logs", amount: 45 },
        { item: "Terracotta", amount: 90 },
        { item: "Glass", amount: 25 }
      ],
      steps: [
        "Build the terracotta foundation.",
        "Add acacia supports.",
        "Build the walls.",
        "Add a flat roof.",
        "Install windows.",
        "Create a small outdoor garden."
      ]
    },

    {
      id: "house-18",
      name: "Underground House",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "15 × 15 × 7",
      thumbnail: "assets/builds/house-18.jpg",
      blueprint: "assets/blueprints/house-18.pdf",
      description: "A hidden underground survival base.",
      materials: [
        { item: "Stone Bricks", amount: 240 },
        { item: "Glass", amount: 50 },
        { item: "Oak Planks", amount: 100 },
        { item: "Lantern", amount: 20 }
      ],
      steps: [
        "Dig the main room.",
        "Create the underground walls.",
        "Add storage rooms.",
        "Create a glass ceiling.",
        "Add farms.",
        "Decorate the entrance."
      ]
    },

    {
      id: "house-19",
      name: "Coastal Villa",
      category: "House",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "22 × 16 × 11",
      thumbnail: "assets/builds/house-19.jpg",
      blueprint: "assets/blueprints/house-19.pdf",
      description: "A large luxury villa overlooking the ocean.",
      materials: [
        { item: "Quartz", amount: 300 },
        { item: "White Concrete", amount: 250 },
        { item: "Glass", amount: 120 },
        { item: "Oak Planks", amount: 100 }
      ],
      steps: [
        "Build the large foundation.",
        "Construct the first floor.",
        "Add the second floor.",
        "Install large glass windows.",
        "Build balconies.",
        "Add a swimming pool and garden."
      ]
    },

    {
      id: "house-20",
      name: "Medieval Village House",
      category: "House",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "13 × 10 × 9",
      thumbnail: "assets/builds/house-20.jpg",
      blueprint: "assets/blueprints/house-20.pdf",
      description: "A medieval-style house perfect for village builds.",
      materials: [
        { item: "Spruce Planks", amount: 170 },
        { item: "Stripped Spruce Logs", amount: 60 },
        { item: "Cobblestone", amount: 100 },
        { item: "Spruce Stairs", amount: 70 }
      ],
      steps: [
        "Build the stone foundation.",
        "Create the timber frame.",
        "Fill the walls.",
        "Build the steep roof.",
        "Add windows.",
        "Finish with medieval decorations."
      ]
    },


    /* =========================
       CASTLES 21–35
    ========================= */

    {
      id: "castle-01",
      name: "Small Stone Castle",
      category: "Castle",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "31 × 31 × 18",
      thumbnail: "assets/builds/castle-01.jpg",
      blueprint: "assets/blueprints/castle-01.pdf",
      description: "A compact stone castle with four defensive towers.",
      materials: [
        { item: "Stone Bricks", amount: 900 },
        { item: "Cobblestone", amount: 400 },
        { item: "Spruce Planks", amount: 180 },
        { item: "Stone Brick Stairs", amount: 250 }
      ],
      steps: [
        "Mark the castle perimeter.",
        "Build four corner towers.",
        "Connect the walls.",
        "Create the gatehouse.",
        "Build the central keep.",
        "Add battlements."
      ]
    },

    {
      id: "castle-02",
      name: "Royal Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "55 × 45 × 30",
      thumbnail: "assets/builds/castle-02.jpg",
      blueprint: "assets/blueprints/castle-02.pdf",
      description: "A large royal castle with courtyards and towers.",
      materials: [
        { item: "Stone Bricks", amount: 3000 },
        { item: "Deepslate Bricks", amount: 1200 },
        { item: "Spruce Planks", amount: 600 },
        { item: "Stone Brick Stairs", amount: 700 }
      ],
      steps: [
        "Plan the castle layout.",
        "Build the outer walls.",
        "Construct the towers.",
        "Build the gatehouse.",
        "Construct the royal keep.",
        "Create the courtyard.",
        "Add banners and decorations."
      ]
    },

    {
      id: "castle-03",
      name: "Mountain Fortress",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "48 × 38 × 35",
      thumbnail: "assets/builds/castle-03.jpg",
      blueprint: "assets/blueprints/castle-03.pdf",
      description: "A fortress carved into a mountain.",
      materials: [
        { item: "Stone", amount: 2800 },
        { item: "Stone Bricks", amount: 1800 },
        { item: "Deepslate", amount: 1000 },
        { item: "Iron Bars", amount: 120 }
      ],
      steps: [
        "Choose a mountain.",
        "Carve the main fortress area.",
        "Build defensive walls.",
        "Create towers.",
        "Add the central keep.",
        "Build underground rooms."
      ]
    },

    {
      id: "castle-04",
      name: "Dark Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "42 × 42 × 27",
      thumbnail: "assets/builds/castle-04.jpg",
      blueprint: "assets/blueprints/castle-04.pdf",
      description: "A dark fantasy castle using deepslate and blackstone.",
      materials: [
        { item: "Deepslate Bricks", amount: 2200 },
        { item: "Blackstone", amount: 1300 },
        { item: "Chains", amount: 100 },
        { item: "Soul Lanterns", amount: 40 }
      ],
      steps: [
        "Build the dark foundation.",
        "Construct the towers.",
        "Create the gate.",
        "Build the main keep.",
        "Add pointed roofs.",
        "Decorate with soul lanterns."
      ]
    },

    {
      id: "castle-05",
      name: "Japanese Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "40 × 35 × 28",
      thumbnail: "assets/builds/castle-05.jpg",
      blueprint: "assets/blueprints/castle-05.pdf",
      description: "A Japanese-inspired multi-level castle.",
      materials: [
        { item: "White Concrete", amount: 1800 },
        { item: "Dark Oak Planks", amount: 900 },
        { item: "Dark Oak Stairs", amount: 500 },
        { item: "Stone Bricks", amount: 700 }
      ],
      steps: [
        "Build the stone base.",
        "Construct the first level.",
        "Add upper levels.",
        "Create layered roofs.",
        "Add decorative details.",
        "Build the surrounding garden."
      ]
    },

    {
      id: "castle-06",
      name: "Desert Fortress",
      category: "Castle",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "38 × 38 × 20",
      thumbnail: "assets/builds/castle-06.jpg",
      blueprint: "assets/blueprints/castle-06.pdf",
      description: "A sandstone fortress for desert kingdoms.",
      materials: [
        { item: "Sandstone", amount: 2200 },
        { item: "Smooth Sandstone", amount: 900 },
        { item: "Sandstone Stairs", amount: 500 },
        { item: "Cut Sandstone", amount: 400 }
      ],
      steps: [
        "Create the square perimeter.",
        "Build the towers.",
        "Construct the walls.",
        "Create the entrance.",
        "Build the central palace.",
        "Add desert gardens."
      ]
    },

    {
      id: "castle-07",
      name: "Frozen Fortress",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "44 × 40 × 25",
      thumbnail: "assets/builds/castle-07.jpg",
      blueprint: "assets/blueprints/castle-07.pdf",
      description: "An icy fortress for snowy Minecraft worlds.",
      materials: [
        { item: "Packed Ice", amount: 1500 },
        { item: "Snow Blocks", amount: 1200 },
        { item: "Stone Bricks", amount: 900 },
        { item: "Blue Ice", amount: 300 }
      ],
      steps: [
        "Build the stone foundation.",
        "Create the icy walls.",
        "Construct towers.",
        "Build the central keep.",
        "Add ice decorations.",
        "Create an icy courtyard."
      ]
    },

    {
      id: "castle-08",
      name: "Ocean Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "50 × 40 × 25",
      thumbnail: "assets/builds/castle-08.jpg",
      blueprint: "assets/blueprints/castle-08.pdf",
      description: "A massive castle built above the ocean.",
      materials: [
        { item: "Prismarine", amount: 2200 },
        { item: "Quartz", amount: 1000 },
        { item: "Glass", amount: 400 },
        { item: "Stone Bricks", amount: 900 }
      ],
      steps: [
        "Build support pillars.",
        "Create the platform.",
        "Build the castle walls.",
        "Construct towers.",
        "Add glass ocean views.",
        "Create underwater rooms."
      ]
    },

    {
      id: "castle-09",
      name: "Wizard Tower Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "35 × 35 × 32",
      thumbnail: "assets/builds/castle-09.jpg",
      blueprint: "assets/blueprints/castle-09.pdf",
      description: "A magical castle centered around a giant wizard tower.",
      materials: [
        { item: "Deepslate", amount: 1400 },
        { item: "Purple Concrete", amount: 600 },
        { item: "Amethyst Blocks", amount: 300 },
        { item: "Dark Oak", amount: 500 }
      ],
      steps: [
        "Build the circular foundation.",
        "Construct the tower.",
        "Add the magical roof.",
        "Create surrounding buildings.",
        "Add an enchanting room.",
        "Decorate with amethyst."
      ]
    },

    {
      id: "castle-10",
      name: "Nether Fortress Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "45 × 45 × 28",
      thumbnail: "assets/builds/castle-10.jpg",
      blueprint: "assets/blueprints/castle-10.pdf",
      description: "A dangerous fortress inspired by the Nether.",
      materials: [
        { item: "Nether Bricks", amount: 2500 },
        { item: "Blackstone", amount: 1200 },
        { item: "Magma Blocks", amount: 400 },
        { item: "Chains", amount: 100 }
      ],
      steps: [
        "Build the main platform.",
        "Create fortress walls.",
        "Build towers.",
        "Add bridges.",
        "Create lava features.",
        "Decorate with Nether blocks."
      ]
    },

    {
      id: "castle-11",
      name: "Village Castle",
      category: "Castle",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "45 × 45 × 23",
      thumbnail: "assets/builds/castle-11.jpg",
      blueprint: "assets/blueprints/castle-11.pdf",
      description: "A protective castle designed around a Minecraft village.",
      materials: [
        { item: "Stone Bricks", amount: 1800 },
        { item: "Cobblestone", amount: 800 },
        { item: "Oak Planks", amount: 500 },
        { item: "Iron Bars", amount: 100 }
      ],
      steps: [
        "Surround the village.",
        "Build the defensive wall.",
        "Add towers.",
        "Construct the gate.",
        "Build the lord's house.",
        "Add roads and decorations."
      ]
    },

    {
      id: "castle-12",
      name: "Ruined Castle",
      category: "Castle",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "38 × 35 × 22",
      thumbnail: "assets/builds/castle-12.jpg",
      blueprint: "assets/blueprints/castle-12.pdf",
      description: "An abandoned ruined castle perfect for adventure maps.",
      materials: [
        { item: "Mossy Stone Bricks", amount: 1200 },
        { item: "Stone Bricks", amount: 1000 },
        { item: "Moss Blocks", amount: 300 },
        { item: "Vines", amount: 150 }
      ],
      steps: [
        "Build broken walls.",
        "Create damaged towers.",
        "Add collapsed sections.",
        "Create an abandoned courtyard.",
        "Add vegetation.",
        "Add hidden rooms."
      ]
    },

    {
      id: "castle-13",
      name: "Sky Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "40 × 40 × 25",
      thumbnail: "assets/builds/castle-13.jpg",
      blueprint: "assets/blueprints/castle-13.pdf",
      description: "A floating castle above the clouds.",
      materials: [
        { item: "Quartz", amount: 1800 },
        { item: "White Concrete", amount: 1000 },
        { item: "Glass", amount: 250 },
        { item: "Stone Bricks", amount: 600 }
      ],
      steps: [
        "Build the floating island.",
        "Create the foundation.",
        "Construct the castle.",
        "Build towers.",
        "Add bridges.",
        "Create cloud decorations."
      ]
    },

    {
      id: "castle-14",
      name: "Dragon Castle",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "60 × 50 × 32",
      thumbnail: "assets/builds/castle-14.jpg",
      blueprint: "assets/blueprints/castle-14.pdf",
      description: "A fantasy castle designed around a giant dragon statue.",
      materials: [
        { item: "Stone Bricks", amount: 3000 },
        { item: "Deepslate", amount: 1400 },
        { item: "Blackstone", amount: 700 },
        { item: "Red Concrete", amount: 500 }
      ],
      steps: [
        "Build the castle perimeter.",
        "Construct the towers.",
        "Build the main keep.",
        "Create the dragon statue.",
        "Add a throne room.",
        "Finish the surrounding landscape."
      ]
    },

    {
      id: "castle-15",
      name: "Royal Palace",
      category: "Castle",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "52 × 42 × 27",
      thumbnail: "assets/builds/castle-15.jpg",
      blueprint: "assets/blueprints/castle-15.pdf",
      description: "A grand palace with a huge entrance and royal courtyard.",
      materials: [
        { item: "Quartz", amount: 2800 },
        { item: "Gold Blocks", amount: 120 },
        { item: "White Concrete", amount: 1600 },
        { item: "Glass", amount: 300 }
      ],
      steps: [
        "Build the palace foundation.",
        "Construct the main entrance.",
        "Build palace wings.",
        "Create the central hall.",
        "Add royal gardens.",
        "Decorate the throne room."
      ]
    },


    /* =========================
       FARMS 36–50
    ========================= */

    {
      id: "farm-01",
      name: "Wheat Farm",
      category: "Farm",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "15 × 15 × 3",
      thumbnail: "assets/builds/farm-01.jpg",
      blueprint: "assets/blueprints/farm-01.pdf",
      description: "Simple automatic wheat farming area.",
      materials: [
        { item: "Dirt", amount: 120 },
        { item: "Water Bucket", amount: 4 },
        { item: "Oak Fence", amount: 40 },
        { item: "Torch", amount: 20 }
      ],
      steps: [
        "Create farmland rows.",
        "Place water sources.",
        "Plant wheat.",
        "Add lighting.",
        "Fence the farm.",
        "Create a storage chest."
      ]
    },

    {
      id: "farm-02",
      name: "Sugar Cane Farm",
      category: "Farm",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "17 × 8 × 5",
      thumbnail: "assets/builds/farm-02.jpg",
      blueprint: "assets/blueprints/farm-02.pdf",
      description: "Compact sugar cane production farm.",
      materials: [
        { item: "Sand", amount: 80 },
        { item: "Sugar Cane", amount: 40 },
        { item: "Water", amount: 20 },
        { item: "Glass", amount: 40 }
      ],
      steps: [
        "Build the sand rows.",
        "Place water channels.",
        "Plant sugar cane.",
        "Add collection areas.",
        "Add storage."
      ]
    },

    {
      id: "farm-03",
      name: "Cow Farm",
      category: "Farm",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "15 × 12 × 5",
      thumbnail: "assets/builds/farm-03.jpg",
      blueprint: "assets/blueprints/farm-03.pdf",
      description: "Simple cow breeding and food farm.",
      materials: [
        { item: "Oak Fence", amount: 80 },
        { item: "Oak Fence Gate", amount: 2 },
        { item: "Hay Bale", amount: 30 },
        { item: "Chest", amount: 2 }
      ],
      steps: [
        "Build the fenced enclosure.",
        "Add the entrance.",
        "Place hay decorations.",
        "Bring cows into the farm.",
        "Create storage."
      ]
    },

    {
      id: "farm-04",
      name: "Chicken Farm",
      category: "Farm",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "9 × 9 × 6",
      thumbnail: "assets/builds/farm-04.jpg",
      blueprint: "assets/blueprints/farm-04.pdf",
      description: "Compact chicken farm for food and eggs.",
      materials: [
        { item: "Glass", amount: 40 },
        { item: "Hopper", amount: 2 },
        { item: "Chest", amount: 1 },
        { item: "Dispenser", amount: 1 }
      ],
      steps: [
        "Build the collection chamber.",
        "Place the hopper.",
        "Create the chicken enclosure.",
        "Add the collection chest.",
        "Bring chickens inside."
      ]
    },

    {
      id: "farm-05",
      name: "Sugar Cane Factory",
      category: "Farm",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "25 × 12 × 8",
      thumbnail: "assets/builds/farm-05.jpg",
      blueprint: "assets/blueprints/farm-05.pdf",
      description: "Large automatic sugar cane farm.",
      materials: [
        { item: "Pistons", amount: 20 },
        { item: "Observers", amount: 20 },
        { item: "Hoppers", amount: 10 },
        { item: "Chests", amount: 5 }
      ],
      steps: [
        "Build the farming rows.",
        "Place sugar cane.",
        "Install pistons.",
        "Install observers.",
        "Connect Redstone.",
        "Build the collection system."
      ]
    },

    {
      id: "farm-06",
      name: "Pumpkin Farm",
      category: "Farm",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "20 × 12 × 7",
      thumbnail: "assets/builds/farm-06.jpg",
      blueprint: "assets/blueprints/farm-06.pdf",
      description: "Automatic pumpkin production farm.",
      materials: [
        { item: "Piston", amount: 15 },
        { item: "Observer", amount: 15 },
        { item: "Hopper", amount: 8 },
        { item: "Chest", amount: 4 }
      ],
      steps: [
        "Create the farmland.",
        "Plant pumpkin stems.",
        "Place observers.",
        "Install pistons.",
        "Connect Redstone.",
        "Build the collection system."
      ]
    },

    {
      id: "farm-07",
      name: "Melon Farm",
      category: "Farm",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "20 × 12 × 7",
      thumbnail: "assets/builds/farm-07.jpg",
      blueprint: "assets/blueprints/farm-07.pdf",
      description: "Automatic melon farming system.",
      materials: [
        { item: "Pistons", amount: 15 },
        { item: "Observers", amount: 15 },
        { item: "Hoppers", amount: 8 },
        { item: "Chests", amount: 4 }
      ],
      steps: [
        "Create farmland.",
        "Plant melon stems.",
        "Install observers.",
        "Place pistons.",
        "Connect Redstone.",
        "Add collection storage."
      ]
    },

    {
      id: "farm-08",
      name: "Tree Farm",
      category: "Farm",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "25 × 25 × 10",
      thumbnail: "assets/builds/farm-08.jpg",
      blueprint: "assets/blueprints/farm-08.pdf",
      description: "Organized tree farming area for renewable wood.",
      materials: [
        { item: "Dirt", amount: 200 },
        { item: "Oak Sapling", amount: 40 },
        { item: "Oak Fence", amount: 100 },
        { item: "Lantern", amount: 20 }
      ],
      steps: [
        "Prepare planting rows.",
        "Place saplings.",
        "Build fences.",
        "Add paths.",
        "Add lighting.",
        "Create a storage hut."
      ]
    },

    {
      id: "farm-09",
      name: "Villager Crop Farm",
      category: "Farm",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 20 × 7",
      thumbnail: "assets/builds/farm-09.jpg",
      blueprint: "assets/blueprints/farm-09.pdf",
      description: "Villager-powered crop farming system.",
      materials: [
        { item: "Glass", amount: 150 },
        { item: "Hopper", amount: 12 },
        { item: "Chest", amount: 6 },
        { item: "Rails", amount: 40 }
      ],
      steps: [
        "Build the crop field.",
        "Prepare villager area.",
        "Add collection system.",
        "Place villagers.",
        "Connect storage.",
        "Test the farm."
      ]
    },

    {
      id: "farm-10",
      name: "Iron Farm",
      category: "Farm",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "20 × 20 × 15",
      thumbnail: "assets/builds/farm-10.jpg",
      blueprint: "assets/blueprints/farm-10.pdf",
      description: "Automatic iron production system.",
      materials: [
        { item: "Glass", amount: 200 },
        { item: "Hoppers", amount: 12 },
        { item: "Chests", amount: 6 },
        { item: "Beds", amount: 20 }
      ],
      steps: [
        "Build the villager platform.",
        "Place beds.",
        "Create the spawning area.",
        "Build the collection system.",
        "Add storage.",
        "Test the farm."
      ]
    },

    {
      id: "farm-11",
      name: "Mob Farm",
      category: "Farm",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 25 × 35",
      thumbnail: "assets/builds/farm-11.jpg",
      blueprint: "assets/blueprints/farm-11.pdf",
      description: "General hostile mob farming tower.",
      materials: [
        { item: "Cobblestone", amount: 1500 },
        { item: "Hoppers", amount: 20 },
        { item: "Chests", amount: 10 },
        { item: "Trapdoors", amount: 200 }
      ],
      steps: [
        "Build the tower.",
        "Create spawning platforms.",
        "Add water channels.",
        "Build the drop chamber.",
        "Install collection.",
        "Light surrounding areas."
      ]
    },

    {
      id: "farm-12",
      name: "Bamboo Farm",
      category: "Farm",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "22 × 10 × 8",
      thumbnail: "assets/builds/farm-12.jpg",
      blueprint: "assets/blueprints/farm-12.pdf",
      description: "Automatic bamboo farm for fuel and building materials.",
      materials: [
        { item: "Pistons", amount: 20 },
        { item: "Observers", amount: 20 },
        { item: "Hoppers", amount: 10 },
        { item: "Chests", amount: 5 }
      ],
      steps: [
        "Plant bamboo.",
        "Install observers.",
        "Place pistons.",
        "Connect Redstone.",
        "Add collection storage."
      ]
    },

    {
      id: "farm-13",
      name: "Wool Farm",
      category: "Farm",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "24 × 12 × 8",
      thumbnail: "assets/builds/farm-13.jpg",
      blueprint: "assets/blueprints/farm-13.pdf",
      description: "Automatic wool production system.",
      materials: [
        { item: "Shears", amount: 12 },
        { item: "Observers", amount: 12 },
        { item: "Hoppers", amount: 12 },
        { item: "Chests", amount: 6 }
      ],
      steps: [
        "Create sheep modules.",
        "Place grass.",
        "Install observers.",
        "Add dispensers.",
        "Build collection.",
        "Add sheep."
      ]
    },

    {
      id: "farm-14",
      name: "Cactus Farm",
      category: "Farm",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "15 × 10 × 7",
      thumbnail: "assets/builds/farm-14.jpg",
      blueprint: "assets/blueprints/farm-14.pdf",
      description: "Compact automatic cactus farm.",
      materials: [
        { item: "Sand", amount: 100 },
        { item: "Cactus", amount: 30 },
        { item: "Fences", amount: 50 },
        { item: "Hoppers", amount: 5 }
      ],
      steps: [
        "Place sand.",
        "Plant cactus.",
        "Add collection barriers.",
        "Install hoppers.",
        "Connect storage."
      ]
    },

    {
      id: "farm-15",
      name: "Mega Farming District",
      category: "Farm",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "60 × 50 × 12",
      thumbnail: "assets/builds/farm-15.jpg",
      blueprint: "assets/blueprints/farm-15.pdf",
      description: "A complete farming district containing multiple crop farms.",
      materials: [
        { item: "Oak Planks", amount: 1000 },
        { item: "Dirt", amount: 1500 },
        { item: "Water Buckets", amount: 30 },
        { item: "Fences", amount: 500 }
      ],
      steps: [
        "Plan the farming district.",
        "Build crop sections.",
        "Add animal areas.",
        "Build storage barns.",
        "Create paths.",
        "Add lighting and decoration."
      ]
    },


    /* =========================
       MEDIEVAL 51–65
    ========================= */

    {
      id: "medieval-01",
      name: "Medieval Blacksmith",
      category: "Medieval",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "12 × 10 × 8",
      thumbnail: "assets/builds/medieval-01.jpg",
      blueprint: "assets/blueprints/medieval-01.pdf",
      description: "A detailed medieval blacksmith workshop.",
      materials: [
        { item: "Stone Bricks", amount: 150 },
        { item: "Spruce Planks", amount: 100 },
        { item: "Dark Oak Logs", amount: 35 },
        { item: "Campfire", amount: 4 }
      ],
      steps: [
        "Build the stone foundation.",
        "Construct the wooden frame.",
        "Add the roof.",
        "Create the forge.",
        "Add anvils and storage."
      ]
    },

    {
      id: "medieval-02",
      name: "Medieval Tavern",
      category: "Medieval",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "17 × 13 × 10",
      thumbnail: "assets/builds/medieval-02.jpg",
      blueprint: "assets/blueprints/medieval-02.pdf",
      description: "A cozy tavern for medieval villages.",
      materials: [
        { item: "Spruce Planks", amount: 300 },
        { item: "Cobblestone", amount: 150 },
        { item: "Dark Oak Stairs", amount: 80 },
        { item: "Lanterns", amount: 20 }
      ],
      steps: [
        "Build the stone base.",
        "Create timber walls.",
        "Build the roof.",
        "Create the tavern counter.",
        "Add tables and chairs.",
        "Decorate the exterior."
      ]
    },

    {
      id: "medieval-03",
      name: "Medieval Windmill",
      category: "Medieval",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "18 × 18 × 25",
      thumbnail: "assets/builds/medieval-03.jpg",
      blueprint: "assets/blueprints/medieval-03.pdf",
      description: "A tall decorative medieval windmill.",
      materials: [
        { item: "Spruce Planks", amount: 400 },
        { item: "Stripped Logs", amount: 100 },
        { item: "White Wool", amount: 180 },
        { item: "Cobblestone", amount: 200 }
      ],
      steps: [
        "Build the circular stone base.",
        "Construct the tower.",
        "Build the wooden top.",
        "Create four blades.",
        "Add interior floors."
      ]
    },

    {
      id: "medieval-04",
      name: "Medieval Watchtower",
      category: "Medieval",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "11 × 11 × 22",
      thumbnail: "assets/builds/medieval-04.jpg",
      blueprint: "assets/blueprints/medieval-04.pdf",
      description: "A defensive watchtower for kingdom borders.",
      materials: [
        { item: "Stone Bricks", amount: 500 },
        { item: "Spruce Planks", amount: 150 },
        { item: "Spruce Stairs", amount: 100 },
        { item: "Ladders", amount: 40 }
      ],
      steps: [
        "Build the stone tower.",
        "Create wooden floors.",
        "Add stairs.",
        "Build the top platform.",
        "Add battlements."
      ]
    },

    {
      id: "medieval-05",
      name: "Medieval Farmhouse",
      category: "Medieval",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "15 × 12 × 9",
      thumbnail: "assets/builds/medieval-05.jpg",
      blueprint: "assets/blueprints/medieval-05.pdf",
      description: "A rustic farmhouse for medieval settlements.",
      materials: [
        { item: "Oak Planks", amount: 220 },
        { item: "Oak Logs", amount: 60 },
        { item: "Cobblestone", amount: 120 },
        { item: "Hay Bales", amount: 50 }
      ],
      steps: [
        "Build the foundation.",
        "Create the farmhouse.",
        "Build the roof.",
        "Add windows.",
        "Build a nearby barn."
      ]
    },

    {
      id: "medieval-06",
      name: "Medieval Barn",
      category: "Medieval",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "18 × 14 × 10",
      thumbnail: "assets/builds/medieval-06.jpg",
      blueprint: "assets/blueprints/medieval-06.pdf",
      description: "Large wooden barn for medieval farms.",
      materials: [
        { item: "Spruce Logs", amount: 80 },
        { item: "Spruce Planks", amount: 350 },
        { item: "Hay Bales", amount: 100 },
        { item: "Spruce Stairs", amount: 120 }
      ],
      steps: [
        "Build the timber frame.",
        "Fill the walls.",
        "Build the large roof.",
        "Add barn doors.",
        "Add hay storage."
      ]
    },

    {
      id: "medieval-07",
      name: "Medieval Bridge",
      category: "Medieval",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "25 × 7 × 12",
      thumbnail: "assets/builds/medieval-07.jpg",
      blueprint: "assets/blueprints/medieval-07.pdf",
      description: "Stone and wood bridge connecting medieval settlements.",
      materials: [
        { item: "Stone Bricks", amount: 500 },
        { item: "Spruce Planks", amount: 180 },
        { item: "Spruce Logs", amount: 50 }
      ],
      steps: [
        "Build the support arches.",
        "Create the stone road.",
        "Add wooden rails.",
        "Decorate with lanterns."
      ]
    },

    {
      id: "medieval-08",
      name: "Medieval Gatehouse",
      category: "Medieval",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 15 × 22",
      thumbnail: "assets/builds/medieval-08.jpg",
      blueprint: "assets/blueprints/medieval-08.pdf",
      description: "Large defensive gatehouse for a medieval city.",
      materials: [
        { item: "Stone Bricks", amount: 1200 },
        { item: "Cobblestone", amount: 500 },
        { item: "Dark Oak", amount: 300 },
        { item: "Iron Bars", amount: 100 }
      ],
      steps: [
        "Build the two towers.",
        "Connect the towers.",
        "Create the gate opening.",
        "Add the wooden gate.",
        "Build the upper defensive floor."
      ]
    },

    {
      id: "medieval-09",
      name: "Medieval Church",
      category: "Medieval",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "24 × 18 × 20",
      thumbnail: "assets/builds/medieval-09.jpg",
      blueprint: "assets/blueprints/medieval-09.pdf",
      description: "A tall medieval church with a detailed interior.",
      materials: [
        { item: "Stone Bricks", amount: 1600 },
        { item: "Spruce Planks", amount: 400 },
        { item: "Glass", amount: 150 },
        { item: "Stone Brick Stairs", amount: 300 }
      ],
      steps: [
        "Build the foundation.",
        "Construct the nave.",
        "Build the tower.",
        "Add the roof.",
        "Install stained glass.",
        "Decorate the interior."
      ]
    },

    {
      id: "medieval-10",
      name: "Medieval Market",
      category: "Medieval",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "35 × 30 × 10",
      thumbnail: "assets/builds/medieval-10.jpg",
      blueprint: "assets/blueprints/medieval-10.pdf",
      description: "A lively medieval market square.",
      materials: [
        { item: "Spruce Planks", amount: 500 },
        { item: "Wool", amount: 300 },
        { item: "Cobblestone", amount: 700 },
        { item: "Lanterns", amount: 50 }
      ],
      steps: [
        "Build the market square.",
        "Create vendor stalls.",
        "Add wooden roofs.",
        "Build surrounding shops.",
        "Add paths and decorations."
      ]
    },

    {
      id: "medieval-11",
      name: "Medieval Library",
      category: "Medieval",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "17 × 14 × 12",
      thumbnail: "assets/builds/medieval-11.jpg",
      blueprint: "assets/blueprints/medieval-11.pdf",
      description: "A medieval library filled with bookshelves.",
      materials: [
        { item: "Spruce Planks", amount: 250 },
        { item: "Bookshelves", amount: 150 },
        { item: "Stone Bricks", amount: 180 },
        { item: "Lanterns", amount: 25 }
      ],
      steps: [
        "Build the stone base.",
        "Construct wooden walls.",
        "Build the roof.",
        "Add bookshelves.",
        "Create a reading area."
      ]
    },

    {
      id: "medieval-12",
      name: "Medieval Stable",
      category: "Medieval",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "20 × 12 × 9",
      thumbnail: "assets/builds/medieval-12.jpg",
      blueprint: "assets/blueprints/medieval-12.pdf",
      description: "A stable for horses and medieval transportation.",
      materials: [
        { item: "Spruce Planks", amount: 300 },
        { item: "Spruce Logs", amount: 70 },
        { item: "Hay Bales", amount: 80 },
        { item: "Fences", amount: 100 }
      ],
      steps: [
        "Build the stable frame.",
        "Create horse stalls.",
        "Build the roof.",
        "Add hay storage.",
        "Create an outdoor paddock."
      ]
    },

    {
      id: "medieval-13",
      name: "Medieval Town Hall",
      category: "Medieval",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 20 × 18",
      thumbnail: "assets/builds/medieval-13.jpg",
      blueprint: "assets/blueprints/medieval-13.pdf",
      description: "A large town hall for a medieval city.",
      materials: [
        { item: "Stone Bricks", amount: 1200 },
        { item: "Spruce Planks", amount: 500 },
        { item: "Dark Oak", amount: 250 },
        { item: "Glass", amount: 100 }
      ],
      steps: [
        "Build the foundation.",
        "Construct the main hall.",
        "Add the tower.",
        "Build the roof.",
        "Create the council room."
      ]
    },

    {
      id: "medieval-14",
      name: "Medieval Watch Fort",
      category: "Medieval",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "30 × 25 × 20",
      thumbnail: "assets/builds/medieval-14.jpg",
      blueprint: "assets/blueprints/medieval-14.pdf",
      description: "A small military fort guarding a kingdom.",
      materials: [
        { item: "Stone Bricks", amount: 1400 },
        { item: "Cobblestone", amount: 700 },
        { item: "Spruce Planks", amount: 350 },
        { item: "Iron Bars", amount: 100 }
      ],
      steps: [
        "Build the outer walls.",
        "Create defensive towers.",
        "Build the barracks.",
        "Add storage.",
        "Create the gate."
      ]
    },

    {
      id: "medieval-15",
      name: "Medieval Kingdom Entrance",
      category: "Medieval",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "35 × 18 × 25",
      thumbnail: "assets/builds/medieval-15.jpg",
      blueprint: "assets/blueprints/medieval-15.pdf",
      description: "A grand entrance for an entire medieval kingdom.",
      materials: [
        { item: "Stone Bricks", amount: 1800 },
        { item: "Deepslate", amount: 500 },
        { item: "Spruce Planks", amount: 400 },
        { item: "Lanterns", amount: 50 }
      ],
      steps: [
        "Build the two main towers.",
        "Connect the towers.",
        "Create the gate.",
        "Add banners.",
        "Build the road through the entrance."
      ]
    },


    /* =========================
       MODERN 66–80
    ========================= */

    {
      id: "modern-01",
      name: "Modern Villa",
      category: "Modern",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "24 × 18 × 11",
      thumbnail: "assets/builds/modern-01.jpg",
      blueprint: "assets/blueprints/modern-01.pdf",
      description: "Luxury modern villa with glass walls and a pool.",
      materials: [
        { item: "White Concrete", amount: 600 },
        { item: "Gray Concrete", amount: 250 },
        { item: "Glass", amount: 300 },
        { item: "Quartz", amount: 250 }
      ],
      steps: [
        "Build the foundation.",
        "Create the lower floor.",
        "Add the upper floor.",
        "Install glass walls.",
        "Build the pool.",
        "Add landscaping."
      ]
    },

    {
      id: "modern-02",
      name: "Modern Mansion",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "35 × 25 × 15",
      thumbnail: "assets/builds/modern-02.jpg",
      blueprint: "assets/blueprints/modern-02.pdf",
      description: "Large luxury mansion with multiple rooms.",
      materials: [
        { item: "White Concrete", amount: 1200 },
        { item: "Quartz", amount: 700 },
        { item: "Glass", amount: 600 },
        { item: "Dark Oak", amount: 300 }
      ],
      steps: [
        "Build the large foundation.",
        "Construct both floors.",
        "Add glass walls.",
        "Build balconies.",
        "Create a pool.",
        "Decorate the garden."
      ]
    },

    {
      id: "modern-03",
      name: "Modern Apartment",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "30 × 20 × 25",
      thumbnail: "assets/builds/modern-03.jpg",
      blueprint: "assets/blueprints/modern-03.pdf",
      description: "Multi-floor modern apartment building.",
      materials: [
        { item: "White Concrete", amount: 1500 },
        { item: "Gray Concrete", amount: 700 },
        { item: "Glass", amount: 900 },
        { item: "Quartz", amount: 400 }
      ],
      steps: [
        "Build the foundation.",
        "Create the first apartment.",
        "Repeat the floors.",
        "Add balconies.",
        "Install windows.",
        "Create the entrance lobby."
      ]
    },

    {
      id: "modern-04",
      name: "Modern Hotel",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "40 × 30 × 30",
      thumbnail: "assets/builds/modern-04.jpg",
      blueprint: "assets/blueprints/modern-04.pdf",
      description: "Large modern hotel with rooms and reception.",
      materials: [
        { item: "White Concrete", amount: 2000 },
        { item: "Glass", amount: 1200 },
        { item: "Quartz", amount: 800 },
        { item: "Gray Concrete", amount: 700 }
      ],
      steps: [
        "Build the hotel foundation.",
        "Construct the reception.",
        "Build guest floors.",
        "Add glass windows.",
        "Create rooftop area.",
        "Decorate the entrance."
      ]
    },

    {
      id: "modern-05",
      name: "Modern Beach House",
      category: "Modern",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "25 × 18 × 10",
      thumbnail: "assets/builds/modern-05.jpg",
      blueprint: "assets/blueprints/modern-05.pdf",
      description: "Modern beach house with ocean views.",
      materials: [
        { item: "White Concrete", amount: 700 },
        { item: "Glass", amount: 400 },
        { item: "Quartz", amount: 300 },
        { item: "Oak Planks", amount: 200 }
      ],
      steps: [
        "Build the beach foundation.",
        "Construct the lower floor.",
        "Add the upper floor.",
        "Install glass walls.",
        "Build the deck.",
        "Add a pool."
      ]
    },

    {
      id: "modern-06",
      name: "Modern Office",
      category: "Modern",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "28 × 20 × 16",
      thumbnail: "assets/builds/modern-06.jpg",
      blueprint: "assets/blueprints/modern-06.pdf",
      description: "Contemporary office building for a modern city.",
      materials: [
        { item: "Gray Concrete", amount: 800 },
        { item: "White Concrete", amount: 700 },
        { item: "Glass", amount: 600 },
        { item: "Iron Blocks", amount: 150 }
      ],
      steps: [
        "Build the foundation.",
        "Create the office floors.",
        "Add glass windows.",
        "Build the entrance.",
        "Create offices.",
        "Add rooftop equipment."
      ]
    },

    {
      id: "modern-07",
      name: "Modern Gas Station",
      category: "Modern",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "25 × 20 × 8",
      thumbnail: "assets/builds/modern-07.jpg",
      blueprint: "assets/blueprints/modern-07.pdf",
      description: "Modern fuel station for a Minecraft city.",
      materials: [
        { item: "White Concrete", amount: 400 },
        { item: "Red Concrete", amount: 150 },
        { item: "Glass", amount: 200 },
        { item: "Quartz", amount: 150 }
      ],
      steps: [
        "Build the station platform.",
        "Create the shop.",
        "Build the canopy.",
        "Add fuel pumps.",
        "Create parking spaces."
      ]
    },

    {
      id: "modern-08",
      name: "Modern School",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "40 × 30 × 15",
      thumbnail: "assets/builds/modern-08.jpg",
      blueprint: "assets/blueprints/modern-08.pdf",
      description: "Large modern school with classrooms and sports area.",
      materials: [
        { item: "White Concrete", amount: 1800 },
        { item: "Gray Concrete", amount: 700 },
        { item: "Glass", amount: 800 },
        { item: "Quartz", amount: 400 }
      ],
      steps: [
        "Build the main school building.",
        "Create classrooms.",
        "Build the entrance.",
        "Add hallways.",
        "Create a sports field.",
        "Decorate the grounds."
      ]
    },

    {
      id: "modern-09",
      name: "Modern Hospital",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "42 × 32 × 22",
      thumbnail: "assets/builds/modern-09.jpg",
      blueprint: "assets/blueprints/modern-09.pdf",
      description: "Large modern hospital for city builds.",
      materials: [
        { item: "White Concrete", amount: 2200 },
        { item: "Glass", amount: 1000 },
        { item: "Quartz", amount: 600 },
        { item: "Iron Blocks", amount: 250 }
      ],
      steps: [
        "Build the hospital foundation.",
        "Create reception.",
        "Construct medical floors.",
        "Add windows.",
        "Create parking area.",
        "Decorate the entrance."
      ]
    },

    {
      id: "modern-10",
      name: "Modern City Hall",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "35 × 28 × 22",
      thumbnail: "assets/builds/modern-10.jpg",
      blueprint: "assets/blueprints/modern-10.pdf",
      description: "Modern city hall for the center of a Minecraft city.",
      materials: [
        { item: "Quartz", amount: 1200 },
        { item: "White Concrete", amount: 1000 },
        { item: "Glass", amount: 800 },
        { item: "Gray Concrete", amount: 500 }
      ],
      steps: [
        "Build the main foundation.",
        "Create the entrance.",
        "Construct upper floors.",
        "Add large windows.",
        "Build the council chamber.",
        "Create a city plaza."
      ]
    },

    {
      id: "modern-11",
      name: "Modern Restaurant",
      category: "Modern",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "18 × 14 × 9",
      thumbnail: "assets/builds/modern-11.jpg",
      blueprint: "assets/blueprints/modern-11.pdf",
      description: "Stylish modern restaurant.",
      materials: [
        { item: "Quartz", amount: 300 },
        { item: "White Concrete", amount: 250 },
        { item: "Glass", amount: 180 },
        { item: "Dark Oak", amount: 150 }
      ],
      steps: [
        "Build the restaurant shell.",
        "Add glass windows.",
        "Create the kitchen.",
        "Build tables.",
        "Add signs and lighting."
      ]
    },

    {
      id: "modern-12",
      name: "Modern Garage",
      category: "Modern",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "16 × 12 × 7",
      thumbnail: "assets/builds/modern-12.jpg",
      blueprint: "assets/blueprints/modern-12.pdf",
      description: "Modern garage for vehicle-themed city builds.",
      materials: [
        { item: "Gray Concrete", amount: 300 },
        { item: "White Concrete", amount: 200 },
        { item: "Iron Blocks", amount: 80 },
        { item: "Glass", amount: 100 }
      ],
      steps: [
        "Build the garage shell.",
        "Create the large entrance.",
        "Add windows.",
        "Build storage areas.",
        "Decorate with tools."
      ]
    },

    {
      id: "modern-13",
      name: "Modern Penthouse",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 20 × 12",
      thumbnail: "assets/builds/modern-13.jpg",
      blueprint: "assets/blueprints/modern-13.pdf",
      description: "Luxury rooftop penthouse.",
      materials: [
        { item: "Quartz", amount: 700 },
        { item: "White Concrete", amount: 500 },
        { item: "Glass", amount: 450 },
        { item: "Dark Oak", amount: 200 }
      ],
      steps: [
        "Build the apartment shell.",
        "Create panoramic windows.",
        "Build rooftop terrace.",
        "Add pool.",
        "Decorate interior."
      ]
    },

    {
      id: "modern-14",
      name: "Modern Train Station",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "45 × 25 × 18",
      thumbnail: "assets/builds/modern-14.jpg",
      blueprint: "assets/blueprints/modern-14.pdf",
      description: "Modern railway station for a Minecraft city.",
      materials: [
        { item: "White Concrete", amount: 1200 },
        { item: "Glass", amount: 900 },
        { item: "Quartz", amount: 500 },
        { item: "Iron Blocks", amount: 200 }
      ],
      steps: [
        "Build the station platform.",
        "Create the main hall.",
        "Add railway platforms.",
        "Build the glass roof.",
        "Add ticket area.",
        "Connect tracks."
      ]
    },

    {
      id: "modern-15",
      name: "Modern Skyscraper",
      category: "Modern",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "30 × 30 × 60",
      thumbnail: "assets/builds/modern-15.jpg",
      blueprint: "assets/blueprints/modern-15.pdf",
      description: "Tall modern skyscraper for city skylines.",
      materials: [
        { item: "Glass", amount: 2500 },
        { item: "White Concrete", amount: 1800 },
        { item: "Gray Concrete", amount: 1200 },
        { item: "Iron Blocks", amount: 300 }
      ],
      steps: [
        "Build the foundation.",
        "Create the central frame.",
        "Build repeating floors.",
        "Add glass exterior.",
        "Create rooftop.",
        "Add lights and city details."
      ]
    },


    /* =========================
       REDSTONE 81–100
    ========================= */

    {
      id: "redstone-01",
      name: "Automatic Door",
      category: "Redstone",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "7 × 5 × 5",
      thumbnail: "assets/builds/redstone-01.jpg",
      blueprint: "assets/blueprints/redstone-01.pdf",
      description: "Simple automatic piston door.",
      materials: [
        { item: "Sticky Pistons", amount: 4 },
        { item: "Redstone Dust", amount: 12 },
        { item: "Pressure Plates", amount: 2 },
        { item: "Stone", amount: 30 }
      ],
      steps: [
        "Create the doorway.",
        "Place sticky pistons.",
        "Connect Redstone.",
        "Place pressure plates.",
        "Hide the Redstone."
      ]
    },

    {
      id: "redstone-02",
      name: "Hidden Staircase",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "9 × 7 × 10",
      thumbnail: "assets/builds/redstone-02.jpg",
      blueprint: "assets/blueprints/redstone-02.pdf",
      description: "Secret staircase activated by a hidden switch.",
      materials: [
        { item: "Sticky Pistons", amount: 8 },
        { item: "Redstone Dust", amount: 30 },
        { item: "Levers", amount: 2 },
        { item: "Stone", amount: 80 }
      ],
      steps: [
        "Build the staircase area.",
        "Install pistons.",
        "Create the Redstone circuit.",
        "Add hidden switch.",
        "Test the mechanism."
      ]
    },

    {
      id: "redstone-03",
      name: "Automatic Farm Door",
      category: "Redstone",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "7 × 5 × 5",
      thumbnail: "assets/builds/redstone-03.jpg",
      blueprint: "assets/blueprints/redstone-03.pdf",
      description: "Automatic entrance for farms.",
      materials: [
        { item: "Pistons", amount: 4 },
        { item: "Redstone Dust", amount: 10 },
        { item: "Pressure Plates", amount: 2 }
      ],
      steps: [
        "Build the entrance.",
        "Place pistons.",
        "Connect Redstone.",
        "Add pressure plates."
      ]
    },

    {
      id: "redstone-04",
      name: "Item Sorter",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "15 × 8 × 6",
      thumbnail: "assets/builds/redstone-04.jpg",
      blueprint: "assets/blueprints/redstone-04.pdf",
      description: "Automatic item sorting storage system.",
      materials: [
        { item: "Hoppers", amount: 20 },
        { item: "Chests", amount: 10 },
        { item: "Comparators", amount: 10 },
        { item: "Redstone Dust", amount: 30 }
      ],
      steps: [
        "Build the storage wall.",
        "Place hoppers.",
        "Install comparators.",
        "Connect Redstone.",
        "Configure filter items.",
        "Test item sorting."
      ]
    },

    {
      id: "redstone-05",
      name: "Automatic Smelter",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "12 × 8 × 6",
      thumbnail: "assets/builds/redstone-05.jpg",
      blueprint: "assets/blueprints/redstone-05.pdf",
      description: "Automatic furnace system with input and output storage.",
      materials: [
        { item: "Furnaces", amount: 8 },
        { item: "Hoppers", amount: 24 },
        { item: "Chests", amount: 6 },
        { item: "Building Blocks", amount: 100 }
      ],
      steps: [
        "Place furnaces.",
        "Add fuel hoppers.",
        "Add input hoppers.",
        "Create output storage.",
        "Test the smelter."
      ]
    },

    {
      id: "redstone-06",
      name: "Secret Door",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "9 × 7 × 6",
      thumbnail: "assets/builds/redstone-06.jpg",
      blueprint: "assets/blueprints/redstone-06.pdf",
      description: "Hidden piston door for secret bases.",
      materials: [
        { item: "Sticky Pistons", amount: 8 },
        { item: "Redstone Dust", amount: 30 },
        { item: "Lever", amount: 1 },
        { item: "Stone", amount: 70 }
      ],
      steps: [
        "Build the hidden doorway.",
        "Install pistons.",
        "Connect Redstone.",
        "Hide the lever.",
        "Test the door."
      ]
    },

    {
      id: "redstone-07",
      name: "Automatic Chicken Cooker",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "9 × 7 × 7",
      thumbnail: "assets/builds/redstone-07.jpg",
      blueprint: "assets/blueprints/redstone-07.pdf",
      description: "Compact automatic chicken food system.",
      materials: [
        { item: "Hoppers", amount: 4 },
        { item: "Dispenser", amount: 1 },
        { item: "Chest", amount: 2 },
        { item: "Glass", amount: 30 }
      ],
      steps: [
        "Build the chicken chamber.",
        "Install collection.",
        "Add dispenser.",
        "Connect the system.",
        "Add storage."
      ]
    },

    {
      id: "redstone-08",
      name: "Automatic Bamboo Factory",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "18 × 10 × 8",
      thumbnail: "assets/builds/redstone-08.jpg",
      blueprint: "assets/blueprints/redstone-08.pdf",
      description: "Automatic bamboo production machine.",
      materials: [
        { item: "Observers", amount: 15 },
        { item: "Pistons", amount: 15 },
        { item: "Hoppers", amount: 8 },
        { item: "Chests", amount: 4 }
      ],
      steps: [
        "Plant bamboo.",
        "Install observers.",
        "Add pistons.",
        "Connect Redstone.",
        "Create item collection."
      ]
    },

    {
      id: "redstone-09",
      name: "Automatic Sugar Cane Factory",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "20 × 10 × 8",
      thumbnail: "assets/builds/redstone-09.jpg",
      blueprint: "assets/blueprints/redstone-09.pdf",
      description: "High-output automatic sugar cane machine.",
      materials: [
        { item: "Observers", amount: 18 },
        { item: "Pistons", amount: 18 },
        { item: "Hoppers", amount: 9 },
        { item: "Chests", amount: 5 }
      ],
      steps: [
        "Build the sugar cane rows.",
        "Place observers.",
        "Install pistons.",
        "Connect Redstone.",
        "Build collection."
      ]
    },

    {
      id: "redstone-10",
      name: "Redstone Elevator",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "9 × 9 × 20",
      thumbnail: "assets/builds/redstone-10.jpg",
      blueprint: "assets/blueprints/redstone-10.pdf",
      description: "Multi-floor Redstone elevator concept.",
      materials: [
        { item: "Slime Blocks", amount: 20 },
        { item: "Observers", amount: 20 },
        { item: "Pistons", amount: 20 },
        { item: "Redstone Dust", amount: 60 }
      ],
      steps: [
        "Build the elevator shaft.",
        "Create the platform.",
        "Install pistons.",
        "Add observers.",
        "Connect the circuit.",
        "Test each floor."
      ]
    },

    {
      id: "redstone-11",
      name: "Automatic Lighting System",
      category: "Redstone",
      difficulty: "Easy",
      edition: "Java + Bedrock",
      size: "12 × 8 × 5",
      thumbnail: "assets/builds/redstone-11.jpg",
      blueprint: "assets/blueprints/redstone-11.pdf",
      description: "Automatic lights controlled by Redstone.",
      materials: [
        { item: "Redstone Lamps", amount: 12 },
        { item: "Redstone Dust", amount: 30 },
        { item: "Daylight Sensors", amount: 2 }
      ],
      steps: [
        "Place lamps.",
        "Connect Redstone.",
        "Add daylight sensors.",
        "Hide the wiring.",
        "Test the lights."
      ]
    },

    {
      id: "redstone-12",
      name: "Hidden Storage Room",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "15 × 12 × 8",
      thumbnail: "assets/builds/redstone-12.jpg",
      blueprint: "assets/blueprints/redstone-12.pdf",
      description: "Secret storage room hidden behind a wall.",
      materials: [
        { item: "Sticky Pistons", amount: 12 },
        { item: "Redstone Dust", amount: 40 },
        { item: "Chests", amount: 12 },
        { item: "Building Blocks", amount: 200 }
      ],
      steps: [
        "Build the storage room.",
        "Create the hidden wall.",
        "Install pistons.",
        "Connect the Redstone.",
        "Hide the activation switch."
      ]
    },

    {
      id: "redstone-13",
      name: "Automatic Bridge",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 8 × 8",
      thumbnail: "assets/builds/redstone-13.jpg",
      blueprint: "assets/blueprints/redstone-13.pdf",
      description: "Retractable bridge controlled by Redstone.",
      materials: [
        { item: "Sticky Pistons", amount: 24 },
        { item: "Slime Blocks", amount: 24 },
        { item: "Redstone Dust", amount: 60 },
        { item: "Building Blocks", amount: 250 }
      ],
      steps: [
        "Build the bridge frame.",
        "Install pistons.",
        "Create moving sections.",
        "Connect Redstone.",
        "Test extension and retraction."
      ]
    },

    {
      id: "redstone-14",
      name: "Automatic Minecart Station",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "30 × 15 × 10",
      thumbnail: "assets/builds/redstone-14.jpg",
      blueprint: "assets/blueprints/redstone-14.pdf",
      description: "Automated minecart station for transportation networks.",
      materials: [
        { item: "Rails", amount: 150 },
        { item: "Powered Rails", amount: 50 },
        { item: "Hoppers", amount: 12 },
        { item: "Redstone Dust", amount: 40 }
      ],
      steps: [
        "Build the station.",
        "Lay the rails.",
        "Add powered rails.",
        "Create the loading system.",
        "Connect Redstone.",
        "Test minecart routes."
      ]
    },

    {
      id: "redstone-15",
      name: "Automatic Potion Station",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "15 × 12 × 8",
      thumbnail: "assets/builds/redstone-15.jpg",
      blueprint: "assets/blueprints/redstone-15.pdf",
      description: "Organized Redstone-assisted potion brewing station.",
      materials: [
        { item: "Brewing Stands", amount: 8 },
        { item: "Hoppers", amount: 20 },
        { item: "Chests", amount: 10 },
        { item: "Redstone Dust", amount: 30 }
      ],
      steps: [
        "Build brewing modules.",
        "Install ingredient storage.",
        "Add hoppers.",
        "Create output storage.",
        "Organize potion ingredients."
      ]
    },

    {
      id: "redstone-16",
      name: "Redstone Security System",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "20 × 15 × 8",
      thumbnail: "assets/builds/redstone-16.jpg",
      blueprint: "assets/blueprints/redstone-16.pdf",
      description: "Security system with hidden doors and alarms.",
      materials: [
        { item: "Observers", amount: 10 },
        { item: "Redstone Dust", amount: 80 },
        { item: "Note Blocks", amount: 8 },
        { item: "Sticky Pistons", amount: 12 }
      ],
      steps: [
        "Build the security room.",
        "Install sensors.",
        "Create alarm circuits.",
        "Connect hidden doors.",
        "Test the system."
      ]
    },

    {
      id: "redstone-17",
      name: "Automatic Crop Harvester",
      category: "Redstone",
      difficulty: "Medium",
      edition: "Java + Bedrock",
      size: "20 × 12 × 7",
      thumbnail: "assets/builds/redstone-17.jpg",
      blueprint: "assets/blueprints/redstone-17.pdf",
      description: "Redstone-powered crop harvesting machine.",
      materials: [
        { item: "Pistons", amount: 15 },
        { item: "Redstone Dust", amount: 40 },
        { item: "Water Bucket", amount: 4 },
        { item: "Hoppers", amount: 8 }
      ],
      steps: [
        "Build the crop rows.",
        "Install piston harvesters.",
        "Create water channels.",
        "Connect Redstone.",
        "Add item collection."
      ]
    },

    {
      id: "redstone-18",
      name: "Automatic Furnace Array",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "20 × 12 × 8",
      thumbnail: "assets/builds/redstone-18.jpg",
      blueprint: "assets/blueprints/redstone-18.pdf",
      description: "Large furnace array for bulk smelting.",
      materials: [
        { item: "Furnaces", amount: 32 },
        { item: "Hoppers", amount: 96 },
        { item: "Chests", amount: 12 },
        { item: "Building Blocks", amount: 400 }
      ],
      steps: [
        "Build the furnace wall.",
        "Connect input hoppers.",
        "Connect fuel hoppers.",
        "Create output storage.",
        "Test the complete array."
      ]
    },

    {
      id: "redstone-19",
      name: "Redstone Calculator",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "25 × 15 × 8",
      thumbnail: "assets/builds/redstone-19.jpg",
      blueprint: "assets/blueprints/redstone-19.pdf",
      description: "Educational Redstone logic calculator.",
      materials: [
        { item: "Redstone Dust", amount: 150 },
        { item: "Repeaters", amount: 50 },
        { item: "Comparators", amount: 30 },
        { item: "Redstone Torches", amount: 60 }
      ],
      steps: [
        "Create the input section.",
        "Build logic gates.",
        "Connect arithmetic circuits.",
        "Create the output display.",
        "Test calculations."
      ]
    },

    {
      id: "redstone-20",
      name: "Mega Redstone Factory",
      category: "Redstone",
      difficulty: "Hard",
      edition: "Java + Bedrock",
      size: "60 × 45 × 20",
      thumbnail: "assets/builds/redstone-20.jpg",
      blueprint: "assets/blueprints/redstone-20.pdf",
      description: "Large Redstone laboratory containing multiple automated systems.",
      materials: [
        { item: "Redstone Dust", amount: 500 },
        { item: "Pistons", amount: 100 },
        { item: "Observers", amount: 100 },
        { item: "Hoppers", amount: 100 },
        { item: "Building Blocks", amount: 2500 }
      ],
      steps: [
        "Plan the factory layout.",
        "Build the Redstone laboratory.",
        "Create automation modules.",
        "Connect storage systems.",
        "Add testing areas.",
        "Decorate the factory."
      ]
    }

  ];


  /* =========================================
     GET ALL
  ========================================= */

  function getAll() {
    return [...builds];
  }


  /* =========================================
     GET BY ID
  ========================================= */

  function getById(id) {

    return builds.find(
      build => build.id === id
    ) || null;

  }


  /* =========================================
     SEARCH
  ========================================= */

  function search(query) {

    const text =
      String(query || "")
        .trim()
        .toLowerCase();

    if (!text) {
      return getAll();
    }

    return builds.filter(build => {

      const searchableText = [

        build.name,
        build.category,
        build.difficulty,
        build.edition,
        build.size,
        build.description,

        ...(build.materials || [])
          .map(
            material =>
              material.item
          )

      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(text);

    });

  }


  /* =========================================
     CATEGORY FILTER
  ========================================= */

  function filterByCategory(category) {

    if (
      !category ||
      category === "All"
    ) {
      return getAll();
    }

    return builds.filter(
      build =>
        build.category.toLowerCase() ===
        category.toLowerCase()
    );

  }


  /* =========================================
     DIFFICULTY FILTER
  ========================================= */

  function filterByDifficulty(
    difficulty
  ) {

    if (
      !difficulty ||
      difficulty === "All"
    ) {
      return getAll();
    }

    return builds.filter(
      build =>
        build.difficulty.toLowerCase() ===
        difficulty.toLowerCase()
    );

  }


  /* =========================================
     EDITION FILTER
  ========================================= */

  function filterByEdition(edition) {

    if (
      !edition ||
      edition === "All"
    ) {
      return getAll();
    }

    return builds.filter(
      build =>
        build.edition === edition ||
        build.edition ===
          "Java + Bedrock"
    );

  }


  /* =========================================
     CATEGORIES
  ========================================= */

  function getCategories() {

    return [
      "All",
      "House",
      "Castle",
      "Farm",
      "Medieval",
      "Modern",
      "Redstone"
    ];

  }


  /* =========================================
     DIFFICULTIES
  ========================================= */

  function getDifficulties() {

    return [
      "All",
      "Easy",
      "Medium",
      "Hard"
    ];

  }


  /* =========================================
     PUBLIC API
  ========================================= */

  return {

    getAll,
    getById,

    search,

    filterByCategory,
    filterByDifficulty,
    filterByEdition,

    getCategories,
    getDifficulties

  };

})();
