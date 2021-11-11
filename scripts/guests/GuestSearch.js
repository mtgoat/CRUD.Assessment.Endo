//

const SearchBoxContentTarget = document.querySelector(".search-box")

export const GuestSearchBox = () => {
    SearchBoxContentTarget.innnerHTML = 
    `
    <lable for="site-search">
    Search the Guest List:</lable>
    <input type="search" id="site-search" name="q"
    aria-label="Search through site content"><button>Search</button>

    `
}