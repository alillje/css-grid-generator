# Reflektion
*1DV610*<br>
**Andreas Lillje**
<br>
<br>
Efter att ha läs kapitel 2 och 3 i kurslitteraturen (Clean Code), var det jag tog med mig initialt att skriva funktioner/metoder som skulle ha en enda uppgift och på så sätt följa regeln *Do one thing (Kap. 3, Funtions)*, genom att applicera *One level of abstraction (Kap. 3, functions)*.
<br>
Genom att försöka applicera dessa regler, tycker jag att det nästan automatiskt uppstod ett bättre utgångsläge att följa ytterliggare en regel, nämligen *Small! (Kap. 3, functions)*, då funktionerna blev kortare och fick ett mer isolerat anvsvarsområde. 
<br>
<br>
Jag har tidigare kommit på mig själv att ta en bekvämare väg och låta en funktion sköta flera saker, men i den här uppgiften ville jag bryta ut så mycket som möjligt i små, korta funktioner. 
<br>
<br>
En insikt är att om man gör jobbet från början, att med andra ord bryta ut delar ur funktioner i mindre funktioner så blir det betydligt lättare att navigera i koden, hitta fel och åtgärda eventuella buggar. 
<br>
Med detta sagt kan jag vittna om att koden jag har skrivit i den här uppgiften inte följer alla regler perfekt, men detta har alltså från början vara en målsättning för att på så sätt förbättra min egen kodkvalitet. 
<br>
<br>
Vidare har jag haft som målsättning att följa regler för namngivning, exempelvis *Use descriptive names (Kap 3., functions)*. Jag har strävat efter att vara konsekvent i namngivningen och anända samma fraser, verb och substantiv genomgående i hela kodbasen. 
<br>
<br>
En regel jag i ett fall har misslyckats att uppfylla är att inte ha för många argument i en funktion. 
I klassen GridValidator, finns en funktion som är namngiven `validateParams(rows, columns, rowGap, columnGap`. 

Enligt ltteraturen är funktioner som tar 3 argument *(Triads)*, betydligt svårare att förstå än funktioner som tar 2 argument *(Dyads)*, och i det här fallet har jag alltså 4 argument.
<br>
Efter denna insikt skrevs koden om. Metoden döptes om till validateAllParams(gridParams), för att förtydliga metodens uppgift något, samt att metoden tar in ett objekt istället för fyra olika parametrar. På så sätt följs regeln *Common Monadic Forms (Kap 3, functions)*. 
<br>
<br>
Namngivning av klasser har gjorts i enlighet med av litteraturen föreslagna regler. De är substantiv, och jag använder inga ord som kan missförstås. *(Kap 2., Class Names)*
Genomgående har jag även undvikit att enkoda typer i variabelnamn, enligt *(Avoid Encodings (Kap 2)*., samt varit noga med att använda uttalbara namn, enligt *Use pronounciable names (Kap 2)*.

Att även följa regeln för *Avoid Disinformation (Kap 2, Meaningful names)* har jag försökt låtit genomsyra arbetet med koden, vilket i vissa fall resulterat i något längre namn än vad som alltid är önskvärt, detta är dock något som kan vara eftersträvansvärt, eftersom att längre namn i vissa fall trumfar kortare namn, enligt regeln *Use Searchable Names (Kap 2, Meaningful names)*.
<br>
<br>
Sammanfattningsvis tycker jag att kapitel 2 och 3 i Clean Code har varit hjälpsamma i min egen strävan att skriva mer *läsbar* och *användbar* kod. 
<br>
Detta är någonting jag kommit till insikt med att kodkvalitet och ens förmåga att skriva "bättre" kod, är och kommer att vara en ständigt pågående process, vilket också ger en möjligheten att ständigt utvecklas. 
 
## **Namngivning**
| Namn & Förklaring     | Reflektion |
| --------- |:----:|
| **GridGenerator** <br>Huvudnamn på Klassen| **Avoid Disinformation**<br> Här tycker jag inte att jag följer reglerna för avoid disinformation. Namnet GridGenerator, antyder att klassen har som enda uppgift att generera en grid.<br>Vilket delvis stämmer, men klassen har fler uppgifter än så, i form av att manipulera HTML element.<br>Mitt mål är därför att hitta ett bättre namn på huvudklassen innan inlämning.<br><br>**Class Names**<br>I det här fallet följs reglerna för hur en klass ska döpas. Klassnamnet är ett substantiv och inte ett verb.<br>**Pick one word per concept*<br>Samtliga metoder i denna huvudklass följer samma mönster och använder samma verb, get och set.Här blandas inte get med exempelvis fetch, eller retrieve. <br>Detsamma gäller för verbet set. | 
| **getGridCss( { grid } )**<br>Tar in data i form av ett Javascript-objekt och returnerar en template för en grid-layout i form av CSS-kod. | **Use intention revealing names**<br>Här tycker jag att jag lyckas med att ge metoden ett ett beskrivande namn. Min uppfattning är att metodnamnet en beskrivning av vad metoden faktiskt gör.<br><br>**Method Names**<br>Har följt regeln för att metodnamn ska vara verb, eller ha verb phrase names, för de publika metoderna och använd get som ett prefix i det här fallet.
 | **getPositionCss( { grid } )**<br>Tar in data i form av ett Javascript-objekt och returnerar ett elements position i en grid-layout i form av CSS-kod. | **Use intention revealing names**<br>Likt gridCss() tycker jag har lyckats med detta metodnamn, dock inte lika bra. <br>Detta beror på att jag inte tycker att denna metod beskriver vad den gör lika bra.<br><br>**Use pronounceable names**<br>Om jag hade velat ha ett mer deskriptivt metodnamn, hade jag kunnat döpa den till exempelvis *getCssTemplateForPositionInCssGridLayout()*.<br>Här har jag alltså gjort en kompromiss och valt ett namn som är kortare och lättare att uttala och på så sätt kompromissat bort en del av metodens intention.<br><br>**Method Names**<br>Har följt regeln för att metodnamn ska vara verb, eller ha verb phrase names, för de publika metoderna och använd get som ett prefix i det här fallet. |
 | **setGrid({ grid }, htmElement)**<br>Tar in data i form av ett Javascript objekt med instruktioner för hur layouten ska se ut. Tar in en ett HTML-elements identifierare och sätter CSS-egenskaper i form av en layout på HTML-elementet. | **Don’t use misinformation**<br>Under denna reflektion inser jag att jag döpt det andra argumentet till htmlElement, vilket är missvisande. Det är html-elementets identifierare som tas som argument och detta kommer att åtgärdas till inlämning. <br><br>**Method Names**<br>Har följt regeln för att metodnamn ska vara verb, eller ha verb phrase names, för de publika metoderna och använd get som ett prefix i det här fallet.


## **Funktioner**
| Metodnamn  | Antal Rader | Reflektion |
| ---------- | ----------- |:----:|
| **GridGenerator.setPosition({ grid }, htmlElement)** | 15 | **Small**<br>Jag anser att funktionen är lite för lång och är av uppfattningen att man skulle kunna bryta ut mer för att skriva metoden kortare<br><br>**Dyadic Functions**<br> Här är min känsla att det var nödvändigt att ta in två argument. Eftersom att elementet ska positioneras i ett rutnät behöver vi ha start och slutpositioner. Detta tas upp som ett exempel i boken för att använda sig av 2 argument. För att kunna veta vilket element som ska manipuleras behöver vi även detta som ett argument. När man tittar på koden, kan det se ut som att det är fler än 2 argument, men det är alltså ett objekt och en sträng som tas in. Objektet "destrueras" och extraherar dess egenskaper direkt i argumentfältet.<br><br>**Argument Objects**<br>Här tar metoden in ett objekt med egenskaper som argument, istället för att ta in varje egenskap som ett eget argument, och minskar då antalet argument.<br><br>**Extract Try/Catch Blocks**<br>Litteraturen föreslår att man bryter ut try..catch blocken i egna funktioner. På sätt och vis tycker jag att jag gör det här, då metoden kallar på en annan metod som sköter valideringen. Problemet jag ser här är att denna metod även bygger en sträng och returnerar. Här kan man tänka sig att man bryter ut till ytterliggare en metod som bara har som uppgift att anropa validerings-metoden. (Här korrigerade jag felhanteringen och tog bort try..catch-block helt och kastar istället undantag som användare av mitt bibliotek får fånga)<br><br> **One level of abstraction**<br>Här blandas abstraktions nivåer då det är en låg abstratktion när själva manipuleringen av DOM-elementet sker (document.querySelector... ). Dessa operationer skulle kunna brytas ut i en egen mindre funktion.  ||
| **GridGenerator.setGrid({ grid }, htmlElement)** | 14 | **Dyadic Functions**<br> Här är min känsla att det var nödvändigt att ta in två argument. Eftersom att det behövs antal och längd/bredd på rader och kolumner behöver detta anges för att kunna "rita" ett rutnät. För att kunna veta vilket element som ska manipuleras behöver vi även detta som ett argument. När man tittar på koden, kan det se ut som att det är fler än 2 argument, men det är alltså ett objekt och en sträng som tas in. Objektet "destrueras" och extraherar dess egenskaper direkt i argumentfältet.<br><br>**Argument Objects**<br>Här tar metoden in ett objekt med egenskaper som argument, istället för att ta in varje egenskap som ett eget argument, och minskar då antalet argument.<br><br>**Extract Try/Catch Blocks**<br>Litteraturen föreslår att man bryter ut try..catch blocken i egna funktioner. På sätt och vis tycker jag att jag gör det här, då metoden kallar på en annan metod som sköter valideringen. Problemet jag ser här är att denna metod även bygger en sträng och returnerar. Här kan man tänka sig att man bryter ut till ytterliggare en metod som bara har som uppgift att anropa validerings-metoden. (Här korrigerade jag felhanteringen och tog bort try..catch-block helt och kastar istället undantag som användare av mitt bibliotek får fånga)<br><br> **One level of abstraction**<br>Här blandas abstraktions nivåer då det är en låg abstratktion när själva manipuleringen av DOM-elementet sker (document.querySelector... ). Dessa operationer skulle kunna brytas ut i en egen mindre funktion.   |
| **RowColumnValidator.validate(columnsOrRows)** | 13 | <br><br>**Prefer Exceptions to Returning Error Codes**<br>Metoden kastar ett *Error* istället för ett *Exception*. Här skulle man kunna göra om typen av objekt som metoden kastar.<br>
| **GridValidator.validatePositions(positions)** | 10 | **Do one thing**<br>Metoden gör dessvärre flera saker och följer inte den här regeln. Metoden utvärderar alla egenskaper i objektet som den tar in som argument,tittar om det är ett nummer, sedan tittar metoden om värdena i objektet är *undefined* för att slutligen returnera.<br>Här är målet att bryta ut till ytterliggare en funktion för att få en bättre *separation of concerns* <br><br> |
| **RowColumnValidator.isSizingKeyword(cssValue)** | 5 | **Do one thing**<br>Metoden gör endast en sak, dvs. Tittar på ett värde och avgöra om det är en korrekt "sizing-keyword"<br><br>**Small**<br>Funktionen är kort, den kan inte skrivas mycket kortare. Eventuellt med en tenary operator. Jag tycker dock att det i det här fallet blir lättare och tydligare att läsa med if-satser.<br><br>**Use descriptive names**<br>Jag tycker att det framgår tydligt vad som är metodens uppgift.<br><br>**Common Monadic Forms**<br>Här tas endast ett argument in och läses av innan funktionen returnerar. |
<br>
