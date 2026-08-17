/* =========================================
   MINEPLANNER — SEED SYSTEM
========================================= */

const MinePlannerSeeds = (() => {

  const defaultSeeds = [
    {
      id: "seed-village-plains",

      name: "Plains Village Start",

      seed: "123456789",

      edition: "Java + Bedrock",

      version: "1.21+",

      description:
        "A useful starting seed with a plains village close to spawn.",

      coordinates:
        "Spawn: 0, 0 | Village: 120, 80",

      tags: [
        "Village",
        "Survival",
        "Plains"
      ]
    },

    {
      id: "seed-mountain-base",

      name: "Mountain Base",

      seed: "987654321",

      edition: "Java",

      version: "1.21+",

      description:
        "Mountain terrain suitable for a large survival base.",

      coordinates:
        "Spawn: 0, 0 | Mountain: -180, 140",

      tags: [
        "Mountain",
        "Base",
        "Scenic"
      ]
    },

    {
      id: "seed-cherry-valley",

      name: "Cherry Valley",

      seed: "246813579",

      edition: "Bedrock",

      version: "1.21+",

      description:
        "A scenic area featuring cherry grove terrain near the starting region.",

      coordinates:
        "Spawn: 0, 0 | Cherry Grove: 210, -95",

      tags: [
        "Cherry Grove",
        "Scenic",
        "Building"
      ]
    }
  ];

  /* =========================================
     GET DEFAULT SEEDS
  ========================================= */

  function getDefaultSeeds() {
    return [...defaultSeeds];
  }

  /* =========================================
     GET USER SAVED SEEDS
  ========================================= */

  function getUserSeeds() {

    if (
      typeof MinePlannerStorage ===
      "undefined"
    ) {
      return [];
    }

    return MinePlannerStorage.getSeeds();
  }

  /* =========================================
     GET ALL SEEDS
  ========================================= */

  function getAll() {

    return [
      ...defaultSeeds,
      ...getUserSeeds()
    ];

  }

  /* =========================================
     FIND SEED
  ========================================= */

  function getById(id) {

    return getAll().find(
      seed => seed.id === id
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

    return getAll().filter(seed => {

      const searchableText = [

        seed.name,

        seed.seed,

        seed.edition,

        seed.version,

        seed.description,

        seed.coordinates,

        ...(seed.tags || [])

      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(text);

    });

  }

  /* =========================================
     FILTER BY EDITION
  ========================================= */

  function filterByEdition(edition) {

    if (
      !edition ||
      edition === "All"
    ) {
      return getAll();
    }

    return getAll().filter(seed =>

      seed.edition === edition ||
      seed.edition === "Java + Bedrock"

    );

  }

  /* =========================================
     FILTER BY VERSION
  ========================================= */

  function filterByVersion(version) {

    if (
      !version ||
      version === "All"
    ) {
      return getAll();
    }

    return getAll().filter(seed =>
      String(seed.version)
        .toLowerCase()
        .includes(
          String(version).toLowerCase()
        )
    );

  }

  /* =========================================
     ADD USER SEED
  ========================================= */

  function addSeed(seedData) {

    if (
      typeof MinePlannerStorage ===
      "undefined"
    ) {

      console.error(
        "MinePlannerStorage is not loaded."
      );

      return null;
    }

    const seed = {

      name:
        seedData.name ||
        "My Minecraft Seed",

      seed:
        String(seedData.seed || ""),

      edition:
        seedData.edition ||
        "Java + Bedrock",

      version:
        seedData.version ||
        "Unknown",

      description:
        seedData.description ||
        "",

      coordinates:
        seedData.coordinates ||
        "",

      tags:
        Array.isArray(seedData.tags)
          ? seedData.tags
          : []

    };

    MinePlannerStorage.addSeed(seed);

    return seed;

  }

  /* =========================================
     DELETE USER SEED
  ========================================= */

  function removeSeed(seedId) {

    if (
      typeof MinePlannerStorage ===
      "undefined"
    ) {
      return false;
    }

    MinePlannerStorage.removeSeed(
      seedId
    );

    return true;

  }

  /* =========================================
     SEED EDITIONS
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
     SEED VERSIONS
  ========================================= */

  function getVersions() {

    const versions = [
      "1.21+",
      "1.20+",
      "1.19+",
      "1.18+"
    ];

    return [
      "All",
      ...versions
    ];

  }

  /* =========================================
     PUBLIC API
  ========================================= */

  return {

    getDefaultSeeds,
    getUserSeeds,
    getAll,
    getById,

    search,

    filterByEdition,
    filterByVersion,

    addSeed,
    removeSeed,

    getEditions,
    getVersions

  };

})();
