import axios from "axios"




async function getData (number) {
    const user = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const post = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    let response = {
        ...user,
        ...post
    }
    console.log(response)
}
export {getData}