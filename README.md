Att söka bord bör göras via ett formulär där användaren får ange antal personer (1-6) och önskat datum. En sökning görs via ett API-anrop och ett resultat presenteras för användaren. Om det fanns bord kvar så visas vilken/vilka tider som är tillgängliga. Om det inte finns bord kvar kommer en varningstext upp och användaren får söka igen.När användaren har valt tid kommer ytterligare ett formulär upp där användaren får skriva namn, e-post och telefonnummer. Spara eller Avbryt där Spara skriver ner bokningen i databasen via ett API-anrop.

För adminläget är det ett enklare CRUD mot databasen och ett enklare gränssnitt som är nödvändigt. Projektet skall finnas i ett git-repo och samtliga studenters commits skall finnas med. Trello skall användas som verktyg för projektet. Det skall framgå vem som arbetat med vilken punkt.

En fungerande applikation med samtliga sidor uppsatta med react router
• Söksidan innehåller en textruta (eller valfri presentation) och en knapp för sökning (om det behövs).•Sökningenav lediga tiderskall göras genom ett anrop till ett API.
• Resultatet från sökningen skall presenteraspå ett genomtänkt sätt, kanske genom en radioknappslista eller en rullgardinsmeny
• Ett API-anrop skall göras för att spara bokningen i databasen.
• Administrationsgränssnittet finns med.•Er applikation är responsiv
• Koden skall vara genomtänkt och ha en tydlig struktur.•Filstrukturen i projektet skall vara god.
• Formulären innehåller validering och felmeddelanden.•Hantera avbokningar.
• Kunna redigera bokningar i administrationsgränssnittet.•Använd css/scss för att skapa animationer vid t.ex. laddning och bokningar.
