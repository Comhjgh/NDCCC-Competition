// Add event listener to menu items
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            const targetId = this.querySelector("a").getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});