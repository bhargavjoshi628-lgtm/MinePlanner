const builds = [
  // =========================
  // HOUSES
  // =========================

  {
    id: 1,
    name: "Starter Survival House",
    category: "House",
    difficulty: "Easy",
    size: "11 × 9",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/starter-survival-house.jpg",
    materials: [
      "Oak Planks × 120",
      "Oak Logs × 35",
      "Glass × 24",
      "Cobblestone × 80",
      "Oak Stairs × 40"
    ],
    description: "A simple survival house perfect for the first days of a Minecraft world.",
    coordinates: "Add coordinates",
    guide: [
      "Build the foundation.",
      "Create the walls.",
      "Add windows and doors.",
      "Build the roof.",
      "Add interior details."
    ],
    blueprint: "assets/blueprints/starter-survival-house.png"
  },

  {
    id: 2,
    name: "Cozy Wooden House",
    category: "House",
    difficulty: "Easy",
    size: "13 × 11",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/cozy-wooden-house.jpg",
    materials: [
      "Spruce Planks",
      "Spruce Logs",
      "Glass",
      "Stone",
      "Spruce Stairs"
    ],
    description: "A cozy wooden survival house with a classic Minecraft style.",
    coordinates: "Add coordinates",
    guide: [
      "Build the foundation.",
      "Raise the walls.",
      "Add windows.",
      "Build the wooden roof.",
      "Decorate the interior."
    ],
    blueprint: "assets/blueprints/cozy-wooden-house.png"
  },

  {
    id: 3,
    name: "Modern Minecraft House",
    category: "Modern",
    difficulty: "Medium",
    size: "19 × 15",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/modern-minecraft-house.jpg",
    materials: [
      "Quartz",
      "Glass",
      "Smooth Stone",
      "Concrete",
      "Sea Lanterns"
    ],
    description: "A clean modern house using quartz, glass and concrete.",
    coordinates: "Add coordinates",
    guide: [
      "Build the main structure.",
      "Create the large glass windows.",
      "Add the second floor.",
      "Build the roof.",
      "Add lighting and decoration."
    ],
    blueprint: "assets/blueprints/modern-minecraft-house.png"
  },

  {
    id: 4,
    name: "Mountain House",
    category: "House",
    difficulty: "Medium",
    size: "17 × 13",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/mountain-house.jpg",
    materials: [
      "Stone",
      "Spruce Logs",
      "Spruce Planks",
      "Glass",
      "Lanterns"
    ],
    description: "A mountain survival home built into the terrain.",
    coordinates: "Add coordinates",
    guide: [
      "Choose a mountain location.",
      "Carve the interior.",
      "Build the entrance.",
      "Add windows.",
      "Decorate the rooms."
    ],
    blueprint: "assets/blueprints/mountain-house.png"
  },

  {
    id: 5,
    name: "Japanese House",
    category: "House",
    difficulty: "Medium",
    size: "15 × 13",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/japanese-house.jpg",
    materials: [
      "Spruce Planks",
      "Dark Oak",
      "Stone",
      "Paper",
      "Lanterns"
    ],
    description: "A Japanese-inspired Minecraft house with a curved roof.",
    coordinates: "Add coordinates",
    guide: [
      "Build the foundation.",
      "Create the wooden frame.",
      "Build the roof.",
      "Add windows.",
      "Create the surrounding garden."
    ],
    blueprint: "assets/blueprints/japanese-house.png"
  },

  // =========================
  // CASTLES
  // =========================

  {
    id: 6,
    name: "Medieval Castle",
    category: "Castle",
    difficulty: "Hard",
    size: "45 × 45",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/medieval-castle.jpg",
    materials: [
      "Stone Bricks",
      "Cobblestone",
      "Stone",
      "Dark Oak",
      "Iron Bars"
    ],
    description: "A large medieval castle with towers and defensive walls.",
    coordinates: "Add coordinates",
    guide: [
      "Build the outer walls.",
      "Create the four towers.",
      "Build the castle entrance.",
      "Create the main keep.",
      "Add interior rooms."
    ],
    blueprint: "assets/blueprints/medieval-castle.png"
  },

  {
    id: 7,
    name: "Small Castle",
    category: "Castle",
    difficulty: "Medium",
    size: "31 × 31",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/small-castle.jpg",
    materials: [
      "Stone Bricks",
      "Cobblestone",
      "Stone Stairs",
      "Spruce Logs",
      "Iron Bars"
    ],
    description: "A compact castle designed for survival worlds.",
    coordinates: "Add coordinates",
    guide: [
      "Build the foundation.",
      "Create the walls.",
      "Build the towers.",
      "Add the entrance.",
      "Decorate the courtyard."
    ],
    blueprint: "assets/blueprints/small-castle.png"
  },

  // =========================
  // FARMS
  // =========================

  {
    id: 8,
    name: "Wheat Farm",
    category: "Farm",
    difficulty: "Easy",
    size: "15 × 15",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/wheat-farm.jpg",
    materials: [
      "Dirt",
      "Water",
      "Oak Fences",
      "Oak Planks",
      "Wheat Seeds"
    ],
    description: "A simple automatic-looking farming area for early survival.",
    coordinates: "Add coordinates",
    guide: [
      "Prepare the farmland.",
      "Place the water.",
      "Create the paths.",
      "Add fences.",
      "Plant the wheat."
    ],
    blueprint: "assets/blueprints/wheat-farm.png"
  },

  {
    id: 9,
    name: "Animal Farm",
    category: "Farm",
    difficulty: "Easy",
    size: "21 × 17",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/animal-farm.jpg",
    materials: [
      "Oak Fences",
      "Oak Fence Gates",
      "Oak Logs",
      "Wheat",
      "Hay Bales"
    ],
    description: "A compact animal farm for cows, sheep, pigs and chickens.",
    coordinates: "Add coordinates",
    guide: [
      "Create animal pens.",
      "Build fences.",
      "Add gates.",
      "Add feeding areas.",
      "Bring animals into the pens."
    ],
    blueprint: "assets/blueprints/animal-farm.png"
  },

  // =========================
  // REDSTONE
  // =========================

  {
    id: 10,
    name: "Automatic Door",
    category: "Redstone",
    difficulty: "Medium",
    size: "7 × 5",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/automatic-door.jpg",
    materials: [
      "Redstone Dust",
      "Sticky Pistons",
      "Observers",
      "Building Blocks",
      "Pressure Plates"
    ],
    description: "A compact redstone door that opens automatically.",
    coordinates: "Add coordinates",
    guide: [
      "Create the doorway.",
      "Place the pistons.",
      "Connect the redstone.",
      "Add pressure plates.",
      "Test the mechanism."
    ],
    blueprint: "assets/blueprints/automatic-door.png"
  },

  {
    id: 11,
    name: "Automatic Farm",
    category: "Redstone",
    difficulty: "Hard",
    size: "17 × 13",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/automatic-farm.jpg",
    materials: [
      "Redstone Dust",
      "Observers",
      "Pistons",
      "Hoppers",
      "Chests"
    ],
    description: "A redstone-powered farm designed to automate harvesting.",
    coordinates: "Add coordinates",
    guide: [
      "Build the farm area.",
      "Place water.",
      "Install pistons.",
      "Connect observers.",
      "Add the collection system."
    ],
    blueprint: "assets/blueprints/automatic-farm.png"
  },

  // =========================
  // MEDIEVAL
  // =========================

  {
    id: 12,
    name: "Medieval Blacksmith",
    category: "Medieval",
    difficulty: "Medium",
    size: "13 × 11",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/medieval-blacksmith.jpg",
    materials: [
      "Stone Bricks",
      "Spruce Logs",
      "Spruce Planks",
      "Chains",
      "Campfire"
    ],
    description: "A medieval blacksmith shop for villages and castles.",
    coordinates: "Add coordinates",
    guide: [
      "Build the shop foundation.",
      "Create the walls.",
      "Build the roof.",
      "Add the forge.",
      "Decorate the outside."
    ],
    blueprint: "assets/blueprints/medieval-blacksmith.png"
  },

  {
    id: 13,
    name: "Medieval Tavern",
    category: "Medieval",
    difficulty: "Medium",
    size: "17 × 13",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/medieval-tavern.jpg",
    materials: [
      "Dark Oak",
      "Spruce",
      "Stone Bricks",
      "Lanterns",
      "Barrels"
    ],
    description: "A detailed medieval tavern for a village or kingdom.",
    coordinates: "Add coordinates",
    guide: [
      "Build the foundation.",
      "Create the first floor.",
      "Add the second floor.",
      "Build the roof.",
      "Decorate the tavern interior."
    ],
    blueprint: "assets/blueprints/medieval-tavern.png"
  },

  // =========================
  // MODERN
  // =========================

  {
    id: 14,
    name: "Modern Mansion",
    category: "Modern",
    difficulty: "Hard",
    size: "31 × 25",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/modern-mansion.jpg",
    materials: [
      "Quartz",
      "White Concrete",
      "Glass",
      "Dark Oak",
      "Sea Lanterns"
    ],
    description: "A large modern mansion with multiple rooms and a pool.",
    coordinates: "Add coordinates",
    guide: [
      "Build the main structure.",
      "Create the floors.",
      "Add large windows.",
      "Build the pool.",
      "Decorate the interior."
    ],
    blueprint: "assets/blueprints/modern-mansion.png"
  },

  {
    id: 15,
    name: "Modern Villa",
    category: "Modern",
    difficulty: "Hard",
    size: "27 × 21",
    version: "Java + Bedrock",
    thumbnail: "assets/images/builds/modern-villa.jpg",
    materials: [
      "Quartz",
      "Concrete",
      "Glass",
      "Stone",
      "Glowstone"
    ],
    description: "A stylish modern villa for creative or survival worlds.",
    coordinates: "Add coordinates",
    guide: [
      "Build the foundation.",
      "Create the lower floor.",
      "Add the upper floor.",
      "Build the outdoor area.",
      "Add interior decoration."
    ],
    blueprint: "assets/blueprints/modern-villa.png"
  }
];
