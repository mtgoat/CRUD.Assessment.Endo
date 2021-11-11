let guests = []

export const useGuests = () => {
    return guests.slice()
}

export const getGuests = () => {
    return fetch('http://localhost:8088/guests')
    .then(response => response.json())
    .then(parsedGuests => {
        guests = parsedGuests
    })
}

export const saveGuests = (guest) =>
{
    return fetch('http://localhost:8088/guests',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
    .then(getGuests)
}

export const deleteGuest =(guestId) => {
    return fetch(`http://localhost:8088/guests/${guestId}`,
    {
        method: "DELETE"
    })
}

