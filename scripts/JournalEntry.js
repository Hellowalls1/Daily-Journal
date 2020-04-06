/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

// the (argument) is the key as to what you will use to access items in the array of objects
// in other words use argument.target
const JournalEntryComponent = (entryitem) => {
    return `    
        <section id="entry--${entryitem.id}" class="journalEntry">
            <br><br>date: ${entryitem.date} <br>
            concept: ${entryitem.concept} <br>
            entry: ${entryitem.entry} <br>
            mood: ${entryitem.mood} <br> <br>
        </section>
    `
}

export default JournalEntryComponent