const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickcount = 0;
    arrow.addEventListener("click", () => {
        const ratio =   Math.floor(window.innerWidth / 270);
        clickcount++;
        if (itemNum - (4 + clickcount) +(4-ratio)>= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
            console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);

        } else {
            movieLists[i].style.transform = "translateX(0)"
            clickcount = 0;
        }

    })
})



///dark light modes
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball"
);
ball.addEventListener("click", () => {
    items.forEach(item=>{
        item.classList.toggle("active");
    })
})