import { GuestEditForm } from "./GuestEditForm.js"

export const guest = (taco) => {
    return `
    <div class="guest-list-group-item  ${taco.id}">
    <h4>Guest Name: ${taco.name}</h4>
    <img src="${taco.imageUrl}" alt="${taco.name}" class="guest-imgs" width="50vw"
    </img>
    <p class="guest-dish">Favorite Dish: ${taco.favoriteDish}</p>
    <p class="guest-age">Age: ${taco.age}</p>
    ${taco.rightHanded ?
    `<p class="guest-righty">Righty</p>
    `: 
    `<p class="guest-lefty">Lefty</p>
    ` }
    <button id="deleteGuest--${taco.id}">Delete</button>
    <button id="edit--${taco.id}">Edit</button>
    </div>
        `
}
//things to do 
// 1. check the data structer so that it is printing
// 2. tweak for img tag at W3
//<p>Right Handed: ${taco.rightHanded}</p>

const eventHub = document.querySelector(".current-guest-list")
eventHub.addEventListener("click", (eventObject) => {

    const guestId = +eventObject.target.id.split("--")[1]
    GuestEditForm(guestId);
})
