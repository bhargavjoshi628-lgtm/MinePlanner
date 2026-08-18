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


    /* =====================================
       INIT
    ===================================== */

    init() {

      this.setupNavigation();
      this.setupGlobalSearch();
      this.setupEvents();

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

      document
        .querySelectorAll(".app-page")
        .forEach(page => {

          page.classList.remove("active");

        });


      const target =
        document.querySelector(
          `[data-page-content="${pageName}"]`
        );


      if (target) {

        target.classList.add("active");

      }


      document
        .querySelectorAll("[data-page]")
        .forEach(button => {

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

      const inputs =
        document.querySelectorAll(
          "[data-global-search]"
        );

      inputs.forEach(input => {

        input.addEventListener(
          "input",
          event => {

            this.globalSearch(
              event.target.value
            );

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
       BUILD SYSTEM
    ===================================== */

    searchBuilds(query) {

      this.state.buildSearch =
        String(query || "");

      this.renderBuilds();

    },


    filterBuildCategory(category) {

      this.state.buildCategory =
        category;

      this.updateBuildFilterButtons();

      this.renderBuilds();

    },


    filterBuildDifficulty(difficulty) {

      this.state.buildDifficulty =
        difficulty;

      this.updateBuildDifficultyButtons();

      this.renderBuilds();

    },


    filterBuildEdition(edition) {

      this.state.buildEdition =
        edition;

      this.renderBuilds();

    },


    getAllBuilds() {

      if (
        typeof MinePlannerBuilds !==
        "undefined" &&
        typeof MinePlannerBuilds.getAll ===
        "function"
      ) {

        return MinePlannerBuilds.getAll();

      }


      if (
        typeof builds !==
        "undefined" &&
        Array.isArray(builds)
      ) {

        return builds;

      }


      return [];

    },


    searchBuildData(buildList, query) {

      const text =
        String(query || "")
          .trim()
          .toLowerCase();


      if (!text) {
        return buildList;
      }


      return buildList.filter(build => {

        return (

          String(build.name || "")
            .toLowerCase()
            .includes(text)

          ||

          String(build.category || "")
            .toLowerCase()
            .includes(text)

          ||

          String(build.difficulty || "")
            .toLowerCase()
            .includes(text)

          ||

          String(build.description || "")
            .toLowerCase()
            .includes(text)

        );

      });

    },


    getFilteredBuilds() {

      let result =
        this.getAllBuilds();


      /*
        SEARCH
      */

      result =
        this.searchBuildData(
          result,
          this.state.buildSearch
        );


      /*
        CATEGORY
      */

      if (
        this.state.buildCategory !==
        "All"
      ) {

        result =
          result.filter(
            build =>
              String(
                build.category || ""
              ).toLowerCase() ===
              String(
                this.state.buildCategory
              ).toLowerCase()
          );

      }


      /*
        DIFFICULTY
      */

      if (
        this.state.buildDifficulty !==
        "All"
      ) {

        result =
          result.filter(
            build =>
              String(
                build.difficulty || ""
              ).toLowerCase() ===
              String(
                this.state.buildDifficulty
              ).toLowerCase()
          );

      }


      /*
        EDITION / VERSION
      */

      if (
        this.state.buildEdition !==
        "All"
      ) {

        result =
          result.filter(build => {

            const edition =
              String(
                build.edition ||
                build.version ||
                ""
              ).toLowerCase();


            return (

              edition.includes(
                String(
                  this.state.buildEdition
                ).toLowerCase()
              )

              ||

              edition.includes(
                "java + bedrock"
              )

            );

          });

      }


      return result;

    },


    renderBuilds() {

      const container =
        document.querySelector(
          "[data-build-grid]"
        );


      if (!container) {
        return;
      }


      const filtered =
        this.getFilteredBuilds();


      if (!filtered.length) {

        container.innerHTML = `

          <div class="empty-state">

            <div class="empty-icon">
              🔎
            </div>

            <h3>
              No builds found
            </h3>

            <p>
              Try another search or filter.
            </p>

          </div>

        `;

        return;

      }


      container.innerHTML =
        filtered
          .map(
            build =>
              this.createBuildCard(build)
          )
          .join("");

    },


    /* =====================================
       BUILD CARD
    ===================================== */

    createBuildCard(build) {

      const favorite =
        typeof MinePlannerStorage !==
        "undefined" &&
        typeof MinePlannerStorage.isFavorite ===
        "function"
          ? MinePlannerStorage.isFavorite(
              build.id
            )
          : false;


      /*
        Support BOTH:

        "Oak Planks × 120"

        AND

        { item: "Oak Planks", amount: 120 }
      */

      const materials =
        (build.materials || [])
          .slice(0, 5)
          .map(material => {

            if (
              typeof material ===
              "string"
            ) {

              return `
                <span class="material">
                  ${this.escapeHTML(
                    material
                  )}
                </span>
              `;

            }


            return `
              <span class="material">
                ${this.escapeHTML(
                  material.item
                )}
                ${
                  material.amount !==
                  undefined
                    ? `×${this.escapeHTML(
                        material.amount
                      )}`
                    : ""
                }
              </span>
            `;

          })
          .join("");


      const edition =
        build.edition ||
        build.version ||
        "Java + Bedrock";


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
                build.name || "Minecraft Build"
              )}"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.parentElement.classList.add('no-image');
              "
            >

          </div>


          <div class="build-info">

            <div class="tag-row">

              <span class="tag purple">
                ${this.escapeHTML(
                  build.category || ""
                )}
              </span>

              <span class="tag">
                ${this.escapeHTML(
                  build.difficulty || ""
                )}
              </span>

            </div>


            <h3 class="build-title">

              ${this.escapeHTML(
                build.name || ""
              )}

            </h3>


            <p class="build-description">

              ${this.escapeHTML(
                build.description || ""
              )}

            </p>


            <div class="tag-row">

              <span class="tag">

                📐
                ${this.escapeHTML(
                  build.size || "Unknown"
                )}

              </span>


              <span class="tag">

                ⛏️
                ${this.escapeHTML(
                  edition
                )}

              </span>

            </div>


            <div class="materials">

              <div class="materials-label">
                MATERIALS
              </div>


              <div class="material-list">

                ${
                  materials ||
                  `<span class="material">
                    See build details
                  </span>`
                }

              </div>

            </div>


            <button
              class="primary-button"
              type="button"
              data-open-build="${this.escapeHTML(
                build.id
              )}"
            >

              ${
                favorite
                  ? "⭐ "
                  : ""
              }

              View Build

            </button>

          </div>

        </article>

      `;

    },


    /* =====================================
       BUILD MODAL
    ===================================== */

    openBuild(buildId) {

      const all =
        this.getAllBuilds();


      let build =
        all.find(
          item =>
            String(item.id) ===
            String(buildId)
        );


      if (
        !build &&
        typeof MinePlannerBuilds !==
        "undefined" &&
        typeof MinePlannerBuilds.getById ===
        "function"
      ) {

        build =
          MinePlannerBuilds.getById(
            buildId
          );

      }


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


      if (!body) {
        return;
      }


      const edition =
        build.edition ||
        build.version ||
        "Java + Bedrock";


      /*
        MATERIALS
      */

      const materials =
        (build.materials || [])
          .map(material => {

            if (
              typeof material ===
              "string"
            ) {

              return `
                <div class="detail-list-item">
                  ${this.escapeHTML(
                    material
                  )}
                </div>
              `;

            }


            return `
              <div class="detail-list-item">

                ${this.escapeHTML(
                  material.item
                )}

                ${
                  material.amount !==
                  undefined
                    ? `× ${this.escapeHTML(
                        material.amount
                      )}`
                    : ""
                }

              </div>
            `;

          })
          .join("");


      /*
        GUIDE / STEPS
      */

      const guide =
        Array.isArray(build.guide)
          ? build.guide
          : Array.isArray(build.steps)
            ? build.steps
            : [];


      const steps =
        guide
          .map(
            (step, index) => `

              <div class="detail-list-item">

                <strong>
                  ${index + 1}.
                </strong>

                ${this.escapeHTML(
                  step
                )}

              </div>

            `
          )
          .join("");


      /*
        THUMBNAIL
      */

      const image =
        build.thumbnail
          ? `

            <div
              style="
                margin-bottom:20px;
                border-radius:12px;
                overflow:hidden;
              "
            >

              <img
                src="${this.escapeHTML(
                  build.thumbnail
                )}"
                alt="${this.escapeHTML(
                  build.name
                )}"
                style="
                  width:100%;
                  display:block;
                "
              >

            </div>

          `
          : "";


      body.innerHTML = `

        ${image}


        <div class="tag-row">

          <span class="tag purple">

            ${this.escapeHTML(
              build.category || ""
            )}

          </span>


          <span class="tag">

            ${this.escapeHTML(
              build.difficulty || ""
            )}

          </span>


          <span class="tag">

            ${this.escapeHTML(
              edition
            )}

          </span>

        </div>


        <p class="build-description">

          ${this.escapeHTML(
            build.description || ""
          )}

        </p>


        <div class="detail-section">

          <h3 class="detail-section-title">

            📐 Build Size

          </h3>


          <div class="detail-list">

            <div class="detail-list-item">

              ${this.escapeHTML(
                build.size ||
                "Not specified"
              )}

            </div>

          </div>

        </div>


        <div class="detail-section">

          <h3 class="detail-section-title">

            🧱 Materials

          </h3>


          <div class="detail-list">

            ${
              materials ||
              `<div class="detail-list-item">
                No materials listed.
              </div>`
            }

          </div>

        </div>


        <div class="detail-section">

          <h3 class="detail-section-title">

            🛠️ Step-by-Step Guide

          </h3>


          <div class="detail-list">

            ${
              steps ||
              `<div class="detail-list-item">
                Guide coming soon.
              </div>`
            }

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

            ⭐

            ${
              typeof MinePlannerStorage !==
              "undefined" &&
              typeof MinePlannerStorage.isFavorite ===
              "function" &&
              MinePlannerStorage.isFavorite(
                build.id
              )
                ? "Remove from Favorites"
                : "Add to Favorites"
            }

          </button>

        </div>


        ${
          build.blueprint
            ? `

              <div class="detail-section">

                <button
                  class="primary-button"
                  type="button"
                  onclick="window.open(
                    '${this.escapeHTML(
                      build.blueprint
                    )}',
                    '_blank'
                  )"
                >

                  📋 Blueprint

                </button>

              </div>

            `
            : ""
        }

      `;


      modal.classList.add(
        "open"
      );

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
        "undefined" ||
        typeof MinePlannerStorage.toggleFavorite !==
        "function"
      ) {

        return;

      }


      MinePlannerStorage.toggleFavorite(
        buildId
      );


      this.renderBuilds();


      this.openBuild(
        buildId
      );

    },


    /* =====================================
       BUILD FILTER BUTTON UI
    ===================================== */

    updateBuildFilterButtons() {

      const buttons =
        document.querySelectorAll(
          ".filter-bar:first-of-type .filter-button"
        );


      buttons.forEach(button => {

        const text =
          button.textContent
            .trim()
            .replace(
              /^[^\w]+/,
              ""
            );


        const category =
          text === "All"
            ? "All"
            : text;


        button.classList.toggle(
          "active",
          category ===
          this.state.buildCategory
        );

      });

    },


    updateBuildDifficultyButtons() {

      const bars =
        document.querySelectorAll(
          '[data-page-content="builds"] .filter-bar'
        );


      if (bars.length < 2) {
        return;
      }


      bars[1]
        .querySelectorAll(
          ".filter-button"
        )
        .forEach(button => {

          const text =
            button.textContent
              .trim();


          let difficulty =
            "All";


          if (
            text ===
            "Easy"
          ) {
            difficulty = "Easy";
          }

          if (
            text ===
            "Medium"
          ) {
            difficulty = "Medium";
          }

          if (
            text ===
            "Hard"
          ) {
            difficulty = "Hard";
          }


          button.classList.toggle(
            "active",
            difficulty ===
            this.state.buildDifficulty
          );

        });

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


      if (
        typeof MinePlannerCrafting ===
        "undefined"
      ) {

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

            <div class="empty-icon">
              🔎
            </div>

            <h3>
              No recipes found
            </h3>

          </div>

        `;

        return;

      }


      container.innerHTML =
        recipes
          .map(
            recipe => `

              <article
                class="recipe-card"
              >

                <div class="recipe-icon">

                  ${this.escapeHTML(
                    recipe.icon
                  )}

                </div>


                <h3
                  class="recipe-title"
                >

                  ${this.escapeHTML(
                    recipe.name
                  )}

                </h3>


                <p
                  class="recipe-description"
                >

                  ${this.escapeHTML(
                    recipe.description
                  )}

                </p>


                <div class="materials">

                  <div
                    class="materials-label"
                  >
                    INGREDIENTS
                  </div>


                  <div
                    class="material-list"
                  >

                    ${
                      (recipe.ingredients ||
                        [])
                        .map(
                          ingredient => `

                            <span
                              class="material"
                            >

                              ${this.escapeHTML(
                                ingredient.item
                              )}

                              ×${
                                this.escapeHTML(
                                  ingredient.amount
                                )
                              }

                            </span>

                          `
                        )
                        .join("")
                    }

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


      if (
        typeof MinePlannerSeeds ===
        "undefined"
      ) {

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

            <div class="empty-icon">
              🌱
            </div>

            <h3>
              No seeds found
            </h3>

          </div>

        `;

        return;

      }


      container.innerHTML =
        seeds
          .map(
            seed => `

              <article
                class="seed-card"
              >

                <div
                  class="seed-top"
                >

                  <div>

                    <h3
                      class="seed-name"
                    >

                      ${this.escapeHTML(
                        seed.name
                      )}

                    </h3>


                    <span
                      class="seed-code"
                    >

                      ${this.escapeHTML(
                        seed.seed
                      )}

                    </span>

                  </div>

                </div>


                <p
                  class="seed-description"
                >

                  ${this.escapeHTML(
                    seed.description
                  )}

                </p>


                <div
                  class="seed-meta"
                >

                  <span
                    class="tag purple"
                  >

                    ${this.escapeHTML(
                      seed.edition
                    )}

                  </span>


                  <span
                    class="tag"
                  >

                    ${this.escapeHTML(
                      seed.version
                    )}

                  </span>


                  <span
                    class="tag"
                  >

                    📍
                    ${this.escapeHTML(
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
              event.target ===
              modal
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

      return String(
        value ?? ""
      )

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


  /*
    Make App globally available
    BEFORE the first render.
  */

  window.MinePlannerApp =
    App;


  /*
    Initial rendering
  */

  App.renderBuilds();
  App.renderCrafting();
  App.renderSeeds();

});
