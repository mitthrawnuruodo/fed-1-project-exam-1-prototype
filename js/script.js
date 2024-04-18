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
    for (const post of posts) {
        console.log(post);
    }
}

getPosts();