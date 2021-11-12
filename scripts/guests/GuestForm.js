import {deleteGuest} from "./GuestDataProvider.js"
//import { GuestList } from "./GuestList"
import {saveGuests} from "./GuestDataProvider.js"

const contentTarget = document.querySelector(".form")

export const GuestForm = () => {
    contentTarget.innerHTML = 
    `
    <legend class="guest-entry">Guest Entry Box</legend>
    
        <label for="guestName">Guest Name</label><input type="text" name="guestName" id="guestName" placeholder="Guest's name goes here"/>

        <label for="guestImg">Guest Image</label><input type="text" name="guestImg" id="guestImg" placeholder="please enter an ulr for an image"/>
    
        <label for="guestAge">Age</label>
        <input type="number" name="guestAge" id="guestAge" min="0" max="100"/ placeholder="Please select your age here">

        <label for="favoriteDish">Favorite Dish</label>
        <input type="text" name="favoriteDish" id="favoriteDish" placeholder="Guest's favoriteDish goes here"/>
     
    <label for="dominantHand">Select your dominant Hand for dinning</label>
        <select name="rightHanded" id="rightHanded">
        <option id="rightHandedTrue" value="true">Right Handed</option>
        <option value="false" id="rightHandedFalse">Left Handed</option>
    </select> 
   
<button id="saveGuestEntry">Save Guest Entry</button>
    `
}

//this above works without the 2 imports


//this is to save the entry
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveGuestEntry"){

//This is to convert rightHeded selection into boolean 
//option 1 does not work
//option 1 starts
// let rightHandedBoolean = true

// if (contentTarget.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "rightHandedFalse"){
//         let rightHandedBoolean = false
//         return rightHandedBoolean
//     }
// }
// )
// )    
//     console.log(rightHandedBoolean) 
//     } 
//     console.log(rightHandedBoolean) 
// if (document.querySelector("#rightHanded").value==="false"){
//         let rightHandedBoolean = false
//         console.log(rightHandedBoolean) 
//         } 


   // testing()

//console.log(testing())
//option 1 ends
        const newGuest = {
            name: document.querySelector("#guestName").value,
            age: +document.querySelector("#guestAge").value,
            favoriteDish: document.querySelector("#favoriteDish").value,
            imageUrl:document.querySelector("#guestImg").value,
            rightHanded: JSON.parse(document.querySelector("#rightHanded").value)
            //rightHanded: document.querySelector("#rightHanded").value === 'true' ? true : false
            //either line 66 or line 67 is how to convert string to boolean           
        }

       console.dir(newGuest)
//------------after console.dir -----------------------------------
document.querySelector("#guestName").value = ""
document.querySelector("#guestAge").value = ""
document.querySelector("#favoriteDish").value = ""
document.querySelector("#rightHanded").value = ""
// Change API state and application state
saveGuests(newGuest)
.then(GuestList) 


    }
    })




//---------------this is for delete-----------------
const eventHub = document.querySelector(".current-guest-list")
eventHub.addEventListener("click", removeEvent => {
    if (removeEvent.target.id.startsWith("deleteGuest")) {
      const idToDelete = removeEvent.target.id.split("--")[1]
      // ---------- Write your code here -------------//
      // Call the deleteNote function and pass in the appropriate id
      
      console.log(idToDelete)
      deleteGuest (idToDelete)
      .then(GuestList)
      // Then call NoteList to refresh the list of notes
  
    }
  });

  