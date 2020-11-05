Front-end Devel...
1 COMPLETED COURSE
OPDRACHT OMSCHRIJVING - REACT BOODSCHAPPENLIJST & ...
MORE
React Opdracht - Boodschappenlijst & Winkelmand

Introductie
In deze opdracht ga je een winkelmand maken waar je items aan kunt toevoegen vanaf je boodschappenlijst. De opdracht is opgedeeld in verschillende delen, die steeds een stuk moeilijker worden en minder expliciet.

Het eindresultaat:

Deel 1: Maak een boodschappenlijst
Maak een React App met \$ npx create-react-app [PROJECTNAAM], geef de app de projectnaam my-groceries-app ⇒ volg de stappen nauwkeurig: https://reactjs.org/docs/create-a-new-react-app.html
Zorg dat je app altijd runt op je http://localhost:3000 zo lang je er mee aan het werken bent. Zo zie je direct je aanpassingen. Open een nieuwe terminal window voor je git commando's.

– Er zijn verschillende bestanden verschenen. Hoe zat het ook alweer met node_modules en package-lock.json? => NPM - Wat is het? Hoe gebruik je het?

Maak in de src map een nieuwe map genaamd components.
Maak in de map components een JavaScript bestand genaamd List.js met daarin een class based component List.
List rendert een <ul> met <li>'s (vul wat leuke boodschappen in die je normaal koopt)
Exporteer je component.
Importeer je nieuwe component in App.js.
Render je List in je App.js door middel van een import statement en JSX => <List/>

Deel 2: Maak de items een los component
Maak een nieuw bestand ListItem.js met een functional component ListItem met een prop: title.
Importeer je ListItem component in je List.
Vervang de <li> elementen in List door je nieuwe geïmporteerde component ListItem.
"Pass down props": geef elk <ListItem/> een toepasselijke prop mee voor title.
Bijvoorbeeld: 'Appels', 'Pak melk'.
Deel 3: Render de items dynamisch
Zorg dat List component een state krijgt.

Initialiseer de state van List in de constructor => https://reactjs.org/docs/state-and-lifecycle.html.

Voorbeeld:

constructor(props) {
super(props);
this.state = {blahblahblahierinititialiseerikmijnstate};
}
Initial state heeft een array genaamd groceryItems (let op! Meervoud).

Verplaats de grocery titels zoals in 2.4 naar je state en maak het een array van objecten, e.g:

        groceryItems: [
          { id: 1, title: "Appels" },
          { id: 2, title: "Pak melk" }


Gebruik een array method om voor elk object in de array groceryItems een <ListItem/> component te renderen. Hint: array.map() is a good way to go.

Geef elk component de juiste title van de grocery mee als prop.

Je zal merken dat React gaat klagen over het meegeven van een key van elk list item. Geef daarom elk ListItem een key mee, de id van een grocery item.

Het is good practice om een list-item ook een key en value mee te geven. En dat gaat straks nog van pas komen. Verander daarom de prop van alleen de title, naar een gehele grocery item, die je generiek item noemt.

Zet item.title nog steeds in het list-item, maar geef daarnaast ook de key = item.id mee aan het listitem.

Deel 4: Winkelmand
User Stories:
Als gebruiker wil ik items in mijn boodschappenlijst aan kunnen klikken en toevoegen aan mijn winkelmand.
Als gebruiker wil ik mijn winkelmand kunnen legen met een klik op een delete button

Probeer te bedenken hoe je dit doet en wat hiervoor nodig is. Probeer hierbij antwoord te geven op onderstaande vragen:

Zijn er componenten die je zou kunnen hergebruiken?
Welke logica moet er in welke componenten nodig?
Waar ga ik state plaatsen?
Welke componenten gaan welke props ontvangen?
Tip: teken de benodigde componenten uit op een A4'tje!

Vergelijk je tekening en antwoord op bovenstaande vragen met onderstaande video; hoe wij deze boodschappenlijst en winkelmand hebben uitgedacht.

Let op: dit is het eindresultaat na deel 7 van deze opdracht. Zo hoeft jouw webapp er niet uit te zien

Componenten structuur:

> App
> Container
> ShoppingCart
> List
> ListItem
> ListItem
> ListItem
> ListItem
> GroceryList
> List
> ListItem
> ListItem
> ListItem

Welke stappen zijn er nodig om dit zo te maken?
Maak 2 nieuwe componenten ShoppingCart en GroceryList

ShoppingCart en GroceryList gaan allebei een List component gebruiken.

Echter wil je wel verschillende items renderen in beide lijsten. Je wilt de items in de state van List dus verplaatsen naar een hoger niveau. Dat gaan we doen in de volgende stappen.

Maak een Container component op het niveau van het App component, waarin je de GroceryList en ShoppingCart zet.

Render je Container component in je App component, in plaats van de List die er nu nog staat. Je structuur is nu als volgt:

> Container
> ShoppingCart
> List
> ListItem
> GroceryList
> List
> ListItem
> In de Container maak je een state met groceryItems (je kunt dus de state weghalen uit List en het niveaus hoger in de Container zetten).

Voeg een nieuwe array toe aan de state van je Container component, namelijk: shoppingListItems. Deze hebben exact hetzelfde format als groceryItems.

Geef GroceryList en ShoppingCart een nieuwe prop mee waarin je de relevante lijst naar het component doorgeeft en volgens weer naar het List component doorgeeft.

De logica om items van de GroceryList naar de ShoppingCart te verplaatsen gaat in de Container (de plaats waar beide lijsten zijn opgeslagen) gemaakt worden. Zorg dat wanneer er op een ListItem geklikt wordt, het click event wordt doorgegeven van ListItem > List > GroceryList > Container. Check of je click werkt met console.log en zorg dat je de title van de grocery waarop is geklikt doorkrijgt in de handleClickGroceryItem functie in de Container.

Wanneer er op de GroceryListItem is geklikt, voeg de grocery toe aan de winkelmand (shoppingListItems). Let op! State modificeren levert automatisch een re-render op van je component. State modificeren kan niet zomaar (zoals je weet): gebruik setState functie. Je ziet nu je Shopping List updaten wanneer je op een item in je boodschappenlijst klikt.

Je wilt alleen items van je boodschappenlijst naar je shoppingcart brengen en niet anders om. Doordat we in het ShoppingCart component de reactie op het klikken op een groceryItem niet doorpasen naar de Container, zul je zien dat het toevoegen alleen werkt wanner je op een item uit je boodschappenlijst klikt en niet werkt wanneer je op een item in je winkelmand klikt. Ondanks dat het allebei gebruik maakt van hetzelfde component, namelijk List

Als laatste wil je graag de shoppingListItems legen op het moment dat er op een button wordt geklikt die "empty cart" heet. In ShoppingCart voeg een button toe. Wanneer er op de button wordt geklikt moet er in Container een functie afgaan die emptyCart heet.

In deze emptyCart functie, wil je de state van shoppingListItems veranderen in een lege array.

Zorg dat de boodschappenlijst en de winkelmand allebei een andere styling hebben. Gebruik de nth-child selector om ervoor te zorgen dat ze om en om gekleurd worden.

Deel 5: Maak een InputField om boodschappen toe te voegen aan je boodschappenlijst.

User Stories:
Als gebruiker wil ik boodschappen toe kunnen voegen aan mijn boodschappenlijst.

Welke stappen zijn er nodig om dit zo te maken?

Maak een InputField component in een nieuwe file InputField.js. (Function component of een class based component? De keuze is aan jou.)
Render het InputField in de GroceryList component.
Wanneer de gebruiker een nieuwe grocery item toevoegt moet deze verschijnen in de List van GroceryList .
Pass a function from the child component InputField, to the Parent component GroceryList. Zorg dat je je kunt werken met hetgeen de gebruiker heeft ingevuld in het relevante component. In dit geval: Container hier worden namelijk de grocerylist opgeslagen in de state.
Zorg dat deze functie niet alleen aangeroepen kan worden, maar ook een een argument mee kan krijgen, namelijk hetgeen de gebruiker heeft ingevuld. Gebruik console.log om te checken of je de input van de gebruiker hebt ontvangen in de Container.
Update de state met this.setState van de GroceryList met de nieuwe grocery. https://reactjs.org/docs/state-and-lifecycle.html
Kennischeck: wat gebeurt er met een React component wanneer de state wordt geüpdatet? Het nieuwe item wordt dus vanzelf gerenderd.

Deel 6: Toon dubbele winkelmand items met de tekst "hoeveelheid: 3" in de winkelmand.
User Stories:
Als gebruiker wil ik, wanneer ik 2 of meer van dezelfde items toevoeg aan mijn winkelmand, zien dat de hoeveelheid van de items omhoog gaat.

Welke stappen zijn er nodig om dit zo te maken?
Informatie over de hoeveelheid van een bepaald items is nog niet opgenomen in de huidige state shoppingListItems. Voeg dit toe als property per item.

Voeg de tekst "hoeveelheid: X" toe aan de winkelmand. De boodschappenlijst en de winkelmand gebruiken allebei List. We moeten dus een prop meegeven aan List die het vertelt of het een winkelmand is of niet. En op basis hiervan wel of niet de tekst renderen. Dit heet conditional rendering. Wij hebben de prop "readonly" genoemd: niet klikbaar, alleen lezen, dus hoeveelheid tonen.

In de huidige functie waar een item wordt toegevoegd aan de winkelmand, check of de huidige winkelmand het aangeklikte item al heeft.

Zo nee, ga door zoals je al deed. Met 1 regel erbij: voeg ook een amount: 1 toe wanneer je een nieuw item aan de shoppingList toevoegt.

Zo ja, roep dan een nieuwe functie aan die we nu gaan maken.

In deze nieuwe functie addAmountToItem ga je het volgende doen:

zoek het relevante item in de huidige state
zorg dat het amount van dit item met 1 wordt verhoogd
update de nieuwe state met het nieuwe amount.

Deel 7: Styling
Als laatst mag je helemaal los met de styling!
Gebruik je creativiteit en wat je hebt geleerd van CSS.
Creativiteitsblokkade? Probeer dan onze app zo goed mogelijk na te maken zoals op het screenshot bovenaan.

That's all Folks!

Complete and continue
