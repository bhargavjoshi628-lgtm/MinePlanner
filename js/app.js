/* =========================================
   MINEPLANNER — MAIN APP CONTROLLER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log("MinePlanner starting...");

  const App = {

    state: {
      currentPage: "home",

      buildSearch: "",
      buildCategory: "All",
      buildDifficulty: "All",
      buildEdition: "All",

      craftingSearch: "",
      craftingCategory: "All",

      seedSearch: "",
      seedEdition: "All"
    },

    init() {

      this.setupNavigation();
      this.setupGlobalSearch();

      console.log(
        "MinePlanner initialized successfully."
      );

    },

    /* =====================================
       NAVIGATION
    ===================================== */

    setupNavigation() {

      const buttons =
        document.querySelectorAll(
          "[data-page]"
        );

      buttons.forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const page =
              button.dataset.page;

            this.openPage(page);

          }
        );

      });

    },

    openPage(pageName) {

      this.state.currentPage =
        pageName;

      const pages =
        document.querySelectorAll(
          ".app-page"
        );

      pages.forEach(page => {

        page.classList.remove(
          "active"
        );

      });

      const target =
        document.querySelector(
          `[data-page-content="${pageName}"]`
        );

      if (target) {

        target.classList.add(
          "active"
        );

      }

      const navButtons =
        document.querySelectorAll(
          "[data-page]"
        );

      navButtons.forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.page === pageName
        );

      });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    },

    /* =====================================
       GLOBAL SEARCH
    ===================================== */

    setupGlobalSearch() {

      const searchInputs =
        document.querySelectorAll(
          "[data-global-search]"
        );

      searchInputs.forEach(input => {

        input.addEventListener(
          "input",
          event => {

            const value =
              event.target.value;

            this.globalSearch(value);

          }
        );

      });

    },

    globalSearch(query) {

      const text =
        String(query || "")
          .trim()
          .toLowerCase();

      if (!text) {
        return;
      }

      const buildResults =
        typeof MinePlannerBuilds !==
        "undefined"
          ? MinePlannerBuilds.search(text)
          : [];

      const craftingResults =
        typeof MinePlannerCrafting !==
        "undefined"
          ? MinePlannerCrafting.search(text)
          : [];

      const seedResults =
        typeof MinePlannerSeeds !==
        "undefined"
          ? MinePlannerSeeds.search(text)
          : [];

      console.log(
        "Search results:",
        {
          builds: buildResults,
          crafting: craftingResults,
          seeds: seedResults
        }
      );

    },

    /* =====================================
       BUILD SEARCH
    ===================================== */

    searchBuilds(query) {

      this.state.buildSearch =
        query;

      this.renderBuilds();

    },

    filterBuildCategory(category) {

      this.state.buildCategory =
        category;

      this.renderBuilds();

    },

    filterBuildDifficulty(difficulty) {

      this.state.buildDifficulty =
        difficulty;

      this.renderBuilds();

    },

    filterBuildEdition(edition) {

      this.state.buildEdition =
        edition;

      this.renderBuilds();

    },

    getFilteredBuilds() {

      let builds =
        MinePlannerBuilds.getAll();

      if (this.state.buildSearch) {

        builds =
          MinePlannerBuilds.search(
            this.state.buildSearch
          );

      }

      if (
        this.state.buildCategory !==
        "All"
      ) {

        builds =
          builds.filter(
            build =>
              build.category ===
              this.state.buildCategory
          );

      }

      if (
        this.state.buildDifficulty !==
        "All"
      ) {

        builds =
          builds.filter(
            build =>
              build.difficulty ===
              this.state.buildDifficulty
          );

      }

      if (
        this.state.buildEdition !==
        "All"
      ) {

        builds =
          builds.filter(
            build =>
              build.edition ===
              this.state.buildEdition ||
              build.edition ===
              "Java + Bedrock"
          );

      }

      return builds;

    },

    renderBuilds() {

      const container =
        document.querySelector(
          "[data-build-grid]"
        );

      if (!container) {
        return;
      }

      const builds =
        this.getFilteredBuilds();

      if (!builds.length) {

        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🔎</div>
            <h3>No builds found</h3>
            <p>
              Try another search or filter.
            </p>
          </div>
        `;

        return;
      }

      container.innerHTML =
        builds
          .map(
            build =>
              this.createBuildCard(build)
          )
          .join("");

    },

    createBuildCard(build) {

      const materials =
        (build.materials || [])
          .slice(0, 5)
          .map(
            material =>
              `<span class="material">
                ${this.escapeHTML(
                  material.item
                )}
                ×${material.amount}
              </span>`
          )
          .join("");

      const favorite =
        typeof MinePlannerStorage !==
        "undefined"
          ? MinePlannerStorage.isFavorite(
              build.id
            )
          : false;

      return `
        <article
          class="build-card"
          data-build-id="${this.escapeHTML(
            build.id
          )}"
        >

          <div class="build-thumbnail">

            <img
              src="${this.escapeHTML(
                build.thumbnail || ""
              )}"
              alt="${this.escapeHTML(
                build.name
              )}"
              loading="lazy"
              onerror="this.style.display='none'"
            >

          </div>

          <div class="build-info">

            <div class="tag-row">

              <span class="tag purple">
                ${this.escapeHTML(
                  build.category
                )}
              </span>

              <span class="tag">
                ${this.escapeHTML(
                  build.difficulty
                )}
              </span>

            </div>

            <h3 class="build-title">
              ${this.escapeHTML(
                build.name
              )}
            </h3>

            <p class="build-description">
              ${this.escapeHTML(
                build.description
              )}
            </p>

            <div class="tag-row">

              <span class="tag">
                📐 ${this.escapeHTML(
                  build.size
                )}
              </span>

              <span class="tag">
                ⛏️ ${this.escapeHTML(
                  build.edition
                )}
              </span>

            </div>

            <div class="materials">

              <div class="materials-label">
                MATERIALS
              </div>

              <div class="material-list">
                ${materials}
              </div>

            </div>

            <button
              class="primary-button"
              type="button"
              data-open-build="${this.escapeHTML(
                build.id
              )}"
            >
              ${favorite ? "⭐ " : ""}
              View Build
            </button>

          </div>

        </article>
      `;

    },

    /* =====================================
       BUILD DETAILS
    ===================================== */

    openBuild(buildId) {

      const build =
        MinePlannerBuilds.getById(
          buildId
        );

      if (!build) {
        return;
      }

      const modal =
        document.querySelector(
          "[data-build-modal]"
        );

      if (!modal) {
        return;
      }

      const title =
        modal.querySelector(
          "[data-modal-title]"
        );

      const body =
        modal.querySelector(
          "[data-modal-body]"
        );

      if (title) {

        title.textContent =
          build.name;

      }

      if (body) {

        const materials =
          (build.materials || [])
            .map(
              material =>
                `<div class="detail-list-item">
                  ${this.escapeHTML(
                    material.item
                  )}
                  × ${material.amount}
                </div>`
            )
            .join("");

        const steps =
          (build.steps || [])
            .map(
              (step, index) =>
                `<div class="detail-list-item">
                  <strong>
                    ${index + 1}.
                  </strong>
                  ${this.escapeHTML(
                    step
                  )}
                </div>`
            )
            .join("");

        body.innerHTML = `

          <div class="tag-row">

            <span class="tag purple">
              ${this.escapeHTML(
                build.category
              )}
            </span>

            <span class="tag">
              ${this.escapeHTML(
                build.difficulty
              )}
            </span>

            <span class="tag">
              ${this.escapeHTML(
                build.edition
              )}
            </span>

          </div>

          <p class="build-description">
            ${this.escapeHTML(
              build.description
            )}
          </p>

          <div class="detail-section">

            <h3 class="detail-section-title">
              📐 Build Size
            </h3>

            <div class="detail-list">

              <div class="detail-list-item">
                ${this.escapeHTML(
                  build.size
                )}
              </div>

            </div>

          </div>

          <div class="detail-section">

            <h3 class="detail-section-title">
              🧱 Materials
            </h3>

            <div class="detail-list">
              ${materials}
            </div>

          </div>

          <div class="detail-section">

            <h3 class="detail-section-title">
              🛠️ Step-by-Step Guide
            </h3>

            <div class="detail-list">
              ${steps}
            </div>

          </div>

          <div class="detail-section">

            <button
              class="primary-button"
              type="button"
              data-favorite-build="${this.escapeHTML(
                build.id
              )}"
            >
              ⭐ ${
                typeof MinePlannerStorage !==
                "undefined" &&
                MinePlannerStorage.isFavorite(
                  build.id
                )
                  ? "Remove from Favorites"
                  : "Add to Favorites"
              }
            </button>

          </div>

          <div class="detail-section">

            <button
              class="primary-button"
              type="button"
              onclick="window.open(
                '${this.escapeHTML(
                  build.blueprint || "#"
                )}',
                '_blank'
              )"
            >
              📋 Blueprint
            </button>

          </div>

        `;

      }

      modal.classList.add("open");

    },

    closeBuildModal() {

      const modal =
        document.querySelector(
          "[data-build-modal]"
        );

      if (modal) {

        modal.classList.remove(
          "open"
        );

      }

    },

    /* =====================================
       FAVORITES
    ===================================== */

    toggleFavorite(buildId) {

      if (
        typeof MinePlannerStorage ===
        "undefined"
      ) {
        return;
      }

      MinePlannerStorage.toggleFavorite(
        buildId
      );

      this.renderBuilds();

      this.openBuild(buildId);

    },

    /* =====================================
       CRAFTING
    ===================================== */

    searchCrafting(query) {

      this.state.craftingSearch =
        query;

      this.renderCrafting();

    },

    filterCraftingCategory(
      category
    ) {

      this.state.craftingCategory =
        category;

      this.renderCrafting();

    },

    renderCrafting() {

      const container =
        document.querySelector(
          "[data-recipe-grid]"
        );

      if (!container) {
        return;
      }

      let recipes =
        this.state.craftingSearch
          ? MinePlannerCrafting.search(
              this.state.craftingSearch
            )
          : MinePlannerCrafting.getAll();

      if (
        this.state.craftingCategory !==
        "All"
      ) {

        recipes =
          recipes.filter(
            recipe =>
              recipe.category ===
              this.state.craftingCategory
          );

      }

      if (!recipes.length) {

        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🔎</div>
            <h3>No recipes found</h3>
          </div>
        `;

        return;
      }

      container.innerHTML =
        recipes
          .map(
            recipe => `

              <article class="recipe-card">

                <div class="recipe-icon">
                  ${this.escapeHTML(
                    recipe.icon
                  )}
                </div>

                <h3 class="recipe-title">
                  ${this.escapeHTML(
                    recipe.name
                  )}
                </h3>

                <p class="recipe-description">
                  ${this.escapeHTML(
                    recipe.description
                  )}
                </p>

                <div class="materials">

                  <div class="materials-label">
                    INGREDIENTS
                  </div>

                  <div class="material-list">

                    ${recipe.ingredients
                      .map(
                        ingredient =>
                          `<span class="material">
                            ${this.escapeHTML(
                              ingredient.item
                            )}
                            ×${ingredient.amount}
                          </span>`
                      )
                      .join("")}

                  </div>

                </div>

                <div class="tag-row">

                  <span class="tag purple">
                    ${this.escapeHTML(
                      recipe.category
                    )}
                  </span>

                  <span class="tag">
                    ${this.escapeHTML(
                      recipe.edition
                    )}
                  </span>

                </div>

                <button
                  class="primary-button"
                  type="button"
                  data-recipe-id="${this.escapeHTML(
                    recipe.id
                  )}"
                >
                  View Recipe
                </button>

              </article>

            `
          )
          .join("");

    },

    /* =====================================
       SEEDS
    ===================================== */

    searchSeeds(query) {

      this.state.seedSearch =
        query;

      this.renderSeeds();

    },

    filterSeedEdition(edition) {

      this.state.seedEdition =
        edition;

      this.renderSeeds();

    },

    renderSeeds() {

      const container =
        document.querySelector(
          "[data-seed-grid]"
        );

      if (!container) {
        return;
      }

      let seeds =
        this.state.seedSearch
          ? MinePlannerSeeds.search(
              this.state.seedSearch
            )
          : MinePlannerSeeds.getAll();

      if (
        this.state.seedEdition !==
        "All"
      ) {

        seeds =
          seeds.filter(
            seed =>
              seed.edition ===
              this.state.seedEdition ||
              seed.edition ===
              "Java + Bedrock"
          );

      }

      if (!seeds.length) {

        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🌱</div>
            <h3>No seeds found</h3>
          </div>
        `;

        return;
      }

      container.innerHTML =
        seeds
          .map(
            seed => `

              <article class="seed-card">

                <div class="seed-top">

                  <div>

                    <h3 class="seed-name">
                      ${this.escapeHTML(
                        seed.name
                      )}
                    </h3>

                    <span class="seed-code">
                      ${this.escapeHTML(
                        seed.seed
                      )}
                    </span>

                  </div>

                </div>

                <p class="seed-description">
                  ${this.escapeHTML(
                    seed.description
                  )}
                </p>

                <div class="seed-meta">

                  <span class="tag purple">
                    ${this.escapeHTML(
                      seed.edition
                    )}
                  </span>

                  <span class="tag">
                    ${this.escapeHTML(
                      seed.version
                    )}
                  </span>

                  <span class="tag">
                    📍 ${this.escapeHTML(
                      seed.coordinates
                    )}
                  </span>

                </div>

              </article>

            `
          )
          .join("");

    },

    /* =====================================
       EVENT DELEGATION
    ===================================== */

    setupEvents() {

      document.addEventListener(
        "click",
        event => {

          const buildButton =
            event.target.closest(
              "[data-open-build]"
            );

          if (buildButton) {

            this.openBuild(
              buildButton.dataset
                .openBuild
            );

            return;

          }

          const favoriteButton =
            event.target.closest(
              "[data-favorite-build]"
            );

          if (favoriteButton) {

            this.toggleFavorite(
              favoriteButton.dataset
                .favoriteBuild
            );

            return;

          }

          const closeButton =
            event.target.closest(
              "[data-close-modal]"
            );

          if (closeButton) {

            this.closeBuildModal();

          }

        }
      );

      const modal =
        document.querySelector(
          "[data-build-modal]"
        );

      if (modal) {

        modal.addEventListener(
          "click",
          event => {

            if (
              event.target === modal
            ) {

              this.closeBuildModal();

            }

          }
        );

      }

    },

    /* =====================================
       HTML SAFETY
    ===================================== */

    escapeHTML(value) {

      return String(value ?? "")
        .replace(
          /&/g,
          "&amp;"
        )
        .replace(
          /</g,
          "&lt;"
        )
        .replace(
          />/g,
          "&gt;"
        )
        .replace(
          /"/g,
          "&quot;"
        )
        .replace(
          /'/g,
          "&#039;"
        );

    }

  };

  /* =======================================
     START APP
  ======================================= */

  App.init();

  App.setupEvents();

  window.MinePlannerApp = App;

});
