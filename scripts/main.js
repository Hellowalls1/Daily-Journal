import EntryListComponent  from "./JournalList.js";
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import JournalForm from "./JournalForm.js";
JournalForm()
getEntries().then(
    () => {
        EntryListComponent()
    }

)






