/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { useJournalEntries } from "./JournalDataProvider.js" //function used to sort array of objects by date
import JournalEntryComponent from "./JournalEntry.js" //function used to express HTML 

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog") //used to send HTML to location on entrylog with "id=entryLog" now defined by entryLog

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) { //for every individual object in the entries(useJournalEntries) function array
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += JournalEntryComponent(entry); //log each entry (individual object of entries array) into the HTML @ #entryLog
}
}

export default EntryListComponent

//add event listener that listens for the custom event that says something has been saved to the database
//when it hears the event it need to clear the innerHTML and run the entry list component function line 13