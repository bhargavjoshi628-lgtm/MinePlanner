/* =========================================
   MINEPLANNER — STORAGE SYSTEM
   Local data foundation for:
   - Favorites
   - Saved Seeds
   - Personal Projects
   - Future Cloud Sync
========================================= */

const MinePlannerStorage = (() => {

  const STORAGE_KEY = "mineplanner_data_v1";

  const defaultData = {
    favorites: [],
    savedSeeds: [],
    projects: [],
    settings: {
      version: "v1"
    }
  };

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return structuredClone(defaultData);
      }

      const data = JSON.parse(saved);

      return {
        ...structuredClone(defaultData),
        ...data,
        settings: {
          ...defaultData.settings,
          ...(data.settings || {})
        }
      };

    } catch (error) {
      console.error("MinePlanner storage load error:", error);

      return structuredClone(defaultData);
    }
  }

  function save(data) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
      );

      return true;

    } catch (error) {
      console.error("MinePlanner storage save error:", error);

      return false;
    }
  }

  function update(callback) {
    const data = load();

    callback(data);

    save(data);

    return data;
  }

  /* =========================================
     FAVORITES
  ========================================= */

  function getFavorites() {
    return load().favorites;
  }

  function isFavorite(buildId) {
    return getFavorites().includes(buildId);
  }

  function addFavorite(buildId) {
    return update(data => {

      if (!data.favorites.includes(buildId)) {
        data.favorites.push(buildId);
      }

    });
  }

  function removeFavorite(buildId) {
    return update(data => {

      data.favorites =
        data.favorites.filter(
          id => id !== buildId
        );

    });
  }

  function toggleFavorite(buildId) {

    if (isFavorite(buildId)) {
      removeFavorite(buildId);
      return false;
    }

    addFavorite(buildId);
    return true;
  }

  /* =========================================
     SAVED SEEDS
  ========================================= */

  function getSeeds() {
    return load().savedSeeds;
  }

  function addSeed(seed) {

    return update(data => {

      const newSeed = {
        id:
          seed.id ||
          `seed_${Date.now()}_${Math.random()
            .toString(36)
            .slice(2, 8)}`,

        name: seed.name || "Unnamed Seed",

        seed: String(seed.seed || ""),

        version:
          seed.version || "Unknown",

        edition:
          seed.edition || "Java",

        description:
          seed.description || "",

        coordinates:
          seed.coordinates || "",

        createdAt:
          seed.createdAt ||
          new Date().toISOString()
      };

      data.savedSeeds.push(newSeed);
    });

  }

  function removeSeed(seedId) {

    return update(data => {

      data.savedSeeds =
        data.savedSeeds.filter(
          seed => seed.id !== seedId
        );

    });

  }

  /* =========================================
     PERSONAL PROJECTS
  ========================================= */

  function getProjects() {
    return load().projects;
  }

  function addProject(project) {

    return update(data => {

      const newProject = {

        id:
          project.id ||
          `project_${Date.now()}`,

        name:
          project.name ||
          "Untitled Project",

        buildId:
          project.buildId || null,

        notes:
          project.notes || "",

        progress:
          Number(project.progress || 0),

        createdAt:
          project.createdAt ||
          new Date().toISOString(),

        updatedAt:
          new Date().toISOString()
      };

      data.projects.push(newProject);
    });

  }

  function updateProject(projectId, changes) {

    return update(data => {

      const project =
        data.projects.find(
          item => item.id === projectId
        );

      if (!project) return;

      Object.assign(project, changes);

      project.updatedAt =
        new Date().toISOString();

    });

  }

  function removeProject(projectId) {

    return update(data => {

      data.projects =
        data.projects.filter(
          project =>
            project.id !== projectId
        );

    });

  }

  /* =========================================
     SETTINGS
  ========================================= */

  function getSettings() {
    return load().settings;
  }

  function updateSettings(changes) {

    return update(data => {

      data.settings = {
        ...data.settings,
        ...changes
      };

    });

  }

  /* =========================================
     EXPORT / IMPORT
     Future cloud-sync foundation
  ========================================= */

  function exportData() {

    return JSON.stringify(
      load(),
      null,
      2
    );

  }

  function importData(json) {

    try {

      const imported =
        typeof json === "string"
          ? JSON.parse(json)
          : json;

      if (
        !imported ||
        typeof imported !== "object"
      ) {
        throw new Error(
          "Invalid MinePlanner data."
        );
      }

      const data = {
        ...structuredClone(defaultData),
        ...imported
      };

      save(data);

      return true;

    } catch (error) {

      console.error(
        "MinePlanner import error:",
        error
      );

      return false;
    }

  }

  /* =========================================
     CLEAR DATA
  ========================================= */

  function clearAll() {

    localStorage.removeItem(
      STORAGE_KEY
    );

  }

  /* =========================================
     PUBLIC API
  ========================================= */

  return {

    load,
    save,
    update,

    getFavorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,

    getSeeds,
    addSeed,
    removeSeed,

    getProjects,
    addProject,
    updateProject,
    removeProject,

    getSettings,
    updateSettings,

    exportData,
    importData,

    clearAll
  };

})();
