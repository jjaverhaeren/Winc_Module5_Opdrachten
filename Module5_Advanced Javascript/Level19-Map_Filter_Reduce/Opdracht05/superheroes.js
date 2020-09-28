const superheroes =
    [
        {
            "name": "Batman",
            "publisher": "DC Comics",
            "alter_ego": "Bruce Wayne",
            "first_appearance": "Detective Comics #27",
            "weight": "210"
        },
        {
            "name": "Superman",
            "publisher": "DC Comics",
            "alter_ego": "Kal-El",
            "first_appearance": "Action Comics #1",
            "weight": "220"
        },
        {
            "name": "Flash",
            "publisher": "DC Comics",
            "alter_ego": "Jay Garrick",
            "first_appearance": "Flash Comics #1",
            "weight": "195"
        },
        {
            "name": "Green Lantern",
            "publisher": "DC Comics",
            "alter_ego": "Alan Scott",
            "first_appearance": "All-American Comics #16",
            "weight": "186"
        },
        {
            "name": "Green Arrow",
            "publisher": "DC Comics",
            "alter_ego": "Oliver Queen",
            "first_appearance": "All-American Comics #16",
            "weight": "195"
        },
        {
            "name": "Wonder Woman",
            "publisher": "DC Comics",
            "alter_ego": "Princess Diana",
            "first_appearance": "The Incredible Hulk #180",
            "weight": "165"
        },
        {
            "name": "Blue Beetle",
            "publisher": "DC Comics",
            "alter_ego": "Dan Garret",
            "first_appearance": "Mystery Men Comics #1",
            "weight": "145"
        },
        {
            "name": "Spider Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Peter Parker",
            "first_appearance": "Amazing Fantasy #15",
            "weight": "167"
        },
        {
            "name": "Captain America",
            "publisher": "Marvel Comics",
            "alter_ego": "Steve Rogers",
            "first_appearance": "Captain America Comics #1",
            "weight": "220"
        },
        {
            "name": "Iron Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Tony Stark",
            "first_appearance": "Tales of Suspense #39",
            "weight": "250"
        },
        {
            "name": "Thor",
            "publisher": "Marvel Comics",
            "alter_ego": "Thor Odinson",
            "first_appearance": "Journey into Myster #83",
            "weight": "200"
        },
        {
            "name": "Hulk",
            "publisher": "Marvel Comics",
            "alter_ego": "Bruce Banner",
            "first_appearance": "The Incredible Hulk #1",
            "weight": "1400"
        },
        {
            "name": "Wolverine",
            "publisher": "Marvel Comics",
            "alter_ego": "James Howlett",
            "first_appearance": "The Incredible Hulk #180",
            "weight": "200"
        },
        {
            "name": "Daredevil",
            "publisher": "Marvel Comics",
            "alter_ego": "Matthew Michael Murdock",
            "first_appearance": "Daredevil #1",
            "weight": "200"
        },
        {
            "name": "Silver Surfer",
            "publisher": "Marvel Comics",
            "alter_ego": "Norrin Radd",
            "first_appearance": "The Fantastic Four #48",
            "weight": "unknown"
        }
    ]


//1. Maak een array van alle superhelden namen.
const superheroNames = superheroes.map((hero) => {
    return hero.name;
});

console.log(superheroNames);

//2. Maak een array van alle "lichte" superhelden (< 190 pounds).
const lightHeroes = superheroes.filter((hero) => {
    return hero.weight < 190;
}).map((hero) => {
    return hero.name;
});

console.log(lightHeroes);

//3. Maak een array met de namen van de superhelden die 200 pounds wegen.

const filteredItems = superheroes.filter((hero) => {
    return hero.weight == 200;
}).map((hero) => {
    return hero.name;
});

console.log(filteredItems);


// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad.

const firstAppearances = superheroes.map((hero) => {
    return hero.first_appearance;
})

console.log(firstAppearances);

// 5a. Maak een array met alle superhelden van DC Comics.
const dcHeroes = superheroes.filter((hero) => {
    return hero.publisher === 'DC Comics';
}).map((hero) => {
    return hero.name;
})

console.log(dcHeroes);

// 5b. Maak een array met alle superhelden van Marvel Comics.
const marvelHeroes = superheroes.filter((hero) => {
    return hero.publisher === 'Marvel Comics';
}).map((hero) => {
    return hero.name;
})

console.log(marvelHeroes);
//6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 

const dcHeroesWeigth = superheroes.filter((hero) => {
    return hero.publisher === 'DC Comics';
}).filter((hero) => {
    return hero.weight !== "unknown";
}).map((hero) => {
    return parseInt(hero.weight);
})

const dcHeroesTotalWeigth = dcHeroesWeigth.reduce((currentTotal, weigth) => {
    return weigth + currentTotal
}, 0);

console.log(`The total weigth of all DC Comics heroes is ${dcHeroesTotalWeigth} lbs!`);


//7. Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op. 
const marvelHeroesWeigth = superheroes.filter((hero) => {
    return hero.publisher === 'Marvel Comics';
}).filter((hero) => {
    return hero.weight !== "unknown";
}).map((hero) => {
    return parseInt(hero.weight);
})

const marvelHeroesTotalWeigth = marvelHeroesWeigth.reduce((currentTotal, weigth) => {
    return weigth + currentTotal
}, 0);

console.log(`The total weigth of all Marvel Comics heroes is ${marvelHeroesTotalWeigth} lbs!`);

//8.Bonus: zoek de zwaarste superheld!

const heroWeights = superheroes.filter((hero) => {
    return hero.weight !== "unknown";
}).map((hero) => {
    return parseInt(hero.weight)
})

const weightofMostHeavyHero = heroWeights.reduce(function (a, b) {
    return Math.max(a, b);
});

console.log(weightofMostHeavyHero);

const mostHeavyHero = superheroes.filter((hero) => {
    return hero.weight == weightofMostHeavyHero;
}).map((hero) => {
    return hero.name;
});

const akaMostHeavyHero = superheroes.filter((hero) => {
    return hero.weight == weightofMostHeavyHero;
}).map((hero) => {
    return hero.alter_ego;
});


console.log(`Obviously ${mostHeavyHero} (aka ${akaMostHeavyHero} in normal live), is the most heavy superhero!!`);



// node superheroes.js