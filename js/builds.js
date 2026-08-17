/* =========================================
   MINEPLANNER — BUILD SYSTEM
========================================= */

const MinePlannerBuilds = (() => {

  const categories = [
    "House",
    "Castle",
    "Farm",
    "Medieval",
    "Modern",
    "Redstone"
  ];

  const difficulties = [
    "Easy",
    "Medium",
    "Hard",
    "Expert"
  ];

  const editions = [
    "Java",
    "Bedrock",
    "Java + Bedrock"
  ];

  /*
    Sample builds.
    Later this list will be replaced/expanded
    with the full 100-build database.
  */

  const builds = [
    {
      id: "starter-survival-house",

      name: "Starter Survival House",

      category: "House",

      difficulty: "Easy",

      edition: "Java + Bedrock",

      size: "11 × 9 × 7",

      description:
        "A simple survival house designed for the first few days of a Minecraft world.",

      thumbnail:
        "images/builds/starter-survival-house.webp",

      blueprint:
        "blueprints/starter-survival-house",

      materials: [
        {
          item: "Oak Planks",
          amount: 120
        },
        {
          item: "Oak Logs",
          amount: 35
        },
        {
          item: "Glass",
          amount: 24
        },
        {
          item: "Cobblestone",
          amount: 80
        },
        {
          item: "Oak Stairs",
          amount: 40
        }
      ],

      steps: [
        "Create an 11 × 9 foundation.",
        "Build the walls using Oak Planks and Oak Logs.",
        "Add windows using Glass.",
        "Build the roof using Oak Stairs.",
        "Add the entrance, lighting and basic interior.",
        "Place a bed, crafting table and storage."
      ]
    },

    {
      id: "small-medieval-castle",

      name: "Small Medieval Castle",

      category: "Castle",

      difficulty: "Hard",

      edition: "Java + Bedrock",

      size: "31 × 31 × 18",

      description:
        "A compact medieval castle with towers, walls and a central courtyard.",

      thumbnail:
        "images/builds/small-medieval-castle.webp",

      blueprint:
        "blueprints/small-medieval-castle",

      materials: [
        {
          item: "Stone Bricks",
          amount: 850
        },
        {
          item: "Cobblestone",
          amount: 420
        },
        {
          item: "Spruce Logs",
          amount: 120
        },
        {
          item: "Spruce Planks",
          amount: 260
        },
        {
          item: "Glass",
          amount: 48
        }
      ],

      steps: [
        "Mark the 31 × 31 castle area.",
        "Build the outer castle walls.",
        "Construct the four corner towers.",
        "Create the main gate.",
        "Build the central courtyard.",
        "Add the main castle building.",
        "Finish the roofs and defensive details."
      ]
    },

    {
      id: "automatic-wheat-farm",

      name: "Automatic Wheat Farm",

      category: "Farm",

      difficulty: "Medium",

      edition: "Java + Bedrock",

      size: "13 × 9 × 6",

      description:
        "A compact automatic wheat farm for reliable early-game food production.",

      thumbnail:
        "images/builds/automatic-wheat-farm.webp",

      blueprint:
        "blueprints/automatic-wheat-farm",

      materials: [
        {
          item: "Oak Planks",
          amount: 80
        },
        {
          item: "Dirt",
          amount: 48
        },
        {
          item: "Water Bucket",
          amount: 2
        },
        {
          item: "Observer",
          amount: 4
        },
        {
          item: "Piston",
          amount: 4
        },
        {
          item: "Redstone Dust",
          amount: 12
        }
      ],

      steps: [
        "Create the farm platform.",
        "Place the water channels.",
        "Prepare the farmland.",
        "Place the pistons and observers.",
        "Connect the Redstone circuit.",
        "Plant the wheat.",
        "Test the harvesting mechanism."
      ]
    },

    {
      id: "modern-glass-house",

      name: "Modern Glass House",

      category: "Modern",

      difficulty: "Medium",

      edition: "Java + Bedrock",

      size: "17 × 13 × 9",

      description:
        "A clean modern Minecraft house using large glass walls and simple geometric shapes.",

      thumbnail:
        "images/builds/modern-glass-house.webp",

      blueprint:
        "blueprints/modern-glass-house",

      materials: [
        {
          item: "White Concrete",
          amount: 320
        },
        {
          item: "Glass",
          amount: 180
        },
        {
          item: "Quartz",
          amount: 120
        },
        {
          item: "Dark Oak Planks",
          amount: 80
        }
      ],

      steps: [
        "Mark the rectangular foundation.",
        "Build the concrete frame.",
        "Install the large glass walls.",
        "Create the second floor.",
        "Build the flat roof.",
        "Add the interior rooms.",
        "Finish the exterior landscaping."
      ]
    },

    {
      id: "redstone-hidden-door",

      name: "Hidden Redstone Door",

      category: "Redstone",

      difficulty: "Hard",

      edition: "Java + Bedrock",

      size: "9 × 7 × 5",

      description:
        "A hidden piston door that can be concealed inside a wall.",

      thumbnail:
        "images/builds/redstone-hidden-door.webp",

      blueprint:
        "blueprints/redstone-hidden-door",

      materials: [
        {
          item: "Sticky Piston",
          amount: 12
        },
        {
          item: "Redstone Dust",
          amount: 24
        },
        {
          item: "Redstone Torch",
          amount: 4
        },
        {
          item: "Repeater",
          amount: 4
        },
        {
          item: "Building Blocks",
          amount: 80
        }
      ],

      steps: [
        "Dig the hidden redstone chamber.",
        "Place the sticky pistons.",
        "Connect the redstone wiring.",
        "Add the input mechanism.",
        "Cover the mechanism with building blocks.",
        "Test the opening and closing sequence."
      ]
    },

    {
      id: "medieval-watchtower",

      name: "Medieval Watchtower",

      category: "Medieval",

      difficulty: "Medium",

      edition: "Java + Bedrock",

      size: "9 × 9 × 20",

      description:
        "A tall medieval watchtower that works well around villages, castles and bases.",

      thumbnail:
        "images/builds/medieval-watchtower.webp",

      blueprint:
        "blueprints/medieval-watchtower",

      materials: [
        {
          item: "Stone Bricks",
          amount: 420
        },
        {
          item: "Spruce Logs",
          amount: 80
        },
        {
          item: "Spruce Stairs",
          amount: 90
        },
        {
          item: "Lantern",
          amount: 12
        }
      ],

      steps: [
        "Build the 9 × 9 foundation.",
        "Raise the stone tower walls.",
        "Add the upper observation platform.",
        "Build the wooden roof.",
        "Add windows and battlements.",
        "Finish with lanterns and decorative details."
      ]
    }
  ];

  /* =========================================
     GETTERS
  ========================================= */

  function getAll() {
    return [...builds];
  }

  function getById(id) {
    return builds.find(
      build => build.id === id
    ) || null;
  }

  function getByCategory(category) {

    if (!category || category === "All") {
      return getAll();
    }

    return builds.filter(
      build =>
        build.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  function getByDifficulty(difficulty) {

    if (!difficulty || difficulty === "All") {
      return getAll();
    }

    return builds.filter(
      build =>
        build.difficulty.toLowerCase() ===
        difficulty.toLowerCase()
    );
  }

  function getByEdition(edition) {

    if (!edition || edition === "All") {
      return getAll();
    }

    return builds.filter(
      build =>
        build.edition === edition ||
        build.edition === "Java + Bedrock"
    );
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
          .map(material => material.item)

      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(text);
    });
  }

  /* =========================================
     MATERIAL CALCULATOR
  ========================================= */

  function getMaterials(buildId) {

    const build = getById(buildId);

    if (!build) {
      return [];
    }

    return build.materials || [];
  }

  /* =========================================
     BUILD STEPS
  ========================================= */

  function getSteps(buildId) {

    const build = getById(buildId);

    if (!build) {
      return [];
    }

    return build.steps || [];
  }

  /* =========================================
     CATEGORIES
  ========================================= */

  function getCategories() {
    return [...categories];
  }

  function getDifficulties() {
    return [...difficulties];
  }

  function getEditions() {
    return [...editions];
  }

  /* =========================================
     PUBLIC API
  ========================================= */

  return {

    getAll,
    getById,

    getByCategory,
    getByDifficulty,
    getByEdition,

    search,

    getMaterials,
    getSteps,

    getCategories,
    getDifficulties,
    getEditions
  };

})();
