/* =========================================
   MINEPLANNER — CRAFTING GUIDE SYSTEM
========================================= */

const MinePlannerCrafting = (() => {

  const categories = [
    "All",
    "Tools",
    "Weapons",
    "Armor",
    "Blocks",
    "Food",
    "Utility",
    "Redstone",
    "Transportation"
  ];

  const recipes = [

    {
      id: "crafting-table",
      name: "Crafting Table",
      category: "Utility",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🪵",
      description: "The basic crafting station used for advanced recipes.",
      ingredients: [
        { item: "Oak Planks", amount: 4 }
      ],
      result: "Crafting Table × 1"
    },

    {
      id: "wooden-pickaxe",
      name: "Wooden Pickaxe",
      category: "Tools",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "⛏️",
      description: "Basic pickaxe for collecting stone and early resources.",
      ingredients: [
        { item: "Oak Planks", amount: 3 },
        { item: "Stick", amount: 2 }
      ],
      result: "Wooden Pickaxe × 1"
    },

    {
      id: "stone-pickaxe",
      name: "Stone Pickaxe",
      category: "Tools",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "⛏️",
      description: "A stronger early-game pickaxe.",
      ingredients: [
        { item: "Cobblestone", amount: 3 },
        { item: "Stick", amount: 2 }
      ],
      result: "Stone Pickaxe × 1"
    },

    {
      id: "iron-pickaxe",
      name: "Iron Pickaxe",
      category: "Tools",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "⛏️",
      description: "An iron pickaxe capable of mining stronger resources.",
      ingredients: [
        { item: "Iron Ingot", amount: 3 },
        { item: "Stick", amount: 2 }
      ],
      result: "Iron Pickaxe × 1"
    },

    {
      id: "diamond-pickaxe",
      name: "Diamond Pickaxe",
      category: "Tools",
      edition: "Java + Bedrock",
      difficulty: "Medium",
      icon: "💎",
      description: "A powerful pickaxe with high durability and mining speed.",
      ingredients: [
        { item: "Diamond", amount: 3 },
        { item: "Stick", amount: 2 }
      ],
      result: "Diamond Pickaxe × 1"
    },

    {
      id: "wooden-sword",
      name: "Wooden Sword",
      category: "Weapons",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🗡️",
      description: "A basic early-game weapon.",
      ingredients: [
        { item: "Oak Planks", amount: 2 },
        { item: "Stick", amount: 1 }
      ],
      result: "Wooden Sword × 1"
    },

    {
      id: "iron-sword",
      name: "Iron Sword",
      category: "Weapons",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "⚔️",
      description: "Reliable weapon for early and mid-game survival.",
      ingredients: [
        { item: "Iron Ingot", amount: 2 },
        { item: "Stick", amount: 1 }
      ],
      result: "Iron Sword × 1"
    },

    {
      id: "diamond-sword",
      name: "Diamond Sword",
      category: "Weapons",
      edition: "Java + Bedrock",
      difficulty: "Medium",
      icon: "💎",
      description: "A powerful diamond weapon for combat.",
      ingredients: [
        { item: "Diamond", amount: 2 },
        { item: "Stick", amount: 1 }
      ],
      result: "Diamond Sword × 1"
    },

    {
      id: "shield",
      name: "Shield",
      category: "Armor",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🛡️",
      description: "Blocks incoming attacks and projectiles.",
      ingredients: [
        { item: "Oak Planks", amount: 6 },
        { item: "Iron Ingot", amount: 1 }
      ],
      result: "Shield × 1"
    },

    {
      id: "iron-helmet",
      name: "Iron Helmet",
      category: "Armor",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "⛑️",
      description: "Basic iron head protection.",
      ingredients: [
        { item: "Iron Ingot", amount: 5 }
      ],
      result: "Iron Helmet × 1"
    },

    {
      id: "iron-chestplate",
      name: "Iron Chestplate",
      category: "Armor",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🛡️",
      description: "Basic iron body protection.",
      ingredients: [
        { item: "Iron Ingot", amount: 8 }
      ],
      result: "Iron Chestplate × 1"
    },

    {
      id: "iron-leggings",
      name: "Iron Leggings",
      category: "Armor",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🦿",
      description: "Iron protection for the legs.",
      ingredients: [
        { item: "Iron Ingot", amount: 7 }
      ],
      result: "Iron Leggings × 1"
    },

    {
      id: "iron-boots",
      name: "Iron Boots",
      category: "Armor",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🥾",
      description: "Iron protection for the feet.",
      ingredients: [
        { item: "Iron Ingot", amount: 4 }
      ],
      result: "Iron Boots × 1"
    },

    {
      id: "chest",
      name: "Chest",
      category: "Utility",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "📦",
      description: "Stores items and resources.",
      ingredients: [
        { item: "Oak Planks", amount: 8 }
      ],
      result: "Chest × 1"
    },

    {
      id: "furnace",
      name: "Furnace",
      category: "Utility",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🔥",
      description: "Smelts ores, cooks food and processes materials.",
      ingredients: [
        { item: "Cobblestone", amount: 8 }
      ],
      result: "Furnace × 1"
    },

    {
      id: "torch",
      name: "Torch",
      category: "Utility",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🔥",
      description: "Provides light and helps prevent hostile mob spawns.",
      ingredients: [
        { item: "Coal", amount: 1 },
        { item: "Stick", amount: 1 }
      ],
      result: "Torch × 4"
    },

    {
      id: "bread",
      name: "Bread",
      category: "Food",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🍞",
      description: "Simple renewable early-game food.",
      ingredients: [
        { item: "Wheat", amount: 3 }
      ],
      result: "Bread × 1"
    },

    {
      id: "bucket",
      name: "Bucket",
      category: "Utility",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🪣",
      description: "Useful for water, lava, farming and many survival tasks.",
      ingredients: [
        { item: "Iron Ingot", amount: 3 }
      ],
      result: "Bucket × 1"
    },

    {
      id: "hopper",
      name: "Hopper",
      category: "Redstone",
      edition: "Java + Bedrock",
      difficulty: "Medium",
      icon: "🔽",
      description: "Moves items between containers and Redstone systems.",
      ingredients: [
        { item: "Iron Ingot", amount: 5 },
        { item: "Chest", amount: 1 }
      ],
      result: "Hopper × 1"
    },

    {
      id: "piston",
      name: "Piston",
      category: "Redstone",
      edition: "Java + Bedrock",
      difficulty: "Medium",
      icon: "⚙️",
      description: "Moves blocks when powered by Redstone.",
      ingredients: [
        { item: "Oak Planks", amount: 3 },
        { item: "Cobblestone", amount: 4 },
        { item: "Iron Ingot", amount: 1 },
        { item: "Redstone Dust", amount: 1 }
      ],
      result: "Piston × 1"
    },

    {
      id: "redstone-torch",
      name: "Redstone Torch",
      category: "Redstone",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🔴",
      description: "Provides a Redstone power source and is used in circuits.",
      ingredients: [
        { item: "Redstone Dust", amount: 1 },
        { item: "Stick", amount: 1 }
      ],
      result: "Redstone Torch × 1"
    },

    {
      id: "rail",
      name: "Rail",
      category: "Transportation",
      edition: "Java + Bedrock",
      difficulty: "Medium",
      icon: "🛤️",
      description: "Basic rail for minecart transportation.",
      ingredients: [
        { item: "Iron Ingot", amount: 6 },
        { item: "Stick", amount: 1 }
      ],
      result: "Rail × 16"
    },

    {
      id: "minecart",
      name: "Minecart",
      category: "Transportation",
      edition: "Java + Bedrock",
      difficulty: "Easy",
      icon: "🚋",
      description: "Used for rail-based transportation systems.",
      ingredients: [
        { item: "Iron Ingot", amount: 5 }
      ],
      result: "Minecart × 1"
    }

  ];

  /* =========================================
     GET ALL RECIPES
  ========================================= */

  function getAll() {
    return [...recipes];
  }

  /* =========================================
     GET RECIPE BY ID
  ========================================= */

  function getById(id) {

    return recipes.find(
      recipe => recipe.id === id
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

    return recipes.filter(recipe => {

      const searchableText = [

        recipe.name,

        recipe.category,

        recipe.edition,

        recipe.difficulty,

        recipe.description,

        recipe.result,

        ...(recipe.ingredients || [])
          .map(
            ingredient =>
              ingredient.item
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

    return recipes.filter(
      recipe =>
        recipe.category.toLowerCase() ===
        category.toLowerCase()
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

    return recipes.filter(recipe =>
      recipe.edition === edition ||
      recipe.edition === "Java + Bedrock"
    );

  }

  /* =========================================
     INGREDIENTS
  ========================================= */

  function getIngredients(id) {

    const recipe = getById(id);

    return recipe
      ? [...recipe.ingredients]
      : [];

  }

  /* =========================================
     CATEGORIES
  ========================================= */

  function getCategories() {
    return [...categories];
  }

  /* =========================================
     EDITIONS
  ========================================= */

  function getEditions() {

    return [
      "All",
      "Java",
      "Bedrock",
      "Java + Bedrock"
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
    filterByEdition,

    getIngredients,

    getCategories,
    getEditions

  };

})();
