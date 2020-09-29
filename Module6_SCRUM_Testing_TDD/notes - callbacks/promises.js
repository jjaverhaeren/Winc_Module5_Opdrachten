const posts = [
  { title: "post One", body: "This is post one" },
  { title: "post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//In plaats van de callback maak je nieuwe promise in de functie die als eerste dient te worden uitgevoerd.
//na het beschrijven van de promise geef je een .then met de functie die na het resolven van de promise dient te worden uitgevoerd.

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(`Error: Something went wrong`);
      }
    }, 2000);
  });
}

createPost({ title: "post Three", body: "This is post three" }).then(getPosts);

// .catch(err => console.log(err));

//Promise.all:
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());
//Bij fetch zijn er altijd twee .then nodig. eerste om het geheel om te cadten naar JSON en de volgende om daadwerkelijk te resolven.
//De tweede .then vind je hieronder bij de Promise.all

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

//Promise.all geeft pas een return wanneer alle promises resolved zijn. In bovenstaand geval dus 2000ms door de setTimeout van promise3.
