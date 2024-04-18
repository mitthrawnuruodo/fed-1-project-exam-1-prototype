console.log("Hello from script.js")

async function getPosts() {
    const api = "https://v2.api.noroff.dev/blog/posts/xiaolasse";

    fetch (api)
    .then (response => response.json())
    .then (obj => listPosts(obj.data));

}

function listPosts (posts) {
    //console.log(posts);
    const out = document.getElementById("posts");
    let output = "";
    for (const post of posts) {
        console.log(post);
        output += formatPost(post);
    }
    out.innerHTML = output;
}

function formatPost(item) {
    return `
    <div>
        <h2>${item.title}</h2>
        <div>${item.body}</div>
        <div>${item.id}</div>
    </div>
    `;
}

getPosts();

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