<h1 align="center">  Freshkeeper App - Keep track on your foods expiration date </h1>

<p align="center"> A project by <a href="https://github.com/patrik-fredlund">Patrik Fredlund</a> •
</p>

## Key Features
 
- Keep track on your foods expiration date.
- Add products to your storage of choice.
- Then add food to your shoppinglist.

## Screenshots
<a href="https://ibb.co/mc59Wnv"><img src="https://i.ibb.co/mc59Wnv/Ska-rmavbild-2021-11-11-kl-15-35-14.png" alt="Ska-rmavbild-2021-11-11-kl-15-35-14" border="0"></a> <a href="https://ibb.co/NS7Gq5X"><img src="https://i.ibb.co/NS7Gq5X/Ska-rmavbild-2021-11-11-kl-15-34-59.png" alt="Ska-rmavbild-2021-11-11-kl-15-34-59" border="0"></a>

## Prototype
:link: https://www.figma.com/proto/zWpKIvm4yNpET9vncWsbE3/Matsvinn_skiss_prototyp?page-id=0%3A1&node-id=18%3A43&starting-point-node-id=18%3A43

## Demo
https://freshkeeper_patrik.surge.sh/



## Argument

KORT OM APPEN.
Detta är en app som underlättar för användaren att äta sin inköpta mat innan den går ut,
och på så sätt spara pengar och samtidigt värna om miljön.

Det funkar på följande sätt:

1. Registrera råvarorna i appen och sätt ett bäst-före-datum på dem.
2. Få en påminnelse när datumet börjar närma sig.

Yttligare funktioner.

- Välj vilket LAGRUNGSUTRYMME du vill lagra specifik vara. Kyl, frys eller skafferi.
- När varan börjar ta slut, lägg till den i INLÖPSLISTAN, och använd denna lista nästa gång du handlar.

Jag valde att göra min app i react eftersom det är det ramverk/bibilotek vi använt oss av i utbildningen, så jag ville utveckla mina kunskaper där.
Det första jag gjorde var att skapa inlogning med firebase.
Det kändes som rätt väg att gå. Inte bara för att det var första delen av appen man kommer till vid start, men också för att det var något av det svårare funktionerna att skapa.
Jag följde denna tutorial som var tydlig och nogrann:
https://www.youtube.com/watch?v=PKwu15ldZ7k

Sen för resten av appen så följde jag framförallt denna tutorial:
https://www.youtube.com/playlist?list=PLt4757glfbhGMJ9LxziIBKkUVAKQoVHn6
Men såklart även andra tutorials, plus massa google, stack overflow mm.

Jag valde sedan att hårdkoda stora delar av appen.
Till nästa version vill jag utveckla appen från hårdkodad till att lagra användares värden i en databas. Då har jag tänkt att använda mig av firestore.

## Utvecklings-potetial

Denna app har massa utvecklings-potential.

t.ex:

1.  Den viktigaste funktionen i appen är att lägga till en vara, och den behöver vara smidig och så enkel att göra som möjligt.
    Idag gör man det manuellt.
    I utvecklingssyfte skulle nästa steg kunna vara:
    - Scanna av streckkoden från förpackningar och på så sätt registrera bäst-före-datumet på produkterna. Det skulle förenkla tillvägagångssättet rejält, eftersom det då sker automatiskt med hjälp av scanna av streckkoden.
    - Ett annat sätt skulle kunna vara att man talar in informationen (produkt, antal och datum) och på så sätt registrerar varan med sin röst.

2.  En annan sak vi redan under research-arbetet pratade om var att kunna skapa egna underkategorier.
    på så sätt kan man dela upp produkterna på fler olika platser, som kylen i källaren, Patriks vinkällare eller Mattes choklad.
    Det skulle en intressant väg att gå.
    Dessutom var det något målgruppen nämnde under vårt ux-arbete att dom skulle uppskatta att kunna göra.
    Man skulle även kunna dela upp inköpslistor i oilka delar beroende på t.ex vem varorna gäller eller var dom köps.

3. En annan sak vi lärde oss under målgruppsanalysen var att användaren gärna har yttligare information/content som t.ex recept-tips, eller hållbarhetstips i appen och på så sätt bidra med mer värde till användaren. Så nåogt annat man skulle kunna skapa är recepttips beroende på vilken/vilka typ av produkt/er som finns tillhands. På så sätt får man tips och inspiration om vad man skulle kunna laga för mat med dom produkter man har hemma, innan dom går ut.



