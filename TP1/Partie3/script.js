//exercice 8
console.log("debut");
const wait = ms => new Promise(res => setTimeout(res, ms));
wait(2000).then(() => console.log("fin"));

//exercice 9
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.slice(0, 5).forEach(post => {
            console.log(post.title);
        });
    })