const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'} 
];

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post,index)=> {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);

        const error = false;
        if(!error){
            resolve();
        }
        else{
            reject('Something went wrong');
        }
        },2000);
    });
}

//createPost({title:'Post three', body: 'THis is post three'}).then(getPosts);

//Promise.All till 49 one 

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>
// setTimeout(resolve,2000,'Good bye'));


// // fetch API thing
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
//     res.json()
// );


// Promise.all([promise1,promise2,promise3,promise4]).then((values) =>
// console.log(values));



// async/ await till 60 
// async function init() {
//     await createPost({title:'Post three', body: 'THis is post three'});

//     getPosts();
// }

// init();


// Async / Await for fetch API

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}

fetchUsers();