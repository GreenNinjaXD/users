
// 1st
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     alert('You tapped to this btn')
//     let p = document.createElement('p')
//     p.innerHTML = 'Simple Text'
//     document.body.append(p)
// })


// 2nd

// console.log('first step');
// console.log('second step');

// setTimeout(() => {
//     console.log('third step');
// }, 2000);

// console.log('end step');


// example

// const users = [
//     { id: 1, name: 'Tony', work: 'Web Programmer'},
//     { id: 2, name: 'Lloyd', work: 'Gamer'},
//     { id: 3, name: 'Eminem', work: 'Blogger'},
//     { id: 4, name: 'Ronaldo', work: 'Game Developer'},
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         users.forEach((item) => {
//             output += `<p>Name: ${item.name} Work: ${item.work} </p>`
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         users.push(post)
//         callback()
//     }, 2000);
// }

// createPost({ id: 5, name: 'Natasha', work: 'Actress'}, getPosts)


// promise new theme!

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         users.forEach((item) => {
//             output += `<p>Name: ${item.name} Work: ${item.work} </p>`
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             users.push(post)
//             resolve({ id: 6, name: 'Thor', work: 'Racer'})
//             // reject('Error list')
//         }, 2000);
//     })
// }

// createPost({ id: 5, name: 'Natasha', work: 'Actress'})
//     .then((obj) => users.push(obj))
//     .then(() => getPosts())
//     .catch((error) => {console.error(error)})

// console.log(createPost({ id: 5, name: 'Natasha', work: 'Actress'}));


// function fetching() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((users) => console.log(users))
//     // .catch((error) => cnsole.error(error)
// }

// fetching()


let usersDiv = document.querySelector('.users');

async function fetching() {
        
        try {
                let res = await fetch('https://jsonplaceholder.typicode.com/posts')
                let users = await res.json()
                users.forEach((item) => {
                        let user = document.createElement('div')
                        user.classList.add('item')

                        let h2 = document.createElement('h2')
                        let p = document.createElement('p')
                        
                        h2.innerHTML = item.title,
                        p.innerHTML = item.body,
 
                        user.append(h2)
                        user.append(p)
                        usersDiv.append(user) 
                })
        } catch (error) {
                console.log(error);       
        }
}

fetching()