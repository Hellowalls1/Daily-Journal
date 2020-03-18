import EntryListComponent  from "./JournalList.js";
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";

getEntries().then(
    () => {
        EntryListComponent()
    }

)






