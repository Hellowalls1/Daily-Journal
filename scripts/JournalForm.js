//collect input create object send to api

import { saveEntry } from "./JournalDataProvider.js"



const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".JournalForm")

contentTarget.addEventListener("click", clickEvent => { //listening for a click event on the event hub
    if (clickEvent.target.id === "recordJournal") { //if the click event is on recordJournal (id from form button) then get all of the shit below

        const journalDate = document.querySelector("#journalDate").value  //getting the value (content) of the journal Date
        const concepts = document.querySelector("#concepts").value // getting the value (content) of the concepts covered
        const journalEntry = document.querySelector("#journalEntry").value // getting the value (content) of the Journal Entry text area
        const currentMood = document.querySelector("#currentMood").value // getting the value (content) of the viewers mood

        const newJournalEntry = {  //save all of said shit into a new variable with the object representation of...
            date: journalDate,
            concept: concepts,
            entry: journalEntry,
            mood: currentMood
        }

        saveEntry(newJournalEntry)

    }
})



const render = () => {
    contentTarget.innerHTML = `
<h1>Daily Journal</h1>
<form class= "form1" action="">
    <fieldset>
        <label class="journalDate" for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>

    <fieldset>
    <label class="concepts" for="concepts">Concepts Covered</label>
    <input type="text" id="concepts" name="concepts">
    </fieldset>

    <fieldset>
    <label class="journalEntry" for="journalEntry">Journal Entry</label>
    <textarea id="journalEntry" name="message" rows="3" cols="21.5"></textarea>
    </fieldset>
   
<fieldset>
<label class="currentMood" for="currentMood">Current Mood</label>
<select id="currentMood" name="currentMood">
<option value="Sad">Sad</option>
<option value="Ok">Ok</option>
<option value="Happy">Happy</option>
</select>
</fieldset>

</form>
<button id="recordJournal">Save Journal Entry</button>
`
}

const JournalForm = () => {
    render()
}

export default JournalForm
//when the save button is clicked you will import the saveEntry function from the provider and run that