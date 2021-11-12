import { useGuests, updateGuest } from "./GuestDataProvider.js";
import { GuestList } from "./GuestList.js"

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

    <label for ="righthanded" display="block"> Are you right handed? Yes:</label>
    
    ${guestWeWantToEdit.rightHanded ? `<input type="checkbox" checked id="guest-hand" />`:
    `
    <input type="checkbox" unchecked id="guest-hand" />
    `
    }
        
    <button id="saveNoteChanges-${guestId}">Save Changes</button>
    
    `
}
//line 20: Ternaly true = checked, false = unchecked 

contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){
        //debugger
         
        // Make a new object representation of a note
        const editedGuest = {
            id: event.target.id.split("-")[1],// how can you get the note's id?
            name: document.querySelector("#guest-name").value,// get value of text from input
            age: document.querySelector("#guest-age").value,// get value of suspect from input,
            favoriteDish: document.querySelector("#guest-dish").value,// get value of date from input
            rightHanded:document.querySelector("#guest-hand").checked,
            //.checked gets a value of true if it is checked, and false if it is not checked
            imageUrl:document.querySelector("#guest-url").value
        }

        // Send to json-server and refresh the list
        console.log(editedGuest)
        updateGuest(editedGuest).then(GuestList)

    }
})
