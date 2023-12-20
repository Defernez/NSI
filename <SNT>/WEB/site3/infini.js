document.addEventListener("DOMContentLoaded", function () {
    function isBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function loadMoreContent() {
        // Simulez ici le chargement de contenu depuis le serveur
        const newSections = `
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <section>
                <h2>Nouvelle Section</h2>
                <p>Contenu de la nouvelle section.</p>
            </section>
            <!-- Ajoutez plus de sections au besoin -->
        `;

        document.querySelector(".content").insertAdjacentHTML("beforeend", newSections);
    }

    // Chargez du contenu initialement
    loadMoreContent();

    // Événement de défilement pour détecter le bas de la page
    window.addEventListener("scroll", function () {
        if (isBottom()) {
            loadMoreContent();
        }
    });
});

