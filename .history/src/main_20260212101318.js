const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");

if (menuButton && mobileMenu && menuOverlay) {
    const closeMenu = () => {
        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
        menuOverlay.classList.remove("is-open");
        menuOverlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("overflow-hidden");
        menuButton.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        mobileMenu.classList.add("is-open");
        mobileMenu.setAttribute("aria-hidden", "false");
        menuOverlay.classList.add("is-open");
        menuOverlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("overflow-hidden");
        menuButton.setAttribute("aria-expanded", "true");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("is-open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    menuOverlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
