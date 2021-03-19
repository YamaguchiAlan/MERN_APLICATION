import {scrollFunc} from './onScroll'

const mediaQuery = window.matchMedia("only screen and (max-width: 991px")

export const Queries= () => {
    if(mediaQuery.matches){
        const searchBar = document.getElementById("search-bar")
        const dropdown = document.getElementById("dropdown-menu")

        const dropdownItem = document.createElement("div")
        dropdownItem.className="dropdown-item"
        dropdownItem.id="dropdown-search-bar"

        if(dropdown){
            dropdownItem.appendChild(searchBar)
            dropdown.insertBefore(dropdownItem, dropdown.firstChild)

        }

        const nav = document.getElementById("app-nav")
        const container = document.getElementById("most-viewed-back")
        const mostViewed = document.getElementById("most-viewed")

        if(nav && container){
            container.insertBefore(nav, mostViewed)

            nav.style.position = "relative"
            nav.style.bottom = "0"
            nav.style.top="initial"
            nav.style.right="0"
            nav.style.maxHeight="initial"
            nav.style.height="initial"

            function scrollHorizontally(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                nav.scrollLeft -= (delta * 40);
                e.preventDefault();
            }

            // IE9, Chrome, Safari, Opera
            nav.addEventListener('mousewheel', scrollHorizontally, false);
            // Firefox
            nav.addEventListener('DOMMouseScroll', scrollHorizontally, false);
        }

    } else{
        const searchBar = document.getElementById("search-bar")
        const dropdown = document.getElementById("dropdown-menu")
        const searchBarDropdown = document.getElementById("dropdown-search-bar")

        if(dropdown){
            dropdown.insertAdjacentElement("afterend", searchBar)
            if(searchBarDropdown){
                dropdown.removeChild(searchBarDropdown)
            }
        }

        const nav = document.getElementById("app-nav")
        const main = document.getElementById("main") || document.getElementById("article")
        const body = document.getElementById("body") || document.getElementById("article-body")

        if(nav  && main){
            main.insertBefore(nav, body)
            scrollFunc()

            function scrollVertically(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                nav.scrollTop -= (delta * 40);
                e.preventDefault();
            }

            // IE9, Chrome, Safari, Opera
            nav.addEventListener('mousewheel', scrollVertically, false);
            // Firefox
            nav.addEventListener('DOMMouseScroll', scrollVertically, false);
        }
    }
}

Queries()

mediaQuery.addEventListener("change", (event) => {
    Queries()
})