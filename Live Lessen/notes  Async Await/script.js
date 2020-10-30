// await keyword zorget ervoor dat JS herkend dat de regel tijd kost om te voltooien. Ondertussen gaat JS verder met de rest van het programma.
//await is alleen te gebruiken in een async functie.
//

const doHomework = (subject, callback) => {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

const alertFinished = () => {
    console.log(`Finished my homework.`);

    doHomework('math', alertFinished);

}


async function returnSomething() {
    return `I'm async`;
}

console.log(returnSomething());

//geeft alleen een promise terug.

returnSomething().then((data) => (console.log(data)))

//layout 'shifting'


fetch("urlbladiebla")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    console.log(error)
})

const fetchData = async () => {
    try { let response = await fetch("urlbladiebla");
    return await response.json();}
    catch (error) {
        console.log(error)
    }
    }
   
   
}