import {guest}from "./GuestCard.js"
import {useGuests, getGuests} from "./GuestDataProvider.js"

const contentTarget = document.querySelector(".current-guest-list")

export const GuestList = (dropdownSelector, choosenFilter) => {
    contentTarget.innerHTML = " "
    getGuests()
    .then(() => {
       
        let guestArray= useGuests()

        if (dropdownSelector === "dish"){
            guestArray = guestArray.filter(singleDishInLoop => {
                return singleDishInLoop.favoriteDish === choosenFilter
            })
        }

        let guestHTML = ""

        guestArray.forEach((singleEntryObject) =>
        {
guestHTML += guest(singleEntryObject);
        });

        contentTarget.innerHTML += `
        <h2 class="guest-list>Guest List</h2>
        ${guestHTML}
        `
        
    })
}

let ButtonContentTarget = document.querySelector("#viewAllGuests") 

ButtonContentTarget.addEventListener("click", clickEvent => {
if (clickEvent.target.id ==="viewAllGuests"){
    GuestList()
}

})