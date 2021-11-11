export const guest = (taco) => {
    return `
    <div class="guest-list-group-item  ${taco.id}">
    <h4>Guest Name: ${taco.name}</h4>
    <img src="${taco.imageUrl}" alt="${taco.name}" class="guest-imgs" width="50vw"
    </img>
    <p>Favorite Dish: ${taco.favoriteDish}</p>
    <p>Age: ${taco.age}</p>
    <p>Right Handed: ${taco.rightHanded}</p>
    <button id="deleteGuest--${taco.id}">Delete</button>
    <button id="edit--${taco.id}">Edit</button>
    </div>
        `
}
//things to do 
// 1. check the data structer so that it is printing
// 2. tweak for img tag at W3