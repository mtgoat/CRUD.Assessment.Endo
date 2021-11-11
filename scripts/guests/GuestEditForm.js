import { useGuests, updateGuest } from "./GuestDataProvider.js";


const contentTarget = document.querySelector(".form")

export const GuestEditForm = (guestId) => {
    const allGuests = useGuests ()

    const guestWeWantToEdit = allGuests.find(singleGuest => singleGuest.id === guestId)

    contentTarget.innerHTML =`
    <h2>Edit Guest Information</h2>
    <input type="text" id="guest-name" value="${guestWeWantToEdit.name}" />
    <input type="text" id="guest-url" value="${guestWeWantToEdit.imageUrl}"/>
    <input type="number" id="guest-age" value="${guestWeWantToEdit.age}" id="guest-age" />
    <input type="text" value="${guestWeWantToEdit.favoriteDish}" id="guest-dish" />
    <input type="checkbox" value="${guestWeWantToEdit.rightHanded}" id="guest-dish" />
    <button id="saveNoteChanges-${guestId}">Save Changes</button>
    
    `
}

contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedGuest = {
            id: event.target.id.split("-")[1],// how can you get the note's id?
            name: document.querySelector("#guest-name").value,// get value of text from input
            age: document.querySelector("#guest-age").value,// get value of suspect from input,
            favoriteDish: document.querySelector("#guest-dish").value,// get value of date from input
            rightHanded:document.querySelector("#guest-dish").value,
            imageUrl:document.querySelector("#guest-url").value
        }

        // Send to json-server and refresh the list
        updateGuest(editedGuest).then(GuestList)

    }
})
