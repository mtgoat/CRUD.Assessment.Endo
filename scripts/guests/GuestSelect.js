import { getGuests, useGuests } from "./GuestDataProvider.js";
import { GuestList } from "./GuestList.js"; 

const contentTarget = document.querySelector(".filter-guest-list")

export const GuestSelect = () => {
    getGuests ()
    .then (()=>{
        const guests = useGuests ()
        render(guests)
    })
}

const render = guestsCollections => {
     /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
        contentTarget.innerHTML = `
        <select class="dropdown" id="guestSelect">
            <option value="0">Please select a favorite dish...</option>
            ${
                guestsCollections.map(guestObject => {
                    const dishName = guestObject.favoriteDish
                    return `<option>${dishName}</option>`
                })
            }
        </select>
    `
}

const eventHub=document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => 
{

    if(eventObject.target.id === "guestSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)

        GuestList("dish", eventObject.target.value)
    }
})