import { isLoggedIn } from "./admin.js";

console.clear();
//console.log("Hello from script.js")
// https://docs.noroff.dev/docs/v2/blog/posts#all-posts

window.addEventListener('load', (event) => {
    //console.log('The page has fully loaded');
    getPosts();
    isLoggedIn();
});

async function getPosts() {
    const api = "https://v2.api.noroff.dev/blog/posts/xiaolasse";
    fetch (api)
    .then (response => response.json())
    .then (obj => listPosts(obj.data))
    .catch(error => console.error(error.message));
}

function listPosts (posts) {
    //console.log(posts);
    console.log(posts.length);
    const out = document.getElementById("posts");
    let output = "";
    for (const post of posts) {
        //console.log(post);
        output += formatPost(post);
    }
    out.innerHTML = output;
}

function formatPost(item) {
    return `
    <div>
        <h2>${item.title}</h2>
        <a href="post/?id=${item.id}">Read more</a>
    </div>
    `;
}

async function createPost() {

    //let accessToken = <sett inn din token, feks. ved å hente fra LocalStorage>;
 
    const options = {  
      method: "POST",
      headers: {    
        Authorization: `Bearer ${accessToken}`,
      }
    } 
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/xiaolasse`, options);
    const data = await response.json();

}