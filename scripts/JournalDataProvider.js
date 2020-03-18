/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const eventHub = document.querySelector(".container")


//
const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}


let Entries = [
   ]

export const getEntries = () => {
return fetch('http://localhost:3000/entries') // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => {
        Entries = parsedEntries
    })
}

export const saveEntry = entry => { 
fetch('http://localhost:3000/entries', { //fetch from the api
     method: "POST", //configuration object
     headers: {
         "Content-Type": "application/json" //the format of the data you are sending to your api
     },
     body: JSON.stringify(entry) // what you want your api to create
}) 
    .then(getEntries)  //get all of the notes back from the api
    .then(dispatchStateChangeEvent) //then tell the application that something changed
}
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
  
    return Entries.slice()
}

